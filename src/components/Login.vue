<template>
<div>
    <img class="logo" src="../assets/sign-logo.png" alt="">
    <h1>Login</h1>
    <div class="login">
            <input type="email" v-model="email" placeholder="Enter Email" required>
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/sign-up">Sign Up</router-link>
            </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      async  login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&passowrd=${this.password}`
            )
            if(result.status == 200 && result.data.lenght > 0) {
                localStorage.setItem("user-item",JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})
            }
            console.log(result);
        }
    },
    mounted() {
        const user = localStorage.getItem('user-item');
        if(user) {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
