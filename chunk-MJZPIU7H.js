import{a as Q,b as E,c as Z}from"./chunk-BVUX6TTM.js";import{a as X}from"./chunk-T3A2JJNJ.js";import{a as te}from"./chunk-MVWXSTHF.js";import{c as Y}from"./chunk-R3VBZQXY.js";import{a as G,b as ie}from"./chunk-VNUTU3YD.js";import"./chunk-BYXBJQAS.js";import{a as J}from"./chunk-EKJMQO5Q.js";import{d as q}from"./chunk-57QVS7TS.js";import{d as ee}from"./chunk-NRBOFKTV.js";import{gb as R}from"./chunk-V43RW7AC.js";import{m as H,n as K}from"./chunk-H4NAPNW2.js";import{Ab as s,Ba as P,Bb as t,E as T,Ea as B,Fc as A,Gb as y,Gc as L,Jb as h,Jc as j,Ka as C,Kb as g,Kc as W,La as I,Lc as z,Tb as r,Ub as V,Vb as d,Wb as N,Xb as F,Yb as k,bb as o,bc as U,cc as $,da as M,ga as O,gc as p,hc as l,ic as v,k as w,qb as f,sb as _,t as x,ua as u}from"./chunk-FW5WJFJQ.js";import"./chunk-T527G4PA.js";var oe=a=>a.orderState,re=K(oe,a=>a.orders);var S=class a{transform(i){return i.sort((e,n)=>this.compare(e.timeStart,n.timeStart))}compare(i,e){return new Date(i).getTime()-new Date(e).getTime()}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=B({name:"sortByStartTime",type:a,pure:!0,standalone:!0})};var de=()=>[];function pe(a,i){if(a&1){let e=y();s(0,"button",7),h("click",function(){C(e);let c=g().$implicit,m=g();return I(m.showCancelDialog(c.id,c.userId))}),r(1," Cancel "),t()}}function ce(a,i){if(a&1&&(s(0,"div",4)(1,"div")(2,"span",5),r(3,"Start trip station:"),t(),r(4),t(),s(5,"div")(6,"span",5),r(7,"Start trip time:"),t(),r(8),p(9,"date"),t(),s(10,"div")(11,"span",5),r(12,"End trip station:"),t(),r(13),t(),s(14,"div")(15,"span",5),r(16,"End trip time:"),t(),r(17),p(18,"date"),t(),s(19,"div")(20,"span",5),r(21,"Trip duration:"),t(),r(22),p(23,"formatDuration"),t(),s(24,"div")(25,"span",5),r(26,"Carriage type:"),t(),r(27),t(),s(28,"div")(29,"span",5),r(30,"Car number:"),t(),r(31),t(),s(32,"div")(33,"span",5),r(34,"Seat number:"),t(),r(35),t(),s(36,"div")(37,"span",5),r(38,"Price:"),t(),r(39),p(40,"currency"),t(),f(41,pe,2,0,"button",6),t()),a&2){let e=i.$implicit;o(4),d(" ",e.stationStart,""),o(4),d(" ",v(9,10,e.timeStart,"MMMM dd hh:mm"),""),o(5),d(" ",e.stationEnd,""),o(4),d(" ",v(18,13,e.timeEnd,"MMMM dd hh:mm"),""),o(5),d(" ",v(23,16,e.timeStart,e.timeEnd)," "),o(5),d(" ",e.carriageType,""),o(4),d(" ",e.carriageNumber,""),o(4),d(" ",e.seatNumber,""),o(4),d(" ",l(40,19,e.price),""),o(2),_("ngIf",e.status==="active")}}function me(a,i){if(a&1&&(s(0,"div")(1,"div"),r(2),t(),s(3,"div"),r(4),p(5,"async"),t()()),a&2){let e=g(2);o(2),d("Order ID: ",e.currentOrderId,""),o(2),d("Customer name: ",l(5,2,e.currentUserName$),"")}}function le(a,i){if(a&1){let e=y();s(0,"div",8)(1,"h2",9),r(2,"Are you sure you want to cancel the order?"),t(),f(3,me,6,4,"div",10),p(4,"async"),s(5,"button",11),h("click",function(){C(e);let c=g();return I(c.onCancelConfirm())}),r(6,"Confirm"),t()()}if(a&2){let e=g();o(3),_("ngIf",l(4,1,e.isManager$))}}var ne=class a{store=u(H);orderService=u(Z);profileService=u(Q);adminService=u(X);alerts=u(Y);currentOrderId=-1;currentUserId;isCancelDialogOpen=!1;currentUserName$=this.profileService.getUsers().pipe(x(i=>i.find(e=>e.id===(this.currentUserId||1))?.name));isManager$=this.store.select(ee).pipe(x(i=>i==="manager"));alertsSubscription=this.orderService.alertMessage$.pipe(O(i=>i?this.alerts.open(i.message,{appearance:i.type}):w)).subscribe();orders$=this.store.select(re).pipe(M(1),T(i=>i.length>0),O(i=>this.adminService.getCarriageList().pipe(x(e=>i.map(n=>{let c=this.orderService.getStartStationIndex(n),m=this.orderService.getEndStationIndex(n),b=this.orderService.getCarriageIndex(n.seatId,n.carriages,e),D=n.carriages[b],ae=this.orderService.getOrderPrice(n,D);return{id:n.id,stationStart:n.stationStart,timeStart:n.schedule.segments[c].time[0],stationEnd:n.stationEnd,timeEnd:n.schedule.segments[m].time[1],carriageType:D,carriageNumber:b+1,seatNumber:n.seatId+1,price:ae,status:n.status,userId:n.userId}})))));ngOnInit(){this.store.dispatch(E.loadOrders())}ngOnDestroy(){this.alertsSubscription.unsubscribe()}showCancelDialog(i,e){this.currentOrderId=i,this.currentUserId=e,this.isCancelDialogOpen=!0}onCancelConfirm(){this.store.dispatch(E.cancelOrder({orderId:this.currentOrderId})),this.isCancelDialogOpen=!1}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["app-orders"]],standalone:!0,features:[U],decls:8,vars:10,consts:[["tuiTitle","l",1,"title"],[1,"orders"],["tuiCardLarge","compact","tuiSurface","elevated","class","orders-card",4,"ngFor","ngForOf"],[3,"tuiDialogChange","tuiDialog"],["tuiCardLarge","compact","tuiSurface","elevated",1,"orders-card"],[1,"orders-card__subtitle"],["class","orders-card__button","tuiButton","","size","m","appearance","destructive",3,"click",4,"ngIf"],["tuiButton","","size","m","appearance","destructive",1,"orders-card__button",3,"click"],[1,"confirm-dialog"],["tuiTitle","m"],[4,"ngIf"],["tuiButton","","appearance","destructive",3,"click"]],template:function(e,n){e&1&&(s(0,"h1",0),r(1),p(2,"async"),t(),s(3,"div",1),f(4,ce,42,21,"div",2),p(5,"async"),p(6,"sortByStartTime"),t(),f(7,le,7,3,"ng-template",3),k("tuiDialogChange",function(m){return F(n.isCancelDialogOpen,m)||(n.isCancelDialogOpen=m),m})),e&2&&(o(),V(l(2,3,n.isManager$)?"Orders":"My orders"),o(3),_("ngForOf",l(6,7,l(5,5,n.orders$)||$(9,de))),o(3),N("tuiDialog",n.isCancelDialogOpen))},dependencies:[j,A,W,z,L,ie,G,R,J,te,S,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;margin:2rem 1rem;gap:2rem}.title[_ngcontent-%COMP%]{text-align:center}.orders[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;gap:1rem}.orders-card[_ngcontent-%COMP%]{max-width:100%}.orders-card__subtitle[_ngcontent-%COMP%]{font-weight:700}.orders-card__button[_ngcontent-%COMP%]{align-self:flex-start}.confirm-dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2rem}"]})};export{ne as OrdersComponent};
