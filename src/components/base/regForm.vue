<template>
  <div class='reg-wrap'>
      <div class='g-form'>
            <div class='g-form-line'>
                <span　class='g-form-lable'>用户名：</span>
                <div class='g-form-input'>
                    <input type='text' placeholder='请输入用户名' v-model='userName'>
                </div>
                <span v-show='userNameError' class='g-form-error'>输入有误</span>
            </div>
            <div class='g-form-line'>
                <span　class='g-form-lable'>密码：</span>
                <div class='g-form-input'>
                    <input type='password' placeholder='请输入密码' v-model='password'>
                </div>
                <span v-show='passwordError' class='g-form-error'>输入有误</span>
            </div>
            <div class='g-form-line'>
                <span　class='g-form-lable'>确认密码：</span>
                <div class='g-form-input'>
                    <input type='password' placeholder='请输入密码' v-model='ensurePassword'>
                </div>
                <span v-show='ensureError' class='g-form-error'>两次输入不一致</span>
            </div>
            <div class='g-form-line'>
                <div class='g-form-button' @click='registry'>
                    <a>注册</a>
                </div>
                <span class='g-form-toggle' @click='login'>已有帐号，点击登陆</span>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'regForm',
  data () {
    return {
      userName: '',
      password: '',
      ensurePassword: '',
      userNameError: false,
      passwordError: false,
      ensureError: false
    }
  },
  methods: {
    registry () {
      if (this.userName.indexOf('@') < 0) {
        this.userNameError = true
      } else {
        this.userNameError = false
      }
      if (this.password.length !== 6) {
        this.passwordError = true
      } else {
        this.passwordError = false
      }
      if (this.password !== this.ensurePassword) {
        this.ensureError = true
      } else {
        this.ensureError = false
      }
    },
    login () {
      console.log('login')
    }
  }
}
</script>
<style>

</style>


