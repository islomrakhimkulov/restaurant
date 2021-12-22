<template>
<div>
    <Header />
    <h1>Hello User, Welcome on Update Restaurant Page</h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" name="name" placeholder="Restaraunt name">
        <input type="text" v-model="restaurant.address" name="address" placeholder="Enter adress">
        <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter contact">
        <button type="button" v-on:click="updateRestaurant">Update restaurant</button>
    </form>
</template>
</div>
<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    name: 'Update',
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
       async updateRestaurant() {
           const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id ,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status == 200) {
                this.$router.push({name: 'Home'})
            }
        }
    },
   async mounted() {
        const user = localStorage.getItem('user-item');
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
        this.restaurant = result.data
     }
}
</script>
