const convertDate = (longTime, type = true) => {
  if(!longTime) return '';
  const date = new Date(longTime);
  if (type) {
    return date.getFullYear() + "-" + String((date.getMonth() + 1)).padStart(2, '0') + "-" +  String(date.getDate()).padStart(2, '0');
  }
  else {
    return date.getFullYear() + "-" + String((date.getMonth() + 1)).padStart(2, '0') + "-" +  String(date.getDate()).padStart(2, '0') + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}
const convertDate2 = (time) => {
  const date = new Date(time);
  return date.getTime();
}
const convertDisplayCustomer = (data) => {
  let result = "";
  data.map((x, index) => {
    if (x) {
      index === data.length - 1 ? result += x.name : result += x.name + ",";
    }
    return true;
  });
  return result;
}
const convertDisplayRoomName = (data) => {
  let result = "";
  data.map((x, index) => {
    if (x) {
      index === data.length - 1 ? result += x.nameRoom : result += x.nameRoom + ",";
    }
    return true;
  });
  return result;
}
const convertStatus = (status) => {
  switch (status) {
    case -1:
      return "Trống"
    case 0:
      return "Đã đặt"
    case 1:
      return "Đang ở"
    case 2:
      return "Cần dọn dẹp"
    case 3:
      return "Đang dọn dẹp"
    default:
      break;
  }
}
const convertStatusClean = (status) => {
  switch (status) {
    case -1:
      return "Không cần dọn dẹp"
    case 0:
      return "Cần dọn dẹp"
    case 1:
      return "Đang dọn dẹp"
      case 2:
        return "Dọn dẹp xong"
    default:
      break;
  }
}
const getNow = (type = false) => {
  const date = new Date();
  let now = date.getFullYear() + "-" +  String((date.getMonth() + 1)).padStart(2, '0')+ "-" + String(date.getDate()).padStart(2, '0');
  if (type) {
    now = convertDate(date.getTime(), false);
  }
  return now;
}

export { convertDate, convertDisplayCustomer, convertStatus, convertDisplayRoomName, convertDate2, getNow,convertStatusClean }