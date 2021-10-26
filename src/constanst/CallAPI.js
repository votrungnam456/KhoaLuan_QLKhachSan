import axios from "axios";


function loadData(API) {
  return axios.get(API);
}
// function getItem(API) {
//   return axios.get(API);
// }
function addItem(API,data) {
  return axios.post(API, data);
}
function deleteItem(API) {
  return axios.delete(API);
}
function updateItem(API,data) {
  return axios.put(API,data);
}
export {loadData,addItem,deleteItem,updateItem}