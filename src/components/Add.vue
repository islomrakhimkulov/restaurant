<template>
<div>
    <Header />
    <h1>Hello User, Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" name="name" placeholder="Restaraunt name">
        <input type="text" v-model="restaurant.address" name="address" placeholder="Enter adress">
        <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter contact">
        <button type="button" v-on:click="addRestaurant">Add restaurant</button>
    </form>
</div>

</template>
<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    name: 'Add',
    components: {
        Header
    },
    data(){
        return {
            restaurant :{
                name: '',
                address: '',
                contact:''
            }
        }
    },
    methods: {
      async addRestaurant() {
            // console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status == 201) {
                this.$router.push({name: 'Home'});
            }
        }
    },
    mounted() {
        const user = localStorage.getItem('user-item');
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>
