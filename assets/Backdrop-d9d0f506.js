import{r as k,a as S,j as w,_ as i,h as U}from"./Box-530d5a90.js";import{i as D,j as W,s as z,k as A,l as H}from"./index-048aef57.js";import{g as q,c as G,T as I,r as J,h as _}from"./notistack.esm-ac58ab28.js";const K=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],O={entering:{opacity:1},entered:{opacity:1}},Q=k.forwardRef(function(o,r){const n=q(),g={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:d,appear:p=!0,children:u,easing:m,in:x,onEnter:y,onEntered:C,onEntering:T,onExit:v,onExited:P,onExiting:R,style:f,timeout:E=g,TransitionComponent:B=I}=o,b=S(o,K),a=k.useRef(null),l=G(a,u.ref,r),c=t=>s=>{if(t){const h=a.current;s===void 0?t(h):t(h,s)}},L=c(T),j=c((t,s)=>{J(t);const h=_({style:f,timeout:E,easing:m},{mode:"enter"});t.style.webkitTransition=n.transitions.create("opacity",h),t.style.transition=n.transitions.create("opacity",h),y&&y(t,s)}),$=c(C),F=c(R),M=c(t=>{const s=_({style:f,timeout:E,easing:m},{mode:"exit"});t.style.webkitTransition=n.transitions.create("opacity",s),t.style.transition=n.transitions.create("opacity",s),v&&v(t)}),N=c(P);return w(B,i({appear:p,in:x,nodeRef:a,onEnter:j,onEntered:$,onEntering:L,onExit:M,onExited:N,onExiting:F,addEndListener:t=>{d&&d(a.current,t)},timeout:E},b,{children:(t,s)=>k.cloneElement(u,i({style:i({opacity:0,visibility:t==="exited"&&!x?"hidden":void 0},O[t],f,u.props.style),ref:l},s))}))}),V=Q;function X(e){return D("MuiBackdrop",e)}W("MuiBackdrop",["root","invisible"]);const Y=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],Z=e=>{const{classes:o,invisible:r}=e;return H({root:["root",r&&"invisible"]},X,o)},tt=z("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.invisible&&o.invisible]}})(({ownerState:e})=>i({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),nt=k.forwardRef(function(o,r){var n,g,d;const p=A({props:o,name:"MuiBackdrop"}),{children:u,component:m="div",components:x={},componentsProps:y={},className:C,invisible:T=!1,open:v,slotProps:P={},slots:R={},transitionDuration:f,TransitionComponent:E=V}=p,B=S(p,Y),b=i({},p,{component:m,invisible:T}),a=Z(b),l=(n=P.root)!=null?n:y.root;return w(E,i({in:v,timeout:f},B,{children:w(tt,i({"aria-hidden":!0},l,{as:(g=(d=R.root)!=null?d:x.Root)!=null?g:m,className:U(a.root,C,l==null?void 0:l.className),ownerState:i({},b,l==null?void 0:l.ownerState),classes:a,ref:r,children:u}))}))}),rt=nt;export{rt as B};
