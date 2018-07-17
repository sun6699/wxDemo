//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    name: "MAX",
    Listinfo: [{}],
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://upliusun.vicp.io:12878/api/testwx.aspx/GetInfo',
      method: "Post",
      header: {
        'content-type': 'application/json' // 默认值
      }, success: function (res) {
        that.setData({ Listinfo: JSON.parse(res.data.d) });
      }
    })
  },
  onJump: function () {
    // wx.navigateTo({
    //   url: '../map/map'
    // })
    // wx.scanCode({
    //   onlyFromCamera: true,
    //   success: (res) => {
    //     console.log(res.result)
    //   }
    // })
    wx.vibrateLong({ 
      success:function(){console.log("成功")}
      })
  }
})



