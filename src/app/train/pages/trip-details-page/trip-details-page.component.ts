/* eslint-disable no-console */
import { CommonModule, Location } from '@angular/common';
import { Component, inject, INJECTOR, OnInit } from '@angular/core';
import { IRoute } from '@app/train/models/route.model';
import { TuiButton, TuiDialogService } from '@taiga-ui/core';
import { TuiAppBar } from '@taiga-ui/layout';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { combineLatest, map, Observable, take } from 'rxjs';
import { TuiSegmented } from '@taiga-ui/kit';
import { TrainService } from '@app/train/services/train.service';
import { ActivatedRoute } from '@angular/router';
import { IRideInformation } from '@app/train/models/ride-information.model';
import { Store } from '@ngrx/store';
import { selectStationIdAndCity } from '@app/core/store/admin-store/selectors/stations.selectors';
import { UniqueCarriagesPipe } from '@app/train/pipes/unique-carriages.pipe';
import { LegendComponent } from '@app/train/components/legend/legend.component';
import { selectCarriagesArr } from '@app/core/store/admin-store/selectors/carriage.selectors';
import { ICarriage } from '@app/admin/models/create-new-carriage-type.model';
import { CarriageComponent } from '@app/shared/components/carriage/carriage.component';
import { OrderService } from '@app/train/services/order.service';
import { IOrderCreateRequest } from '@app/train/models/order.model';
import { RouteModalComponent } from '../../components/route-modal/route-modal.component';
import { RouteModalData } from '../../components/search-results/search-results.component';

@Component({
  selector: 'app-trip-details-page',
  standalone: true,
  imports: [CommonModule, TuiAppBar, TuiSegmented, TuiButton, UniqueCarriagesPipe, LegendComponent, CarriageComponent],
  templateUrl: './trip-details-page.component.html',
  styleUrls: ['./trip-details-page.component.scss'],
})
export class TripDetailsPageComponent implements OnInit {
  private readonly dialogs = inject(TuiDialogService);

  private readonly injector = inject(INJECTOR);

  private readonly location = inject(Location);

  private readonly trainService = inject(TrainService);

  private readonly orderService = inject(OrderService);

  private readonly route = inject(ActivatedRoute);

  private store = inject(Store);

  protected rideInformation$!: Observable<IRideInformation>;

  protected routeDetails$!: Observable<IRoute | null>;

  public stationArr$ = this.store.select(selectStationIdAndCity);

  public selectedCarriage: string | null = null;

  public selectedSeat: number | null = null;

  public carriagesList$: Observable<ICarriage[]> = this.store.select(selectCarriagesArr);

  public occupiedSeats: number[] = [];

  ngOnInit(): void {
    const rideId = Number(this.route.snapshot.paramMap.get('id'));

    if (rideId) {
      this.rideInformation$ = this.trainService.getRideInformation(rideId);
      this.routeDetails$ = this.trainService.routeDetails$;

      this.routeDetails$.pipe(take(1)).subscribe((routeDetails) => {
        if (routeDetails && routeDetails.carriages.length > 0) {
          const [firstCarriage] = routeDetails.carriages;
          this.selectedCarriage = firstCarriage;
        }
      });

      this.calculateOccupiedSeats();
    }
  }

  protected showDialog(event: Event): void {
    event.stopPropagation();

    combineLatest([this.rideInformation$, this.routeDetails$]).subscribe(([rideInfo, routeDetails]) => {
      if (rideInfo && routeDetails) {
        this.dialogs
          .open(new PolymorpheusComponent(RouteModalComponent, this.injector), {
            size: 'm',
            closeable: true,
            dismissible: true,
            data: {
              schedule: rideInfo.schedule,
              from: routeDetails.path[0],
              to: routeDetails.path.at(-1),
              path: rideInfo.path,
            } as RouteModalData,
          })
          .subscribe();
      }
    });
  }

  protected getCityName(stationId: number): Observable<string | undefined> {
    return this.stationArr$.pipe(map((stations) => stations.find((station) => station.id === stationId)?.city));
  }

  protected goBack(): void {
    this.location.back();
  }

  onCarriageSelected(carriage: string): void {
    this.selectedCarriage = carriage;
  }

  onSeatSelected(seatIndex: number, carriageIndex: number): void {
    this.selectedSeat = this.calculateAbsoluteSeatIndex(carriageIndex, seatIndex);
  }

  getCarriageData(carriageCode: string): ICarriage {
    let carriageData: ICarriage | undefined;
    this.carriagesList$.pipe(take(1)).subscribe((carriages) => {
      carriageData = carriages.find((carriage) => carriage.code === carriageCode);
    });

    return (
      carriageData || {
        code: 'unknown',
        name: 'Unknown Carriage',
        rows: 0,
        leftSeats: 0,
        rightSeats: 0,
      }
    );
  }

  calculateAbsoluteSeatIndex(carriageIndex: number, seatIndex: number): number {
    let seatOffset = 0;

    this.routeDetails$.pipe(take(1)).subscribe((routeDetails) => {
      if (!routeDetails) {
        return;
      }

      for (let i = 0; i < carriageIndex; i += 1) {
        const carriageData = this.getCarriageData(routeDetails.carriages[i]);
        seatOffset += carriageData.rows * (carriageData.leftSeats + carriageData.rightSeats);
      }

      const absoluteSeatIndex = seatOffset + seatIndex;
      console.log(`Absolute Seat Index: ${absoluteSeatIndex}`);
      this.selectedSeat = absoluteSeatIndex;
    });

    return this.selectedSeat!;
  }

  bookSeat(): void {
    if (this.selectedSeat !== null && this.selectedCarriage && this.rideInformation$) {
      this.rideInformation$.pipe(take(1)).subscribe((rideInfo) => {
        const orderRequest: IOrderCreateRequest = {
          rideId: rideInfo.rideId,
          seat: this.selectedSeat!,
          stationStart: 1,
          stationEnd: 3,
        };
        this.orderService.createOrder(orderRequest).subscribe((response) => {
          console.log('Order created with ID:', response.id);
        });
      });
    } else {
      console.log('Please select a seat to book.');
    }
  }

  calculateOccupiedSeats(): void {
    this.rideInformation$.pipe(take(1)).subscribe((rideInfo) => {
      if (!rideInfo) return;

      rideInfo.schedule.segments.forEach((segment) => {
        this.occupiedSeats.push(...segment.occupiedSeats);
      });

      this.occupiedSeats = Array.from(new Set(this.occupiedSeats));
    });
  }

  getOccupiedSeatsForCarriage(carriageIndex: number): number[] {
    let seatOffset = 0;
    let carriageSeatsCount = 0;
    let occupiedSeatsForCarriage: number[] = [];

    this.routeDetails$.pipe(take(1)).subscribe((routeDetails) => {
      if (!routeDetails) return;

      for (let i = 0; i < carriageIndex; i += 1) {
        const carriageData = this.getCarriageData(routeDetails.carriages[i]);
        seatOffset += carriageData.rows * (carriageData.leftSeats + carriageData.rightSeats);
      }

      const carriageData = this.getCarriageData(routeDetails.carriages[carriageIndex]);
      carriageSeatsCount = carriageData.rows * (carriageData.leftSeats + carriageData.rightSeats);

      occupiedSeatsForCarriage = this.occupiedSeats
        .filter((seat) => seat > seatOffset && seat <= seatOffset + carriageSeatsCount)
        .map((seat) => seat - seatOffset);
    });

    return occupiedSeatsForCarriage;
  }
}
