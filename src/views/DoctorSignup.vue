<template>
  <div class="doctorsignup">
       <h3>Doctor Sign Up</h3>
    <form v-on:submit.prevent="validateInput">

        <label>First Name</label>
        <input v-model="first_name" type="text"/>  
    
        <label>Last Name</label>
        <input v-model="last_name" type="text"/>
    
        <label>Medical ID</label>
        <input v-model="medical_id" type="text"/>
    
        <label>Speciality</label>
        <input v-model="speciality" type="text"/>

        <label>Email Address</label>
        <input v-model="email_address" type="text"/>
      
        <label>Create a Password</label>
        <input v-model="password" type="password"/>

        <label>Upload an Image</label>
        <input v-model="image_url" type="text"/>
  

        <button type="submit">Submit</button>
    
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
  name: 'DoctorSignup',
  components: {
   // HelloWorld
  },


data: function() {
  return {
    first_name:"",
    last_name:"",
    medical_id: "",
    speciality: "",
    email_address: "",
    password: "",
    image_url:""
}

  
},

created: function() {

},

//mounted() {
  //this.$router = this.$router.bind(this)
//},

methods: {
  validateInput(){
    console.log("validating")
    
    if (this.first_name === "") {
      console.log("Empty name field")
      return
    }

    this.signupDoctor()
  },  
  success(response) {
      console.log(response);
      if (response.status === 200) {
        VueCookies.set("token", response.data.token)
        this.$router.push("/")
      }
    },
  
    failure(response) {
      console.log(response)
    },

    signupDoctor() {
    // event.preventDefault();
    let body = {

      first_name:this.first_name,
      last_name:this.last_name,
      medical_id:this.medical_id,
      speciality:this.speciality,
      email_address:this.email_address,
      password: this.password,
      image_url:this.image_url
        
    }
     console.log(body)

    const headers = {
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "http://localhost:5000/api/doctor" 

   
    axios.post(url,body,options).then(this.success).catch(this.failure)    

  }

  }

}

</script>

<style>


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

input, select {
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