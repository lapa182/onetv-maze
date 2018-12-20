const axios = {
  create: () => new Promise(() => {}),
  get: () => new Promise(res => res({ data: "Mock with Jest" }))
};
export default axios;
