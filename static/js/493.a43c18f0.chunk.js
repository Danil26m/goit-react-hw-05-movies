"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{493:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),c=n(791),a=n(689),i=n(87),o=n(184);function u(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1],s=(0,a.TH)();return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=74e6158a65e53d6dc937ccdd03fe4703").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e.results;return u(t)})).catch(console.log)}),[]),(0,o.jsx)(o.Fragment,{children:"/"===s.pathname?(0,o.jsx)("ul",{children:n.map((function(e){var t=e.original_title,n=e.id;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"movies/".concat(n),children:t})},n)}))}):(0,o.jsx)(c.Suspense,{fallback:null,children:(0,o.jsx)(a.j3,{})})})}}}]);
//# sourceMappingURL=493.a43c18f0.chunk.js.map