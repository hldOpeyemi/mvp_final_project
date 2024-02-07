<template>
  
  <div>
      <div class="doctorlogin">

        <h1> Doctor Login / Signup Page </h1> 
  
      </div>   
      
      <div id="links">
        <router-link  to="/doctor_signup">
            <li>
            To signup as a doctor click here
            </li>
        </router-link>
      </div>
        
      <div>  
          <form v-on:submit.prevent="doctorLogin">
            <h3>Login</h3>

            <label>email</label>
            <input v-model="email_address" type="text"/>   
            <label>password</label>
            <input v-model="password" type="password"/>

            <button type="submit">Log in</button>
          </form>
      </div>
  </div>
</template>

<script>

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'DoctorLogin',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      email_address: "",
      password: ""
    }
  },
  
  methods: {
    success(response) {
      console.log("SUCCESS", response)
      if (response.status === 200) {
        VueCookies.set("token", response.data.token)
        VueCookies.set("doctor_id", response.data.doctor_id)
        this.$router.push('/doctor_dashboard')
          }
        },
    
    failure(response) {
      console.log("FAILURE", response)
         },

    doctorLogin() {
        const body = {
        email_address: this.email_address,
        password: this.password
          }
          console.log(body)

     const url = "http://localhost:5000/api/doctor-login"

      axios.post(url,body).then(this.success).catch(this.failure)
    
    }
  }
}
</script>

<style scoped>



nav {
  display: inline-block;
}

li {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-style: dotted;
  border-color: beige;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(215, 183, 152);
}

</style>
