//axios.js

let baseURL = "http://192.168.50.237:5555";



const header = {
  "Content-Type": "application/json;charset=UTF-8",
  'accessToken':
    "eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZGVudGl0eSI6IkhSIiwiaWQiOiIxIiwiZXhwIjoxNzA5NTk1MTQzfQ.vUXTwTW7PxQlpQyv_RporMDZO2-XMekQlDSPel444VM",
};

const http = {
  get(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        data: params,
        header: header,
        method: "GET",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  post(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        data: params,
        header: header,
        method: "POST",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  put(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        data: params,
        header: header,
        method: "PUT",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  delete(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        data: params,
        header: header,
        method: "DELETE",
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
};

export default http;
