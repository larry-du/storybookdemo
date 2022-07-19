import BaseButton from "../components/BaseButton.vue";
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
      control: {
        type: null,
      },
    },
    onClick: {
      name: "test",
    },
    disabled: false,
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    const onClick = () => {
      //   alert("Click");
      // console.log("hi");
    };
    return { args, onClick };
  },
  template: '<base-button v-bind="args"/>',
});

export const Button = Template.bind({});
Button.args = {
  title: "Demo",
  buttonStyle: "",
};
