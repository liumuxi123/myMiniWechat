import { getMultiData, getProduct } from '../../api/home.js'
import jsonData from '../../resource/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommend: [],
    weekHot: [],
    
    tabList: ['流行', '新款', '精选'],
    goodList:[]
  },
  currentTabType:'HOT',

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData()
    this.setData({
      goodList:jsonData.goodList[this.currentTabType]
    })
  },

  async _getMultiData() {
    const res = await getMultiData()
    const banners = res.data.banner && res.data.banner.list && res.data.banner.list.map((item) => {
      return item.image
    })
    const recommend = res.data.recommend && res.data.recommend.list
    this.setData({
      banners,
      recommend,
      weekHot:jsonData.weekHotList
    })
  },
  tabClick(e) {
    switch (e.detail.index) {
      case 0: this.currentTabType = 'HOT'; break;
      case 1: this.currentTabType = 'NEW'; break;
      case 2: this.currentTabType = 'SELL'; break;
      default: break;
    }
    this.setData({
      goodList:jsonData.goodList[this.currentTabType]
    })
  },
  goodClick(e) {
    wx.navigateTo({url:`../good-detail/good-detail?id=${e.currentTarget.dataset.id}&type=${this.currentTabType}`})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})