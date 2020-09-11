import axios from "axios";

class API {
  axiosInstance = null;

  constructor () {
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    axiosInstance.interceptors.request.use(
      config => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      error => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      error => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async adduser ({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async getUser (username) {
    try {
      const result = await this.axiosInstance.get("/users/" + username);

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async addMessage ({ username }) {
    try {
      const result = await this.axiosInstance.delete("/user/" + username);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getMessageList ({ limit, offset }) {
    try {
      const result = await this.axiosInstance.get(
        "/messages?limit=" + limit + "&offset=" + offset,
        {
          limit,
          offset,
        }
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async getMessageListByUser ({ limit, offset }, username) {
    try {
      const result = await this.axiosInstance.get(
        "/messages?limit=" +
          limit +
          "&offset=" +
          offset +
          "&username=" +
          username,
        {
          limit,
          offset,
          username,
        }
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  // &username=user
  async updateuser ({ password, about, displayName, username }) {
    console.log("from api", password, about, displayName, username);
    try {
      const result = await this.axiosInstance.patch(`/users/${username}`, {
        password,
        about,
        displayName,
      });

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteUser (username) {
    try {
      const result = await this.axiosInstance.delete(`/users/${username}`, {
        username,
      });

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteMsg (messageId) {
    try {
      const result = await this.axiosInstance.delete("/messages/" + messageId, {
        messageId,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async login ({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async logout () {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async likes (messageId) {
    console.log(messageId);
    try {
      const result = await this.axiosInstance.post("/likes", {
        messageId,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteLikes (id) {
    console.log("from api", id);

    try {
      const result = await this.axiosInstance.delete("/likes/" + id);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async addPicture (username, picture) {
    try {
      const result = await this.axiosInstance.put(
        "/users/" + username + "/picture",
        picture
      );
      console.log(result);
      return result;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      throw err;
    }
  }

  async getUserList ({ limit, offset }) {
    try {
      const result = await this.axiosInstance.get(
        "/users?limit=" + limit + "&offset=" + offset,
        { limit, offset }
      );
      console.log(result);
      return result;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      throw err;
    }
  }

  async getPictures (username) {
    try {
      const result = await this.axiosInstance.get(
        "/users/" + username + "/picture"
      );

      return result;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      throw err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor (err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken () {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
