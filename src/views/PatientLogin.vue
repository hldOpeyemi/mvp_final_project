<template>
  <div class="patientlogin">
    <h1> Patient Log in </h1> 

    <div id="links">
        <router-link  to="/patient_signup">
            <li>
            Please login to book an appointment
            </li>
        </router-link>
      </div>
       
    <form v-on:submit.prevent="patientLogin">
      <label>email</label>
      <input v-model="email" type="text"/>   
      <label>password</label>
      <input v-model="password" type="password"/>

      <button type="submit">Log in</button>
 
  </form>
  </div>
</template>

<script>

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'PatientLogin',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      email: "",
      password: ""
    }
  },
  
  methods: {
    success(response) {
      console.log("SUCCESS", response)
      if (response.status === 200) {
        VueCookies.set("patient_token", response.data.patient_token)
        VueCookies.set("patient_id", response.data.patient_id)
        this.$router.push("/patient_dashboard")
          }
        },
    
    failure(response) {
      console.log("FAILURE", response)
         },

    patientLogin() {
        const body = {
        email: this.email,
        password: this.password
          }

    const url = "http://localhost:5000/api/patient-login"

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

