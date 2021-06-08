import { getMultiData, getProduct } from '../../api/home.js'
import jsonData from '../../resource/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommend: [],
    weekHot:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData()
  },

  async _getMultiData() {
    const res = await getMultiData()
    const banners = res.data.banner && res.data.banner.list && res.data.banner.list.map((item) => {
      return item.image
    })
    const recommend = res.data.recommend && res.data.recommend.list
    console.log(jsonData);
    this.setData({
      banners,
      recommend,
      weekHot:jsonData.weekHotList
    })
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