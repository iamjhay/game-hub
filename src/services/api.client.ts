import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "109f454b11df4678a09726c3b603b847",
  },
});
