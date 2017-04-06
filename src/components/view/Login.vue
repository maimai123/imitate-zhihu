<template>
  <div class="login-page">
    <div class="login">
      <div class="form-group">
        <label for="username"></label>
        <input type="text" class="form-control" id="username" v-model="username" placeholder="username">
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="password">
      </div>
      <button type="button" class="btn btn-pink btn-block">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      show: true,
      username:'',
      password:''
    }
  }
}
</script>

<style lang="less" scoped>
.login-page{
  width:100%;
  height: 100vh;
  background: url('./../../assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
}
.login{
  width:8rem;
  height:10rem;
  position: absolute;
  top:50%;
  left:50%;
  margin-top: -5rem;
  margin-left: -4rem;
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
.form-control {
    display: block;
    width: 100%;
    height: 1.2rem;
    padding: .2rem .5rem;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: transparent;
    background-image: none;
    border: 1px solid #dac6c6;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(200,200,200,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.form-control:focus {
    border-color: #fa85a2;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(242,121,142,.075), 0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(242,121,142,.6);
}
.btn{
  width: 100%;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-top:1rem;
}
.btn-pink{
  color: #fff;
  background-color: #ff97c4;
  border-color: #ff97c4;
  &:hover{
    background-color: #ff82b8;
    border-color: #ff82b8;
  }
}
}
</style>
