// pages/fundArchive/fundArchive.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fundCode:undefined,
    listData: [{
        "name": "基金全称",
        "value": "---"
      },
      {
        "name": "基金简称",
        "value": "---"
      },
      {
        "name": "基金代码",
        "value": "---"
      },
      {
        "name": "基金类型",
        "value": "---"
      },
      {
        "name": "投资策略",
        "value": "---"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      fundCode: options.fundCode
    })
    this.queryFundArchive()
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
  queryFundArchive(){
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundArchive/archiveInfoList",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCode: this.data.fundCode
      },
      success: (res) => {
        console.log(res)
        this.setData({
          listData: res.data.data.listData
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundDetail/fundDetail?fundCode='+this.data.fundCode
    })
  }
  
})