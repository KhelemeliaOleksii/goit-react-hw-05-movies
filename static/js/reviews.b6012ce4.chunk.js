"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{505:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var c=t(885),r=t(791),a=t(871),o=t(666),i=t(774),u=t(869),s=t(184);function l(e){var n=e.reviews;return 0===n.length?(0,s.jsx)("div",{children:"We don't have any review for this movie"}):(0,s.jsx)("ul",{children:n.map((function(e){var n=e.author,t=e.content,c=e.created_at;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h5",{children:(0,s.jsx)("span",{children:n})}),(0,s.jsx)("p",{children:t}),(0,s.jsxs)("span",{children:[" created at: ",c]})]},"".concat(n).concat(c))}))})}function f(){var e=(0,a.UO)().movieId,n=(0,r.useState)(null),t=(0,c.Z)(n,2),f=t[0],d=t[1],g=(0,r.useState)("idle"),v=(0,c.Z)(g,2),h=v[0],p=v[1],m=(0,r.useState)(null),j=(0,c.Z)(m,2),k=j[0],w=j[1];return(0,r.useEffect)((function(){!function(e){p("pending"),o.ZP.fetchFilmReviews(e).then((function(e){var n=e.results;d(n),p("resolve")})).catch((function(e){p("reject"),w(e)}))}(e)}),[e]),(0,s.jsxs)(s.Fragment,{children:["pending"===h&&(0,s.jsx)(u.Z,{}),"resolve"===h&&(0,s.jsx)(l,{reviews:f}),"reject"===h&&i.dQ.errorMessage("Something wrong. Try again",k)]})}},666:function(e,n,t){t.d(n,{ZP:function(){return f}});var c=t(861),r=t(757),a=t.n(r),o={get:function(e){return(0,c.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 7:return n.abrupt("return",Promise.reject(new Error("Not found")));case 8:case"end":return n.stop()}}),n)})))()}},i="70c5c640dcd47438a9460ce1b8e1a5b1",u="https://api.themoviedb.org/3",s="en-US",l={fetchTrendingMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n="".concat(u,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e);return o.get(n)},fetchByName:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,c="".concat(u,"/search/movie?api_key=").concat(i,"&language=").concat(t,"&page=").concat(n,"&include_adult=false&query=").concat(e);return o.get(c)},fetchFilmDetails:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=").concat(n);return o.get(t)},fetchFilmReviews:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=").concat(n);return o.get(t)},fetchFilmCredits:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=").concat(n);return o.get(t)}},f=l},774:function(e,n,t){t.d(n,{dQ:function(){return c}});var c={successMessage:function(e){console.log(e)},alertMessage:function(e){console.log(e)},errorMessage:function(e){console.log(e)}}}}]);
//# sourceMappingURL=reviews.b6012ce4.chunk.js.map