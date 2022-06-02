"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{282:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var c=t(885),r=t(774),a=t(79),o="CastRender_img__5niYr",i=t(184),A="https://image.tmdb.org/t/p/",s="w500";function u(e){var n=e.cast,t=s,c="".concat(A).concat(t);return 0===n.length&&r.dQ.alertMessage("No info found"),(0,i.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.imgPath,r=e.name,A=e.character;return(0,i.jsxs)("li",{children:[t?(0,i.jsx)("img",{src:"".concat(c).concat(t),alt:r,className:o}):(0,i.jsx)("img",{src:a,alt:r,className:o}),(0,i.jsx)("p",{children:r}),(0,i.jsxs)("p",{children:["Character: ",A]})]},n)}))})}var g=t(869),f=t(791),h=t(871),l=t(666);function d(){var e=(0,h.UO)().movieId,n=(0,f.useState)("idle"),t=(0,c.Z)(n,2),a=t[0],o=t[1],A=(0,f.useState)(null),s=(0,c.Z)(A,2),d=s[0],v=s[1],m=(0,f.useState)(),p=(0,c.Z)(m,2),C=p[0],k=p[1];return(0,f.useEffect)((function(){!function(e){o("pending"),l.ZP.fetchFilmCredits(e).then((function(e){var n=e.cast;k(n.map((function(e){return{id:e.id,imgPath:e.profile_path,name:e.name,character:e.character}}))),o("resolve")})).catch((function(e){v(e),o("reject")}))}(e)}),[e]),(0,i.jsxs)(i.Fragment,{children:["pending"===a&&(0,i.jsx)(g.Z,{}),"resolve"===a&&(0,i.jsx)(u,{cast:C}),"reject"===a&&r.dQ.errorMessage(d.msg)]})}},666:function(e,n,t){t.d(n,{ZP:function(){return g}});var c=t(861),r=t(757),a=t.n(r),o={get:function(e){return(0,c.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=7;break}return n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 7:return n.abrupt("return",Promise.reject(new Error("Not found")));case 8:case"end":return n.stop()}}),n)})))()}},i="70c5c640dcd47438a9460ce1b8e1a5b1",A="https://api.themoviedb.org/3",s="en-US",u={fetchTrendingMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n="".concat(A,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e);return o.get(n)},fetchByName:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,c="".concat(A,"/search/movie?api_key=").concat(i,"&language=").concat(t,"&page=").concat(n,"&include_adult=false&query=").concat(e);return o.get(c)},fetchFilmDetails:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(A,"/movie/").concat(e,"?api_key=").concat(i,"&language=").concat(n);return o.get(t)},fetchFilmReviews:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(A,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=").concat(n);return o.get(t)},fetchFilmCredits:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,t="".concat(A,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=").concat(n);return o.get(t)}},g=u},774:function(e,n,t){t.d(n,{dQ:function(){return c}});var c={successMessage:function(e){console.log(e)},alertMessage:function(e){console.log(e)},errorMessage:function(e){console.log(e)}}},79:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEXFxcX////p6enW1tbAmiBwAAAFiElEQVR4AezAgQAAAACAoP2pF6kAAAAAAAAAAAAAAIDbu2MkvY0jiuMWWQoUmI50BB+BgRTpCAz4G6C8CJDrC3AEXGKPoMTlYA/gAJfwETawI8cuBs5Nk2KtvfiLW+gLfK9m+r3X82G653+JP/zjF8afP1S//y+An4/i51//AsB4aH+/QPD6EQAY/zwZwN8BAP50bh786KP4+VT+3fs4/noigEc+jnHeJrzxX+NWMDDh4g8+EXcnLcC9T8U5S/CdT8bcUeBEIrwBOiI8ki7Ba5+NrePgWUy89/nYyxQ8Iw3f+pWY4h1gb3eAW7sDTPEOsLc7wK1TIeDuDB+I/OA1QOUHv/dFsZQkhKkh4QlEfOULYz2nGj2/Nn1LmwR/86VxlCoAW6kCsHRGANx1RgCMo5Qh2EsZgrXNQZZShp5Liv7Il8eIc5C91EHY2hxk6bwYmNscZIReDBwtCdhbErC1JGBpScBcOgFMLQsZMQs5Whayd+UQsLYsZGlZyNyykKllISNmIUfAwifw8NXvTojAjGFrdYi11SGWVoeYWx1i6lmQCiEjFkKOVgjZ+xxIhZCtFULWHkCqxCw9gNQKmP9vNHzipdEPrRcxtVbAeDkAvve0iM2QozVD9hfjhp4YP/UrkJYDbD2AtBxgfSkAvvHEeNcDSAsilgtAWxIy91J8AXgZAJ5e33+4tuACcAG4AFwALgBXRXQB6AFcB5MXAuA6nl9/0Vx/011/1V5/1/dfTPJvRtdnu/zL6beeFO/7r+fXBYbrEkt/j+i6ytXfpuvvE/ZXOnsA/a3a/l5xf7O6v1t+Xe/vOyz6HpO8yyboM8o7rfJes77bru83THk48p7TvOs27zvOO6/73vO++z7l4cgnMPQzKPopHC0N9noSSz6LJp/Gk88jyicy5TOp6qlc+VyyfDJbPpuuns6XzyfMJzTmMyrrKZ35nNJ8Ums+q7af1tvPK+4nNodEnPKp3fnc8npyez67/qVP7+/fL8hfcMjfsOhf8cjfMclfcnn9+BkOnLECP8Q58OYeyJ40eoyF6Ee/En/JHlP6mIlRVXprF4BxtAvArV0AxtEuALd2ARhHuwDc2gVgHPX/hFv9fMBddjIGeKg/WCxlCsI46u+Ga5mCcJd+sIG9UkGAW32ZbApFAHhod4Bb3eo04h3god0BbiUHYApVCNjbHeBW+QDAXT4a7qg7r7e214057vg0QhkEHkoSwq0kIdydXw4/Q3H8hjYJ3vL0WConBJhCHQaOToeBrU0BljYFmEoVgHGUKgAPnREAt84IgLuqFgAYSUEOAHszDwuAtSkHAZhLGYIpdCLgKGUIHtocZG1zkLmUIRhxDnJU1RDA1uYga5uDzKUOwhTnIEfnxcDe5iBrcyQAYGlzkKkUYhhxDrKXQgxbSwLWUohhbknA1JKAEZOAvSUBW0sC1pYEzC0JmFoSMMJyCDhaFrK3JGDtyiFgaVnI3LKQqWUhI2YhR8tC9paFrC0LWVoWMrcsZGpZyIhZyNGykL2rSIGtlQHWVgZYWhlgbmWAqZUBRiwDHK0MsLcywNbKAGsOoNUhllaHmFsdYmp1iBHrEEerQ+w5gFYI2VodYm11iKXVIeYcQCuETK0QMmIh5MgBtELI3gohWyuErDmAVolZWiFkzgG0SszUKjGjfj6gVmKOVonZcwCtFbB9HQC+ozWDbz1bvGu9iKW1AuYcQOtFTLEX1GbIaFegN0OOHEBrhuw5gNYM2XIArRuz5gDacoB3bTnAEktxXQ4wfw0AvveM8b4tiJjSJOwLIsbXsAKeNeKCiOO3D+AVbUl0AfjGs8ZPbUnIdgFoa1LWC0BblfMuB9AeC1j6gqQE0J9LmC8AOYD2ZMb7i4bt2ZTpWoHfPoB7Tj2fXzT8N1X41vkq/QHOAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=cast.38e8a608.chunk.js.map