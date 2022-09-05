import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "J 個要填阿",
  },
  string: {
    email: "${path} 須為有效的電子信箱",
    min: "${path} 不能小於 ${min} 個字元",
    length: "${path} 不能小於 ${length} 個字元",
  },
  number: {
    min: "${path} 不能小於 ${min}",
  },
});
export default yup;
