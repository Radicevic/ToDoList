import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    // Možete dodati i druge globalne zaglavlja ovde ako je potrebno
  },
});

export default axiosInstance;
