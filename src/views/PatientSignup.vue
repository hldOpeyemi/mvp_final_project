<template>
  <body>
    <div class="wrapper">
      <h3>Patient Sign Up</h3>
      
              <div id="signup">
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
                  <input v-model="email_address" type="text"/>
              
                  <label>Create a Password</label>
                  <input v-model="password" type="password"/>

                  <label>Gender</label>
                  <input v-model="gender" type="text"/>

                  <label>Emergency Contact Number</label>
                  <input v-model="emergency_contact" type="text"/>

                  <button type="submit">Submit</button>

              <!-- first_name, last_name, date_of_birth, phone_number, contact_address, health_card_number, email_address, password, gender -->
          
                </form>
              </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import VueCookies from 'vue-cookies';
// import VueRouter from 'vue-router'

export default {
  name: 'PatientSignup',
  components: {
   // HelloWorld
  },


data: function() {
  return {
    
    first_name:"",
    last_name:"",
    date_of_birth:"",
    phone_number:"",
    contact_address:"",
    health_card_number:"",
    email_address:"",
    password:"",
    gender:"",
    emergency_contact:""


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
      if (response.status === 200) {
        VueCookies.set("token", response.data.token)
        this.$router.push("/patient_login")
      }
    },
  
    failure(response) {
      console.log(response)
    },

  signupPatient() {
    // event.preventDefault();
    let body = {

      first_name: this.first_name,
      last_name: this.last_name,
      date_of_birth: this.date_of_birth,
      phone_number: this.phone_number,
      contact_address: this.contact_address,
      health_card_number: this.health_card_number,
      email_address: this.email_address,
      password: this.password,
      gender: this.gender,
      emergency_contact: this.emergency_contact

    }

    console.log(body)

    const headers = {
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "http://localhost:5000/api/patient" 

    // URL -> Parameter 1 of the .post function
    // BODY -> Parameter 2 of the .post function
    // OPTINS -> Parameter 2 of the .post function
    axios.post(url,body,options).then(this.success).catch(this.failure)    

  }

  }

}


</script>

<style scoped>
/* 
#signup {
   
} */

body {
  background-color: rgb(207, 194, 177);
}

#signup {
  max-width: 500px;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 20px;
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