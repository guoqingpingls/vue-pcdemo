<template>
    <div @click='resetComponent'>
        <div class='app-head'>
            <div class='app-head-inner'>
                <router-link :to="{path: '/'}">
                    <img src="../assets/logo.png">
                </router-link>
                <div class="head-nav">
                    <ul class='nav-list'>
                        <li v-if="userName !== ''">{{ userName }}</li>
                        <li v-else @click = 'togDialogShow("logDialogShow")'>登陆</li>
                        <li class='nav-pile'>|</li>
                        <li v-if='userName !== ""' @click='logout'>退出<li>
                        <li v-if='userName === ""' @click = 'togDialogShow("regDialogShow")'>注册</li>
                        <li class='nav-pile'>|</li>
                        <li @click = 'togDialogShow("aboutDialogShow")'>关于</li>
                        <li class='nav-pile'>|</li>
                        <li><a href='/order'>我的订单</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='app-content'>
            <router-view></router-view>
        </div>
        <div class='app-foot'>© 2016 fishenal MIT</div>
        <my-dialog :dialog-show='dialogShow' :dialog-name = 'dialogName' @close-dialog = 'closeDialog'>
            <div v-show='logDialogShow'>
                <log-form @login-success='userLogin' @login-close='closeDialog'></log-form>
            </div>
            <div v-show='regDialogShow'>
                <reg-form></reg-form>
            </div>
            <div v-show='aboutDialogShow'>
                <p>this is a page of about you shen me nei rong ne ? I do not know ! but I need right something in it。
                    this is a page of about you shen me nei rong ne ? I do not know ! but I need right something in it
                </p>
            </div>
        </my-dialog>
    </div>
</template>
<script>
import myDialog from './base/myDialog'
import logForm from './base/logForm'
import regForm from './base/regForm'
import { eventBus } from '../eventBus'
export default {
  name: 'layout',
  data () {
    return {
      dialogShow: false,
      logDialogShow: false,
      regDialogShow: false,
      aboutDialogShow: false,
      dialogName: '',
      userName: ''
    }
  },
  components: {
    myDialog,
    logForm,
    regForm
  },
  methods: {
    togDialogShow (attr) {
      this[attr] = true
      this.dialogShow = true
      this.dialogName = attr
    },
    closeDialog (attr) {
      this.dialogShow = false
      this[attr] = false
    },
    userLogin (name) {
      this.userName = name
    },
    logout () {
      this.userName = ''
    },
    resetComponent () {
      eventBus.$emit('reset-component')
    }
  }
}
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head{
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
}
.app-head-inner{
    width: 1200px;
    margin: 0 auto;
}
.app-head-inner img{
    width: 50px;
    height: 50px;
    margin-top: 20px;
}
.head-nav{
    float: right;
}
.nav-list li{
    float: left;
    cursor: pointer;
}
.nav-pile{
    padding: 0 10px;
}
.app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
}
/* 主体部分 */
.app-content {
    width: 1200px;
    margin: 10px auto;
}
/* 表单样式 */
.g-form-line {
    padding: 15px;
}
.g-form-lable {
    width: 80px;
    font-size: 16px;
    display: inline-block;
}
.g-form-input {
    display: inline-block;
}
.g-form-input input {
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 3px;
    border: 1px solid #aaa;
    color: #aaa;
}
.g-form-error {
    color: #f00;
    display: inline-block;
    margin-left: 10px;
}
.g-form-button {
    width: 100px;
    background: #4499ff;
    color: #fff;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}
.g-form-toggle{
    font-size: 11px;
    text-decoration: underline;
    color:darkblue;
    cursor:pointer;
}
</style>