import{a as te,b as Be,c as qe,d as Xe}from"./chunk-6VS4FIFN.js";import{B as Ue,C as Ge,D as j,E as je,G as Ze,h as U,l as Le,m as Ae,o as He,p as Ne,q as Re,r as Ve,s as We,t as ke,u as ze,w as $e,x as G,y as Qe}from"./chunk-J4QQGKOZ.js";import{a as Se,b as ee,d as Fe,e as I,f as Ee,g as R,h as Q,i as Me}from"./chunk-CTSSNDHH.js";import{u as we,v as xe,w as F}from"./chunk-IJ6B2VL5.js";import{a as Pe}from"./chunk-MZXSKUWN.js";import{A as De,C as D,K as $,V as Ie,n as Te,w as be}from"./chunk-KCJ6BF3U.js";import{N as Oe,t as N,y as ye}from"./chunk-YPPQXWD3.js";import{$b as _e,Ca as C,Da as se,Db as c,Ea as V,Eb as f,Fb as y,Gb as Z,Hb as q,Ib as P,Jb as L,Ma as _,Mb as w,Na as g,Nb as d,Ob as me,Pa as E,Pb as W,Qc as z,Rb as X,Rc as b,Sb as A,Tb as T,Tc as he,Ua as le,Ub as O,Uc as J,Vb as v,Wb as k,Xa as pe,Xc as Ce,Yb as B,_b as fe,ac as ge,db as l,ec as x,fc as H,gb as ue,ic as ve,lc as K,mc as Y,ob as M,qa as ae,rc as S,tb as p,ub as ce,va as u,vb as a,xb as de}from"./chunk-2XEAWUUP.js";var ne=(()=>{let e=class e{constructor(){return this.nativeElement=Te(),new pe(this.nativeElement)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=V({type:e,selectors:[["","tuiElement",""]],exportAs:["elementRef"],standalone:!0});let t=e;return t})();function tt(t,e){if(t&1&&(Z(0),k(1),q()),t&2){let r=e.polymorpheusOutlet;l(),B(" ",r," ")}}function it(t,e){if(t&1){let r=L();c(0,"button",5,1),w("click",function(){let i=_(r).$implicit,n=d(2);return g(n.itemClick.emit(i))}),c(2,"span",6),p(3,tt,2,1,"ng-container",7),f()()}if(t&2){let r=e.$implicit,o=v(1),i=d(2);a("disabled",i.disabledItemHandler(r))("value",r),l(3),a("polymorpheusOutlet",i.itemContent)("polymorpheusOutletContext",i.getContext(r,o))}}function nt(t,e){if(t&1&&(c(0,"tui-data-list",3),p(1,it,4,4,"button",4),f()),t&2){let r=d();a("emptyContent",r.emptyContent)("size",r.size),l(),a("ngForOf",r.$cast(r.items))}}function ot(t,e){t&1&&y(0,"tui-loader",8)}var rt=["labels",""];function at(t,e){if(t&1&&(Z(0),k(1),q()),t&2){let r=e.polymorpheusOutlet;l(),B(" ",r," ")}}function st(t,e){if(t&1){let r=L();c(0,"button",7,1),w("click",function(){let i=_(r).$implicit,n=d(3);return g(n.itemClick.emit(i))}),p(2,at,2,1,"ng-container",8),f()}if(t&2){let r=e.$implicit,o=v(1),i=d(3);a("disabled",i.disabledItemHandler(r))("value",r),l(2),a("polymorpheusOutlet",i.itemContent)("polymorpheusOutletContext",i.getContext(r,o))}}function lt(t,e){if(t&1&&(c(0,"tui-opt-group",5),p(1,st,3,4,"button",6),f()),t&2){let r=e.$implicit,o=e.index,i=d(2);a("label",i.labels[o]),l(),a("ngForOf",r)}}function pt(t,e){if(t&1&&(c(0,"tui-data-list",3),p(1,lt,2,2,"tui-opt-group",4),f()),t&2){let r=d();a("emptyContent",r.emptyContent)("size",r.size),l(),a("ngForOf",r.items)}}function ut(t,e){t&1&&y(0,"tui-loader",9)}var ct="[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}",oe=(()=>{let e=class e{constructor(){this.itemsHandlers=u(U),this.optionsQuery=Oe,this.items=[],this.disabledItemHandler=this.itemsHandlers.disabledItemHandler,this.size=Ee(),this.itemClick=new le,this.itemContent=({$implicit:o})=>this.itemsHandlers.stringify(o)}getContext(o,{nativeElement:i}){return{$implicit:o,active:$(i)}}getOptions(o=!1){return this.optionsQuery.filter(({disabled:i})=>o||!i).map(({value:i})=>i).filter(ye)}$cast(o){return o}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["tui-data-list-wrapper",3,"labels",""]],viewQuery:function(i,n){if(i&1&&A(I,5),i&2){let s;T(s=O())&&(n.optionsQuery=s)}},inputs:{items:"items",disabledItemHandler:"disabledItemHandler",emptyContent:"emptyContent",size:"size",itemContent:"itemContent"},outputs:{itemClick:"itemClick"},standalone:!0,features:[x([ee(e)]),H],decls:3,vars:2,consts:[["loading",""],["elementRef","elementRef"],[3,"emptyContent","size",4,"ngIf","ngIfElse"],[3,"emptyContent","size"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"click","disabled","value"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-data-list-wrapper__loader",1,"t-loader"]],template:function(i,n){if(i&1&&p(0,nt,2,3,"tui-data-list",2)(1,ot,1,0,"ng-template",null,0,S),i&2){let s=v(2);a("ngIf",n.items)("ngIfElse",s)}},dependencies:[R,I,b,z,ne,te,D],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0});let t=e;return t})(),Ke=(()=>{let e=class e extends oe{constructor(){super(...arguments),this.labels=[]}};e.\u0275fac=(()=>{let o;return function(n){return(o||(o=E(e)))(n||e)}})(),e.\u0275cmp=C({type:e,selectors:[["tui-data-list-wrapper","labels",""]],inputs:{labels:"labels"},standalone:!0,features:[x([ee(e)]),M,H],attrs:rt,decls:3,vars:2,consts:[["loading",""],["elementRef","elementRef"],[3,"emptyContent","size",4,"ngIf","ngIfElse"],[3,"emptyContent","size"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"click","disabled","value"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-loader"]],template:function(i,n){if(i&1&&p(0,pt,2,3,"tui-data-list",2)(1,ut,1,0,"ng-template",null,0,S),i&2){let s=v(2);a("ngIf",n.items)("ngIfElse",s)}},dependencies:[R,I,Me,b,z,ne,D,te],styles:[ct],changeDetection:0});let t=e;return t})();function ft(t,e){if(t&1&&y(0,"tui-icon",2),t&2){let r=e.polymorpheusOutlet;a("icon",r)}}function _t(t,e){t&1&&P(0)}var gt={iconSmall:"@tui.chevron-down",iconLarge:"@tui.chevron-down"},vt=N(gt);var re=(()=>{let e=class e{constructor(){this.control=u(Ne,{optional:!0}),this.textfieldSize=u(G),this.options=u(vt),this.directive=u(F,{optional:!0})}get rotated(){return this.directive?.tuiDropdownOpen||!!this.control.pseudoOpen||!1}get small(){return!be(this.textfieldSize.size)}get arrowIcon(){return this.small?this.options.iconSmall:this.options.iconLarge}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["tui-arrow"]],hostVars:4,hostBindings:function(i,n){i&2&&de("_rotated",n.rotated)("_small",n.small)},standalone:!0,features:[H],decls:3,vars:4,consts:[[3,"icon",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"icon"]],template:function(i,n){i&1&&(p(0,ft,1,1,"tui-icon",0)(1,_t,1,0,"ng-container",1),K(2,"async")),i&2&&(a("polymorpheusOutlet",n.arrowIcon),l(),a("ngIf",Y(2,2,n.directive==null?null:n.directive.tuiDropdownOpenChange)))},dependencies:[D,b,J,Pe],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}tui-icon[_ngcontent-%COMP%]{border:.25rem solid transparent}"],changeDetection:0});let t=e;return t})(),Ye=new De(re),ht={interactive:Ye,disabled:Ye},Je=N(ht);var Ct=["*",[["input"]],[["select"]]],yt=["*","input","select"],Tt=(t,e)=>({$implicit:t,active:e});function Ot(t,e){t&1&&W(0,2,["*ngIf","isMobile"])}function bt(t,e){if(t&1&&p(0,Ot,1,0,"ng-content",6),t&2){let r=d();a("ngIf",r.isMobile)}}function Dt(t,e){t&1&&P(0,7)}function It(t,e){if(t&1&&y(0,"div",10),t&2){let r=e.polymorpheusOutlet;a("textContent",r)}}function wt(t,e){if(t&1&&(c(0,"div",8),p(1,It,1,1,"div",9),f()),t&2){let r=d();l(),a("polymorpheusOutlet",r.computedContent)("polymorpheusOutletContext",ve(2,Tt,r.value,r.computedFocused))}}function xt(t,e){t&1&&P(0)}function St(t,e){if(t&1&&(c(0,"div",11),p(1,xt,1,0,"ng-container",12),f()),t&2){let r=d();l(),a("polymorpheusOutlet",r.arrow)}}var Ft={valueContent:""},Et=N(Ft);var Ui=(()=>{let e=class e extends ke{constructor(){super(...arguments),this.itemsHandlers=u(U),this.textfieldCleaner=u(ze),this.textfieldSize=u(G),this.arrowMode=u(Je),this.options=u(Et),this.isMobile=u(Ie),this.open=!1,this.stringify=this.itemsHandlers.stringify,this.identityMatcher=this.itemsHandlers.identityMatcher,this.valueContent=this.options.valueContent}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.textfield?.nativeFocusableElement??null}get focused(){return $(this.nativeFocusableElement)||!!this.dropdown?.tuiDropdownOpen}get computedValue(){return this.value===null?"":this.stringify(this.value)||" "}onValueChange(o){this.value=o||null}handleOption(o){this.focusInput(),this.value=o,this.open=!1}get arrow(){return this.interactive?this.arrowMode.interactive:this.arrowMode.disabled}get nativeDropdownMode(){return!!this.nativeSelect&&this.isMobile}get computedContent(){return this.valueContent||this.computedValue}onActiveZone(o){this.updateFocused(o)}onKeyDownDelete(){this.textfieldCleaner.cleaner&&(this.value=null)}focusInput(o=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:o})}};e.\u0275fac=(()=>{let o;return function(n){return(o||(o=E(e)))(n||e)}})(),e.\u0275cmp=C({type:e,selectors:[["tui-select"]],contentQueries:function(i,n,s){if(i&1&&(X(s,Ve,7),X(s,Q,5,ue)),i&2){let m;T(m=O())&&(n.nativeSelect=m.first),T(m=O())&&(n.datalist=m.first)}},viewQuery:function(i,n){if(i&1&&(A(j,5),A(F,5)),i&2){let s;T(s=O())&&(n.textfield=s.first),T(s=O())&&(n.dropdown=s.first)}},hostVars:1,hostBindings:function(i,n){i&2&&ce("data-size",n.size)},inputs:{stringify:"stringify",identityMatcher:"identityMatcher",valueContent:"valueContent"},features:[x([Ae(e),Re(e),Fe(e),Se(qe)],[Le]),M],ngContentSelectors:yt,decls:10,vars:16,consts:[["select",""],["icon",""],["tuiDropdownOpenMonitor","",1,"t-hosted",3,"tuiDropdownOpenChange","tuiActiveZoneChange","tuiDropdown","tuiDropdownEnabled","tuiDropdownOpen"],["automation-id","tui-select__textfield",1,"t-textfield",3,"keydown.backspace.prevent","keydown.delete.prevent","valueChange","disabled","editable","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value"],["ngProjectAs","select",5,["select"],4,"ngTemplateOutlet"],["automation-id","tui-select__value","ngProjectAs","tuiContent","class","t-value",5,["tuiContent"],4,"ngIf"],[4,"ngIf"],["ngProjectAs","select",5,["select"]],["automation-id","tui-select__value","ngProjectAs","tuiContent",5,["tuiContent"],1,"t-value"],["class","t-primitive-value",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-primitive-value",3,"textContent"],["appearance","icon","tuiWrapper","",1,"t-icon"],[4,"polymorpheusOutlet"]],template:function(i,n){if(i&1){let s=L();me(Ct),c(0,"div",2),ge("tuiDropdownOpenChange",function(h){return _(s),_e(n.open,h)||(n.open=h),g(h)}),w("tuiActiveZoneChange",function(h){return _(s),g(n.onActiveZone(h))}),c(1,"tui-primitive-textfield",3),w("keydown.backspace.prevent",function(){return _(s),g(n.onKeyDownDelete())})("keydown.delete.prevent",function(){return _(s),g(n.onKeyDownDelete())})("valueChange",function(h){return _(s),g(n.onValueChange(h))}),W(2),W(3,1,["ngProjectAs","input",5,["input"]]),p(4,bt,1,1,"ng-template",null,0,S)(6,Dt,1,0,"ng-container",4)(7,wt,2,5,"div",5),f(),p(8,St,2,1,"ng-template",null,1,S),f()}if(i&2){let s=v(5),m=v(9);a("tuiDropdown",n.datalist||"")("tuiDropdownEnabled",n.interactive&&!n.nativeDropdownMode),fe("tuiDropdownOpen",n.open),l(),a("disabled",n.computedDisabled)("editable",!1)("focusable",n.computedFocusable)("invalid",n.computedInvalid)("nativeId",n.nativeId)("pseudoActive",n.pseudoActive)("pseudoFocus",n.computedFocused)("pseudoHover",n.pseudoHover)("readOnly",n.readOnly)("tuiTextfieldIcon",n.arrow?m:"")("value",n.computedValue),l(5),a("ngTemplateOutlet",s),l(),a("ngIf",n.value!==null)}},dependencies:[b,he,D,j,je,Ue,$e,Be,we,F],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0});let t=e;return t})(),Gi=(()=>{let e=class e extends We{get readOnly(){return!0}get value(){return this.host.computedValue}get stringify(){return this.host.stringify}onValueChange(o){this.host.onValueChange(o)}};e.\u0275fac=(()=>{let o;return function(n){return(o||(o=E(e)))(n||e)}})(),e.\u0275dir=V({type:e,selectors:[["tui-select"]],features:[x([He(e)]),M]});let t=e;return t})(),ji=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=se({type:e}),e.\u0275inj=ae({imports:[Ce,Ze,Xe,re,Ge,Qe,xe,R,I,oe,Ke]});let t=e;return t})();export{oe as a,Ui as b,Gi as c,ji as d};
