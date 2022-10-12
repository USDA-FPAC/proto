import{u as x}from"./global-nav.a5f67ec8.js";import{u as F,k as H,_ as V,r as _,v as k,a as z,o as S,c as Y,b as I,e,x as B,f as D,g as f}from"./index.8a998f4a.js";import{b as j,a as M}from"./BaseFooter.c29ac692.js";function O(){let b,o,c,t,y,u;const h=F(),m=H(()=>{let s=h.getters["today/getIsLoaded"];return s||!1}),r=s=>{if(!m.value){let d=document.createElement("script"),a=s;d.setAttribute("src",a),document.head.appendChild(d),h.dispatch("today/setLoaded",!0)}},v=()=>datePickerController,P=s=>{let d=!1,a=setInterval(function(){try{v()&&(d=!0,clearInterval(a),p(s))}catch{d=!1}return d},500)},p=s=>{b=s.id||"dp-123-id",o=s.format||"%m/%d/%Y",c=s.disabledDays||[0,0,0,0,0,0,0],t=s.staticPos||!1,y=s.statusFormat||"%l, %d%S %F %Y",u=s.disableFormatting||!1;let d=v(),a={},i=b.toString();a[i]=o.toString(),d.createDatePicker({formElements:a,disabledDays:c,staticPos:t,statusFormat:y,disableFormatting:u})},g=(s,d=null)=>{let a=document.getElementById(s);a.value=w(Date.now(),d||"%m%d%Y")},w=(s,d)=>{let a=new Date(s),i=""+(a.getMonth()+1),n=""+a.getDate(),l=a.getFullYear();switch(d.includes("%m")&&(i.length<2&&(i="0"+i),n.length<2&&(n="0"+n)),d.includes("%y")&&(l=l.slice(-2)),d){case"%m%d%Y":return[i,n,l].join("/");case"%n%j%Y":return[i,n,l].join("");case"%m/%d/%Y":return[i,n,l].join("/");case"%n/%j/%Y":return[i,n,l].join("");case"%m/%d/%y":return[i,n,l].join("/");case"%n/%j/%y":return[i,n,l].join("/");default:return[i,n,l].join("/")}};return{initializeDatePicker:r,createDatePicker:P,setDateAsToday:g,setRange:(s,d,a)=>{let i=v();i.setRangeLow(s,d),i.setRangeHigh(s,a)}}}const R={components:{baseHeader:j,baseFooter:M},setup(b){x();const{initializeDatePicker:o,createDatePicker:c,setDateAsToday:t,setRange:y}=O();o("https://usda-fpac.github.io/fds-style/js/vendor/fds-date-picker.js");const u=_("%m/%d/%Y"),h=_(k()),m=()=>{c({id:h.value,format:u.value,disabledDays:[0,0,0,0,0,0,0],staticPos:!1})},r=_("%m/%d/%Y"),v=_(k()),P=()=>{c({id:v.value,format:r.value,disabledDays:[0,0,0,0,0,1,1],staticPos:!1})},p=_("%m/%d/%Y"),g=_(k()),w=()=>{c({id:g.value,format:p.value,disabledDays:[0,0,0,0,0,0,0],staticPos:!1})},T=_("%m/%d/%Y"),s=_(k()),d=()=>{c({id:s.value,format:T.value,disabledDays:[0,0,0,0,0,0,0],staticPos:!0})},a=()=>{m(),P(),w(),d()};return z(()=>{a()}),{datePickerOneId:h,dateFormatOne:u,datePickerTwoId:v,dateFormatTwo:r,datePickerThreeId:g,dateFormatThree:p,datePickerFourId:s,dateFormatFour:T,setDateAsToday:t}}},E={id:"main-content",tabindex:"-1"},q=B('<div class="fds-section"><div class="fds-section__bd"><div class="fds-m-t--l"><div class="fds-level@m fds-level--justify-between"><h1 class="fds-m--none">Today Button</h1><div class="fds-level fds-level--justify-between fds-level--grow-auto"><span></span></div></div></div></div></div>',1),A={class:"fds-section"},C={class:"fds-section__bd"},L={class:"fds-level fds-level--align-top"},N={class:"fds-field fds-field"},G=["for"],J=f("Select Date "),K=e("span",{class:"fds-field__label-desc"},"Required",-1),Q=[J,K],U=["id","aria-describedby","name"],W=["id"],X=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})],-1),Z=f(" Today "),$=[X,Z],ee={class:"fds-section"},te={class:"fds-section__bd"},se={class:"fds-level fds-level--align-top"},de={class:"fds-field fds-field--fill"},ae=["for"],ie=f("Select Date "),oe=e("span",{class:"fds-field__label-desc"},"Required",-1),ne=[ie,oe],le=["id","aria-describedby","name"],ce=["id"],re=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})],-1),_e=f(" Today "),fe=[re,_e],he={class:"fds-section"},ue={class:"fds-section__bd"},ve={class:"fds-level fds-level--align-top"},me={class:"fds-field"},be=["for"],ye=f("Select Date "),pe=e("span",{class:"fds-field__label-desc"},"Required",-1),ge=[ye,pe],ke=["id","aria-describedby","name"],Pe=["id"],we=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})],-1),Te=f(" Today "),Ie=[we,Te],De={class:"fds-section"},xe={class:"fds-section__bd"},Fe={class:"fds-level fds-level--align-top"},He={class:"fds-field"},Ve=["for"],ze=f("Select Date "),Se=e("span",{class:"fds-field__label-desc"},"Required",-1),Ye=[ze,Se],Be=["id","aria-describedby","name"],je=["id"],Me=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})],-1),Oe=f(" Today "),Re=[Me,Oe];function Ee(b,o,c,t,y,u){const h=D("baseHeader"),m=D("baseFooter");return S(),Y("div",null,[I(h),e("main",E,[q,e("div",A,[e("div",C,[e("div",L,[e("div",N,[e("label",{class:"fds-field__label",for:t.datePickerOneId},Q,8,G),e("input",{placeholder:"mm/dd/yyyy",class:"fds-input fds-field__item",id:t.datePickerOneId,"aria-describedby":t.datePickerOneId+"__help","aria-required":"true",name:t.datePickerOneId,type:"text",value:""},null,8,U),e("span",{class:"fds-field__help",id:t.datePickerOneId+"__help"},"Example 07/04/2019",8,W)]),e("button",{onClick:o[0]||(o[0]=r=>t.setDateAsToday(t.datePickerOneId)),class:"uxp-dp-margin-default fds-btn fds-btn--secondary",type:"button"},$)])])]),e("div",ee,[e("div",te,[e("div",se,[e("div",de,[e("label",{class:"fds-field__label",for:t.datePickerTwoId},ne,8,ae),e("input",{placeholder:"mm/dd/yyyy",class:"fds-input fds-field__item",id:t.datePickerTwoId,"aria-describedby":t.datePickerTwoId+"__help","aria-required":"true",name:t.datePickerTwoId,type:"text",value:""},null,8,le),e("span",{class:"fds-field__help",id:t.datePickerTwoId+"__help"},"Example 10/17/2020",8,ce)]),e("button",{onClick:o[1]||(o[1]=r=>t.setDateAsToday(t.datePickerTwoId,t.dateFormatTwo)),class:"uxp-dp-margin-default fds-btn fds-btn--secondary",type:"button"},fe)])])]),e("div",he,[e("div",ue,[e("div",ve,[e("div",me,[e("label",{class:"fds-field__label",for:t.datePickerThreeId},ge,8,be),e("input",{disabled:"",placeholder:"mm/dd/yyyy",class:"fds-input fds-field__item",id:t.datePickerThreeId,"aria-describedby":t.datePickerThreeId+"__help","aria-required":"true",name:t.datePickerThreeId,type:"text",value:""},null,8,ke),e("span",{class:"fds-field__help",id:t.datePickerThreeId+"__help"},"Example 03/28/2022",8,Pe)]),e("button",{disabled:"",onClick:o[2]||(o[2]=r=>t.setDateAsToday(t.datePickerThreeId,t.dateFormatThree)),class:"uxp-dp-margin-default fds-btn fds-btn--secondary",type:"button"},Ie)])])]),e("div",De,[e("div",xe,[e("div",Fe,[e("div",He,[e("label",{class:"fds-field__label",for:t.datePickerFourId},Ye,8,Ve),e("input",{placeholder:"mm/dd/yyyy",class:"fds-input fds-field__item",id:t.datePickerFourId,"aria-describedby":t.datePickerFourId+"__help","aria-required":"true",name:t.datePickerFourId,type:"text",value:""},null,8,Be),e("span",{class:"fds-field__help",id:t.datePickerFourId+"__help"},"Example 06/29/2022",8,je)]),e("button",{onClick:o[3]||(o[3]=r=>t.setDateAsToday(t.datePickerFourId,t.dateFormatFour)),class:"uxp-dp-margin-default fds-btn fds-btn--secondary",type:"button"},Re)])])])]),I(m)])}const Le=V(R,[["render",Ee]]);export{Le as default};