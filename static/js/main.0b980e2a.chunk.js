(this["webpackJsonpjandy-folio"]=this["webpackJsonpjandy-folio"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var i,c,a,r=t(1),o=t.n(r),l=t(26),s=t.n(l),d=(t(86),t(87),t(7)),m=t(13),b=t(5),p=t(125),h=t(124),f=t(108),g=t(2),u=Object(b.a)(i||(i=Object(d.a)(["\n  background-color: #403a3a;\n  color: white;\n  .Mui-selected {\n    color: #9ad9ac;\n  }\n"]))),j=Object(b.a)(c||(c=Object(d.a)(["\n  width: 100%;\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  z-index: 1;\n"]))),O=Object(f.a)({root:{innerHeight:"2vh",outerHeight:"2vh"},indicator:{backgroundColor:"#403a3a"}})((function(e){var n=e.classes,t=e.homeRef,i=e.aboutRef,c=e.portfolioRef,a=e.contactRef,o=Object(r.useState)(0),l=Object(m.a)(o,2),s=l[0],d=l[1],b=function(){var e,n,r,o,l=window.pageYOffset,s=l+((null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)||0),m=l+((null===i||void 0===i||null===(n=i.current)||void 0===n?void 0:n.getBoundingClientRect().top)||0),b=l+((null===c||void 0===c||null===(r=c.current)||void 0===r?void 0:r.getBoundingClientRect().top)||0),p=l+((null===a||void 0===a||null===(o=a.current)||void 0===o?void 0:o.getBoundingClientRect().top)||0);l>=s&&d(0),l>=m-50&&d(1),l>=b-50&&d(2),l>=p-50&&d(3)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}),[]),Object(g.b)(p.a,{value:s,onChange:function(e,n){d(n)},textColor:"inherit",variant:"standard","aria-label":"nav tabs",css:[u,s&&j],classes:{indicator:n.indicator},children:[Object(g.a)(h.a,{label:"HOME",onClick:function(){var e;null===t||void 0===t||null===(e=t.current)||void 0===e||e.scrollIntoView()}}),Object(g.a)(h.a,{label:"ABOUT",onClick:function(){var e;null===i||void 0===i||null===(e=i.current)||void 0===e||e.scrollIntoView()}}),Object(g.a)(h.a,{label:"PORTFOLIO",onClick:function(){var e;null===c||void 0===c||null===(e=c.current)||void 0===e||e.scrollIntoView()}}),Object(g.a)(h.a,{label:"CONTACT",onClick:function(){var e;null===a||void 0===a||null===(e=a.current)||void 0===e||e.scrollIntoView()}})]})})),v=(t(95),t(96),function(e){var n=e.title,t=e.imgUrl;return Object(g.b)("div",{id:"Home",css:C,children:[Object(g.a)("h1",{children:n}),Object(g.a)("img",{src:t,alt:""})]})});v.defaultProps={title:"\uc138\uc0c1\uc5d0 \uac00\uce58\ub97c \ub354\ud558\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",imgUrl:"https://i.postimg.cc/KvscQh2j/coding-924920-1920.jpg"};var x,k,w,y,R,C=Object(b.a)(a||(a=Object(d.a)(["\n  width: 100%;\n  height: 95vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  @media (max-width: 568px) {\n    height: 50vh;\n  }\n  img {\n    min-width: 100%;\n    width: auto;\n    min-height: 100%;\n    height: auto;\n    position: fixed;\n    top: 0%;\n    left: 0%;\n    z-index: -1;\n  }\n  h1 {\n    width: 96%;\n    margin: 0;\n    font-size: 6rem;\n    letter-spacing: 0.5rem;\n    color: #f6f5ff;\n    text-shadow: 1px 1px 2px #53565c;\n    position: absolute;\n    left: 4%;\n    top: 55%;\n    @media (max-width: 568px) {\n      top: 25%;\n      height: 50vh;\n    }\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  @media screen and (max-width: 110rem) {\n    h1 {\n      font-size: 4rem;\n      letter-spacing: 0.3rem;\n    }\n  }\n  @media screen and (max-width: 72rem) {\n    h1 {\n      font-size: 3rem;\n      letter-spacing: 0.2rem;\n    }\n  }\n"]))),z=v,L=function(e){var n=e.title,t=e.size,i=e.color,c=e.className;return Object(g.b)("div",{css:[P,E[t],Object(b.a)(x||(x=Object(d.a)(["\n          h2 {\n            color: ",";\n          }\n          hr {\n            background-color: ",";\n          }\n        "])),i,i)],className:c,children:[Object(g.a)("h2",{children:n}),Object(g.a)("hr",{})]})};L.defaultProps={size:"medium",color:"#403a3a"};var T,N,U,B,P=Object(b.a)(k||(k=Object(d.a)(["\n  h2 {\n    text-align: center;\n    margin: 0;\n  }\n  hr {\n    margin-top: 0.2rem;\n    margin-bottom: 2rem;\n    width: 70%;\n    height: 3px;\n    border: 0px;\n  }\n"]))),E={small:Object(b.a)(w||(w=Object(d.a)(["\n    font-size: 1.5rem;\n  "]))),medium:Object(b.a)(y||(y=Object(d.a)(["\n    font-size: 1.5rem;\n  "]))),big:Object(b.a)(R||(R=Object(d.a)(["\n    font-size: 2rem;\n  "])))},S=L,D=t(40),K=function(e){var n=e.title,t=e.size,i=(e.backgroundColor,e.imgUrl),c=e.description,a=e.disableDes;return Object(g.b)("div",{css:[_,F[t]],children:[Object(g.a)(J,{src:i,alt:n,css:F[t]}),!a&&Object(g.b)(V,{css:F[t],children:[Object(g.a)("h3",{children:n}),Object(g.a)("p",{children:c})]})]})};K.defaultProps={title:"",size:"medium",backgroundColor:"#B5B5B5",disableDes:!1};var M,Y,G,I,A,_=Object(b.a)(T||(T=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 3rem 1.8rem 0;\n  :last-child {\n    margin: 0;\n  }\n"]))),F={small:Object(b.a)(N||(N=Object(d.a)(["\n    width: 70px;\n    height: 70px;\n  "]))),medium:Object(b.a)(U||(U=Object(d.a)(["\n    width: 6.25rem;\n    height: 6.25rem;\n    h3 {\n      font-size: 1rem;\n    }\n    p {\n      font-size: 1rem;\n    }\n  "]))),big:Object(b.a)(B||(B=Object(d.a)(["\n    width: 130px;\n    height: 130px;\n  "])))},J=D.a.img({borderRadius:"10%",objectFit:"fill",boxShadow:"3px 3px 10px 0px rgba(0, 0, 0, 0.75)",flexShrink:0}),V=D.a.div({borderRadius:"10%",color:"white",backgroundColor:"black",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",transform:"translateY(-6.25rem)",opacity:"0",transition:"all 0.3s ease",h3:{margin:"1rem 0 "},p:{marginBottom:"1rem"},":hover":{opacity:"0.85"}}),H=K,Q=Object(b.a)(M||(M=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  padding-bottom: 3rem;\n  width: 100%;\n  color: #403a3a;\n  .description {\n    h3 {\n      font-size: 1.5rem;\n    }\n    p {\n      margin-bottom: 3rem;\n    }\n  }\n  .aboutMe {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f5f5f5;\n    .aboutTitle {\n      margin: 8rem 5rem 8rem 0;\n    }\n  }\n  .skills {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .skillsTitle {\n      margin-top: 5rem;\n      width: fit-content;\n    }\n    .skillGrid {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .skillList {\n      width: 100%;\n    }\n    .skill {\n      width: fit-content;\n      display: flex;\n    }\n  }\n"]))),Z=function(){var e=Object(r.useState)([{title:"Language",stack:[{title:"JavaScript",des:"familiar",imgURL:"https://i.postimg.cc/3w2Pk3wy/image.png"},{title:"TypeScript",des:"tried",imgURL:"https://i.postimg.cc/nVPBpbGf/typescript.png"},{title:"C++",des:"familiar",imgURL:"https://i.postimg.cc/Tw7yHfjp/Cplusplus.jpg"},{title:"Java",des:"tried",imgURL:"https://i.postimg.cc/7bvZp65Y/java.webp"},{title:"Python",des:"tried",imgURL:"https://i.postimg.cc/25jhHcp9/python.png"}]},{title:"Font End",stack:[{title:"React",des:"familiar",imgURL:"https://i.postimg.cc/B6TbZg7D/1-mr-OXGy-Ia3-Bl-PK80pe-Lm-Eb-A.png"},{title:"React-Naitive",des:"tried",imgURL:"https://i.postimg.cc/NLq5QnB1/React-js-logo-512.png"},{title:"Emotion",des:"familiar",imgURL:"https://i.postimg.cc/0N21KCND/emotion.png"},{title:"Material-UI",des:"familiar",imgURL:"https://i.postimg.cc/8P7wn7wT/image.png"},{title:"Gatsby",des:"tried",imgURL:"https://i.postimg.cc/1Rpmvnv6/image.png"}]},{title:"Back End",stack:[{title:"Node",des:"tried",imgURL:"https://i.postimg.cc/QtJGyjGL/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f.png"},{title:"Express",des:"tried",imgURL:"https://i.postimg.cc/xT08Kr6h/Express.png"}]},{title:"ETC",stack:[{title:"git",des:"familiar",imgURL:"https://i.postimg.cc/tgM6L2Zz/git-thumnail.png"},{title:"Unity",des:"tried",imgURL:"https://i.postimg.cc/MTV0jk9X/2.png"},{title:"StoryBook",des:"tried",imgURL:"https://i.postimg.cc/brb10kv9/storybook.png"},{title:"Algorithm",des:"familiar",imgURL:"https://i.postimg.cc/MGZ7h8Lk/neural.png"},{title:"DataScience",des:"tried",imgURL:"https://i.postimg.cc/8CWwLr51/deep-learning-1.png"}]}]),n=Object(m.a)(e,2),t=n[0];n[1];return Object(g.b)("div",{id:"About",css:Q,children:[Object(g.b)("div",{className:"aboutMe",children:[Object(g.a)(S,{title:"About Me",className:"aboutTitle"}),Object(g.b)("div",{className:"description",children:[Object(g.a)("h3",{children:"\uc131\uc7a5\ud558\ub294 \uac1c\ubc1c\uc790"}),Object(g.b)("p",{children:["\uc548\ub155\ud558\uc138\uc694, \uc11c\uc6b8 \uacfc\ud559 \uae30\uc220\ub300\uc5d0 \uc7ac\ud559\ud558\uace0 \uc788\uace0 \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c \uc77c\ud558\uace0 \uc788\ub294 \ud669\uc778\uc11c\uc785\ub2c8\ub2e4. ",Object(g.a)("br",{})," \uc0ac\ud68c\uac00 \ud544\uc694\ub85c \ud558\ub294 \uac00\uce58\ub97c \ucc3d\ucd9c\ud558\uae30 \uc704\ud574 \ub9e4\uc77c \ub354 \ub098\uc740 \uae30\uc220\uc744 \uacf5\ubd80\ud558\uace0 \uace0\ubbfc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]})]}),Object(g.b)("div",{className:"skills",children:[Object(g.a)(S,{title:"Skills",className:"skillsTitle"}),Object(g.a)("div",{className:"skillGrid",children:t.map((function(e){return Object(g.b)("div",{className:"skillList",children:[Object(g.a)("h2",{className:"skillTitle",children:e.title}),Object(g.a)("div",{className:"skill",children:e.stack.map((function(e){return Object(g.a)(H,{title:e.title,imgUrl:e.imgURL,description:e.des})}))})]})}))})]})]})},q=function(e){var n=e.title,t=e.size,i=(e.backgroundColor,e.imgUrl),c=e.description,a=e.disableDes,r=e.onClick,o=e.tag;return Object(g.b)("div",{css:[ne,te[t]],children:[Object(g.a)(ie,{src:i,alt:n,css:te[t]}),!a&&Object(g.b)(ce,{css:te[t],children:[Object(g.b)("div",{className:"title",children:[Object(g.a)("h3",{children:n}),Object(g.a)("p",{children:o})]}),Object(g.a)("button",{onClick:r,children:c})]})]})};q.defaultProps={title:"",size:"medium",backgroundColor:"#B5B5B5",disableDes:!1};var W,X,$,ee,ne=Object(b.a)(Y||(Y=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n"]))),te={small:Object(b.a)(G||(G=Object(d.a)(["\n    width: 10rem;\n    height: 7rem;\n  "]))),medium:Object(b.a)(I||(I=Object(d.a)(["\n    width: 20rem;\n    height: 14rem;\n    .title {\n      font-size: 1.5rem;\n    }\n    button {\n      font-size: 1rem;\n    }\n  "]))),big:Object(b.a)(A||(A=Object(d.a)(["\n    width: 30rem;\n    height: 21rem;\n  "])))},ie=D.a.img({objectFit:"cover",flexShrink:0}),ce=D.a.div({backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",textAlign:"center",opacity:"0",transform:"translateY(-14rem)",transition:"all 0.3s ease",".title":{height:"7rem",margin:"2rem 0 0 0 ",transition:"all 0.3s ease",transform:"translateY(-50px)",opacity:"0",h3:{color:"#403a3a",margin:"0.1rem 0",fontsize:"1em"},p:{margin:"0",fontsize:"0.8em",color:"#81B58F"}},button:{width:"8rem",height:"3rem",margin:"0 0 2rem 0",border:"3px solid #81B58F",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",transition:"all 0.3s ease",color:"#403a3a",transform:"translateY(20px)",opacity:"0",":hover":{color:"white",fontWeight:"bold",backgroundColor:"#81B58F"}},":hover":{opacity:"0.85",button:{transform:"translateY(0px)",opacity:"1"},".title":{transform:"translateY(0px)",opacity:"1"}}}),ae=q,re=t(48),oe=t(78),le=t.n(oe),se=function(e){var n=e.visible,t=e.title,i=e.subTitle,c=e.description,a=(e.cancelLable,e.cancelText,e.confirmText,e.children),o=e.url,l=(e.onCancel,e.onConfirm,Object(re.useTransition)(n,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:10}})),s=Object(re.useTransition)(n,{from:{transform:"scale(0.8)",opacity:0},enter:{transform:"scale(1)",opacity:1},leave:{transform:"scale(0)",opacity:0},config:{tension:250,friction:13}}),d=function(e){e.stopPropagation()};return Object(g.b)(r.Fragment,{children:[l((function(e,n){return n?Object(g.a)(re.animated.div,{css:[be,pe],style:e}):null})),s((function(e,n){return n?Object(g.a)(re.animated.div,{css:[be,he],style:e,children:Object(g.b)("div",{css:fe,onClick:d,children:[a,Object(g.b)("div",{className:"contents",children:[t&&Object(g.a)("h2",{children:t}),i&&Object(g.a)("h3",{children:i}),c&&Object(g.a)("p",{children:c}),o&&Object(g.b)("a",{href:o,children:[Object(g.a)(le.a,{fontSize:"small"}),Object(g.a)("span",{className:"link",children:"Go Repogitory"})]})]})]})}):null}))]})};se.defaultProps={cancelText:"\ucde8\uc18c",confirmText:"\ud655\uc778"};var de,me,be=Object(b.a)(W||(W=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),pe=Object(b.a)(X||(X=Object(d.a)(["\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.3);\n"]))),he=Object(b.a)($||($=Object(d.a)(["\n  z-index: 15;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),fe=Object(b.a)(ee||(ee=Object(d.a)(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 35rem;\n  background: white;\n  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n  .contents {\n    padding: 2rem;\n  }\n  h2 {\n    font-size: 1.5rem;\n    color: #343a40;\n    margin: 0;\n  }\n  h3 {\n    font-size: 1.225rem;\n    color: gray;\n    margin: 0 0 1rem 0;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid #dbdbdb;\n  }\n  p {\n    font-size: 1rem;\n    margin: 0;\n    color: #868e96;\n  }\n  a {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n  }\n  .link {\n    margin-left: 0.5rem;\n  }\n"]))),ge=se,ue=t(79),je=(t(102),Object(b.a)(de||(de=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #f5f5f5;\n  width: 100%;\n  height: fit-content;\n  padding: 5rem 0;\n  .each-slide > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-size: cover;\n    height: 350px;\n  }\n\n  .each-slide span {\n    padding: 20px;\n    font-size: 20px;\n    background: #efefef;\n    text-align: center;\n  }\n  .portfolioTitle {\n    margin-bottom: 5rem 0;\n  }\n  .portGrid {\n    display: flex;\n    flex-wrap: wrap;\n    width: 66rem;\n    height: fit-content;\n    @media (max-width: 568px) {\n      width: 44rem;\n    }\n  }\n  .des {\n  }\n"])))),Oe=function(){var e=Object(r.useState)(!1),n=Object(m.a)(e,2),t=n[0],i=n[1];document.body.onclick=function(){i(!1)};return Object(g.b)("div",{css:je,children:[Object(g.a)(S,{title:"PortFolio",className:"portfolioTitle"}),Object(g.b)("div",{className:"portGrid",children:[Object(g.a)(ge,{visible:t,title:"\uc6b0\ub9ac\uc740\ud589 \ud574\ucee4\ud1a4",subTitle:"React / Redux",description:"2021\ub144 \uc6b0\ub9ac\uc740\ud589 \uc628\ud0dd\ud2b8 \ud574\ucee4\ud1a4\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \ubd84\uc57c\ub97c \ub9e1\uc558\uace0 \uc7a5\ub824\uc0c1\uc744 \uc218\uc0c1\ud588\uc2b5\ub2c8\ub2e4.",url:"https://github.com/woori-hippy/hippy_front",children:Object(g.a)(ue.Slide,{easing:"ease",transitionDuration:"500",children:["https://i.postimg.cc/R0JmWf8b/Kakao-Talk-Photo-2021-05-08-02-46-54-2.png","https://i.postimg.cc/Z5MZYjfd/Kakao-Talk-Photo-2021-05-08-02-46-54-5.png","https://i.postimg.cc/yYnst7cn/Kakao-Talk-Photo-2021-05-08-02-46-54-4.png","https://i.postimg.cc/zGB814kN/Kakao-Talk-Photo-2021-05-08-02-46-54-3.png","https://i.postimg.cc/mkyBbsqL/Kakao-Talk-Photo-2021-05-08-02-46-54-1.png","https://i.postimg.cc/jdRRMDwL/Kakao-Talk-Photo-2021-05-08-02-46-54-6.png","https://i.postimg.cc/c1Rs7RJp/Kakao-Talk-Photo-2021-05-08-02-46-54-7.png"].map((function(e){return Object(g.a)("div",{className:"each-slide",children:Object(g.a)("div",{style:{height:"fit-content"},children:Object(g.a)("img",{src:"".concat(e),alt:"img",style:{width:"100%",height:"auto",objectFit:"contain"}})})})}))})}),Object(g.a)(ae,{title:"\uc6b0\ub9ac\uc740\ud589 \ud574\ucee4\ud1a4",tag:"React / Redux",description:"LEARN MORE",imgUrl:"https://i.postimg.cc/R0JmWf8b/Kakao-Talk-Photo-2021-05-08-02-46-54-2.png",onClick:function(e){e.stopPropagation(),i(!0),console.log(t)}})]})]})},ve=t(63),xe=t(69),ke=t.n(xe),we=Object(b.a)(me||(me=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #4d4646;\n  width: 100%;\n  height: fit-content;\n  padding: 5rem 0;\n  @media (max-width: 568px) {\n    padding: 10rem 0;\n  }\n  p {\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n    color: #81b58f;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n  form {\n    width: 40rem;\n  }\n  input,\n  textarea {\n    background-color: #403a3a;\n    font-size: 1rem;\n    border: 0;\n    padding: 10px 15px;\n    margin-bottom: 0.5rem;\n    height: 2rem;\n    color: #f5f5f5;\n  }\n  textarea {\n    resize: none;\n    height: 15rem;\n  }\n  .submit {\n    width: 9rem;\n    height: 3.5rem;\n    font-size: 1.6rem;\n    margin-left: auto;\n    background-color: #403a3a;\n    color: #f5f5f5;\n    border: 3px solid #f5f5f5;\n    cursor: pointer;\n    transition: all ease 0.3s;\n    @media (max-width: 568px) {\n      line-height: 0.25rem;\n    }\n  }\n  .submit:hover {\n    border: 3px solid #81b58f;\n    background-color: #81b58f;\n  }\n  .contactList {\n    margin-top: 5rem;\n    width: 40rem;\n    display: flex;\n    justify-content: center;\n  }\n  a {\n    margin: 0 2rem;\n  }\n  .icon {\n    padding: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n    color: #f5f5f5;\n    background-color: #403a3a;\n    transition: all ease 0.25s;\n  }\n  .icon:hover {\n    transform: scale(0.92);\n    background-color: #81b58f;\n  }\n"]))),ye=function(){var e=Object(r.useRef)(null),n=Object(r.useRef)(null),t=Object(r.useRef)(null);Object(r.useEffect)((function(){Object(xe.init)("".concat("user_Kfs9RYQlIsUucJ3Os8QVs"))}),[]);return Object(g.b)("div",{css:we,children:[Object(g.a)(S,{title:"Contact",color:"#f5f5f5"}),Object(g.a)("p",{children:"Have a question?"}),Object(g.b)("form",{onSubmit:function(i){return function(i){var c,a,r,o;i.preventDefault(),alert("Thank you for your message from ".concat(null===(c=n.current)||void 0===c?void 0:c.value)),ke.a.send("".concat("my_gmail"),"".concat("template_qn8uslr"),{from_name:null===(a=e.current)||void 0===a?void 0:a.value,message_html:null===(r=t.current)||void 0===r?void 0:r.value,reply_to:null===(o=n.current)||void 0===o?void 0:o.value},"".concat("user_Kfs9RYQlIsUucJ3Os8QVs")).then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.current.value="",t.current.value="",n.current.value=""}(i)},children:[Object(g.a)("input",{type:"text",placeholder:"Name",ref:e}),Object(g.a)("input",{type:"email",placeholder:"Your Email",ref:n}),Object(g.a)("textarea",{placeholder:"Your Message",ref:t}),Object(g.a)("input",{type:"submit",className:"submit",value:"Submit"})]}),Object(g.b)("div",{className:"contactList",children:[Object(g.a)("a",{href:"https://www.facebook.com/profile.php?id=100010845521664",target:"_blank",rel:"noreferrer",children:Object(g.a)(ve.a,{className:"icon"})}),Object(g.a)("a",{href:"https://www.instagram.com/ln.seo/",target:"_blank",rel:"noreferrer",children:Object(g.a)(ve.b,{className:"icon"})}),Object(g.a)("a",{href:"https://www.linkedin.com/in/%EC%9D%B8%EC%84%9C-%ED%99%A9-04582720a/",target:"_blank",rel:"noreferrer",children:Object(g.a)(ve.c,{className:"icon"})})]})]})},Re=t(12);var Ce=function(){var e=Object(r.useRef)(null),n=Object(r.useRef)(null),t=Object(r.useRef)(null),i=Object(r.useRef)(null);return Object(Re.jsxs)("div",{className:"App",children:[Object(Re.jsx)("div",{ref:e,children:Object(Re.jsx)(z,{})}),Object(Re.jsx)(O,{homeRef:e,aboutRef:n,portfolioRef:t,contactRef:i}),Object(Re.jsx)("div",{ref:n,children:Object(Re.jsx)(Z,{})}),Object(Re.jsx)("div",{ref:t,children:Object(Re.jsx)(Oe,{})}),Object(Re.jsx)("div",{ref:i,children:Object(Re.jsx)(ye,{})})]})};s.a.render(Object(Re.jsx)(o.a.StrictMode,{children:Object(Re.jsx)(Ce,{})}),document.getElementById("root"))},86:function(e,n,t){},87:function(e,n,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.0b980e2a.chunk.js.map