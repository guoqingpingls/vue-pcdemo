<template>
    <div class='log-form-wrap'>
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
                <div class='g-form-button' @click='login'>
                    <a>登陆</a>
                </div>
                <span class='g-form-error' v-show='loginError'>帐户名或密码错误</span>
                <span class='g-form-toggle' @click='registry'>没有帐号，点击注册</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'logForm',
  data () {
    return {
      userName: '',
      password: '',
      userNameError: false,
      passwordError: false,
      loginError: false,
      dialogName: 'logDialogShow'
    }
  },
  methods: {
    login () {
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
      this.$http.get('api/login').then((response) => {
        if (this.userName === response.body.username && this.password === response.body.userId.toString()) {
          this.$emit('login-success', response.body.username)
          this.$emit('login-close', this.dialogName)
          this.password = ''
        } else {
          this.loginError = true
        }
      }, (err) => {
        console.log(err)
      })
    },
    registry () {
      console.log('1111')
    }

  }
}
</script>
<style scoped>

</style>
