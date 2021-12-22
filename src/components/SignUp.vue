<template>
<div>
  <img class="logo" src="../assets/sign-logo.png" alt="">
    <h1>Sign Up</h1>
    <div class="register">
            <input type="text" v-model="name"  placeholder="Enter Name">
            <input type="email" v-model="email" placeholder="Enter Email" required>
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="signUp">Sign Up</button>
            <p>
                <router-link to="/login">Login</router-link>
            </p>
     </div>
    </div>
</template>   
<script>

// import axios from 'axios'
// import { getDataBase } from 'firebase/database'
// import { getDataBase,ref, set } from 'firebase/database'

// const database = getDataBase();

export default {
    name: 'SingUp',
    data: () => ({
        name: '',
        email: '',
        password: ''
    }),
    methods: {
        // function writeUserData(userId, name, email, password) {
        //     const db = getDataBase();
        //     set(ref(db, 'users' + userId), {
        //         name: name,
        //         email: email,
        //         password: password
        //     })
        // }
    },
    mounted() {
        const user = localStorage.getItem('user-item');
        if(user) {
            this.$router.push({name: 'Home'});
        }
    }
}
</script>

<style>
 
</style>
