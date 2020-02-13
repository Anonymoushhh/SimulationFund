// pages/fundCompany/fundCompany.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fundCode:undefined,
    fundCompanyName:"---",
    fundCompanyId:undefined,
    listData: [
      {
        "name": "公司简称",
        "value": "---"
      },
      {
      "name": "总经理",
        "value": "---"
      },
      {
        "name": "管理规模",
        "value": "---"
      },
      {
        "name": "基金数量",
        "value": "---"
      },
      {
        "name": "成立日期",
        "value": "---"
      },
      {
        "name": "评级",
        "value": "---"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      fundCode: options.fundCode
    })
    this.setData({
      fundCompanyId: options.fundCompanyId
    })
    this.queryFundCompany()
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
  queryFundCompany(){
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundCompany/fundCompanyInfoList",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCompanyId: this.data.fundCompanyId
      },
      success: (res) => {
        var data = res.data.data;
        console.log(res)
        console.log(data)
        this.setData({
          fundCompanyName: data.fundCompanyName,
          listData: data.listData
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