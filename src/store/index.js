import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    UserInRoom:false,
    Sex:'man',
    Time:{
      Hours:"00",
      Minutes:"00",
      Seconds:"00"
    },
    User_id:0,
    Name:"",
    Work:false
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },setUserInfor(state,user){
      state.UserInRoom = user.User.inRoom;
      state.Sex = user.User.sex;
      state.Time.Hours = user.User.time.hours;
      state.Time.Minutes = user.User.time.mintus;
      state.Time.Seconds = user.User.time.seconds;
      state.User_id = user.User.user_id;
      state.Name = user.User.user_name;
    },setWorkStatus(state,user){
      state.Work = user.Work;
    }
  }
});

export default store;
