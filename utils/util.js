const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function send(url, method, data, success, fail) {
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json',
    },
    method: method,
    data: data,
    success(res) {
      success(res);
    },
    fail(res) {
      fail(res);
    }
  });
}
module.exports = {
  formatTime: formatTime,
  send:send,
}
