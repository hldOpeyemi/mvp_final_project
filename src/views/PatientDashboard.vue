<template>
  <div class="patient_dashboard">

    <div class="about">
        <h1>{{ patient["first_name"] }} {{ patient["last_name"] }}</h1>
        <h3>{{ patient.contact_address}}</h3>
        <router-link :to="'patient?patient_id='+ patient.patient_id"/>
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
           Edit Profile
            </li>
          </router-link>
      </nav>
      </span>
      <div>
        <button @click="logout">Logout</button>
      </div>
  </div>

</template>

<script >
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'patientDashboard',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      patient: {}
    }
  },


methods: {
  getPatient() {
    const patient_id = VueCookies.get("patient_id")
    // const token = VueCookies.get("token")
    console.log(patient_id)

    const headers = {
      "Content-Type": "application/json",
      // "token": token
    }

    const options = {
        headers: headers
    }
      
    const url = `http://localhost:5000/api/patient?patient_id=${patient_id}`

    axios.get(url,options).then(this.success).catch(this.failure)
    },

     success(response) {
      console.log("SUCCESS", response)
      const patient=response.data
      this.patient=patient
     },
     
    failure(response) {
      //console.log("FAILURE", response)
    },



    logout() {

const token = VueCookies.get("patient_token")

const headers = {

"Content-Type": "application/json",
"token": token
  }
const url = `http://localhost:5000/api/patient-login`

axios.delete(url, {headers: headers}).then(this.logoutSuccess).catch(this.logoutFailure)
},

  logoutSuccess(response) {
    if (response.status === 200) {
      // VueCookies.delete(token)
      // VueCookies.delete(doctor_id)
      this.$router.push('/')
        }
    },
   
   logoutFailure(response) {
    //console.log("FAILURE", response)
    },

  },

  created() {
    this.getPatient()
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