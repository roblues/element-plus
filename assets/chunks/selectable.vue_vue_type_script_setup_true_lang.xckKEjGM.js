import{p,o as m,t as v,u as _,q as f,v as M,a as $,A as w,Y as N,_ as A,r as g,c as V,y as K,M as E}from"./framework.DcRevfCx.js";import{aD as B}from"./theme.Dyof5V-F.js";const P=p({__name:"basic",setup(y){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),r=u(n,++a);return{id:r,label:r,children:c?s(e,t,c,l+1,r):void 0}})},i={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return m(),v(o,{style:{"max-width":"600px"},data:_(d),props:i,height:208},null,8,["data"])}}}),q=p({__name:"custom-node",setup(y){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),r=u(n,++a);return{id:r,label:r,children:c?s(e,t,c,l+1,r):void 0}})},i={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return m(),v(o,{style:{"max-width":"600px"},data:_(d),props:i,height:208},{default:M(({node:l})=>[$("span",{class:w(["prefix",{"is-leaf":l.isLeaf}])},"[ElementPlus]",2),$("span",null,N(l.label),1)]),_:1},8,["data"])}}}),R=A(q,[["__scopeId","data-v-9c2a2d9c"]]),T=p({__name:"default-state",setup(y){const u=(n,a)=>`${n}-${a}`,s=(n,a,c,r=1,x="node")=>{let k=0;return Array.from({length:c}).fill(r).map(()=>{const b=r===n?0:Math.round(Math.random()*a),h=u(x,++k);return{id:h,label:h,children:b?s(n,a,b,r+1,h):void 0}})},i={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(const n of d){const a=n.children;if(a){t.push(n.id),e.push(a[0].id);break}}const o=g(e),l=g(t);return(n,a)=>{const c=f("el-tree-v2");return m(),v(c,{style:{"max-width":"600px"},data:_(d),height:208,props:i,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":l.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}}),z=p({__name:"disabled",setup(y){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),r=u(n,++a);return{id:r,label:r,children:c?s(e,t,c,l+1,r):void 0,disabled:r.includes("2")}})},i={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return m(),v(o,{style:{"max-width":"600px"},data:_(d),props:i,"show-checkbox":"",height:208},null,8,["data"])}}}),C=p({__name:"filter",setup(y){const u=(n,a)=>`${n}-${a}`,s=(n,a,c,r=1,x="node")=>{let k=0;return Array.from({length:c}).fill(r).map(()=>{const b=r===n?0:Math.round(Math.random()*a),h=u(x,++k);return{id:h,label:h,children:b?s(n,a,b,r+1,h):void 0}})},i=g(""),d=g(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=n=>{d.value.filter(n)},l=(n,a)=>a.label.includes(n);return(n,a)=>{const c=f("el-input");return m(),V(E,null,[K(c,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=r=>i.value=r),style:{width:"240px"},placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),K(_(B),{ref_key:"treeRef",ref:d,style:{"max-width":"600px"},data:_(e),props:t,"filter-method":l,height:208},null,8,["data"])],64)}}}),F=p({__name:"selectable",setup(y){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,n="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),r=u(n,++a);return{id:r,label:r,children:c?s(e,t,c,l+1,r):void 0}})},i={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return m(),v(o,{style:{"max-width":"600px"},data:_(d),props:i,"show-checkbox":"",height:208},null,8,["data"])}}});export{R as E,P as _,F as a,z as b,T as c,C as d};