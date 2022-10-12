import{_ as E,o,c as _,e as s,p as r,t as d,g as c,s as l}from"./index.8a998f4a.js";const S={props:{USE_PREV:String,PREV_LABEL:String,USE_PREV_SECONDARY:String,PREV_SECONDARY_LABEL:String,USE_NEXT:String,NEXT_LABEL:String,NEXT_DISABLED:String,EXTRA_CLASSES:String,USE_STEPS:String,STEPS_CURRENT:String,STEPS_TOTAL:String,STEPS_LABEL:String},setup(a,{emit:e}){return{next:()=>e("emitNext"),prev:()=>e("emitPrev")}}},f={class:"fds-stepped-control__bd"},p=c(" of "),b={class:"fds-stepped-control__list"},u={key:0,class:"fds-stepped-control__item"},g={class:"fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn",type:"button"},L={class:"fds-stepped-control__btn-label"},T={class:"fds-stepped-control__item fds-stepped-control__item--pull"},h={class:"fds-stepped-control__btn-label"},m=s("div",{class:"fds-stepped-control__shim"},null,-1),A={class:"fds-stepped-control__item fds-stepped-control__item--push"},v={key:0},R={class:"fds-stepped-control__btn-label"},N=s("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})],-1),P={class:"fds-stepped-control__btn-label"},B=s("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})],-1);function x(a,e,t,n,C,y){return o(),_("div",{class:r("fds-stepped-control "+t.EXTRA_CLASSES)},[s("div",f,[t.USE_STEPS=="true"?(o(),_("div",{key:0,class:r("fds-stepped-control__message "+(t.USE_PREV=="true")?"fds-stepped-control__message--fill":""),role:"status"},[s("strong",null,d(t.STEPS_CURRENT),1),p,s("strong",null,d(t.STEPS_TOTAL),1),c(" "+d(t.STEPS_LABEL),1)],2)):l("",!0),s("div",b,[t.USE_PREV_SECONDARY=="true"?(o(),_("div",u,[s("button",g,[s("span",L,d(t.PREV_SECONDARY_LABEL),1)])])):l("",!0),s("div",T,[t.USE_PREV=="true"?(o(),_("button",{key:0,onClick:e[0]||(e[0]=(...i)=>n.prev&&n.prev(...i)),class:"fds-btn fds-btn--alt fds-stepped-control__btn",type:"button"},[s("span",h,d(t.PREV_LABEL),1)])):l("",!0)]),m,s("div",A,[t.USE_NEXT=="true"?(o(),_("span",v,[t.NEXT_DISABLED!="true"?(o(),_("button",{key:0,onClick:e[1]||(e[1]=(...i)=>n.next&&n.next(...i)),class:"fds-btn fds-btn--primary fds-stepped-control__btn",type:"submit"},[s("span",R,d(t.NEXT_LABEL),1),N])):l("",!0),t.NEXT_DISABLED=="true"?(o(),_("button",{key:1,onClick:e[2]||(e[2]=(...i)=>n.next&&n.next(...i)),class:"fds-btn fds-btn--primary fds-stepped-control__btn",disabled:"disabled",type:"submit"},[s("span",P,d(t.NEXT_LABEL),1),B])):l("",!0)])):l("",!0)])])])],2)}const V=E(S,[["render",x]]);export{V as default};