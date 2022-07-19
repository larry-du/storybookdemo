import{M as u}from"./Button.d07b7dfc.js";import{a as m,f as s,b as p,g as a,i as r,j as v,k as c,l as g,o}from"./vue.esm-bundler.cf819eac.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const d={name:"my-header",components:{MyButton:u},props:{user:{type:Object}},emits:["login","logout","createAccount"]},f={class:"wrapper"},y=v('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1),_={key:0,class:"welcome"},k=c("Welcome, "),b=c("!");function w(n,e,t,z,A,B){const l=g("my-button");return o(),m("header",null,[s("div",f,[y,s("div",null,[t.user?(o(),m("span",_,[k,s("b",null,p(t.user.name),1),b])):a("",!0),t.user?(o(),r(l,{key:1,size:"small",onClick:e[0]||(e[0]=i=>n.$emit("logout")),label:"Log out"})):a("",!0),t.user?a("",!0):(o(),r(l,{key:2,size:"small",onClick:e[1]||(e[1]=i=>n.$emit("login")),label:"Log in"})),t.user?a("",!0):(o(),r(l,{key:3,primary:"",size:"small",onClick:e[2]||(e[2]=i=>n.$emit("createAccount")),label:"Sign up"}))])])])}var C=h(d,[["render",w]]);d.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};export{C as M};
//# sourceMappingURL=Header.8013985c.js.map
