<template>
   <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
 .logo {
     width: 150px;
 }
 .register input, .login input, .add input {
     display: block;
     width: 300px;
     height: 40px;
     padding-left: 20px;
     margin-bottom: 30px;
     margin-right: auto;
     margin-left: auto;
     border: 1px solid #F2A444;
     outline: transparent;
     color: #F2A444;
     outline-color: #F2A444;
 }
 .register button, .login button, .add button {
     width: 320px;
     height: 40px;
     border: 1px solid #F2A444;
     background-color: #F2A444;
     color: #fff;
     cursor: pointer;
 }
</style>
