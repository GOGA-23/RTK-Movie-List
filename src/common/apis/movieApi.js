import axios from "axios";

// initially we were creating a base url and exporting them
export default axios.create({
  baseURL: "http://www.omdbapi.com",
});
