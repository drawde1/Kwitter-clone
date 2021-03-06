import axios from "axios";

class API {
  axiosInstance = null;

  constructor () {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
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
  async getUser(username) {
    try {
    const result = await this.axiosInstance.get("/users/"+username)
      
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async addMessage ({ text }) {
    try {
      const result = await this.axiosInstance.post("/messages", {
        text,
      });

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

  async updateuser ({ password, about, displayName, username }) {
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
      const result = await this.axiosInstance.delete(`/users/${username}`,
      {
        username
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
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  
  async getUserList ({limit, offset}) {
    try {
      const result = await this.axiosInstance.get(
        "/users?limit="+limit+"&offset="+ offset,
        {limit,offset}
      
      );
      return result;
    } catch (err) {
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
// "I have a good idea of what I need to do with the API, but I'm a little unsure about where I should be implementing it. I am also not strong on redux."
