<template>


  <div id="app">
    <h1>Appointment Calendar</h1>
   
      
    <div id="update">
     
      <h2>Book an Appointment with me</h2>

      <form @submit.prevent="submitAppointment">

        <label for="appointmentName">Patient ID:</label>
        <input type="text" id="appointmentName" v-model="patient_id" required>

        <label for="appointmentName">Doctor ID:</label>
        <input type="text" id="appointmentName" v-model="doctor_id" required>
        
        <label for="appointmentDate">Date:</label>
        <input type="date" id="appointmentDate" v-model="appt_date" required>
        
        
        <label for="appointmentTime">StartTime</label>
        <input type="time" id="appointmentDate" v-model="start_time" required>
        
        
        <label for="appointmentDate">EndTime</label>
        <input type="time" id="appointmentDate" v-model="end_time" required>

        <label for="appointmentstatus">Status</label>
        <input type="text" id="appointmentDate" v-model="status" required>

        <button v-on:click="submitAppt">Add Appointment</button>
      </form>
    </div>
  </div>


  
</template>

<script >

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'Calendar',
  components: {
   // HelloWorld
  },

  data: function() {

    return {
    
    patient_id:"",
    doctor_id:"",
    appt_date: "",
    start_time: "",
    end_time: "",
    status: "",
    
  }
    
    // showAppointmentForm: false,
    // selectedDate: null,
    // appointmentName: ''
  },

  created() {
    // this.openAppointmentForm();

  },
  methods: {

   submitAppt() {
      this.addAppointment()
    },

    // getID() {
    //   const doctorID = this.$route.query.id
    //   this.doctor_id = doctorID
    //   const patientID = VueCookies.get("patient_id")
    //   this.patient_id = patientID
    //   console_log("doctorID", doctorID, " patientID", patientID)
    // },

  
    addAppointment() {

      // const doctorID = response.id
      // this.doctor_id = doctorID
      const patientID = VueCookies.get("patient_id")
      this.patient_id = patientID
    


      const headers = {
       "Content-Type": "application/json",
        
      }


      const body = {
        "patient_id":patientID,
        "doctor_id": this.doctor_id,
        appt_date: this.appt_date,
        start_time: this.start_time,
        end_time: this.end_time,
        status: this.status
      }
    
    
     
      
    
      // console.log(this.dish)

      const options = {
        headers: headers
      }

      const url = `http://localhost:5000/api/appointment`

      axios.post(url,body,options).then(this.postSuccess).catch(this.postFailure)
    },
    postSuccess(response) {
      // console.log("Post SUCCESS", response)
      if (response.status === 200) {
      this.$router.push('/patient_dashboard').catch(()=>{})
       }
    },

    postFailure(response) {
      // console.log("Patch FAILURE", response)
    

    },
  
  }







}
</script>




<style scoped>



</style>
