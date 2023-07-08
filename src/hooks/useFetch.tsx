import httpErrorHandling from "../shared/errorHandling";

const baseUrl = window.location.origin + "/api";
const loginUrl = "/login";
const activateAccountUrl = "/activate";
const registerUrl = "/register";
const orderUrl = "/order";
const approveUrl = "/approve";

async function postData(url = "", data = {}) {
  let result;

  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (response.ok) {
      result = {
        isSuccess: true,
        message: response.json(), // parses JSON response into native JavaScript objects
      };
    } else {
      result = httpErrorHandling(response);
    }
  } catch (err) {
    console.error(err);
  }
  return result;
}

export const activateAccount = async (data = {}) => {
  return await postData(baseUrl + activateAccountUrl, data);
};

export const login = async (data = {}) => {
  return await postData(baseUrl + loginUrl, data);
};

export const register = async (data = {}) => {
  return await postData(baseUrl + registerUrl, data);
};
export const order = async (data = {}) => {
  return await postData(baseUrl + orderUrl, data);
};
export const approve = async (data = {}) => {
  return await postData(baseUrl + approveUrl, data);
};
