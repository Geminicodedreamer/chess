<template>
 
<ContentBase>
  <div class="row justify-content-md-center">
    <div class="col-3">
  <div class="mb-3">
    <label for="username" class="form-label">手机号</label>
    <input v-model="username" type="text" class="form-control" id="username">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">验证码</label>
    <div class="row"><div class="col-7"><input v-model="password" type="password" class="form-control" id="password"></div>
    <div class="col-5">
      <button size='mini' @click="send" v-if="$data.isSend" type="button" class="btn btn-light">发送验证码</button>
      <button size='mini' v-if="!$data.isSend" type="button" class="btn btn-light">{{sendmsg}}</button>
    </div>
    </div>
  </div>
  <div class="card">
    <button type="submit" class="btn btn-primary">使用手机号进行找回</button>
  </div>
  <p></p>
  <div class="card">
    <button type="submit" class="btn btn-primary">通知管理员进行找回</button>
  </div>
  </div>
  </div>
</ContentBase>

</template>

<script>
import ContentBase from '../components/ContentBase';
export default {
  name: 'FindKeyView',
  components: {
    ContentBase,
  },
  data() {
    return {
      sendmsg: '重新发送验证码',
      isSend: true,
      timeFun: null, // Add a property to store the interval ID
    };
  },
  methods: {
    send() {
      this.isSend = false;
      let timer = 60;
      this.sendmsg = timer + 's';

      this.timeFun = setInterval(() => {
        --timer;
        this.sendmsg = timer + 's';
        if (timer === 0) {
          this.isSend = true;
          this.sendmsg = '重新发送';
          clearInterval(this.timeFun);
        }
      }, 1000);
    },
  },
};  

</script>
<style scoped>
button{
  width:100%
}
.error-message{
  color:red;
  font-size:17px;
  padding:2px,2px;
}
img{
  width:5%;
  height: 5%;
  border-radius: 50%;
}
</style>