<template>
    <div>
        <img class="logo" src="../assets/sign-logo.png" alt="">
        <h1>Sign up</h1>
        <div class="register">
            <input type="text" v-model="name"  placeholder="Enter Name">
            <input type="email" v-model="email" placeholder="Enter Email" required>
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="signUp">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''

        }
    },
    methods: {
        async signUp() {
            let results = await axios.post("http://localhost:3000/users", {
                email:this.email,
                name:this.name,
                password:this.password
            });
            if(results.status == 201) {
                alert('you signup yeeehu');
                localStorage.setItem("user-item",JSON.stringify(results.data));
            }
            console.warn(results);
        }
    }
}
</script>

<style scoped>
 .logo {
     width: 150px;
 }
 .register input {
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
 .register button {
     width: 320px;
     height: 40px;
     border: 1px solid #F2A444;
     background-color: #F2A444;
     color: #fff;
     cursor: pointer;
 }
</style>