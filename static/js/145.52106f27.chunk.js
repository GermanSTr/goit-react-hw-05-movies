"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[145],{677:function(e,t,n){n.d(t,{O:function(){return u}});n(791);var r=n(689),i=n(959),a=n(184),s=function(e){var t=e.id,n=e.name,s=e.title,u=e.popularity,c=e.image,l=(0,r.TH)();return(0,a.jsx)(i.EF,{children:(0,a.jsxs)(i.BR,{state:{from:l},to:"/movies/".concat(t),children:[(0,a.jsx)(i.Rl,{src:c?"https://image.tmdb.org/t/p/original".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:s}),(0,a.jsx)(i.S1,{children:null!==n&&void 0!==n?n:s}),(0,a.jsxs)(i.ZM,{children:["rating:",(0,a.jsx)(i.W1,{children:u.toFixed(1)})]})]})})},u=function(e){var t=e.MoviesData;return(0,a.jsx)(i.hc,{children:t.map((function(e){var t=e.id,n=e.name,r=e.title,i=e.popularity,u=e.poster_path;return(0,a.jsx)(s,{id:t,name:n,title:r,popularity:i,image:u},t)}))})}},145:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),i=n(439),a=n(687),s=n.n(a),u=n(416),c=n(677),l=n(791),o=n(959),p=n(184),f=function(e){var t=e.handleSubmit,n=(0,l.useState)(""),r=(0,i.Z)(n,2),a=r[0],s=r[1];return(0,p.jsx)(o.IT,{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.searchInput.value;s(n),t(n)},children:[(0,p.jsx)(o.YL,{type:"text",name:"searchInput",placeholder:"Search movies...",defaultValue:a,required:!0}),(0,p.jsx)(o.Mq,{type:"submit",children:"Search"})]})})},h=n(694),d=n.n(h),m=n(87),v=n(526),x=function(){var e=(0,m.lr)(),t=(0,i.Z)(e,2),n=t[0],a=t[1],o=(0,l.useState)(!1),h=(0,i.Z)(o,2),x=h[0],j=h[1],g=(0,l.useState)(null),b=(0,i.Z)(g,2),S=b[0],_=b[1],w=n.get("film")||"";(0,l.useEffect)((function(){if(null!==w){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,v.$H)(w);case 4:t=e.sent,n=t.results,_(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),d().Notify.warning(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]);return(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{handleSubmit:function(e){a({film:e})}}),x&&(0,p.jsx)(u.a,{}),null!==S&&S.length>0&&(0,p.jsx)(c.O,{MoviesData:S})]})}}}]);
//# sourceMappingURL=145.52106f27.chunk.js.map