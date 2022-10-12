import{_ as y,r as t,v as a,o as l,c as r,b as w,e,F as G,n as C,s as D,u as E,B as F,f as g,t as x,g as B}from"./index.8a998f4a.js";import{b as M,a as H}from"./BaseFooter.c29ac692.js";import"./global-nav.a5f67ec8.js";const T={components:{baseHeader:M,baseFooter:H},setup(d){E();const{showDefaultGrowl:n,showSuccessGrowl:c,showErrorGrowl:o,showWarningGrowl:i,showErrorModalGrowl:h,showWhiteout:f,setOrigin:_}=F(),s=t(a()),u=t(a()),v=t(a()),p=t(a()),k=t(a()),m=t([{id:s,label:"Show Default",title:"Alert",msg:"The system had done something, and we wanted to let you know.",callback:n},{id:u,label:"Show Success",title:"Success",useIcon:"true",msg:"Great, that was a successful thing!",callback:c},{id:v,label:"Show Error",title:"Error",useIcon:"true",msg:"Oh no! Something negative has happened.",callback:o},{id:p,label:"Show Warning",title:"Warning",useIcon:"false",msg:"This item might need attention. Be careful.",callback:i},{id:k,label:"Show Error Modal",title:"Error",useIcon:"true",msg:"Oh no! Something negative has happened. I'm a Modal.",callback:h}]);return{alertsData:m,triggerAlert:S=>{let b=m.value.find(I=>I.id==S);b.callback(b)}}}},z={id:"main-content",tabindex:"-1"},A={class:"fds-section"},N={class:"fds-section__bd"},O={class:"fds-m-t--l"},V={class:"fds-level@m fds-level--justify-between fds-level--wrap"},W=e("h1",{class:"fds-m--none"},"Growl Demo",-1),$={class:"fds-level fds-level--justify-between fds-level--grow-auto"},j=e("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),L=B(" Help "),q=[j,L],J={class:"fds-section"},K={class:"fds-section__bd"},P={key:0,class:"fds-m-t--l fds-box fds-level fds-level--gutter-l"},Q=["id","aria-controls","onClick"];function R(d,n,c,o,i,h){const f=g("baseHeader"),_=g("baseFooter");return l(),r("div",null,[w(f),e("main",z,[e("div",A,[e("div",N,[e("div",O,[e("div",V,[W,e("div",$,[e("span",null,[e("button",{onClick:n[0]||(n[0]=s=>d.showModal(d.helpModalId)),class:"fds-btn fds-btn--block fds-btn--flat",type:"button"},q)])])])])])]),e("div",J,[e("div",K,[o.alertsData?(l(),r("div",P,[(l(!0),r(G,null,C(o.alertsData,s=>(l(),r("button",{key:s.id,id:s.id,"aria-controls":s.id,onClick:u=>o.triggerAlert(s.id),class:"fds-btn fds-btn--secondary"},x(s.label),9,Q))),128))])):D("",!0)])])]),w(_)])}const ee=y(T,[["render",R]]);export{ee as default};
