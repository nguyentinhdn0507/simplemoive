"use strict";(self.webpackChunkreactsimplemoive=self.webpackChunkreactsimplemoive||[]).push([[950],{541:function(e,l,s){s.d(l,{d:function(){return o},Z:function(){return c}});s(791);var i=s(871),t=s(197),a=s(460),r=s(184),n=function(e){return(0,r.jsx)("div",{className:"skeleton ".concat(e.className),style:{height:e.height,width:e.width||"100%",borderRadius:e.radius}})},c=function(e){var l=e.item,s=(0,i.s0)();if(!l)return null;var n=l.title,c=l.vote_average,o=l.release_date,d=l.poster_path,x=l.id;return console.log("item",l),(0,r.jsxs)("div",{className:"movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none",children:[(0,r.jsx)("img",{src:t.Qo.imgMovieCard(d),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5 flex-shrink-0"}),(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-3 flex-1",children:n}),(0,r.jsxs)("div",{className:"flex items-center justify-between text-sm opacity-50 mb-10 flex-shrink-0",children:[(0,r.jsx)("span",{children:new Date(o).getFullYear()}),(0,r.jsx)("span",{children:c})]}),(0,r.jsx)(a.Z,{full:!0,bgColor:"bg-secondary",onClick:function(){return s("/movie/".concat(x))},children:"watch now"})]})]})},o=function(){return(0,r.jsxs)("div",{className:"movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none",children:[(0,r.jsx)(n,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-3 flex-1",children:(0,r.jsx)(n,{width:"100%",height:"100%",radius:"8px",className:"mb-5"})}),(0,r.jsxs)("div",{className:"flex items-center justify-between text-sm opacity-50 mb-10 flex-shrink-0",children:[(0,r.jsx)("span",{children:(0,r.jsx)(n,{width:"50px",height:"10px"})}),(0,r.jsx)("span",{children:(0,r.jsx)(n,{width:"30px",height:"10px"})})]}),(0,r.jsx)(n,{width:"100%",height:"45px",radius:"6px"})]})]})}},950:function(e,l,s){s.r(l);s(791);var i=s(871),t=s(707),a=s(419),r=s(541),n=s(197),c=s(184);function o(e){var l=e.type,s=void 0===l?"videos":l,t=(0,i.UO)().movieID,r=(0,a.ZP)(n.Qo.getMovieCredits(t,s),n._i),o=r.data;r.error;if(console.log("data",o),!o)return null;var d=o.cast;return!d||d.length<=0?null:(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsx)("h2",{className:"text-center text-3xl mb-10",children:"Casts"}),(0,c.jsx)("div",{className:"grid grid-cols-4 gap-5",children:d.slice(0,4).map((function(e){return(0,c.jsxs)("div",{className:"cast-item",children:[(0,c.jsx)("img",{src:n.Qo.imageOriginal(e.profile_path),alt:"",className:"w-full h-[350px] object-cover rounded-lg"}),(0,c.jsx)("h3",{className:"text-xl font-medium",children:e.name})]},e.id)}))})]})}function d(){var e=(0,i.UO)().movieID,l=(0,a.ZP)(n.Qo.getMovieCredits(e,"videos"),n._i),s=l.data;l.error;if(!s)return null;console.log("data",s);var t=s.results;return!t||t.length<=0?null:(0,c.jsx)("div",{className:"py-10",children:(0,c.jsx)("div",{className:"flex flex-col gap-10",children:t.slice(0,2).map((function(e){return(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("h3",{className:"mb-5 text-xl font-medium p-3 bg-secondary inline-block rounded-[6px]",children:e.name}),(0,c.jsx)("div",{className:"w-full aspect-video ",children:(0,c.jsx)("iframe",{width:"727",height:"409",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",className:"w-full h-full object-fill"})})]},e.id)}))})})}function x(){var e=(0,i.UO)().movieID,l=(0,a.ZP)(n.Qo.getMovieCredits(e,"similar"),n._i),s=l.data;l.error;if(!s)return null;console.log("data",s);var o=s.results;return!o||o.length<=0?null:(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsx)("h2",{className:"text-3xl bg-secondary font-medium p-3 inline-block rounded-[6px] mb-10",children:"Similar movies"}),(0,c.jsx)("div",{className:"movie-list",children:(0,c.jsx)(t.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:o.length>0&&o.map((function(e){return(0,c.jsx)(t.o5,{children:(0,c.jsx)(r.Z,{item:e})},e.id)}))})})]})}l.default=function(){var e=(0,i.UO)().movieID;console.log("movieID",e);var l=(0,a.ZP)(n.Qo.getMovieDetail(e),n._i),s=l.data;l.error;if(console.log("data",s),!s)return null;var t=s.poster_path,r=s.backdrop_path,m=s.title,u=s.genres,h=s.overview;return(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsxs)("div",{className:"w-full h-[600px] relative mb-10",children:[(0,c.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-70"}),(0,c.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat",style:{backgroundImage:"url(".concat(n.Qo.imageOriginal(r))}})]}),(0,c.jsx)("div",{className:"w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10",children:(0,c.jsx)("img",{src:n.Qo.imageOriginal(t),alt:"",className:"w-full h-full object-cover rounded-xl"})}),(0,c.jsx)("h1",{className:"text-center text-4xl text-white font-bold mb-10",children:m}),u.length>0&&(0,c.jsx)("div",{className:"flex items-center justify-center gap-x-5 mb-10",children:u.map((function(e){return(0,c.jsx)("span",{className:"py-2 px-4 border-primary text-primary border rounded",children:e.name},e.id)}))}),(0,c.jsx)("p",{className:"text-center text-sm leading-relaxed max-w-[600px] mx-auto mb-10",children:h}),(0,c.jsx)(o,{}),(0,c.jsx)(d,{}),(0,c.jsx)(x,{})]})}}}]);
//# sourceMappingURL=950.4c19c51e.chunk.js.map