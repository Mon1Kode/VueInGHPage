import{_ as g}from"./CGIDI0pi.js";import{z as k,c as o,b,a as s,A as d,w as h,n as e,t as r,F as i,l as u,o as a,d as f,B as w}from"./B5funcwA.js";import{p as y}from"./D4m9t5Zp.js";const v={class:"min-h-screen px-6 py-20 max-w-5xl mx-auto font-sans text-gray-900 dark:text-white"},B={class:"flex flex-col sm:flex-row items-center gap-6 mt-8 mb-10"},F=["src"],N={class:"text-3xl font-bold"},V={class:"text-gray-600 dark:text-gray-400 text-sm mt-1"},A={key:0,class:"flex flex-wrap gap-3 mb-12"},C={class:"text-base leading-relaxed mb-10"},j={class:"overflow-x-auto whitespace-nowrap mb-12"},L={class:"flex gap-4"},z=["src"],S={key:1},D=["href"],G={__name:"[slug]",setup(E){const p={Flutter:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",Firebase:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",Figma:"bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100"},x=k().params.slug,t=y.find(n=>n.slug===x);return(n,c)=>{const _=g;return a(),o("div",v,[b(_,{to:"/",class:"text-blue-600 hover:underline text-sm"},{default:h(()=>c[0]||(c[0]=[f("← Back to home")])),_:1}),s("div",B,[s("img",{src:e(t).logo,alt:"App Logo",class:"w-16 h-16 rounded-lg shadow-md dark:shadow-slate-500"},null,8,F),s("div",null,[s("h1",N,r(e(t).title),1),s("p",V,r(e(t).subtitle),1)])]),e(t).stack&&e(t).stack.length?(a(),o("div",A,[(a(!0),o(i,null,u(e(t).stack,l=>(a(),o("span",{key:l,class:w(["px-3 py-1 rounded-full text-sm font-medium border",p[l]||"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"])},r(l),3))),128))])):d("",!0),s("p",C,r(e(t).description),1),s("div",j,[s("div",L,[(a(!0),o(i,null,u(e(t).screenshots,(l,m)=>(a(),o("img",{key:m,src:l,class:"w-[200px] md:w-[250px] h-auto rounded-xl shadow shrink-0 object-cover",alt:"App Screenshot"},null,8,z))),128))])]),e(t).link?(a(),o("div",S,[s("a",{href:e(t).link,target:"_blank",class:"inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"},r(e(t).cta||"View App"),9,D)])):d("",!0)])}}};export{G as default};
