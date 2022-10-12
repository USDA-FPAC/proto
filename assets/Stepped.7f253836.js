import{u as x,i as H,_ as j,d as V,r as d,v as _,l as O,a as G,o as v,c as b,b as m,e as a,F as U,n as X,s as I,B as Y,f as E,t as K,A as W,g as q,h as y}from"./index.8a998f4a.js";import{u as J}from"./global-nav.a5f67ec8.js";import{b as Q,a as Z}from"./BaseFooter.c29ac692.js";function $(){x();const p=H(),u=async(s,r,L,i=null)=>{f(r),i&&i()},f=(s,r="")=>{s.includes("http")?r=="_blank"?window.open(s,r):window.location.href=s:p.push(s)};return{updateSteppedControls:u}}const ee=V(()=>y(()=>import("./stepped-tabs.761aafae.js"),["assets/stepped-tabs.761aafae.js","assets/index.8a998f4a.js","assets/index.0d5683b6.css","assets/global-nav.a5f67ec8.js"])),te=V(()=>y(()=>import("./stepped-control.8c22e03f.js"),["assets/stepped-control.8c22e03f.js","assets/index.8a998f4a.js","assets/index.0d5683b6.css"])),se={components:{baseHeader:Q,baseFooter:Z,steppedTabs:ee,steppedControl:te},setup(p){x();const{showDefaultGrowl:u,showSuccessGrowl:f,showErrorGrowl:s}=Y();J();const{updateSteppedControls:r}=$(),{getPropertyFromId:L,setPropertyFromId:i,setPropertyFromProperty:A}=W(),S=d(null),w=d(_()),o=d(0),n=d([{id:"step-one-tab-123",label:"Step One",path:"",useIcon:"true",iconPath:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",isEnabled:!0,status:"active"},{id:"step-two-tab-456",label:"Step Two",path:"",useIcon:"true",iconPath:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",isEnabled:!0,status:"incomplete"},{id:"step-three-tab-789",label:"Step Three",path:"",useIcon:"true",iconPath:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",isEnabled:!1,status:"incomplete"},{id:"step-four-tab-1011",label:"Step Four",path:"",useIcon:"true",iconPath:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",isEnabled:!0,status:"incomplete"},{id:"step-five-tab-1011",label:"Step Five",path:"",useIcon:"true",iconPath:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",isEnabled:!1,status:"incomplete"}]),l=d(null),z=e=>h(e),h=e=>{o.value=l.value.findIndex(t=>t.id==e),l.value.forEach((t,c)=>{c<o.value?(t.status="complete",t.isEnabled=!0):c>o.value&&t.status!="incomplete"&&(t.status="complete")}),i(e,"isEnabled",!0,l.value),i(e,"status","active",l.value),P(o.value,"next",l.value),F(o.value)},g=d("false"),T=d("true"),B=d("Back"),N=d("Next Step"),P=(e,t,c)=>{t=="next"&&(T.value=e+1==c.length?"false":"true",g.value=e>0?"true":"false"),t=="prev"&&(g.value=e==0?"false":"true",T.value=e<c.length?"true":"false")},M=()=>{let e=o.value+1;P(e,"next",n.value);let t=n.value[e]?n.value[e]:{};t.id&&h(t.id);let c={data:"data being passed to Store"},D=t.path||"";r(c,D,"There was an error updating the data.")},k=()=>{let e=o.value-1;P(e,"prev",n.value);let t=n.value[e]?n.value[e]:{};t.id&&h(t.id);let c={data:"data being passed to Store"},D=t.path||"";r(c,D,"There was an error updating the data.")},C=e=>{l.value=e},F=e=>{if(e==l.value.length-1){let t={id:_(),title:"Success",useIcon:"true",msg:"You have successfully completed the Stepped Process."};f(t)}else if(e==0){let t={id:_(),title:"Error",useIcon:"true",msg:"Wrong Direction! Please step thru the process."};s(t)}else if(e==l.value.length-2){let t={id:_(),title:"Keep Going",msg:"You are almost done."};u(t)}};return O(n,e=>{C(e)}),G(()=>{C(n.value)}),{steppedTabsId:w,steppedTabsRef:S,tabsData:l,handleSelectedTab:z,setActiveTab:h,prev:k,next:M,usePrev:g,useNext:T,prevLabel:B,nextLabel:N}}},ae={id:"main-content",tabindex:"-1"},oe={class:"fds-section"},ne={class:"fds-section__bd"},le={class:"fds-m-t--l"},ce={class:"fds-level@m fds-level--justify-between"},de=a("h1",{class:"fds-m--none"},"Stepped Demos",-1),re={class:"fds-level fds-level--justify-between fds-level--grow-auto"},ie=a("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),ue=q(" Help "),pe=[ie,ue],ve={class:"fds-section"},be={key:0,class:"fds-section__bd"},fe=a("div",{class:"fds-m-t--l"},[a("h3",null,"Page Content Below")],-1),he={key:0,class:"fds-m-t--l fds-box fds-level fds-level--gutter-l"},_e=["onClick"],me={class:"fds-section"},Ee={class:"fds-section__bd"};function Se(p,u,f,s,r,L){const i=E("baseHeader"),A=E("stepped-tabs"),S=E("stepped-control"),w=E("baseFooter");return v(),b("div",null,[m(i),a("main",ae,[a("div",oe,[a("div",ne,[a("div",le,[a("div",ce,[de,a("div",re,[a("span",null,[a("button",{onClick:u[0]||(u[0]=o=>p.showModal(p.helpModalId)),class:"fds-btn fds-btn--block fds-btn--flat",type:"button"},pe)])])])])])]),a("div",ve,[s.tabsData?(v(),b("div",be,[m(A,{ID:s.steppedTabsId,TABS_DATA:s.tabsData,onEmitSelectedTab:s.handleSelectedTab,ref:"steppedTabsRef"},null,8,["ID","TABS_DATA","onEmitSelectedTab"]),fe,s.tabsData?(v(),b("div",he,[(v(!0),b(U,null,X(s.tabsData,o=>(v(),b("button",{key:o.id,onClick:n=>s.setActiveTab(o.id),class:"fds-btn fds-btn--secondary"},K(o.label),9,_e))),128))])):I("",!0)])):I("",!0)]),a("div",me,[a("div",Ee,[m(S,{USE_PREV:s.usePrev,PREV_LABEL:s.prevLabel,USE_NEXT:s.useNext,NEXT_LABEL:s.nextLabel,EXTRA_CLASSES:"fds-m-t--l",onEmitPrev:s.prev,onEmitNext:s.next},null,8,["USE_PREV","PREV_LABEL","USE_NEXT","NEXT_LABEL","onEmitPrev","onEmitNext"])])])]),m(w)])}const Pe=j(se,[["render",Se]]);export{Pe as default};