import{_}from"./NuxtImg.vue.db6fe9c5.js";import{d as m,K as i,r as f,b as s,c,L as e,Y as v,f as u,F as h,ah as k,n as b,p as g,i as w,e as x,k as B}from"./entry.78361708.js";const I=t=>(g("data-v-dc877b94"),t=t(),w(),t),S={key:1,class:"loaded"},V=["poster"],C=["src"],$=["src","type"],N=["autoplay","src"],P=I(()=>x("button",null,null,-1)),E=[P],F=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),d=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const p=i(()=>{var o,l;return r.src||((l=(o=r.sources)==null?void 0:o[0])==null?void 0:l.src)||!1});return(o,l)=>{const y=_;return s(),c("div",{class:b(["video-player",{loaded:e(d)}])},[(e(a)?e(a).poster:t.poster)?(s(),v(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(d)?(s(),c("div",S,[e(a)?e(a).name==="youtube"?(s(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,N)):u("",!0):(s(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(p)?(s(),c("source",{key:0,src:e(p)},null,8,C)):u("",!0),(s(!0),c(h,null,k(t.sources,n=>(s(),c("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,V))])):u("",!0),e(d)?u("",!0):(s(),c("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>d.value=!0)},E))],2)}}});const q=B(F,[["__scopeId","data-v-dc877b94"]]);export{q as default};
