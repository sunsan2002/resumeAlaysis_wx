import apiFun from "../../utils/api";

// pages/message/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    noreadMessage: [],
    readMessage: [],
    logs:[],
    nodeStatus:{
      1:'应聘人状态修改',
      2:'发送面试邀约',
      3:'发送入职邀约',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  read(event) {
    console.log(event)
    const index = event.currentTarget.dataset.index;
    const msgId = event.currentTarget.dataset.id
    const { noreadMessage,readMessage } = this.data;
    console.log(msgId)
    readMessage.push(noreadMessage.splice(index, 1)[0]); 
    debugger
    apiFun.message.readMsg(msgId).then((res)=>{
    })
    this.setData({
      readMessage,
      noreadMessage,
    });
  },

  

  getMsg(){
    apiFun.message.get().then(res=>{
      console.log(res)
      const msg = res.data
      const noread = msg.filter(item => item.isRead === false);
      const read = msg.filter(item=>item.isRead===true)
      this.setData({
        noreadMessage: noread,
        readMessage: read
      })
    })
  },

  getReverse(){
    const logs =  [...this.data.logs].reverse();
    this.setData({
      logs:logs
    })
  },

  getLogs(){
    apiFun.log.getLogByUser().then(res=>{
      console.log(res)
      this.setData({
        logs:res.data
      })
    })
  },

  readAll(){
      const {readMessage,noreadMessage} =this.data
      readMessage.push(...noreadMessage)
    this.setData({
        readMessage:readMessage,
        noreadMessage:[]
    })
  },

  delete(event){
    const index = event.currentTarget.dataset.index;
    const { noreadMessage,readMessage } = this.data;
    readMessage.splice(index, 1)
    this.setData({
        readMessage:readMessage
    })
  },
  deleteAll(){
    const { noreadMessage,readMessage } = this.data;
    this.setData({
        readMessage:[]
    })
  },

  onLoad(options) {
    this.getMsg()
    this.getLogs()
    this.getReverse()
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: "none",
    // });
  },
  handleTabChange() {
    // 取消消息提示的弹出操作
    return false;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
