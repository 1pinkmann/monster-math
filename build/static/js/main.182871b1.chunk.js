(this["webpackJsonpmonster-education"]=this["webpackJsonpmonster-education"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(24),i=a.n(n),r=(a(34),a.p+"static/media/header.40221f85.mp4"),o=a.p+"static/media/logo.2bb70392.svg",l=a(4),d=a(6),j=a.n(d),u=a(10),h=a(14),m=a(13),b=a(25),p=a(11),x=a(16),f=a(15),O=(a(37),a(38),a(0)),v=function(e){var t=e.meta,a=Object(x.a)(e,["meta"]),c="atom-input";return t.error&&t.touched&&(c+=" atom-input__invalid"),"tel"===a.input.type?Object(O.jsx)(f.a,Object(l.a)(Object(l.a)(Object(l.a)({international:!0,defaultCountry:"US"},a),a.input),{},{className:c})):Object(O.jsx)("input",Object(l.a)(Object(l.a)(Object(l.a)({},a),a.input),{},{className:c}))},g=(a(44),function(e){var t=e.isDisabled,a=e.children,c=e.onPress,s=e.isOutline,n=e.fullWidth,i=Object(x.a)(e,["isDisabled","children","onPress","isOutline","fullWidth"]),r="atom-button";return r+=t?" atom-button__disable":s?" atom-button__outline":" atom-button__active",n&&(r+=" atom-button__full-width"),Object(O.jsx)("button",Object(l.a)(Object(l.a)({onClick:function(e){!t&&c&&c(e)}},i),{},{className:r,children:a}))}),_=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce((function(t,a){return t||a(e)}),void 0)}},y=function(e){return e||"number"===typeof e?void 0:"Required"},N=function(e){return e&&!/.+@.+\..+/i.test(e)?"Invalid email address":void 0},w=function(e){return e&&Object(f.b)(e)?void 0:"Invalid phone number"},k=function(e){var t=e.userData,a=e.sendDataAndNext,c=e.id;return Object(O.jsx)(p.b,{onSubmit:a,initialValues:t,render:function(e){var t=e.handleSubmit,a=e.invalid;return Object(O.jsxs)("form",{className:"form position-absolute",id:c,onSubmit:t,children:[Object(O.jsx)("h3",{children:"Contact Us to Apply"}),Object(O.jsx)(p.a,{name:"first_name",placeholder:"First Name",type:"text",component:v,validate:y}),Object(O.jsx)(p.a,{name:"last_name",placeholder:"Last Name",type:"text",component:v,validate:y}),Object(O.jsx)(p.a,{name:"email",placeholder:"Email",type:"text",component:v,validate:_(y,N)}),Object(O.jsx)(p.a,{name:"phone",placeholder:"Phone",type:"tel",component:v,validate:_(y,w),autoComplete:"nope"}),Object(O.jsx)("div",{className:"form-footer",children:Object(O.jsx)("div",{className:"flex-end",children:Object(O.jsx)(g,{type:"submit",isDisabled:a,children:"Next"})})})]})}})},S=(a(45),function(e){var t=e.userData,a=(e.sendForFinishStep,e.goToBackStep,e.step),c=(e.childs,e.addChild,e.removeChild,e.sendDataAndNext),s=e.id;return 1===a?Object(O.jsx)(k,{userData:t,sendDataAndNext:c,id:s}):2===a?Object(O.jsx)(b.a,{url:"https://calendly.com/monstereducation/singapore_math"}):void 0}),M=a(27),A=a.n(M),P=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.v4({fallbackUrls:["https://ifconfig.co/ip"]});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.id,a=Object(c.useState)(""),s=Object(h.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)({}),o=Object(h.a)(r,2),d=o[0],b=o[1],p=Object(c.useState)(1),x=Object(h.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(1),_=Object(h.a)(g,2),y=_[0],N=_[1],w=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)}))));var k=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://script.google.com/macros/s/AKfycbzOh_xEOlzoL3jZ22EQM373PPr7XbI1kpi749NkJjbMd9x3JBOxd7y3vayog3tZde_VaA/exec",e.prev=1,e.next=4,fetch("".concat("https://script.google.com/macros/s/AKfycbzOh_xEOlzoL3jZ22EQM373PPr7XbI1kpi749NkJjbMd9x3JBOxd7y3vayog3tZde_VaA/exec","?").concat(t),{mode:"no-cors",method:"GET"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),m.toast.warning("Something went wrong. Try again, please");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){return Object(l.a)(Object(l.a)(Object(l.a)({},d),e),{},{ip:n,type:"Math"})},A=function(e){N(y+1),k(function(e){var t=e.email,a=void 0===t?"-":t,c=e.first_name,s=void 0===c?"-":c,n=e.last_name,i=void 0===n?"-":n,r=e.phone,o=void 0===r?"-":r,l=e.message,d=void 0===l?"-":l,j=e.child_1_firt_name,u=void 0===j?"-":j,h=e.child_1_last_name,m=void 0===h?"-":h,b=e.child_1_age,p=void 0===b?"-":b,x=e.child_1_grade,f=void 0===x?"-":x,O=e.child_2_firt_name,v=void 0===O?"-":O,g=e.child_2_last_name,_=void 0===g?"-":g,y=e.child_2_age,N=void 0===y?"-":y,w=e.child_2_grade,k=void 0===w?"-":w,S=e.ip,M=void 0===S?"-":S,A=e.type;return"first_name="+s+"&last_name="+i+"&email="+a+"&phone='"+o+"&child_1_firt_name="+u+"&child_1_last_name="+m+"&child_1_age="+p+"&child_1_grade="+f+"&child_2_firt_name="+v+"&child_2_last_name="+_+"&child_2_age="+N+"&child_2_grade="+k+"&mesage="+d+"&ip="+M+"&type="+(void 0===A?"-":A)}(e))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.SmartToaster,{store:m.toast,lightBackground:!0,position:"top_right"}),Object(O.jsx)(S,{userData:d,step:y,goToNextStep:function(){return N(y+1)},goToBackStep:function(){return N(y-1)},childs:f,addChild:function(){return v(f+1)},removeChild:function(){return v(f-1)},sendDataAndNext:function(e){var t=M(e);A(t),b(t),window.dataLayer.push({event:"gtm.formSubmit"})},sendForFinishStep:function(e){A(M(e)),m.toast.success("Your data saved successfully"),b({})},id:t})]})},C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"bg-video",children:[Object(O.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,children:[Object(O.jsx)("source",{src:r,type:"video/mp4"}),Object(O.jsx)("source",{src:r,type:"video/ogg"})]}),Object(O.jsx)("div",{className:"container bg-video__wrapper",children:Object(O.jsxs)("div",{className:"bg-video__columns",children:[Object(O.jsxs)("div",{className:"bg-video__column",children:[Object(O.jsx)("a",{href:"https://www.monstereducation.com/",className:"logo-link",children:Object(O.jsx)("img",{className:"logo",src:o,alt:"logo"})}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h1",{children:"Singapore School of Math K-5"}),Object(O.jsx)("p",{children:"Learn problem-solving and develop mathematical thinking with the esteemed Singapore Math curriculum."})]})]}),Object(O.jsx)("div",{className:"bg-video__column",children:Object(O.jsx)(E,{id:"form-header"})})]})})]})})},F=(a(64),a.p+"static/media/poster1.e1017389.jpg"),T=a.p+"static/media/poster2.7ae58942.jpg",I=a.p+"static/media/Choi-Won.6c03945b.mp4",D=a.p+"static/media/Ms-Mitchell.cf062c22.mp4",B=a(28),L=a.n(B);function V(e){document.addEventListener("scroll",(function(){e.forEach((function(e){(function(e){var t=e.getBoundingClientRect();return!(t.top>window.innerHeight||t.bottom<0)})(e)||e.paused||e.pause()}))}))}function U(){return{handleVideoPlay:function(e){console.log(e.currentTarget),e.currentTarget.classList.add("play")},handleVideoPause:function(e){console.log(e.currentTarget),e.currentTarget.classList.remove("play")}}}var H={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},z=function(){var e=U(),t=e.handleVideoPlay,a=e.handleVideoPause,s=Object(c.useRef)([]);return Object(c.useEffect)((function(){V(s.current)}),[]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{className:"title-video-section",children:"A great fit for your child, if:"}),Object(O.jsxs)("div",{className:"row video-section",children:[Object(O.jsx)("div",{className:"col-10 col-lg-6 section-1 video-section__wrapper",children:Object(O.jsxs)(L.a,Object(l.a)(Object(l.a)({beforeChange:function(e){s.current[e+1].pause()}},H),{},{children:[Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"video",onPlay:t,onPause:a,children:Object(O.jsx)("video",{ref:function(e){return s.current.push(e)},preload:"metadata",controls:"controls",playsInline:!0,poster:F,children:Object(O.jsx)("source",{src:I,type:"video/mp4"})})})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"video",onPlay:t,onPause:a,children:Object(O.jsx)("video",{ref:function(e){return s.current.push(e)},controls:"controls",playsInline:!0,poster:T,children:Object(O.jsx)("source",{src:D,type:"video/mp4"})})})})]}))}),Object(O.jsx)("div",{className:"col-12 col-lg-6 section-2",children:Object(O.jsxs)("div",{className:"text",children:[Object(O.jsx)("p",{children:"\u2705 You seek personalized small group learning (up to 6 students per class)"}),Object(O.jsx)("p",{children:"\u2705 Your child is in grade K through 5"}),Object(O.jsx)("p",{children:"\u2705 You want your child to build a strong foundation in mathematics and problem solving"}),Object(O.jsx)("p",{children:"\u2705 You\u2019re new to Singapore Math or are already using the curriculum"})]})})]})]})},W=(a(80),a.p+"static/media/icon-money-back-guarantee.8390a1cf.svg"),J=a.p+"static/media/sun.569fedd1.svg",K=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container tuition",children:[Object(O.jsx)("h2",{children:"Course Tuition"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("img",{className:"money-back",src:W,alt:""}),Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(O.jsxs)("div",{className:"card card-1",children:[Object(O.jsxs)("h4",{children:["Single lesson ",Object(O.jsx)("br",{})," (up to 6 kids per class)"]}),Object(O.jsx)("h3",{children:"$39.00"})]})}),Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(O.jsxs)("div",{className:"card card-2",children:[Object(O.jsx)("img",{src:J,className:"card-2__icon"}),Object(O.jsxs)("h4",{children:["Average course length ",Object(O.jsx)("br",{}),"(meeting once or twice a week)"]}),Object(O.jsx)("h3",{children:"8 to 12 weeks"})]})}),Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(O.jsxs)("div",{className:"card card-3",children:[Object(O.jsxs)("h4",{children:["Live online ",Object(O.jsx)("br",{})," class duration"]}),Object(O.jsx)("h3",{children:"40min"})]})}),Object(O.jsx)("div",{className:"col-12",children:Object(O.jsx)("p",{className:"tuition__info",children:"*100% Satisfaction Guaranteed: full refund for the remaining classes at the time of cancellation "})})]})]})})},R=(a(81),a.p+"static/media/inside-class-1.cf062c22.mp4"),Y=a.p+"static/media/inside-class-2.ab49757e.mp4";function q(){var e=U(),t=e.handleVideoPlay,a=e.handleVideoPause,s=Object(c.useRef)([]);return Object(c.useEffect)((function(){V(s.current)}),[]),Object(O.jsxs)("div",{className:"inside-class container",children:[Object(O.jsx)("h2",{className:"inside-class__title",children:"Inside the Class"}),Object(O.jsxs)("div",{className:"inside-class__videos",children:[Object(O.jsx)("div",{className:"video inside-class__video",onPlay:t,onPause:a,children:Object(O.jsx)("video",{ref:function(e){return s.current.push(e)},preload:"metadata",controls:"controls",playsInline:!0,children:Object(O.jsx)("source",{src:R,type:"video/mp4"})})}),Object(O.jsx)("div",{className:"video inside-class__video",onPlay:t,onPause:a,children:Object(O.jsx)("video",{ref:function(e){return s.current.push(e)},preload:"metadata",controls:"controls",playsInline:!0,children:Object(O.jsx)("source",{src:Y,type:"video/mp4"})})})]})]})}a(82);var G=a.p+"static/media/revolutionary.e88e9b87.webp",Z=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container about",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 section-1 about__card",children:[Object(O.jsx)("h2",{className:"about__card-title",children:"Why Singapore Math?"}),Object(O.jsxs)("p",{children:["Singapore Math, first developed in Singapore, gained recognition globally for the high aptitude and math scores of their students.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"It was subsequently adopted by elite private and public schools and among homeschool parents in the United States and around the world.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"The Singapore Math framework was developed on the basis that mathematical problem solving is central to learning math.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"It helps children to acquire and learn to apply math concepts and skills in a wide range of situations, including non-routine, open-ended, and real-world problems. It builds a strong math foundation and will prepare them for the future study of Algebra."]})]}),Object(O.jsx)("div",{className:"col-10 offset-1 offset-md-0 col-md-6 section-2 about__card",children:Object(O.jsx)("img",{src:G,alt:"illustration"})})]})})})},Q=(a(83),a(84),function(e){var t=e.image,a=e.text,c=e.title,s={backgroundImage:"url(".concat(t,")")};return Object(O.jsxs)("main",{className:"card-teacher",children:[Object(O.jsx)("div",{className:"card-teacher__image-wrapper",style:s}),Object(O.jsx)("h4",{className:"card-teacher__name",children:c}),Object(O.jsx)("div",{className:"card-teacher__content",children:Object(O.jsx)("p",{className:"copy",children:a})})]})}),X=a.p+"static/media/Ferguson.042e99ef.jpg",$=a.p+"static/media/Payne.3eebd754.jpg",ee=a.p+"static/media/Mitchell.6467a803.jpg",te=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container block-7",children:[Object(O.jsx)("h2",{children:"Featured Singapore Math Teachers"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4 block-7__card",children:Object(O.jsx)(Q,{image:X,text:"As a certified teacher of gifted and elementary education, Ms. Ferguson has been teaching for 25 years in grades 1-6 and could not imagine doing anything else. She currently teaches at a top private school. She holds a BA in Elementary Education from University of West Florida and did her graduate work in gifted education. She is very happily married and proud of her two daughters: a dental school student at Tufts University and a recent graduate from Auburn University.",title:"Ms. Ferguson"})}),Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4 block-7__card",children:Object(O.jsx)(Q,{image:$,text:"Ms. Payne brings her smile and her 16 years teaching experience to every class. She has taught lower elementary grades ( K to 2nd grade) at a leading private school in Florida for the past 8 years. Ms. Payne holds a BA and MA in Education from the University of Texas at Austin. Her favorite subjects are math, reading, and science! Her dog Hattie may also make an appearance in class!",title:"Ms. Payne"})}),Object(O.jsx)("div",{className:"col-12 col-md-6 col-lg-4 bio block-7__card",children:Object(O.jsx)(Q,{image:ee,text:"Ms. Mitchell is so fun and bubbly that no one would guess that she has been teaching for 27 years. She has taught upper elementary Singapore Math for the past 14 years and been at the same leading private school of the southeast for 24 years. Her specialty is making long division, multiple digit multiplication, fractions, and multi-step word problems seem like a piece of cake!  She holds a BS in Elementary Education from the University of Central Florida.",title:"Ms. Mitchell"})})]})]})})},ae=(a(85),a.p+"static/media/Cover-1.e0521b42.jpg"),ce=a.p+"static/media/Cover-2.ec97a668.jpg",se=a.p+"static/media/Cover-3.f8935d58.jpg",ne=a.p+"static/media/Quote.bcc7f25d.svg",ie=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"cover-bg",children:[Object(O.jsx)("img",{className:"quote",src:ne,alt:"Teacher"}),Object(O.jsxs)("div",{className:"container reviews",children:[Object(O.jsx)("h2",{className:"reviews__title",children:"Parent Reviews"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(O.jsxs)("div",{className:"card-feedback",children:[Object(O.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(O.jsx)("img",{src:ae,alt:"Teacher"})}),Object(O.jsx)("h4",{children:"- Camille Ault, writer and mom of two, San Diego, CA "}),Object(O.jsx)("p",{children:"\u201cWe\u2019ve seen our daughter\u2019s math comprehension skyrocket! After looking into various tutoring options, Monster Education has exceeded our expectations.  Her Singapore Math teacher has done an excellent job at keeping our daughter engaged while teaching new and challenging concepts beyond what her current school offers.  The weekly zoom meetings are convenient and easy to attend.\u201c"})]})}),Object(O.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(O.jsxs)("div",{className:"card-feedback",children:[Object(O.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(O.jsx)("img",{src:ce,alt:"Teacher"})}),Object(O.jsx)("h4",{children:"- Amy Choi-Won, Ph.D. Mom of five & founder of My Parenting Guru, Orange County, CA"}),Object(O.jsx)("p",{children:"\u201cI love the personal attention and the personalized education my daughter gets with Monster Education. In Singapore Math she enjoys learning with her small group of friends and extraordinary teachers. As a mom, I love getting personal feedback, seeing her progress, and having all the work done for me and curated by Monster Education.\u201c"})]})}),Object(O.jsx)("div",{className:"col-12 col-lg-4 ",children:Object(O.jsxs)("div",{className:"card-feedback",children:[Object(O.jsx)("div",{className:"card-feedback__image-wrapper",children:Object(O.jsx)("img",{src:se,alt:"Teacher"})}),Object(O.jsx)("h4",{children:"- Ariane Klein, mom of two, Los Angeles, CA"}),Object(O.jsx)("p",{children:"\u201cMy daughter has taken many Monster Education classes and I love that the teachers are all extremely knowledgeable and enthusiastic, groups are small and participation is seamlessly facilitated. I have been able to tailor classes to my daughter\u2019s individual needs and sign up for classes with her friends. My daughter tends to push back with extra work, but this has not at all been the case with Monster Education.\u201c"})]})})]})]})]})})},re=(a(86),a.p+"static/media/monster.39916992.svg"),oe=a(9);a(89);function le(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return Object(O.jsxs)("div",{className:"timer",children:[Object(O.jsxs)("div",{className:"timer__column",children:[Object(O.jsx)("input",{type:"text",readOnly:!0,className:"timer__input",value:Object(oe.b)(t,2)}),Object(O.jsx)("div",{className:"timer__text",children:"Days"})]}),Object(O.jsxs)("div",{className:"timer__column",children:[Object(O.jsx)("input",{type:"text",readOnly:!0,className:"timer__input",value:Object(oe.b)(a,2)}),Object(O.jsx)("div",{className:"timer__text",children:"Hours"})]}),Object(O.jsxs)("div",{className:"timer__column",children:[Object(O.jsx)("input",{type:"text",readOnly:!0,className:"timer__input",value:Object(oe.b)(c,2)}),Object(O.jsx)("div",{className:"timer__text",children:"Minutes"})]}),Object(O.jsxs)("div",{className:"timer__column",children:[Object(O.jsx)("input",{type:"text",readOnly:!0,className:"timer__input",value:Object(oe.b)(s,2)}),Object(O.jsx)("div",{className:"timer__text",children:"Seconds"})]})]})}var de=function(){return Object(O.jsx)("div",{id:"form2",className:"container contact",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-12 col-lg-6 monster-block",children:[Object(O.jsx)("img",{className:"monster-block__image",src:re,alt:"Teacher"}),Object(O.jsx)("p",{children:"Contact us now for a complimentary consultation with our education expert"}),Object(O.jsx)("h2",{children:"Limited Time Offer Ends in:"}),Object(O.jsx)(oe.a,{date:new Date("2021-05-10T03:24:00"),renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return Object(O.jsx)(le,{days:t,hours:a,minutes:c,seconds:s})}})]}),Object(O.jsx)("div",{className:"col-12 col-lg-6",children:Object(O.jsx)(E,{id:"form-contact"})})]})})},je=(a(90),a.p+"static/media/poster3.d74f3df9.jpg"),ue=a.p+"static/media/lapki.a78524a6.svg",he=a.p+"static/media/Agnia.b96b4151.mp4",me=function(){var e=Object(c.useRef)([]),t=U(),a=t.handleVideoPlay,s=t.handleVideoPause;return Object(c.useEffect)((function(){V(e.current)}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container founder",children:Object(O.jsxs)("div",{className:"row founder__row",children:[Object(O.jsx)("div",{className:"col-1 col-md-1 founder__lapki-wrapper",children:Object(O.jsx)("img",{className:"lapki",src:ue,alt:""})}),Object(O.jsxs)("div",{className:"col-11 col-lg-5 founder__text-wrapper",children:[Object(O.jsx)("p",{className:"founder__text",children:Object(O.jsx)("span",{className:"founder__text-inner",children:"It\u2019s the teacher that makes a whole world of difference to a student....not the textbook, worksheet, or the instructional video. Having studied with extraordinary professors and lectured at leading universities, I put a lot of stock in teachers who I personally handpick for Monster Education looking for inspired and inspiring individuals. Fortunately, technology eliminates the distance between the teacher and the students."})}),Object(O.jsx)("p",{className:"dark-primery founder__name",children:"Dr. Agnia Grigas"}),Object(O.jsx)("p",{className:"founder__prof",children:"Founder of Monster Education"})]}),Object(O.jsx)("div",{className:"col-12 col-lg-6 founder__video-wrapper",children:Object(O.jsx)("div",{className:"video",onPlay:a,onPause:s,children:Object(O.jsx)("video",{ref:function(t){return e.current.push(t)},controls:"controls",poster:je,playsInline:!0,children:Object(O.jsx)("source",{src:he,type:"video/mp4"})})})})]})})})},be=(a(91),a.p+"static/media/Instagram.8d65deaf.svg"),pe=a.p+"static/media/facebook.ada6c486.svg",xe=a.p+"static/media/pinterest.6559e25f.svg",fe=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container footer",children:[Object(O.jsx)("hr",{align:"left",width:"100%",color:"#A5ABB2"}),Object(O.jsxs)("div",{className:"row justify-content-between",children:[Object(O.jsx)("div",{className:"col-12 col-md-2",children:Object(O.jsx)("a",{href:"https://www.monstereducation.com/",children:Object(O.jsx)("img",{className:"logo",src:o,alt:"logo"})})}),Object(O.jsx)("div",{className:"col-12 col-md-7 text",children:Object(O.jsx)("small",{children:"\xa9 2021 Monster Education. All rights reserved."})}),Object(O.jsxs)("div",{className:"col-12 col-md-3 social",children:[Object(O.jsx)("a",{href:"https://www.instagram.com/themonstereducation/",children:Object(O.jsx)("img",{src:be,alt:"instagram"})}),Object(O.jsx)("a",{href:"https://www.facebook.com/themonstereducation",children:Object(O.jsx)("img",{src:pe,alt:"facebook"})}),Object(O.jsx)("a",{href:"https://www.pinterest.com/MonsterEducation/_created/",children:Object(O.jsx)("img",{src:xe,alt:"pinterest"})})]})]})]})})},Oe=(a(92),function(e){var t=e.text;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container ButtonApply",children:Object(O.jsx)("div",{className:"ButtonApply__wrapper",children:Object(O.jsx)("div",{className:"col-12 col-md-8 col-lg-6",children:Object(O.jsx)("a",{href:"#form2",children:Object(O.jsx)("button",{children:t})})})})})})});a(93),a(94),a(95);var ve=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(C,{}),Object(O.jsx)(z,{}),Object(O.jsx)(K,{}),Object(O.jsx)(te,{}),Object(O.jsx)(q,{}),Object(O.jsx)(Oe,{text:"Apply Now"}),Object(O.jsx)(Z,{}),Object(O.jsx)(ie,{}),Object(O.jsx)(de,{}),Object(O.jsx)(me,{}),Object(O.jsx)(fe,{})]})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};a(96),a(97),a(98),a(99),a(100);i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(ve,{})}),document.getElementById("root")),ge()},34:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.182871b1.chunk.js.map