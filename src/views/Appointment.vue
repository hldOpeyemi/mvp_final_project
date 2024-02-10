<template>


  <div id="app">
    <h1>Appointment Calendar</h1>
    <div id="calendar">
      <div class="weekdays">
        <div v-for="day in days" class="day">{{ day }}</div>
      </div>
      <div class="days">
        <div v-for="date in calendarDates" :class="{ 'today': date.isToday }" @click="openAppointmentForm(date)">
          {{ date.day }}
        </div>
      </div>
    </div>
    <div id="appointmentForm" v-if="showAppointmentForm">
      <h2>Add Appointment</h2>
      <form @submit.prevent="submitAppointment">
        <label for="appointmentName">Name:</label>
        <input type="text" id="appointmentName" v-model="appointmentName" required>
        <label for="appointmentDate">Date:</label>
        <input type="date" id="appointmentDate" v-model="selectedDate" required>
        <button type="submit">Add Appointment</button>
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

  data: {
    
    showAppointmentForm: false,
    selectedDate: null,
    appointmentName: ''
  },
  created() {
    this.openAppointmentForm();

  },
  methods: {
   
    openAppointmentForm(date) {
      this.selectedDate = new Date().toISOString().split('T')[0]; // default to today's date
      this.showAppointmentForm = true;
    },
    submitAppointment() {
      if (!this.appointmentName || !this.selectedDate) {
        alert('Please enter appointment name and date');
        return;
      }
      axios.post('/add-appointment', {
        name: this.appointmentName,
        date: this.selectedDate
      })
      .then(() => {
        alert('Appointment added successfully');
        this.appointmentName = '';
        this.selectedDate = null;
        this.showAppointmentForm = false;
      })
      .catch(error => {
        console.error('Error adding appointment:', error);
        alert('Failed to add appointment');
      });
    }
  }







}
</script>




<style scoped>

/* body {
  background-color: rgb(138, 128, 128); */
  
/* } */

/* styles.css */
#calendar {
    text-align: center;
    margin-bottom: 20px;
}

.month {
    display: flex;
    align-items: center;
}

.month button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.weekdays {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}

.weekdays div {
    width: 14%;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.days div {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}

.days .selected {
    background-color: lightblue;
}


</style>
  