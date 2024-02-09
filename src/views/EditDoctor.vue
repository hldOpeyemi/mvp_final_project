<template>
  <body>
    <div>
      <h3>Edit Your Details with Us</h3>
      
              <div id="update">
                <form v-on:submit.prevent="updateDoctor">
                
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

                  <button v-on:click="saveChange">Submit Changes</button>

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
  name: 'EditDoctor',
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

  saveChange() {
      console.log("saving this")
      this.updateDoctor()
    },


  updateDoctor() {
    
    const token = VueCookies.get("token")

    const headers = {
      "Content-Type": "application/json",
      "token": token

    }

    const body = {

      first_name:this.first_name,
      last_name:this.last_name,
      medical_id:this.medical_id,
      speciality:this.speciality,
      email_address:this.email_address,
      password: this.password,
      image_url:this.image_url

    }
  
    const options = {
      headers: headers
    }

    const url = "http://localhost:5000/api/doctor" 

    axios.patch(url,body,options).then(this.patchDocSuccess).catch(this.patchDocFailure)    

  },

    patchDocSuccess(response) {
      console.log("Patch SUCCESS", response)
      if (response.status === 200) {
      this.$router.push('/patient_dashboard').catch(()=>{})
      
      }
          
    },

    patchDocFailure(response) {
      console.log("Patch FAILURE", response)
    },

  }


   // success(response) {
  //     console.log(response);
  //     if (response.status === 200) {
  //       VueCookies.set("token", response.data.token)
  //       this.$router.push("/patient_dashboard")
  //     }
  //   },
  
  //   failure(response) {
  //     console.log(response)
  //   },

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