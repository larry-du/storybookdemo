import axios from "axios";
// const baseURL = "https://mtc-reseller.msi.com.tw/api/reseller";

const baseURL = "http://backend.test/api";

const mainApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default mainApi;
