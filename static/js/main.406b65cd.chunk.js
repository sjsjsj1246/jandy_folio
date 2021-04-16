(this["webpackJsonpjandy-folio"]=this["webpackJsonpjandy-folio"]||[]).push([[0],{49:function(t,e,n){},50:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var i,c,a,r=n(0),l=n.n(r),o=n(19),s=n.n(o),d=(n(49),n(50),n(5)),b=n(33),p=n(4),m=n(82),f=n(81),u=n(64),h=n(2),g=Object(p.a)(i||(i=Object(d.a)(["\n  background-color: #403a3a;\n  color: white;\n  height: 5vh;\n"]))),j=Object(p.a)(c||(c=Object(d.a)(["\n  width: 100%;\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n"]))),O=Object(u.a)({indicator:{backgroundColor:"#403a3a"}})((function(t){var e=t.classes,n=t.homeRef,i=t.aboutRef,c=t.portfolioRef,a=t.contactRef,l=Object(r.useState)(0),o=Object(b.a)(l,2),s=o[0],d=o[1],p=function(){var t,e,r,l,o=window.pageYOffset,s=o+((null===n||void 0===n||null===(t=n.current)||void 0===t?void 0:t.getBoundingClientRect().top)||0),b=o+((null===i||void 0===i||null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().top)||0),p=o+((null===c||void 0===c||null===(r=c.current)||void 0===r?void 0:r.getBoundingClientRect().top)||0),m=o+((null===a||void 0===a||null===(l=a.current)||void 0===l?void 0:l.getBoundingClientRect().top)||0);o>=s&&d(0),o>=b-50&&d(1),o>=p-50&&d(2),o>=m-50&&d(3)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[]),Object(h.b)(m.a,{value:s,onChange:function(t,e){d(e)},textColor:"inherit",variant:"standard","aria-label":"nav tabs",css:[g,s&&j],classes:{indicator:e.indicator},children:[Object(h.a)(f.a,{label:"HOME",onClick:function(){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.scrollIntoView()}}),Object(h.a)(f.a,{label:"ABOUT",onClick:function(){var t;null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollIntoView()}}),Object(h.a)(f.a,{label:"PORTFOLIO",onClick:function(){var t;null===c||void 0===c||null===(t=c.current)||void 0===t||t.scrollIntoView()}}),Object(h.a)(f.a,{label:"CONTACT",onClick:function(){var t;null===a||void 0===a||null===(t=a.current)||void 0===t||t.scrollIntoView()}})]})})),x=(n(58),n(59),function(t){var e=t.title,n=t.imgUrl;return Object(h.b)("div",{id:"Home",css:C,children:[Object(h.a)("h1",{children:e}),Object(h.a)("img",{src:n,alt:""})]})});x.defaultProps={title:"\uc138\uc0c1\uc5d0 \uac00\uce58\ub97c \ub354\ud558\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",imgUrl:"https://i.postimg.cc/KvscQh2j/coding-924920-1920.jpg"};var v,k,w,y,R,C=Object(p.a)(a||(a=Object(d.a)(["\n  width: 100%;\n  height: 95vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  img {\n    min-width: 100%;\n    width: auto;\n    min-height: 100%;\n    height: auto;\n    position: fixed;\n    top: 0%;\n    left: 0%;\n    z-index: -1;\n  }\n  h1 {\n    width: 94%;\n    margin: 0;\n    font-size: 6rem;\n    letter-spacing: 0.5rem;\n    color: #f6f5ff;\n    text-shadow: 1px 1px 2px #53565c;\n    position: absolute;\n    left: 4%;\n    top: 55%;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]))),L=x,U=function(t){var e=t.title,n=t.size,i=t.color,c=t.className;return Object(h.b)("div",{css:[E,_[n],Object(p.a)(v||(v=Object(d.a)(["\n          h2 {\n            color: ",";\n          }\n          hr {\n            background-color: ",";\n          }\n        "])),i,i)],className:c,children:[Object(h.a)("h2",{children:e}),Object(h.a)("hr",{})]})};U.defaultProps={size:"medium",color:"black"};var N,T,B,z,E=Object(p.a)(k||(k=Object(d.a)(["\n  h2 {\n    text-align: center;\n    margin: 0;\n  }\n  hr {\n    margin-top: 0.2rem;\n    margin-bottom: 2rem;\n    width: 70%;\n    height: 3px;\n    border: 0px;\n    background-color: black;\n  }\n"]))),_={small:Object(p.a)(w||(w=Object(d.a)(["\n    font-size: 1.5rem;\n  "]))),medium:Object(p.a)(y||(y=Object(d.a)(["\n    font-size: 1.5rem;\n  "]))),big:Object(p.a)(R||(R=Object(d.a)(["\n    font-size: 2rem;\n  "])))},A=U,S=n(22),D=function(t){var e=t.title,n=t.size,i=(t.backgroundColor,t.imgUrl),c=t.description,a=t.disableDes;return Object(h.b)("div",{css:[V,J[n]],children:[Object(h.a)(Q,{src:i,alt:e,css:J[n]}),!a&&Object(h.b)(K,{css:J[n],children:[Object(h.a)("h3",{children:e}),Object(h.a)("p",{children:c})]})]})};D.defaultProps={title:"",size:"medium",backgroundColor:"#B5B5B5",disableDes:!1};var Y,G,I,M,P,V=Object(p.a)(N||(N=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 50px 30px 0;\n  :last-child {\n    margin: 0;\n  }\n"]))),J={small:Object(p.a)(T||(T=Object(d.a)(["\n    width: 70px;\n    height: 70px;\n  "]))),medium:Object(p.a)(B||(B=Object(d.a)(["\n    width: 100px;\n    height: 100px;\n    h3 {\n      font-size: 1rem;\n    }\n    p {\n      font-size: 1rem;\n    }\n  "]))),big:Object(p.a)(z||(z=Object(d.a)(["\n    width: 130px;\n    height: 130px;\n  "])))},Q=S.a.img({borderRadius:"10%",objectFit:"fill",boxShadow:"3px 3px 10px 0px rgba(0, 0, 0, 0.75)",flexShrink:0}),K=S.a.div({borderRadius:"10%",color:"white",backgroundColor:"black",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",transform:"translateY(-100px)",opacity:"0",transition:"all 0.3s ease",h3:{margin:"1rem 0 "},p:{marginBottom:"1rem"},":hover":{opacity:"0.85"}}),F=D,q=Object(p.a)(Y||(Y=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  padding-bottom: 3rem;\n  width: 100%;\n  .aboutMe {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f5f5f5;\n    .aboutTitle {\n      margin: 8rem 5rem 8rem 0;\n    }\n  }\n  .skills {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .skillsTitle {\n      margin-top: 5rem;\n      width: fit-content;\n    }\n    .skillGrid {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .skillList {\n      width: 100%;\n    }\n    .skill {\n      width: fit-content;\n      display: flex;\n    }\n  }\n"]))),H=function(){var t=Object(r.useState)([{title:"Language",stack:[{title:"JavaScript",des:"familiar",imgURL:"https://i.postimg.cc/3w2Pk3wy/image.png"},{title:"TypeScript",des:"tried",imgURL:"https://i.postimg.cc/nVPBpbGf/typescript.png"},{title:"C++",des:"familiar",imgURL:"https://i.postimg.cc/Tw7yHfjp/Cplusplus.jpg"},{title:"Java",des:"tried",imgURL:"https://i.postimg.cc/7bvZp65Y/java.webp"},{title:"Python",des:"tried",imgURL:"https://i.postimg.cc/25jhHcp9/python.png"}]},{title:"Font End",stack:[{title:"React",des:"familiar",imgURL:"https://i.postimg.cc/B6TbZg7D/1-mr-OXGy-Ia3-Bl-PK80pe-Lm-Eb-A.png"},{title:"React-Naitive",des:"tried",imgURL:"https://i.postimg.cc/NLq5QnB1/React-js-logo-512.png"},{title:"Emotion",des:"familiar",imgURL:"https://i.postimg.cc/0N21KCND/emotion.png"},{title:"Gatsby",des:"tried",imgURL:"https://i.postimg.cc/1Rpmvnv6/image.png"}]},{title:"Back End",stack:[{title:"Node",des:"tried",imgURL:"https://i.postimg.cc/QtJGyjGL/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f.png"},{title:"Express",des:"tried",imgURL:"https://i.postimg.cc/xT08Kr6h/Express.png"},{title:"Koa",des:"tried",imgURL:"https://i.postimg.cc/CxxxXW18/koa.png"}]},{title:"ETC",stack:[{title:"git",des:"familiar",imgURL:"https://i.postimg.cc/tgM6L2Zz/git-thumnail.png"},{title:"Unity",des:"tried",imgURL:"https://i.postimg.cc/MTV0jk9X/2.png"},{title:"StoryBook",des:"tried",imgURL:"https://i.postimg.cc/brb10kv9/storybook.png"},{title:"Algorithm",des:"familiar",imgURL:"https://i.postimg.cc/MGZ7h8Lk/neural.png"},{title:"DataScience",des:"tried",imgURL:"https://i.postimg.cc/8CWwLr51/deep-learning-1.png"}]}]),e=Object(b.a)(t,2),n=e[0];e[1];return Object(h.b)("div",{id:"About",css:q,children:[Object(h.b)("div",{className:"aboutMe",children:[Object(h.a)(A,{title:"About Me",className:"aboutTitle"}),Object(h.b)("div",{className:"description",children:[Object(h.a)("h3",{children:"\uc131\uc7a5\ud558\ub294 \uac1c\ubc1c\uc790"}),Object(h.b)("p",{children:["\uc548\ub155\ud558\uc138\uc694, \uc11c\uc6b8 \uacfc\ud559 \uae30\uc220\ub300\uc5d0 \uc7ac\ud559\ud558\uace0 \uc788\uace0 \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c \uc77c\ud558\uace0 \uc788\ub294 \ud669\uc778\uc11c\uc785\ub2c8\ub2e4. ",Object(h.a)("br",{})," \uc0ac\ud68c\uac00 \ud544\uc694\ub85c \ud558\ub294 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uae30 \uc704\ud574 \ub9e4\uc77c \ub354 \ub098\uc740 \uae30\uc220\uc744 \uacf5\ubd80\ud558\uace0 \uace0\ubbfc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]})]}),Object(h.b)("div",{className:"skills",children:[Object(h.a)(A,{title:"Skills",className:"skillsTitle"}),Object(h.a)("div",{className:"skillGrid",children:n.map((function(t){return Object(h.b)("div",{className:"skillList",children:[Object(h.a)("h2",{className:"skillTitle",children:t.title}),Object(h.a)("div",{className:"skill",children:t.stack.map((function(t){return Object(h.a)(F,{title:t.title,imgUrl:t.imgURL,description:t.des})}))})]})}))})]})]})},Z=function(t){var e=t.title,n=t.size,i=(t.backgroundColor,t.imgUrl),c=t.description,a=t.disableDes;return Object(h.b)("div",{css:[$,tt[n]],children:[Object(h.a)(et,{src:i,alt:e,css:tt[n]}),!a&&Object(h.b)(nt,{css:tt[n],children:[Object(h.a)("h3",{children:e}),Object(h.a)("p",{children:c})]})]})};Z.defaultProps={title:"",size:"medium",backgroundColor:"#B5B5B5",disableDes:!1};var X,W,$=Object(p.a)(G||(G=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),tt={small:Object(p.a)(I||(I=Object(d.a)(["\n    width: 70px;\n    height: 70px;\n  "]))),medium:Object(p.a)(M||(M=Object(d.a)(["\n    width: 280px;\n    height: 200px;\n    h3 {\n      font-size: 2rem;\n    }\n    p {\n      font-size: 1rem;\n    }\n  "]))),big:Object(p.a)(P||(P=Object(d.a)(["\n    width: 130px;\n    height: 130px;\n  "])))},et=S.a.img({objectFit:"cover",flexShrink:0}),nt=S.a.div({color:"black",backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",opacity:"0",transform:"translateY(-200px)",transition:"all 0.3s ease",h3:{display:"flex",justifyContent:"center",alignItems:"center",height:"100px",margin:"1rem 0 ",transition:"all 0.3s ease",transform:"translateY(-50px)",opacity:"0"},p:{display:"flex",justifyContent:"center",alignItems:"center",height:"100px",marginBottom:"1rem",transition:"all 0.3s ease",transform:"translateY(50px)",opacity:"0"},":hover":{opacity:"0.85",p:{transform:"translateY(0px)",opacity:"1"},h3:{transform:"translateY(0px)",opacity:"1"}}}),it=Z,ct=Object(p.a)(X||(X=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #f5f5f5;\n  width: 100%;\n  height: 100vh;\n  .portfolioTitle {\n    margin: 5rem 0;\n  }\n  .portGrid {\n    display: flex;\n    flex-wrap: wrap;\n    width: 840px;\n    height: fit-content;\n  }\n  .des {\n  }\n"]))),at=function(){return Object(h.b)("div",{css:ct,children:[Object(h.a)(A,{title:"PortFolio",className:"portfolioTitle"}),Object(h.b)("div",{className:"portGrid",children:[Object(h.a)(it,{title:"Test",description:"des test",imgUrl:"https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-381233__340.jpg"}),Object(h.a)(it,{title:"Test",description:"des test",imgUrl:"https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454__340.jpg"}),Object(h.a)(it,{title:"Test",description:"des test",imgUrl:"https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621__340.jpg"}),Object(h.a)(it,{title:"Test",description:"des test",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1StBs4YAnkQrJV0FRCg5ETff69plaDMlgA&usqp=CAU"})]})]})},rt=n(34),lt=n(37),ot=n.n(lt),st=Object(p.a)(W||(W=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #4d4646;\n  width: 100%;\n  height: 100vh;\n  p {\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n    color: #f5f5f5;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n  form {\n    width: 40rem;\n  }\n  input,\n  textarea {\n    background-color: #403a3a;\n    font-size: 1rem;\n    border: 0;\n    padding: 10px 15px;\n    margin-bottom: 0.5rem;\n    height: 2rem;\n    color: #f5f5f5;\n  }\n  textarea {\n    resize: none;\n    height: 15rem;\n  }\n  .submit {\n    width: 9rem;\n    height: 3.5rem;\n    font-size: 1.6rem;\n    margin-left: auto;\n    background-color: #403a3a;\n    color: #f5f5f5;\n    border: 3px solid #f5f5f5;\n    cursor: pointer;\n    transition: all ease 0.5s;\n  }\n  .submit:hover {\n    border: 3px solid #998b8b;\n    background-color: #998b8b;\n  }\n  .contactList {\n    margin-top: 5rem;\n    width: 40rem;\n    display: flex;\n    justify-content: center;\n  }\n  a {\n    margin: 0 2rem;\n  }\n  .icon {\n    padding: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n    color: #f5f5f5;\n    background-color: #403a3a;\n    transition: all ease 0.25s;\n  }\n  .icon:hover {\n    transform: scale(0.92);\n    background-color: #998b8b;\n  }\n"]))),dt=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=Object(r.useRef)(null);Object(r.useEffect)((function(){Object(lt.init)("".concat("user_Kfs9RYQlIsUucJ3Os8QVs"))}),[]);return Object(h.b)("div",{css:st,children:[Object(h.a)(A,{title:"Contact",color:"#f5f5f5"}),Object(h.a)("p",{children:"Have a question?"}),Object(h.b)("form",{onSubmit:function(i){return function(i){var c,a,r,l;i.preventDefault(),alert("Thank you for your message from ".concat(null===(c=e.current)||void 0===c?void 0:c.value)),ot.a.send("".concat("my_gmail"),"".concat("template_qn8uslr"),{from_name:null===(a=t.current)||void 0===a?void 0:a.value,message_html:null===(r=n.current)||void 0===r?void 0:r.value,reply_to:null===(l=e.current)||void 0===l?void 0:l.value},"".concat("user_Kfs9RYQlIsUucJ3Os8QVs")).then((function(t){console.log(t.text)}),(function(t){console.log(t.text)}))}(i)},children:[Object(h.a)("input",{type:"text",placeholder:"Name",ref:t}),Object(h.a)("input",{type:"email",placeholder:"Your Email",ref:e}),Object(h.a)("textarea",{placeholder:"Your Message",ref:n}),Object(h.a)("input",{type:"submit",className:"submit",value:"Submit"})]}),Object(h.b)("div",{className:"contactList",children:[Object(h.a)("a",{href:"https://www.facebook.com/profile.php?id=100010845521664",target:"_blank",rel:"noreferrer",children:Object(h.a)(rt.a,{className:"icon"})}),Object(h.a)("a",{href:"https://www.instagram.com/ln.seo/",target:"_blank",rel:"noreferrer",children:Object(h.a)(rt.b,{className:"icon"})}),Object(h.a)("a",{href:"https://www.linkedin.com/in/%EC%9D%B8%EC%84%9C-%ED%99%A9-04582720a/",target:"_blank",rel:"noreferrer",children:Object(h.a)(rt.c,{className:"icon"})})]})]})},bt=n(8);var pt=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=Object(r.useRef)(null),i=Object(r.useRef)(null);return Object(bt.jsxs)("div",{className:"App",children:[Object(bt.jsx)("div",{ref:t,children:Object(bt.jsx)(L,{})}),Object(bt.jsx)(O,{homeRef:t,aboutRef:e,portfolioRef:n,contactRef:i}),Object(bt.jsx)("div",{ref:e,children:Object(bt.jsx)(H,{})}),Object(bt.jsx)("div",{ref:n,children:Object(bt.jsx)(at,{})}),Object(bt.jsx)("div",{ref:i,children:Object(bt.jsx)(dt,{})})]})};s.a.render(Object(bt.jsx)(l.a.StrictMode,{children:Object(bt.jsx)(pt,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.406b65cd.chunk.js.map