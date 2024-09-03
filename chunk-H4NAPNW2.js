import{Fa as W,Na as J,Q as B,Ta as X,Yc as ne,_ as G,aa as Z,d as S,g as $,h as F,j as K,la as H,m as L,oa as R,ra as c,t as q,ta as l,tc as ee,ua as y,va as Y,wc as te,za as Q}from"./chunk-FW5WJFJQ.js";import{a as h,b as g}from"./chunk-T527G4PA.js";var w={};function It(e,n){if(w[e]=(w[e]||0)+1,typeof n=="function")return A(e,(...t)=>g(h({},n(...t)),{type:e}));switch(n?n._as:"empty"){case"empty":return A(e,()=>({type:e}));case"props":return A(e,t=>g(h({},t),{type:e}));default:throw new Error("Unexpected config.")}}function bt(){return{_as:"props",_p:void 0}}function A(e,n){return Object.defineProperty(n,"type",{value:e,writable:!1})}var Re="@ngrx/store/init",m=(()=>{let n=class n extends F{constructor(){super({type:Re})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})(),je=[m],me=new c("@ngrx/store Internal Root Guard"),re=new c("@ngrx/store Internal Initial State"),U=new c("@ngrx/store Initial State"),Ee=new c("@ngrx/store Reducer Factory"),ie=new c("@ngrx/store Internal Reducer Factory Provider"),ve=new c("@ngrx/store Initial Reducers"),O=new c("@ngrx/store Internal Initial Reducers"),Tt=new c("@ngrx/store Store Features"),oe=new c("@ngrx/store Internal Store Reducers"),jt=new c("@ngrx/store Internal Feature Reducers"),At=new c("@ngrx/store Internal Feature Configs"),Ot=new c("@ngrx/store Internal Store Features"),wt=new c("@ngrx/store Internal Feature Reducers Token"),xt=new c("@ngrx/store Feature Reducers"),se=new c("@ngrx/store User Provided Meta Reducers"),I=new c("@ngrx/store Meta Reducers"),ce=new c("@ngrx/store Internal Resolved Meta Reducers"),ue=new c("@ngrx/store User Runtime Checks Config"),ae=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),ge=new c("@ngrx/store Check if Action types are unique"),de=new c("@ngrx/store Root Store Provider"),Ct=new c("@ngrx/store Feature State Provider");function Ae(e,n={}){let i=Object.keys(e),t={};for(let o=0;o<i.length;o++){let s=i[o];typeof e[s]=="function"&&(t[s]=e[s])}let r=Object.keys(t);return function(s,d){s=s===void 0?n:s;let a=!1,f={};for(let u=0;u<r.length;u++){let p=r[u],j=t[p],z=s[p],V=j(z,d);f[p]=V,a=a||V!==z}return a?f:s}}function Oe(e,n){return Object.keys(e).filter(i=>i!==n).reduce((i,t)=>Object.assign(i,{[t]:e[t]}),{})}function Se(...e){return function(n){if(e.length===0)return n;let i=e[e.length-1];return e.slice(0,-1).reduceRight((r,o)=>o(r),i(n))}}function Fe(e,n){return Array.isArray(n)&&n.length>0&&(e=Se.apply(null,[...n,e])),(i,t)=>{let r=e(i);return(o,s)=>(o=o===void 0?t:o,r(o,s))}}function we(e){let n=Array.isArray(e)&&e.length>0?Se(...e):i=>i;return(i,t)=>(i=n(i),(r,o)=>(r=r===void 0?t:r,i(r,o)))}var v=class extends S{},b=class extends m{},xe="@ngrx/store/update-reducers",x=(()=>{let n=class n extends F{get currentReducers(){return this.reducers}constructor(t,r,o,s){super(s(o,r)),this.dispatcher=t,this.initialState=r,this.reducers=o,this.reducerFactory=s}addFeature(t){this.addFeatures([t])}addFeatures(t){let r=t.reduce((o,{reducers:s,reducerFactory:d,metaReducers:a,initialState:f,key:u})=>{let p=typeof s=="function"?we(a)(s,f):Fe(d,a)(s,f);return o[u]=p,o},{});this.addReducers(r)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(r=>r.key))}addReducer(t,r){this.addReducers({[t]:r})}addReducers(t){this.reducers=h(h({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(r=>{this.reducers=Oe(this.reducers,r)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:xe,features:t})}ngOnDestroy(){this.complete()}};n.\u0275fac=function(r){return new(r||n)(l(b),l(U),l(ve),l(Ee))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})(),Ce=[x,{provide:v,useExisting:x},{provide:b,useExisting:m}],M=(()=>{let n=class n extends ${ngOnDestroy(){this.complete()}};n.\u0275fac=(()=>{let t;return function(o){return(t||(t=J(n)))(o||n)}})(),n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})(),De=[M],T=class extends S{},le=(()=>{let n=class n extends F{constructor(t,r,o,s){super(s);let a=t.pipe(L(K)).pipe(H(r)),f={state:s},u=a.pipe(Z(ke,f));this.stateSubscription=u.subscribe(({state:p,action:j})=>{this.next(p),o.next(j)}),this.state=ne(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};n.INIT=Re,n.\u0275fac=function(r){return new(r||n)(l(m),l(v),l(M),l(U))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})();function ke(e={state:void 0},[n,i]){let{state:t}=e;return{state:i(t,n),action:n}}var Ue=[le,{provide:T,useExisting:le}],_=(()=>{let n=class n extends S{constructor(t,r,o){super(),this.actionsObserver=r,this.reducerManager=o,this.source=t,this.state=t.state}select(t,...r){return _e.call(null,t,...r)(this)}selectSignal(t,r){return te(()=>t(this.state()),r)}lift(t){let r=new n(this,this.actionsObserver,this.reducerManager);return r.operator=t,r}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,r){this.reducerManager.addReducer(t,r)}removeReducer(t){this.reducerManager.removeReducer(t)}};n.\u0275fac=function(r){return new(r||n)(l(T),l(m),l(x))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})(),Me=[_];function _e(e,n,...i){return function(r){let o;if(typeof e=="string"){let s=[n,...i].filter(Boolean);o=r.pipe(G(e,...s))}else if(typeof e=="function")o=r.pipe(q(s=>e(s,n)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(B())}}var N="https://ngrx.io/guide/store/configuration/runtime-checks";function fe(e){return e===void 0}function pe(e){return e===null}function Ie(e){return Array.isArray(e)}function Ne(e){return typeof e=="string"}function Pe(e){return typeof e=="boolean"}function ze(e){return typeof e=="number"}function be(e){return typeof e=="object"&&e!==null}function Ve(e){return be(e)&&!Ie(e)}function $e(e){if(!Ve(e))return!1;let n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}function C(e){return typeof e=="function"}function Ke(e){return C(e)&&e.hasOwnProperty("\u0275cmp")}function Le(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function ye(e,n){return e===n}function qe(e,n,i){for(let t=0;t<e.length;t++)if(!i(e[t],n[t]))return!0;return!1}function Te(e,n=ye,i=ye){let t=null,r=null,o;function s(){t=null,r=null}function d(u=void 0){o={result:u}}function a(){o=void 0}function f(){if(o!==void 0)return o.result;if(!t)return r=e.apply(null,arguments),t=arguments,r;if(!qe(arguments,t,n))return r;let u=e.apply(null,arguments);return t=arguments,i(r,u)?r:(r=u,u)}return{memoized:f,reset:s,setResult:d,clearResult:a}}function Dt(...e){return Ge(Te)(...e)}function Be(e,n,i,t){if(i===void 0){let o=n.map(s=>s(e));return t.memoized.apply(null,o)}let r=n.map(o=>o(e,i));return t.memoized.apply(null,[...r,i])}function Ge(e,n={stateFn:Be}){return function(...i){let t=i;if(Array.isArray(t[0])){let[u,...p]=t;t=[...u,...p]}else t.length===1&&Ze(t[0])&&(t=He(t[0]));let r=t.slice(0,t.length-1),o=t[t.length-1],s=r.filter(u=>u.release&&typeof u.release=="function"),d=e(function(...u){return o.apply(null,u)}),a=Te(function(u,p){return n.stateFn.apply(null,[u,r,p,d])});function f(){a.reset(),d.reset(),s.forEach(u=>u.release())}return Object.assign(a.memoized,{release:f,projector:d.memoized,setResult:a.setResult,clearResult:a.clearResult})}}function Ze(e){return!!e&&typeof e=="object"&&Object.values(e).every(n=>typeof n=="function")}function He(e){let n=Object.values(e),i=Object.keys(e),t=(...r)=>i.reduce((o,s,d)=>g(h({},o),{[s]:r[d]}),{});return[...n,t]}function Ye(e){return e instanceof c?y(e):e}function Qe(e){return typeof e=="function"?e():e}function We(e,n){return e.concat(n)}function Je(){if(y(_,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Xe(e,n){return function(i,t){let r=n.action(t)?D(t):t,o=e(i,r);return n.state()?D(o):o}}function D(e){Object.freeze(e);let n=C(e);return Object.getOwnPropertyNames(e).forEach(i=>{if(!i.startsWith("\u0275")&&Le(e,i)&&(!n||i!=="caller"&&i!=="callee"&&i!=="arguments")){let t=e[i];(be(t)||C(t))&&!Object.isFrozen(t)&&D(t)}}),e}function et(e,n){return function(i,t){if(n.action(t)){let o=k(t);he(o,"action")}let r=e(i,t);if(n.state()){let o=k(r);he(o,"state")}return r}}function k(e,n=[]){return(fe(e)||pe(e))&&n.length===0?{path:["root"],value:e}:Object.keys(e).reduce((t,r)=>{if(t)return t;let o=e[r];return Ke(o)?t:fe(o)||pe(o)||ze(o)||Pe(o)||Ne(o)||Ie(o)?!1:$e(o)?k(o,[...n,r]):{path:[...n,r],value:o}},!1)}function he(e,n){if(e===!1)return;let i=e.path.join("."),t=new Error(`Detected unserializable ${n} at "${i}". ${N}#strict${n}serializability`);throw t.value=e.value,t.unserializablePath=i,t}function tt(e,n){return function(i,t){if(n.action(t)&&!X.isInAngularZone())throw new Error(`Action '${t.type}' running outside NgZone. ${N}#strictactionwithinngzone`);return e(i,t)}}function nt(e){return ee()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function rt({strictActionSerializability:e,strictStateSerializability:n}){return i=>e||n?et(i,{action:t=>e&&!P(t),state:()=>n}):i}function it({strictActionImmutability:e,strictStateImmutability:n}){return i=>e||n?Xe(i,{action:t=>e&&!P(t),state:()=>n}):i}function P(e){return e.type.startsWith("@ngrx")}function ot({strictActionWithinNgZone:e}){return n=>e?tt(n,{action:i=>e&&!P(i)}):n}function st(e){return[{provide:ae,useValue:e},{provide:ue,useFactory:ut,deps:[ae]},{provide:E,deps:[ue],useFactory:nt},{provide:I,multi:!0,deps:[E],useFactory:it},{provide:I,multi:!0,deps:[E],useFactory:rt},{provide:I,multi:!0,deps:[E],useFactory:ot}]}function ct(){return[{provide:ge,multi:!0,deps:[E],useFactory:at}]}function ut(e){return e}function at(e){if(!e.strictActionTypeUniqueness)return;let n=Object.entries(w).filter(([,i])=>i>1).map(([i])=>i);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(i=>`"${i}"`).join(", ")}. ${N}#strictactiontypeuniqueness`)}function dt(e={},n={}){return[{provide:me,useFactory:Je},{provide:re,useValue:n.initialState},{provide:U,useFactory:Qe,deps:[re]},{provide:O,useValue:e},{provide:oe,useExisting:e instanceof c?e:O},{provide:ve,deps:[O,[new Y(oe)]],useFactory:Ye},{provide:se,useValue:n.metaReducers?n.metaReducers:[]},{provide:ce,deps:[I,se],useFactory:We},{provide:ie,useValue:n.reducerFactory?n.reducerFactory:Ae},{provide:Ee,deps:[ie,ce],useFactory:Fe},je,Ce,De,Ue,Me,st(n.runtimeChecks),ct()]}function lt(){y(m),y(v),y(M),y(_),y(me,{optional:!0}),y(ge,{optional:!0})}var ft=[{provide:de,useFactory:lt},{provide:Q,multi:!0,useFactory(){return()=>y(de)}}];function kt(e,n){return W([...dt(e,n),ft])}function Ut(...e){let n=e.pop(),i=e.map(t=>t.type);return{reducer:n,types:i}}function Mt(e,...n){let i=new Map;for(let t of n)for(let r of t.types){let o=i.get(r);if(o){let s=(d,a)=>t.reducer(o(d,a),a);i.set(r,s)}else i.set(r,t.reducer)}return function(t=e,r){let o=i.get(r.type);return o?o(t,r):t}}export{It as a,bt as b,Re as c,m as d,U as e,de as f,Ct as g,v as h,b as i,xe as j,M as k,T as l,_ as m,Dt as n,kt as o,Ut as p,Mt as q};
