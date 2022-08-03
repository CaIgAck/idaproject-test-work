export const setLocalStorageData = ({ key, value }) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageData = ({ key }) => {
  return JSON.parse(window.localStorage.getItem(key));
};
