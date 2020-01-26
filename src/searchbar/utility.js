class Utility {
  static getList(list, id, name) {
    try {
      const arr = [];
      list.map(item => {
        const obj = { id: item[id], name: item[name] };
        arr.push(obj);
      });
      return arr;
    } catch (er) {
      console.log(er);
      return [];
    }
  }
}
export default Utility;
