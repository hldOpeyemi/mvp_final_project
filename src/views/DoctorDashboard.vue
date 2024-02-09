<template>
  <div class="patient_dashboard">

    <div class="about">
        <h1>{{ doctor["first_name"] }} {{ doctor["last_name"] }}</h1>
        <h3>{{ doctor.speciality}}</h3>
        <!-- <router-link :to="'patient?patient_id='+ patient.patient_id"/> -->
    </div>

    <h1> Welcome to your Page </h1>   
    <span id="links">
      <nav>
          <router-link  to="/">
            <li>
           Home
            </li>
          </router-link>

          <router-link  to="/doctors">
            <li>
           Doctors
            </li>
          </router-link>

          <router-link  to="/edit_patient">
            <li>
           Edit Patient
            </li>
          </router-link>

          <router-link  to="/edit_doctor">
            <li>
           Edit Profile
            </li>
          </router-link>
      </nav>
      </span>
  </div>

</template>

<script >
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'docotrDashboard',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      doctor: {}
    }
  },


methods: {
  getDoctor() {
    const doctor_id = VueCookies.get("doctor_id")
    const token = VueCookies.get("token")
    console.log(doctor_id)

    const headers = {
      "Content-Type": "application/json",
      "token": token
    }

    const options = {
        headers: headers
    }
      
    const url = `http://localhost:5000/api/doctor?doctor_id=${doctor_id}`

    axios.get(url,options).then(this.success).catch(this.failure)
    },

     success(response) {
      console.log("SUCCESS", response)
      const doctor=response.data
      this.doctor=doctor
     },
     
    failure(response) {
      //console.log("FAILURE", response)
    }
  },

  created() {
    this.getDoctor()
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

.images {
  width: 100px;
}

article {
  display: inline-block;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
 
}


</style>