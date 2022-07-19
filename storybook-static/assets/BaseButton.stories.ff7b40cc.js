import{t as r,a as p,b as d,u as t,n as b,w as m,o as B}from"./vue.esm-bundler.cf819eac.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const y=["disabled"],s={__name:"BaseButton",props:{title:{type:String,default:"hi"},buttonStyle:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["buttonClick"],setup(e){const n=e,{title:i,buttonStyle:u,disabled:o}=r(n);return(c,a)=>(B(),p("button",{type:"button",disabled:t(o),class:b(["baseButton",[t(u),{disabled:t(o)}]]),onClick:a[0]||(a[0]=m(C=>c.$emit("buttonClick"),["prevent"]))},d(t(i)),11,y))}};var l=f(s,[["__scopeId","data-v-6bedaa5f"]]);s.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"hi"'}},{name:"buttonStyle",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"buttonClick"}]};var S={parameters:{storySource:{source:`import BaseButton from "../components/BaseButton.vue";
export default {
  title: "Base/BaseButton",
  component: BaseButton,
  argTypes: {
    title: "check",
    buttonStyle: {
      control: { type: "select" },
      options: ["navy", "white"],
    },
    buttonClick: {
      description: "@buttonClick",
      default: "buttonClick",
      control: { type: "select" },
      options: ["buttonClick"],
    },
    disabled: false,
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    const onClick = () => {
      alert("Click");
    };
    return { args, onClick };
  },
  template: '<base-button v-bind="args" @buttonClick="onClick"/>',
});

export const Button = Template.bind({});
Button.args = {
  title: "Demo",
  buttonStyle: "",
};
`,locationsMap:{button:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}}}}},title:"Base/BaseButton",component:l,argTypes:{title:"check",buttonStyle:{control:{type:"select"},options:["navy","white"]},buttonClick:{description:"@buttonClick",default:"buttonClick",control:{type:"select"},options:["buttonClick"]},disabled:!1}};const k=e=>({components:{BaseButton:l},setup(){return{args:e,onClick:()=>{alert("Click")}}},template:'<base-button v-bind="args" @buttonClick="onClick"/>'}),_=k.bind({});_.args={title:"Demo",buttonStyle:""};const h=["Button"];export{_ as Button,h as __namedExportsOrder,S as default};
//# sourceMappingURL=BaseButton.stories.ff7b40cc.js.map
