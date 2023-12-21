const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

const Api = async (url = "", options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Did not receive expected data");
    const data = await response.json();
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export { Api, API_BASE_URL };
