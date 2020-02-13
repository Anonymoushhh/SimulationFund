import Toast from '../../dist/toast/toast';
// pages/fundDetail/fundDetial.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultData: "---",
    defaultBoolean: true,
    unitNet: "---",
    estimatedNet: "---",
    accumulatedNet: "---",
    date: "2020-01-23",
    dateTime: "2020-01-23 15:00",
    fundName: "---",
    fundCode: "---",
    type: "---",
    risk: "---",
    minPurchaseAmount: "1000元起购",
    star: "---",
    gainToday: true,
    gainLastDay: true,
    gainRangeToday: "---",
    gainRangeLastDay: "---",
    managerIds: [],
    managerNames: "",
    fundCompanyId: "",
    fundCompanyName: "",
    listData: [{
        "time": "近1周",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "近1月",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "近3月",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
      },
      {
        "time": "近6月",
        "gain": "+1.00%",
        "avg": "+1.00%",
        "rank": "3.21%"
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
    this.queryTopMessage()
    this.queryNet()
    this.queryFooterMessage()
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
  /**
   * 净值查询
   */
  queryNet() {
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundDetail/netValues",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCode: this.data.fundCode,
      },
      success: (res) => {
        var data = res.data.data;
        if (!data.unitNet) {
          data.unitNet = this.defaultData
        }
        if (!data.accumulatedNet) {
          data.accumulatedNet = this.data.defaultData
        }
        if (!data.estimatedNet) {
          data.estimatedNet = this.data.defaultData
        }
        if (!data.gainToday) {
          data.gainToday = this.data.defaultBoolean
        }
        if (!data.gainLastDay) {
          data.gainLastDay = this.data.defaultBoolean
        }
        if (!data.gainRangeToday) {
          console.log(this.data.defaultData)
          data.gainRangeToday = this.data.defaultData
        }
        if (!data.gainRangeLastDay) {
          data.gainRangeLastDay = this.data.defaultData
        }
        console.log(data)
        this.setData({
          unitNet: data.unitNet,
          accumulatedNet: data.accumulatedNet,
          estimatedNet: data.estimatedNet,
          gainToday: data.gainToday,
          gainLastDay: data.gainLastDay,
          gainRangeToday: data.gainRangeToday,
          gainRangeLastDay: data.gainRangeLastDay
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  /**
 * topMessage查询
 */
  queryTopMessage() {
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundDetail/topMessage",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCode: this.data.fundCode,
      },
      success: (res) => {
        var data = res.data.data;
        console.log(data)
        this.setData({
          fundName: data.fundName,
          type: data.type,
          risk: data.risk,
          star: data.star
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  /**
* footerMessage查询
*/
  queryFooterMessage() {
    wx.request({
      url: app.globalData.baseProductUrlDev + "fundDetail/footerMessage",
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      data: {
        fundCode: this.data.fundCode,
      },
      success: (res) => {
        var data = res.data.data;
        console.log(data)
        this.setData({
          managerIds: data.managerIds,
          managerNames: data.managerNames.join(","),
          fundCompanyId: data.fundCompanyId,
          fundCompanyName: data.fundCompanyName
        });

      },
      fail: (res) => {
        console.log(res);
      }
    });
  },
  onClickLeft() {
    wx.redirectTo({
      url: '/pages/fundList/fundList'
    })
  },
  more() {
    wx.redirectTo({
      url: '/pages/achievement/achievement'
    })
  },
  addOptional() {
    Toast.fail('该基金暂不支持加入自选！');
  }
})