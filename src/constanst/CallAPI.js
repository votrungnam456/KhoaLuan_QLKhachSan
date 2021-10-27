import axios from "axios";


function GET(API) {
  return axios.get(API);
}
function POST(API,data) {
  return axios.post(API, data);
}
function DELETE(API) {
  return axios.delete(API);
}
function PUT(API,data) {
  return axios.put(API,data);
}
export {GET,POST,DELETE,PUT}