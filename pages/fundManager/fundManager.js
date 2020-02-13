// pages/fundManager/fundManager.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fundCode: undefined,
    managerIds:undefined,
    managerInfo:[{
      listData: [{
        "name": "累计任职时间",
        "value": "---"
      },
      {
        "name": "现任基金资产总规模",
        "value": "---"
      },
      {
        "name": "任职期间最佳基金回报",
        "value": "---"
      },
      {
        "name": "现任最佳基金回报",
        "value": "---"
      },
      {
        "name": "任职起始日期",
        "value": "---"
      }
      ],
      desc: "---"
    }],
    },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      fundCode: options.fundCode
    })
    this.setData({
      managerIds: options.managerIds.split(',')
    })
    this.queryManagerInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  queryManagerInfo(){
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundManager/managerInfoList",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      data: {
        managerIds: JSON.stringify(this.data.managerIds),
      },
      success: (res) => {
        var data = res.data.data;
        console.log(data)
        this.setData({
          managerInfo:data
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundDetail/fundDetail?fundCode=' + this.data.fundCode
    })
  }
})