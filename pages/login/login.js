//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    name: "",
    pwd: "",
    Listinfo: [{}],
  },
  onLoad: function () {
    var that = this
  },
  textinput: function (e) {
    var types = e.currentTarget.dataset.type;
    if (types == 1) {
      this.setData({
        name: e.detail.value
      })
    } else {
      this.setData({
        pwd: e.detail.value
      })
    }

  },
  login: function (e) {
    var that=this
    var name=that.data.name
    var pwd=that.data.pwd
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://upliusun.vicp.io:12878/api/testwx.aspx/Login',
            data: {
              name: name,
              pwd: pwd,
              code: res.code,
            },
            method: "POST",
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              console.log(res.data.d)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  }
})