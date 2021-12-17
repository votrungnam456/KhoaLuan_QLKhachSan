const convertDate = (longTime, type = true) => {
  const date = new Date(longTime);
  if (type) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }
  else {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}
const convertDisplayCustomer = (data) => {
  let result = "";
  data.map((x, index) => {
    index === data.length - 1 ? result += x.name : result += x.name + ",";
    return true;
  });
  return result;
}
const convertDisplayRoomName = (data) => {
  let result = "";
  data.map((x, index) => {
    index === data.length - 1 ? result += x.nameRoom : result += x.nameRoom + ",";
    return true;
  });
  return result;
}
const convertStatus = (status) => {
  switch (status) {
    case 0:
      return "Trống"
    case 1:
      return "Đã đặt"
    case 2:
      return "Đang ở"
    case 3:
      return "Đang sửa"
    case 4:
      return "Đang dọn dẹp"
    default:
      break;
  }
}
export {convertDate,convertDisplayCustomer,convertStatus,convertDisplayRoomName}