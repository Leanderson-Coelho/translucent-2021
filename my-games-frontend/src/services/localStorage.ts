export default {
  setItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  },

  getItem(key: string) {
    const object = localStorage.getItem(key);
    if (object) {
      return JSON.parse(object);
    }
    return object;
  },
};
