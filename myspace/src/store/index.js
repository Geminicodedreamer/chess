import { createStore } from 'vuex'
import ModuleUser from './user';

export default createStore({
  state: {
    //user:{
      //username:"",
      //id:"",
     // firstName:"",
     // lastName:"",
   // },
    //products:{

    //},
    //http:{


    //}
    
     /* id:"",
      username:"",
      photo:"",
      followerCount:0,*/
  
    
  },
  getters: {
    //fullName(state){
     // return state.user.firstName+state.user.lastName;
   // }
  },
  mutations: {
   // updateUser(state,user){

    //}
  },
  actions: {
    ///updateUser(context){
      //let resp;
      //context.state.user.userName=resp.userName

    //},
  
 

  },
  //对state进行分割
  modules: {
    //users:{


    //}
    user:ModuleUser,
  }
})
