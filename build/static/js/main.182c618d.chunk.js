(this["webpackJsonpmonster-education"]=this["webpackJsonpmonster-education"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},62:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(22),i=c.n(n),r=(c(31),c.p+"static/media/header.40221f85.mp4"),o=(c.p,c.p+"static/media/online-summer.5a5efcef.png"),l=c.p+"static/media/logo.2bb70392.svg",d=c(3),j=c(6),b=c.n(j),h=c(10),m=c(13),u=c(12),p=c(4),O=c(8),x=c(14),f=(c(33),c(34),c(0)),g=function(e){var t=e.meta,c=Object(O.a)(e,["meta"]),a="atom-input";return t.error&&t.touched&&(a+=" atom-input__invalid"),"tel"===c.input.type?Object(f.jsx)(x.a,Object(d.a)(Object(d.a)(Object(d.a)({international:!0,defaultCountry:"US"},c),c.input),{},{className:a})):Object(f.jsx)("input",Object(d.a)(Object(d.a)(Object(d.a)({},c),c.input),{},{className:a}))},v=(c(40),function(e){var t=e.isDisabled,c=e.children,a=e.onPress,s=e.isOutline,n=e.fullWidth,i=Object(O.a)(e,["isDisabled","children","onPress","isOutline","fullWidth"]),r="atom-button";return r+=t?" atom-button__disable":s?" atom-button__outline":" atom-button__active",n&&(r+=" atom-button__full-width"),Object(f.jsx)("button",Object(d.a)(Object(d.a)({onClick:function(e){!t&&a&&a(e)}},i),{},{className:r,children:c}))}),N=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return function(e){return t.reduce((function(t,c){return t||c(e)}),void 0)}},k=function(e){return e||"number"===typeof e?void 0:"Required"},y=function(e){return e&&!/.+@.+\..+/i.test(e)?"Invalid email address":void 0},w=function(e){return e&&Object(x.b)(e)?void 0:"Invalid phone number"},A=function(e){var t=e.userData,c=e.sendDataAndNext,a=e.id;return Object(f.jsx)(p.b,{onSubmit:c,initialValues:t,render:function(e){var t=e.handleSubmit,c=e.invalid;return Object(f.jsxs)("form",{className:"form position-absolute",id:a,onSubmit:t,children:[Object(f.jsx)("h3",{children:"Contact Us to Apply"}),Object(f.jsx)(p.a,{name:"first_name",placeholder:"First Name",type:"text",component:g,validate:k}),Object(f.jsx)(p.a,{name:"last_name",placeholder:"Last Name",type:"text",component:g,validate:k}),Object(f.jsx)(p.a,{name:"email",placeholder:"Email",type:"text",component:g,validate:N(k,y)}),Object(f.jsx)(p.a,{name:"phone",placeholder:"Phone",type:"tel",component:g,validate:N(k,w),autoComplete:"nope"}),Object(f.jsx)("div",{className:"form-footer",children:Object(f.jsx)("div",{className:"flex-end",children:Object(f.jsx)(v,{type:"submit",isDisabled:c,children:"Next"})})})]})}})},C=(c(41),function(e){var t=e.meta,c=e.defaultOption,a=e.options,s=Object(O.a)(e,["meta","defaultOption","options"]),n="atom-select";t.error&&t.touched&&(n+=" atom-select__invalid");return Object(f.jsx)("div",{className:"atom-select-wrapper",children:Object(f.jsxs)("select",Object(d.a)(Object(d.a)(Object(d.a)({},s),{},{defaultValue:c},s.input),{},{className:n,required:!0,children:[Object(f.jsx)("option",{disabled:!0,value:"",children:c}),a.map((function(e){var t=e.label,c=e.value;return Object(f.jsx)("option",{value:c,children:t},t)}))]}))})}),M=[{label:5,value:5},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12},{label:13,value:13},{label:14,value:14}],S=[{label:"K",value:"K"},{label:"1st",value:"1st"},{label:"2dn",value:"2dn"},{label:"3rd",value:"3rd"},{label:"4th",value:"4th"},{label:"5th",value:"5th"},{label:"6th",value:"6th"},{label:"7th",value:"7th"},{label:"8th",value:"8th"}],_=function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{name:"child_".concat(e,"_firt_name"),placeholder:"Child's Firt Name",type:"text",component:g,validate:k}),Object(f.jsx)(p.a,{name:"child_".concat(e,"_last_name"),placeholder:"Child's Last Name",type:"text",component:g,validate:k}),Object(f.jsx)(p.a,{name:"child_".concat(e,"_age"),type:"number",component:C,options:M,defaultOption:"Child's Age",validate:k}),Object(f.jsx)(p.a,{name:"child_".concat(e,"_grade"),type:"text",component:C,options:S,defaultOption:"Child's Grade",validate:k})]})},B=function(e){var t=e.userData,c=e.sendDataAndNext,a=e.goToBackStep,s=e.addChild,n=e.removeChild,i=e.childs,r=e.id;return Object(f.jsx)(p.b,{initialValues:t,onSubmit:c,render:function(e){var t=e.handleSubmit,c=e.invalid;return Object(f.jsxs)("form",{className:"form position-absolute",id:r,onSubmit:t,children:[Object(f.jsx)("h3",{children:"Contact Us to Apply"}),_(1),2===i&&_(2),Object(f.jsxs)("div",{className:"form-footer",children:[2===i&&Object(f.jsx)(v,{type:"button",onPress:n,isOutline:!0,children:"Remove Child"}),1===i&&Object(f.jsx)(v,{type:"button",onPress:s,isOutline:!0,children:"Add Child"}),Object(f.jsxs)("div",{className:"form-footer-top-space-for-element form-footer-horizontal-buttons",children:[Object(f.jsx)(v,{type:"button",onPress:a,isOutline:!0,children:"Back"}),Object(f.jsx)(v,{type:"submit",isDisabled:c,children:"Next"})]})]})]})}})},E=(c(42),function(e){var t=e.meta,c=Object(O.a)(e,["meta"]),a="atom-textarea";return t.error&&t.touched&&(a+=" atom-textarea__invalid"),Object(f.jsx)("textarea",Object(d.a)(Object(d.a)(Object(d.a)({},c),c.input),{},{className:a}))}),P=function(e){var t=e.userData,c=e.sendForFinishStep,a=e.goToBackStep,s=e.id;return Object(f.jsx)(p.b,{initialValues:t,onSubmit:c,render:function(e){var t=e.handleSubmit,c=e.invalid,n=e.form;return Object(f.jsxs)("form",{className:"form position-absolute",id:s,onSubmit:function(e){t(e),n.reset()},children:[Object(f.jsx)("h3",{children:"Contact Us to Apply"}),Object(f.jsx)(p.a,{name:"message",placeholder:"Type your message & questions",component:E,validate:k}),Object(f.jsx)("div",{className:"form-footer",children:Object(f.jsxs)("div",{className:"form-footer-horizontal-buttons",children:[Object(f.jsx)(v,{type:"button",onPress:a,isOutline:!0,children:"Back"}),Object(f.jsx)(v,{type:"submit",isDisabled:c,children:"Next"})]})})]})}})},F=function(e){var t=e.id;return Object(f.jsxs)("form",{className:"form position-absolute",id:t,children:[Object(f.jsx)("h3",{children:"Schedule a call with out education expert:"}),Object(f.jsx)("div",{className:"form-footer",children:Object(f.jsx)("div",{className:"form-footer-top-space-for-element form-footer-horizontal-buttons",children:Object(f.jsx)(v,{fullWidth:!0,type:"button",onClick:function(){window.open("https://calendly.com/monstereducation/singapore_math")},children:"Click here to schedule a call"})})})]})},T=(c(43),function(e){var t=e.userData,c=e.sendForFinishStep,a=e.goToBackStep,s=e.step,n=e.childs,i=e.addChild,r=e.removeChild,o=e.sendDataAndNext,l=e.id;return 1===s?Object(f.jsx)(A,{userData:t,sendDataAndNext:o,id:l}):2===s?Object(f.jsx)(B,{userData:t,sendDataAndNext:o,childs:n,goToBackStep:a,addChild:i,removeChild:r,id:l}):3===s?Object(f.jsx)(P,{userData:t,sendForFinishStep:c,goToBackStep:a,id:l}):4===s?Object(f.jsx)(F,{id:l}):void 0}),I=c(24),Q=c.n(I),J=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.v4({fallbackUrls:["https://ifconfig.co/ip"]});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){var t=e.id,c=Object(a.useState)(""),s=Object(m.a)(c,2),n=s[0],i=s[1],r=Object(a.useState)({}),o=Object(m.a)(r,2),l=o[0],j=o[1],p=Object(a.useState)(1),O=Object(m.a)(p,2),x=O[0],g=O[1],v=Object(a.useState)(1),N=Object(m.a)(v,2),k=N[0],y=N[1],w=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)}))));var A=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbzOh_xEOlzoL3jZ22EQM373PPr7XbI1kpi749NkJjbMd9x3JBOxd7y3vayog3tZde_VaA/exec",e.prev=1,e.next=4,fetch("".concat("https://script.google.com/macros/s/AKfycbzOh_xEOlzoL3jZ22EQM373PPr7XbI1kpi749NkJjbMd9x3JBOxd7y3vayog3tZde_VaA/exec","?").concat(t),{mode:"no-cors",method:"GET"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),u.toast.warning("Something went wrong. Try again, please");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return Object(d.a)(Object(d.a)(Object(d.a)({},l),e),{},{ip:n,type:"Math"})},M=function(e){y(k+1),A(function(e){var t=e.email,c=void 0===t?"-":t,a=e.first_name,s=void 0===a?"-":a,n=e.last_name,i=void 0===n?"-":n,r=e.phone,o=void 0===r?"-":r,l=e.message,d=void 0===l?"-":l,j=e.child_1_firt_name,b=void 0===j?"-":j,h=e.child_1_last_name,m=void 0===h?"-":h,u=e.child_1_age,p=void 0===u?"-":u,O=e.child_1_grade,x=void 0===O?"-":O,f=e.child_2_firt_name,g=void 0===f?"-":f,v=e.child_2_last_name,N=void 0===v?"-":v,k=e.child_2_age,y=void 0===k?"-":k,w=e.child_2_grade,A=void 0===w?"-":w,C=e.ip,M=void 0===C?"-":C,S=e.type;return"first_name="+s+"&last_name="+i+"&email="+c+"&phone='"+o+"&child_1_firt_name="+b+"&child_1_last_name="+m+"&child_1_age="+p+"&child_1_grade="+x+"&child_2_firt_name="+g+"&child_2_last_name="+N+"&child_2_age="+y+"&child_2_grade="+A+"&mesage="+d+"&ip="+M+"&type="+(void 0===S?"-":S)}(e))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.SmartToaster,{store:u.toast,lightBackground:!0,position:"top_right"}),Object(f.jsx)(T,{userData:l,step:k,goToNextStep:function(){return y(k+1)},goToBackStep:function(){return y(k-1)},childs:x,addChild:function(){return g(x+1)},removeChild:function(){return g(x-1)},sendDataAndNext:function(e){var t=C(e);M(t),j(t)},sendForFinishStep:function(e){M(C(e)),u.toast.success("Your data saved successfully"),j({})},id:t})]})},R=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"bg-video",children:[Object(f.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,children:[Object(f.jsx)("source",{src:r,type:"video/mp4"}),Object(f.jsx)("source",{src:r,type:"video/ogg"})]}),Object(f.jsx)("div",{className:"container bg-video__wrapper",children:Object(f.jsxs)("div",{className:"bg-video__columns",children:[Object(f.jsxs)("div",{className:"bg-video__column",children:[Object(f.jsx)("a",{href:"https://www.monstereducation.com/",className:"logo-link",children:Object(f.jsx)("img",{className:"logo",src:l,alt:"logo"})}),Object(f.jsxs)("div",{className:"title",children:[Object(f.jsx)("h1",{children:"Singapore School of Math K-5"}),Object(f.jsx)("p",{children:"Learn problem-solving and develop mathematical thinking with the esteemed Singapore Math curriculum."})]})]}),Object(f.jsx)("div",{className:"bg-video__column",children:Object(f.jsx)(U,{id:"form-header"})})]})})]}),Object(f.jsx)("div",{className:"container summer-wrapper",children:Object(f.jsx)("img",{className:"summer",src:o,alt:"action"})})]})},z=(c(62),c.p+"static/media/poster1.e1017389.jpg"),D=c.p+"static/media/poster2.7ae58942.jpg",G=c.p+"static/media/Choi-Won.6c03945b.mp4",q=c.p+"static/media/Ms-Mitchell.cf062c22.mp4",H=c(25),L=c.n(H);function W(e){document.addEventListener("scroll",(function(){e.forEach((function(e){(function(e){var t=e.getBoundingClientRect();return!(t.top>window.innerHeight||t.bottom<0)})(e)||e.paused||e.pause()}))}))}function Y(){return{handleVideoPlay:function(e){console.log(e.currentTarget),e.currentTarget.classList.add("play")},handleVideoPause:function(e){console.log(e.currentTarget),e.currentTarget.classList.remove("play")}}}var K={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},Z=function(){var e=Y(),t=e.handleVideoPlay,c=e.handleVideoPause,s=Object(a.useRef)([]);return Object(a.useEffect)((function(){W(s.current)}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{className:"title-block-2",children:"A great fit for your child, if:"}),Object(f.jsxs)("div",{className:"row block-2",children:[Object(f.jsx)("div",{className:"col-10 col-lg-6 section-1 block-2__wrapper",children:Object(f.jsxs)(L.a,Object(d.a)(Object(d.a)({beforeChange:function(e){s.current[e+1].pause()}},K),{},{children:[Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"video",onPlay:t,onPause:c,children:Object(f.jsx)("video",{ref:function(e){return s.current.push(e)},preload:"metadata",controls:"controls",playsInline:!0,poster:z,children:Object(f.jsx)("source",{src:G,type:"video/mp4"})})})}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"video",onPlay:t,onPause:c,children:Object(f.jsx)("video",{ref:function(e){return s.current.push(e)},controls:"controls",playsInline:!0,poster:D,children:Object(f.jsx)("source",{src:q,type:"video/mp4"})})})})]}))}),Object(f.jsx)("div",{className:"col-12 col-lg-6 section-2",children:Object(f.jsxs)("div",{className:"text",children:[Object(f.jsx)("p",{children:"\u2705 Your child is in grade K through 5"}),Object(f.jsx)("p",{children:"\u2705 You want your child to build a strong foundation in mathematics and problem solving; "}),Object(f.jsx)("p",{children:"\u2705 You\u2019re new to Singapore Math or are already using the curriculum;"})]})})]})]})},X=(c(78),c.p+"static/media/block-3-title.246f9dbb.svg"),V=c.p+"static/media/block3img1.af66a55d.svg",$=c.p+"static/media/block3img2.1dfbf549.svg",ee=c.p+"static/media/block3img3.c47e8c62.svg",te=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container block-3",children:[Object(f.jsx)("img",{className:"block-3-title",src:X,alt:""}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-12 col-md-4",children:[Object(f.jsx)("img",{src:V,alt:""}),Object(f.jsx)("h4",{children:"No more than 6  students per live video class"})]}),Object(f.jsxs)("div",{className:"col-12 col-md-4",children:[Object(f.jsx)("img",{src:$,alt:""}),Object(f.jsx)("h4",{children:"Accredited & experienced Singapore Math teachers"})]}),Object(f.jsxs)("div",{className:"col-12 col-md-4",children:[Object(f.jsx)("img",{src:ee,alt:""}),Object(f.jsx)("h4",{children:"An interactive & fun approach"})]})]})]})})},ce=(c(79),c.p+"static/media/math-class.a2642f74.svg"),ae=c.p+"static/media/revolutionary.e88e9b87.webp",se=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container block-4",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 block-4__card",children:Object(f.jsx)("img",{src:ce,alt:"illustration"})}),Object(f.jsxs)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 block-4__card",children:[Object(f.jsx)("h2",{className:"block-4__card-title",children:"Singapore Math Course"}),Object(f.jsxs)("p",{children:["\u2022 Live video classes of 40 minutes",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u2022 Taught by grade and ability level",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u2022 Small groups of under 6 kids",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u2022 Meeting once or twice a week for 8 weeks",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u2022 Experienced & accredited Singapore Math teachers",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u2022 Optional homework assigned for upper elementary",Object(f.jsx)("br",{})]})]})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 section-1 block-4__card",children:[Object(f.jsx)("h2",{className:"block-4__card-title",children:"Why Singapore Math?"}),Object(f.jsxs)("p",{children:["Singapore Math, first developed in Singapore, gained recognition globally for the high aptitude and math scores of their students.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"It was subsequently adopted by elite private and public schools and among homeschool parents in the United States and around the world.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"The Singapore Math framework was developed on the basis that mathematical problem solving is central to learning math.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"It helps children to acquire and learn to apply math concepts and skills in a wide range of situations, including non-routine, open-ended, and real-world problems. It builds a strong math foundation and will prepare them for the future study of Algebra."]})]}),Object(f.jsx)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 section-2 block-4__card",children:Object(f.jsx)("img",{src:ae,alt:"illustration"})})]})]})})},ne=(c(80),c.p+"static/media/block5img1.1bd5f20c.png"),ie=c.p+"static/media/block5img2.c11af5c0.png",re=function(){return Object(f.jsxs)("div",{className:"container block-5",children:[Object(f.jsxs)("h2",{className:"block-5__title",children:["The Magic of the Singapore Math",Object(f.jsx)("br",{})," Curriculum Three-Stage Learning Process:"]}),Object(f.jsxs)("div",{className:"block-5__cards",children:[Object(f.jsxs)("div",{className:"block-5__card",children:[Object(f.jsx)("div",{className:"block-5__card-image-wrapper",children:Object(f.jsx)("img",{src:ne,alt:"illustration",className:"block-5__card-image"})}),Object(f.jsx)("h4",{className:"block-5__card-title",children:"#1 CONCRETE:"}),Object(f.jsx)("p",{className:"block-5__card-text",children:"In early grades, kids learn using physical objects such as paper clips, toy blocks, etc. They learn addition or subtraction by physically lining those objects up in a row, or by removing from rows."})]}),Object(f.jsxs)("div",{className:"block-5__card",children:[Object(f.jsx)("div",{className:"block-5__card-image-wrapper",children:Object(f.jsx)("img",{src:ie,alt:"illustration",className:"block-5__card-image"})}),Object(f.jsx)("h4",{className:"block-5__card-title",children:"#2 PICTORIAL:"}),Object(f.jsx)("p",{className:"block-5__card-text",children:"Then students learn by drawing diagrams as representations of mathematical concepts like \u2018Bar model\u2019 is used to teach addition, subtraction, multiplication, division, and fractions."})]}),Object(f.jsxs)("div",{className:"block-5__card",children:[Object(f.jsx)("div",{className:"block-5__card-image-wrapper",children:Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"illustration",className:"block-5__card-image"})}),Object(f.jsx)("h4",{className:"block-5__card-title",children:"#3 ABSTRACT:"}),Object(f.jsx)("p",{className:"block-5__card-text",children:"In addition to using bar modeling and diagrams, students also  solve mathematical problems with exclusively abstract tools: numbers, symbols, and equations."})]})]})]})},oe=(c(81),c.p,c(82),c(83),function(e){var t=e.backgroundImageClass,c=e.text;return Object(f.jsx)("main",{className:"page-content ".concat(t),children:Object(f.jsx)("div",{className:"card",children:Object(f.jsx)("div",{className:"content",children:Object(f.jsx)("p",{className:"copy",children:c})})})})}),le=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container block-7",children:[Object(f.jsx)("h2",{children:"Featured Instructors and Coaches:"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-12 col-md-6 col-lg-4 block-7__card",children:[Object(f.jsx)(oe,{backgroundImageClass:"Ferguson-bio",text:"Ms. Mitchell is so fun and bubbly that no one would guess that she has been teaching for 27 years. She has taught upper elementary Singapore Math for the past 14 years and been at the same leading private school of the southeast for 24 years. Her specialty is making long division, multiple digit multiplication, fractions, and multi-step word problems seem like a piece of cake!  She holds a BS in Elementary Education from the University of Central Florida."}),Object(f.jsx)("h4",{children:"Ms. Ferguson"})]}),Object(f.jsxs)("div",{className:"col-12 col-md-6 col-lg-4 block-7__card",children:[Object(f.jsx)(oe,{backgroundImageClass:"Payne-bio",text:"Ms. Payne brings her smile and her 16 years teaching experience to every class. She has taught lower elementary grades ( K to 2nd grade) at a leading private school in Florida for the past 8 years. Ms. Payne holds a BA and MA in Education from the University of Texas at Austin. Her favorite subjects are math, reading, and science! Her dog Hattie may also make an appearance in class!"}),Object(f.jsx)("h4",{children:"Ms. Payne"})]}),Object(f.jsxs)("div",{className:"col-12 col-md-6 col-lg-4 bio block-7__card",children:[Object(f.jsx)(oe,{backgroundImageClass:"Mitchell-bio",text:"As a certified teacher of gifted and elementary education, Ms. Ferguson has been teaching for 25 years in grades 1-6 and could not imagine doing anything else. She currently teaches at a top private school. She holds a BA in Elementary Education from University of West Florida and did her graduate work in gifted education. She is very happily married and proud of her two daughters: a dental school student at Tufts University and a recent graduate from Auburn University."}),Object(f.jsx)("h4",{children:"Ms. Mitchell"})]})]})]})})},de=(c(84),c.p+"static/media/icon-money-back-guarantee.8390a1cf.svg"),je=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container block-8",children:[Object(f.jsx)("h2",{children:"Course Tuition"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("img",{className:"money-back",src:de,alt:""}),Object(f.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(f.jsxs)("div",{className:"card card-1",children:[Object(f.jsxs)("h4",{children:["Single lesson ",Object(f.jsx)("br",{})," (class size 4-6 kids)"]}),Object(f.jsx)("h3",{children:"$39.00"})]})}),Object(f.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(f.jsxs)("div",{className:"card card-2",children:[Object(f.jsxs)("h4",{children:["8 week session ",Object(f.jsx)("br",{}),"(meeting x1 weekly)"]}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{children:"$298"})]})}),Object(f.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(f.jsxs)("div",{className:"card card-3",children:[Object(f.jsx)("h4",{children:"Class duration"}),Object(f.jsx)("h3",{children:"40min"})]})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("p",{className:"block-8__info",children:"*100% Satisfaction Guaranteed: full refund for the remaining classes at the time of cancellation "})})]})]})})},be=(c(85),c.p+"static/media/Cover-1.e0521b42.jpg"),he=c.p+"static/media/Cover-2.ec97a668.jpg",me=c.p+"static/media/Cover-3.f8935d58.jpg",ue=c.p+"static/media/Quote.bcc7f25d.svg",pe=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"cover-bg",children:[Object(f.jsx)("img",{className:"quote",src:ue,alt:"Teacher"}),Object(f.jsxs)("div",{className:"container block-9",children:[Object(f.jsx)("h2",{className:"block-9__title",children:"Parent Reviews"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(f.jsxs)("div",{className:"card-feedback",children:[Object(f.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(f.jsx)("img",{src:be,alt:"Teacher"})}),Object(f.jsx)("h4",{children:"- Camille Ault, writer and mom of two, San Diego, CA "}),Object(f.jsx)("p",{children:"\u201cWe\u2019ve seen our daughter\u2019s math comprehension skyrocket! After looking into various tutoring options, Monster Education has exceeded our expectations.  Her Singapore Math teacher has done an excellent job at keeping our daughter engaged while teaching new and challenging concepts beyond what her current school offers.  The weekly zoom meetings are convenient and easy to attend.\u201c"})]})}),Object(f.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(f.jsxs)("div",{className:"card-feedback",children:[Object(f.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(f.jsx)("img",{src:he,alt:"Teacher"})}),Object(f.jsx)("h4",{children:"- Amy Choi-Won, Ph.D. Mom of five & founder of My Parenting Guru, Orange County, CA"}),Object(f.jsx)("p",{children:"\u201cI love the personal attention and the personalized education my daughter gets with Monster Education. In Singapore Math she enjoys learning with her small group of friends and extraordinary teachers. As a mom, I love getting personal feedback, seeing her progress, and having all the work done for me and curated by Monster Education.\u201c"})]})}),Object(f.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(f.jsxs)("div",{className:"card-feedback",children:[Object(f.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(f.jsx)("img",{src:me,alt:"Teacher"})}),Object(f.jsx)("h4",{children:"- Ariane Klein, mom of two, Los Angeles, CA"}),Object(f.jsx)("p",{children:"\u201cMy daughter has taken many Monster Education classes and I love that the teachers are all extremely knowledgeable and enthusiastic, groups are small and participation is seamlessly facilitated. I have been able to tailor classes to my daughter\u2019s individual needs and sign up for classes with her friends. My daughter tends to push back with extra work, but this has not at all been the case with Monster Education.\u201c"})]})})]})]})]})})},Oe=(c(86),c.p+"static/media/monster.39916992.svg"),xe=function(){return Object(f.jsx)("div",{id:"form2",className:"container block-10",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-12 col-lg-6 monster-block",children:[Object(f.jsx)("img",{src:Oe,alt:"Teacher"}),Object(f.jsx)("h2",{children:"Limited time offer"}),Object(f.jsx)("p",{children:"Contact us now and get enrollment fee waived"}),Object(f.jsx)("h3",{children:"(value $199.00)"})]}),Object(f.jsx)("div",{className:"col-12 col-lg-6",children:Object(f.jsx)(U,{id:"form-contact"})})]})})},fe=(c(87),c.p+"static/media/poster3.d74f3df9.jpg"),ge=c.p+"static/media/lapki.a78524a6.svg",ve=c.p+"static/media/Agnia.b96b4151.mp4",Ne=function(){var e=Object(a.useRef)([]),t=Y(),c=t.handleVideoPlay,s=t.handleVideoPause;return Object(a.useEffect)((function(){W(e.current)}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container block-11",children:Object(f.jsxs)("div",{className:"row block-11__row",children:[Object(f.jsx)("div",{className:"col-1 col-md-1 block-11__lapki-wrapper",children:Object(f.jsx)("img",{className:"lapki",src:ge,alt:""})}),Object(f.jsxs)("div",{className:"col-11 col-lg-5 block-11__text-wrapper",children:[Object(f.jsx)("p",{className:"block-11__text",children:Object(f.jsx)("span",{className:"block-11__text-inner",children:"\u201cIt\u2019s the teacher that makes a whole world of difference to a student....not the textbook, worksheet, or the instructional video. Having studied with extraordinary professors and lectured at leading universities, I put a lot of stock in teachers who I personally handpick for Monster Education looking for inspired and inspiring individuals. Fortunately, technology eliminates the distance between the teacher and the students.\u201d"})}),Object(f.jsx)("p",{className:"dark-primery block-11__name",children:"Dr. Agnia Grigas"}),Object(f.jsx)("p",{className:"block-11__prof",children:"Founder of Monster Education"})]}),Object(f.jsx)("div",{className:"col-12 col-lg-6 block-11__video-wrapper",children:Object(f.jsx)("div",{className:"video",onPlay:c,onPause:s,children:Object(f.jsx)("video",{ref:function(t){return e.current.push(t)},controls:"controls",poster:fe,playsInline:!0,children:Object(f.jsx)("source",{src:ve,type:"video/mp4"})})})})]})})})},ke=(c(88),c.p+"static/media/Instagram.8d65deaf.svg"),ye=c.p+"static/media/facebook.ada6c486.svg",we=c.p+"static/media/pinterest.6559e25f.svg",Ae=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container footer",children:[Object(f.jsx)("hr",{align:"left",width:"100%",color:"#A5ABB2"}),Object(f.jsxs)("div",{className:"row justify-content-between",children:[Object(f.jsx)("div",{className:"col-12 col-md-2",children:Object(f.jsx)("a",{href:"https://www.monstereducation.com/",children:Object(f.jsx)("img",{className:"logo",src:l,alt:"logo"})})}),Object(f.jsx)("div",{className:"col-12 col-md-7 text",children:Object(f.jsx)("small",{children:"\xa9 2021 Monster Education. All rights reserved."})}),Object(f.jsxs)("div",{className:"col-12 col-md-3 social",children:[Object(f.jsx)("a",{href:"https://www.instagram.com/themonstereducation/",children:Object(f.jsx)("img",{src:ke,alt:"instagram"})}),Object(f.jsx)("a",{href:"https://www.facebook.com/themonstereducation",children:Object(f.jsx)("img",{src:ye,alt:"facebook"})}),Object(f.jsx)("a",{href:"https://www.pinterest.com/MonsterEducation/_created/",children:Object(f.jsx)("img",{src:we,alt:"pinterest"})})]})]})]})})},Ce=(c(89),function(e){var t=e.text;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container ButtonApply",children:Object(f.jsx)("div",{className:"ButtonApply__wrapper",children:Object(f.jsx)("div",{className:"col-12 col-md-8 col-lg-6",children:Object(f.jsx)("a",{href:"#form2",children:Object(f.jsx)("button",{children:t})})})})})})});c(90),c(91),c(92);var Me=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(R,{}),Object(f.jsx)(Z,{}),Object(f.jsx)(te,{}),Object(f.jsx)(se,{}),Object(f.jsx)(Ce,{text:"Apply Now"}),Object(f.jsx)(re,{}),Object(f.jsx)(le,{}),Object(f.jsx)(je,{}),Object(f.jsx)(pe,{}),Object(f.jsx)(xe,{}),Object(f.jsx)(Ne,{}),Object(f.jsx)(Ae,{})]})},Se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};c(93),c(94),c(95),c(96),c(97);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Me,{})}),document.getElementById("root")),Se()}},[[98,1,2]]]);
//# sourceMappingURL=main.182c618d.chunk.js.map