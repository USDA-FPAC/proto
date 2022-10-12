import{r as a,_ as z,d as u,v as h,a as Y,o as X,c as j,b as c,e,f as m,w as A,t as M,g as _,u as Q,h as v}from"./index.db0461fb.js";import{u as W}from"./global-nav.a40c4916.js";import{u as q}from"./usePopoverControls.72b59f05.js";import{b as K,a as Z}from"./BaseFooter.acbc0996.js";function J(){const R=a(""),o=a({}),f=a({}),l=s=>{let i=document.getElementById(s);i.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden","false"),i.addEventListener("keydown",S);let d='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',t=i.querySelectorAll(d);t=Array.prototype.slice.call(t),o.value=t[0],f.value=t[t.length-1],o.value.focus();let E=document.getElementsByTagName("body")[0];E.className=E.className+" fds-modal-scroll-fix",setTimeout(function(){i.focus()},200)},g=s=>{document.getElementById(s).setAttribute("aria-hidden","true");let d=document.getElementsByTagName("body")[0];d.className=d.className.replace(" fds-modal-scroll-fix","");let t=document.querySelector("[data-modal-origin]");t&&(t.removeAttribute("data-modal-origin"),t.setAttribute("aria-expanded","false"),t.focus())},S=s=>{s.keyCode===9&&(s.shiftKey?document.activeElement===o.value&&(s.preventDefault(),f.value.focus()):document.activeElement===f.value&&(s.preventDefault(),o.value.focus())),s.keyCode===27&&closeModal()};return{setModalId:s=>{R.value=s},getModalId:()=>R.value,showModal:l,hideModal:g}}const $=u(()=>v(()=>import("./field.3a4d9890.js"),["assets/field.3a4d9890.js","assets/useErrorState.222aeb11.js","assets/index.db0461fb.js","assets/index.5c05dba2.css","assets/usePopoverControls.72b59f05.js"])),ee=u(()=>v(()=>import("./field-group.a5bbc202.js"),["assets/field-group.a5bbc202.js","assets/useErrorState.222aeb11.js","assets/index.db0461fb.js","assets/index.5c05dba2.css","assets/usePopoverControls.72b59f05.js"])),le=u(()=>v(()=>import("./selection.1d458ee3.js"),["assets/selection.1d458ee3.js","assets/useErrorState.222aeb11.js","assets/index.db0461fb.js","assets/index.5c05dba2.css","assets/usePopoverControls.72b59f05.js"])),ae=u(()=>v(()=>import("./select-multi.c3511179.js"),["assets/select-multi.c3511179.js","assets/useErrorState.222aeb11.js","assets/index.db0461fb.js","assets/index.5c05dba2.css"])),oe=u(()=>v(()=>import("./Page-Level-Help-Modal.e7b48948.js"),["assets/Page-Level-Help-Modal.e7b48948.js","assets/index.db0461fb.js","assets/index.5c05dba2.css","assets/global-nav.a40c4916.js","assets/usePopoverControls.72b59f05.js","assets/BaseFooter.acbc0996.js"])),se=u(()=>v(()=>import("./inline-help.509592ab.js"),["assets/inline-help.509592ab.js","assets/usePopoverControls.72b59f05.js","assets/index.db0461fb.js","assets/index.5c05dba2.css"])),te=u(()=>v(()=>import("./range.bee28909.js"),["assets/range.bee28909.js","assets/index.db0461fb.js","assets/index.5c05dba2.css","assets/useErrorState.222aeb11.js","assets/usePopoverControls.72b59f05.js"])),ie={components:{baseHeader:K,baseFooter:Z,field:$,fieldGroup:ee,selection:le,selectMulti:ae,pageLevelHelpModal:oe,inlineHelp:se,range:te},setup(R){Q(),W();const{setModalId:o,getModalId:f,showModal:l,hideModal:g}=J(),{showPopover:S,hidePopover:b}=q(),p=a(h());o(p.value);const s=a(null),i=a(h()),d=a("10"),t=r=>{},E=a(null),P=a(h()),n=a(null),C=a(null),V=a(null),B=a(h()),U=[{id:"pie1",label:"Apple Pie",name:"piegroup"},{id:"pie2",label:"Pumpkin Pie",name:"piegroup"},{id:"pie3",label:"Keylime Pie",name:"piegroup"},{id:"pie4",label:"French Silk Pie",name:"piegroup"}],w=a(h()),N=[{groupId:"g0",groupData:[{id:"v0",label:"Select a Vehicle",name:"vehiclesGroup",val:0,isDisabled:!0,isSelected:!0}]},{groupId:"g1",groupLabel:"Small Vehicles",groupData:[{id:"v1",label:"Motor Scooter",val:"scoot",name:"small"},{id:"v2",label:"Cafe Racer",val:"cf",name:"small"},{id:"v3",label:"Can-Am",val:"can",name:"small"}]},{groupId:"g2",groupLabel:"Medium Vehicles",groupData:[{id:"v4",label:"4-Door Sedan",val:"sedan",name:"medium"},{id:"v5",label:"Sports Coupe",val:"Coupe",name:"medium"},{id:"v6",label:"Cross Over SUV",val:"xo",name:"medium"}]},{groupId:"g3",groupLabel:"Large Vehicles",groupData:[{id:"v7",label:"Minivan",val:"van",name:"large"},{id:"v8",label:"Pickup Truck",val:"truck",name:"large"},{id:"v9",label:"7 Passenger SUV",val:"suv",name:"large"},{id:"v10",label:"15 Passenger Van",val:"bigvan",name:"large"}]}],k=[{id:"a0",label:"Select all",val:"",name:"a0",behavior:"select-multi-all"},{id:"a1",label:"Aligator",val:"",name:"a1",behavior:""},{id:"a2",label:"Buffalo",val:"checked",name:"a2",behavior:""},{id:"a3",label:"Cow",val:"",name:"a3",behavior:""},{id:"a4",label:"Dolphin",val:"",name:"a4",behavior:""},{id:"a5",label:"Elephant",val:"",name:"a5",behavior:""},{id:"a6",label:"Frog",val:"",name:"a6",behavior:""},{id:"a7",label:"Goose",val:"",name:"a7",behavior:""}];let D=a(!1),O=a(!1),L=a(!1),T=a(!1),I=a(!1);const x=r=>{if(r=="name"&&(D.value=!D.value,E.value.setHasError(D.value)),r=="pies"&&(O.value=!O.value,n.value.setHasError(O.value)),r=="vehicle"&&(L.value=!L.value,C.value.setHasError(L.value)),r=="animal"&&(T.value=!T.value,V.value.setHasError(T.value)),r=="price-range"){I.value=!I.value;let F=s.value;F.setHasError(I.value),F.hasErrorCaller(I.value)}},y=a("Search Header Default"),H=a(""),G=r=>{y.value="Search Results:",H.value=r.phrase};return Y(()=>{}),{priceRangeFieldRef:s,priceRangeFieldId:i,handleRangeChange:t,rangeStep:d,nameField:E,nameFieldId:P,piesFieldId:B,pieField:n,vehicleId:w,vehicleField:C,animalField:V,setError:x,pieData:U,vehicleData:N,animalData:k,submitSearch:G,searchResults:H,headerText:y,showModal:l,hideModal:g,helpModalId:p,showPopover:S,hidePopover:b}}},de={id:"main-content",tabindex:"-1"},ne={class:"fds-section"},re={class:"fds-section__bd"},ce={class:"fds-m-t--l"},_e={class:"fds-level@m fds-level--justify-between"},Ee=e("h1",{class:"fds-m--none"},"Home",-1),ue={class:"fds-level fds-level--justify-between fds-level--grow-auto"},ve=e("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),me={class:"fds-section"},fe={class:"fds-section__bd"},pe={class:"fds-grid"},he={class:"fds-grid__1/1 fds-grid__1/2@m"},Re=["id"],ge=e("p",null,[e("strong",null,"Note:"),m(" The low and high prices values will automatically adjust if one is exceeding the limits of the range..")],-1),Se=[ge],be={class:"fds-grid__1/1 fds-grid__1/2@m"},Ie={class:"fds-m-t--m"},Ae={class:"fds-grid"},Pe={class:"fds-grid__1/1 fds-grid__1/2@m"},De=["id"],Oe=e("p",null,[e("strong",null,"Note:"),m(" Please provide your full legal given name, a it is written on your birth certificate.")],-1),Le=[Oe],Te={class:"fds-grid__1/1 fds-grid__1/2@m"},Ce={class:"fds-m-t--m"},Ve={class:"fds-grid"},ye={class:"fds-grid__1/1 fds-grid__1/2@m"},He=["id"],Fe=e("p",null,[e("strong",null,"Note:"),m(" Select the pie that you like the most to bring to parties.")],-1),Me=[Fe],Be={class:"fds-grid__1/1 fds-grid__1/2@m"},Ue={class:"fds-m-t--l"},we={class:"fds-level fds-level--justify-between fds-level--align-top"},Ne=["id"],ke=e("p",null,[e("strong",null,"Note:"),m(" Select the vehicle that has the least amount of C0"),e("sub",null,"2"),m(" emissions.")],-1),xe=[ke],Ge={class:"fds-m-t--l"},ze={class:"fds-level fds-level--justify-between fds-level--align-top"},Ye={class:"fds-m-t--l"},Xe={class:"fds-section"},je={class:"fds-section__bd"},Qe={class:"fds-m-t--l"};function We(R,o,f,l,g,S){const b=_("baseHeader"),p=_("range"),s=_("field"),i=_("field-group"),d=_("selection"),t=_("selectMulti"),E=_("page-level-help-modal"),P=_("baseFooter");return X(),j("div",null,[c(b,{onEmitSearch:l.submitSearch},null,8,["onEmitSearch"]),e("main",de,[e("div",ne,[e("div",re,[e("div",ce,[e("div",_e,[Ee,e("div",ue,[e("span",null,[e("button",{onClick:o[0]||(o[0]=n=>l.showModal(l.helpModalId)),class:"fds-btn fds-btn--block fds-btn--flat",type:"button"},[ve,m(" Help ")])])])])])])]),e("div",me,[e("div",fe,[e("div",pe,[e("div",he,[c(p,{ID:l.priceRangeFieldId,onEmitRangeChange:l.handleRangeChange,EXTRA_FIELD_CLASSES:"fds-field--fill",RANGE_LABEL:"Price Range",LOW_VALUE:"30",LOW_LABEL_TITLE:"lower price value",HIGH_VALUE:"70",HIGH_LABEL_TITLE:"higher price value",STEP:l.rangeStep,USE_PREFIX:"true",PREFIX:"$",USE_SUFFIX:"false",SUFFIX:"%",USE_ICON:"false",ICON_PATH:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z",ICON_SIZE_CLASS:"fds-icon--size-2",ARIA_DESCRIBEDBY:l.priceRangeFieldId+"__help",HELP_MESSAGE:"Receive a better offer with a smaller price range",INPUT_ERROR_CLASS:"fds-input--error",ERROR_MESSAGE:"That price range is not acceptable.",HAS_ERROR:"false",USE_POPOVER:"false",POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--tr fds-popover--size-small",POPOVER_ID:l.priceRangeFieldId+"-help-popover",POPOVER_HEADER:"Price Range Help",ref:"priceRangeFieldRef"},{default:A(()=>[e("div",{id:l.priceRangeFieldId+"-popup-body"},Se,8,Re)]),_:1},8,["ID","onEmitRangeChange","STEP","ARIA_DESCRIBEDBY","POPOVER_ID"])]),e("div",be,[e("p",Ie,[e("button",{onClick:o[1]||(o[1]=n=>l.setError("price-range")),class:"fds-btn fds-btn--secondary"},"Toggle Price Range Error")])])]),e("div",Ae,[e("div",Pe,[c(s,{ID:l.nameFieldId,EXTRA_FIELD_CLASSES:"",LABEL:"Full Name",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"true",BEHAVIOR:"",ARIA_DESCRIBEDBY:l.nameFieldId+"__help",HELP_MESSAGE:"Use your full name, please.",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--rt fds-popover--size-small",POPOVER_ID:l.nameFieldId+"-help-popover",POPOVER_HEADER:"Name Field Help",ref:"nameField"},{default:A(()=>[e("div",{id:l.nameFieldId+"-popup-body"},Le,8,De)]),_:1},8,["ID","ARIA_DESCRIBEDBY","POPOVER_ID"])]),e("div",Te,[e("p",Ce,[e("button",{onClick:o[2]||(o[2]=n=>l.setError("name")),class:"fds-btn fds-btn--secondary"},"Toggle Name Error")])])]),e("div",Ve,[e("div",ye,[c(i,{ID:l.piesFieldId,GROUP_TYPE:"radio",DISPLAY:"",LABEL:"Pick a Pie",DATA:l.pieData,REQUIRED:"",BEHAVIOR:"",EXTRA_FIELD_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Select your favorite.",ERROR_MESSAGE:"Why don't you like my pies?",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--tr fds-popover--size-small",POPOVER_ID:l.piesFieldId+"-help-popover",POPOVER_HEADER:"Pies Help",ref:"pieField"},{default:A(()=>[e("div",{id:l.piesFieldId+"-popup-body"},Me,8,He)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("div",Be,[e("p",Ue,[e("button",{onClick:o[3]||(o[3]=n=>l.setError("pies")),class:"fds-btn fds-btn--secondary"},"Toggle Pie Error")])])]),e("div",we,[e("span",null,[c(d,{ID:l.vehicleId,LABEL:"What do you drive?",DATA:l.vehicleData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_FIELD_CLASSES:"",EXTRA_SELECT_CLASSES:"fds-select--fill",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"Select your ride.",ERROR_MESSAGE:"You must like walking!",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fds-popover--rt fds-popover--size-small",POPOVER_ID:l.vehicleId+"-help-popover",POPOVER_HEADER:"Vehicle Help",ref:"vehicleField"},{default:A(()=>[e("div",{id:l.vehicleId+"-popup-body"},xe,8,Ne)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("span",null,[e("p",Ge,[e("button",{onClick:o[4]||(o[4]=n=>l.setError("vehicle")),class:"fds-btn fds-btn--secondary"},"Toggle Vehicle Error")])])]),e("div",ze,[e("span",null,[c(t,{ID:"animal",LABEL:"Select large animals.",DATA:l.animalData,REQUIRED:"false",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Please don't feed them.",ERROR_MESSAGE:"Those are small ones, buddy!",ref:"animalField"},null,8,["DATA"])]),e("span",null,[e("p",Ye,[e("button",{onClick:o[5]||(o[5]=n=>l.setError("animal")),class:"fds-btn fds-btn--secondary"},"Toggle Animal Error")])])])])]),e("div",Xe,[e("div",je,[e("h2",null,M(l.headerText),1),e("span",Qe,M(l.searchResults),1)])]),c(E,{MODAL_ID:l.helpModalId},null,8,["MODAL_ID"])]),c(P)])}const qe=z(ie,[["render",We]]),el=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{el as H,J as u};
