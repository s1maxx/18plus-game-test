import{m as i,B as n,j as s,r as u,F as P}from"./Box-530d5a90.js";import{p as A,q as _,t as d,C as E}from"./index-48718507.js";import{S as I,b as O,c as U,a as $,B as N}from"./selector-96f8c353.js";import{u as q,d as F,e as v,f as D}from"./notistack.esm-017cfe60.js";import{A as W,g as z,b as G}from"./animalHelp-a4f6bd59.js";import{B as H}from"./Backdrop-a9d8f782.js";const J="_container_1u8dc_1",K="_roomNumber_1u8dc_37",M="_buttons_1u8dc_67",Q="_players_list_1u8dc_85",T="_leave_1u8dc_93",V="_start_1u8dc_101",X="_disabled_1u8dc_109",l={container:J,roomNumber:K,buttons:M,players_list:Q,leave:T,start:V,disabled:X},Y="_container_1gh7x_1",Z="_list_1gh7x_29",R={container:Y,list:Z},k="_player_1tors_1",ee="_me_1tors_23",te="_name_1tors_33",re="_avatar_1tors_65",f={player:k,me:ee,name:te,avatar:re},L=r=>i(n,{className:[f.player,r.me?f.me:null].join(" "),children:[s(W,{className:f.avatar,src:z(r.letter),alt:"avatar "+r.letter}),s(n,{className:f.name,children:G(r.letter)})]}),se=r=>i(n,{className:R.container,children:[s("h1",{children:"names of players:"}),i(n,{className:R.list,children:[s(L,{letter:r.me,me:!0}),r.players.map((c,a)=>s(L,{letter:c.letter??null},c.letter))]})]}),ue=()=>{const r=A(),c=q(),a=_(I),p=_(O),o=_(U),e=_($),{enqueueSnackbar:y,closeSnackbar:ae}=F(),[S,B]=u.useState(!0),[j,h]=u.useState([]),[w,g]=u.useState(!1);u.useEffect(()=>(console.log(a,o,p),(!a||!p&&!o.single)&&(y(`Error when tried connect to ${a?"Room":"WebSocket"}`,{variant:"error"}),r(d.start)),o.single&&g(!0),e==null||e.emit("getRoomInfo"),e==null||e.once("getRoom",t=>{console.log(t),t.status?o.single?e==null||e.emit("initStart"):(B(!1),h(t.playersList.filter(m=>m.id!==a))):(y("Error when tried connect to Room",{variant:"error"}),r(d.start))}),e==null||e.on("joinedRoom",t=>{var m;t.status&&(h(((m=t.playersList)==null?void 0:m.filter(b=>b.id!==a))??[]),g(t.canStart??!1))}),e==null||e.on("leavedRoom",t=>{console.log(t),t.status&&(t.client===a?(c(v({roomNumber:null,single:null,isOwner:null})),c(D({user_letter:null})),r(d.start)):(g(!1),h(m=>m.filter(b=>b.id!==t.client)),t.newOwner===a&&c(v({roomNumber:o.roomNumber??"",single:!1,isOwner:!0}))))}),e==null||e.on("initiatedStart",t=>{t.status&&r(d.game)}),()=>{e==null||e.off("initiatedStart"),e==null||e.off("joinedRoom"),e==null||e.off("leavedRoom")}),[]);const x=()=>{e==null||e.emit("leaveRoom")},C=()=>{e==null||e.emit("initStart")};return i(n,{className:l.container,children:[s(H,{open:S,children:s(E,{})}),!S&&i(P,{children:[i(n,{className:l.roomNumber,children:["tell this code to your friends",s("span",{children:o.roomNumber})]}),s(n,{className:l.players_list,children:s(se,{me:p??"",players:j})}),i(n,{className:l.buttons,children:[o.isOwner&&s(N,{onClick:C,className:[l.start,w?null:l.disabled].join(" "),children:"start"}),s(N,{onClick:x,className:l.leave,children:"leave"})]})]})]})};export{ue as default};
