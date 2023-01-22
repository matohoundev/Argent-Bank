import axios from "axios";

export default class ApiServices {
  constructor() {
    this.url = "http://localhost:3001/api/v1/";
  }

  async login(email, password) {
    try {
      const res = await axios.post(`${this.url}user/login`, {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message || error.message);
    }
  }

  async getProfileData() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await axios
      .post(`${this.url}user/profile`, {}, config)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async updateProfileData(firstName, lastName) {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      firstName: firstName,
      lastName: lastName,
    };
    return axios
      .put(`${this.url}user/profile`, data, config)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}
