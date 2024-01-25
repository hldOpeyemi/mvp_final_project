<template>
  <div class="patientsignup">
       <h3>Patient Sign Up</h3>
    <form v-on:submit.prevent="signupPatient">

          
        <label>First Name</label>
        <input v-model="first_name" type="text"/>
    
        <label>Last name</label>
        <input v-model="last_name" type="text"/>

        <label>Date of Birth</label>
        <input v-model="date_of_birth" type="text"/>

        <label>Phone Number (XXX-XXX-XXXX)</label>
        <input v-model="phone_number" type="text"/>
    
        <label>Contact Address</label>
        <input v-model="contact_address" type="text"/>
    
        <label>Health Card Number</label>
        <input v-model="health_card_number" type="text"/>

        <label>Email</label>
        <input v-model="email" type="text"/>
    
        <label>Create a Password</label>
        <input v-model="password" type="password"/>

        <label>Gender</label>
        <input v-model="gender" type="text"/>

        <button type="submit">Submit</button>

        <!-- first_name, last_name, date_of_birth, phone_number, contact_address, health_card_number, email_address, password, gender -->
    
    </form>
  
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import VueCookies from 'vue-cookies';
// import VueRouter from 'vue-router'

export default {
  name: 'ClientSignup',
  components: {
   // HelloWorld
  },


data: function() {
  return {
    email:"",
    first_name:"",
    last_name:"",
    picture_url:"",
    username:"",
    password:""


  }
},

created: function() {

},
//mounted() {
  //this.$router = this.$router.bind(this)
//},

methods: {

  success(response) {
      console.log(response);
      if (response.status === 201) {
        VueCookies.set("token", response.data.token)
        this.$router.push("/restaurants")
      }
    },
  
    failure(response) {
      console.log(response)
    },

  signupPatient() {
    // event.preventDefault();
    let body = {
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      image_url: this.picture_url,
      username: this.username,
      password: this.password
    }
    console.log(body)

    const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "https://foodie.bymoen.codes/api/client" 

    // URL -> Parameter 1 of the .post function
    // BODY -> Parameter 2 of the .post function
    // OPTINS -> Parameter 2 of the .post function
    axios.post(url,body,options).then(this.success).catch(this.failure)    

  }

  }

}




</script>

<style scoped>


form {
  max-width: 500px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  color: #555;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: #aaa;
  border-bottom: 1px solid #ddd;
}
button {
  width: 50%;
  color: #555;
  padding: 10px 6px;
  margin: 25px 50px 15px;
  display: inline-block;

}
</style>