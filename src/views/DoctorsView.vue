<template>
  <div class="about">
    <h1> Doctors </h1>
    <div> 
      <span id="links">
        <router-link  to="/">
           <li class="router">
              Home
           </li>
        </router-link>

        <router-link  to="/patient_dashboard">
            <li class="router">
              My Dashboard
            </li>
        </router-link>


      </span>
    </div>
    
      <div v-for="doctor in doctors" :key="doctor.id" id="health">
        <ul>
          <li class="doctors">
              <h3>Dr. {{ doctor.first_name }} {{ doctor.last_name }}</h3>
              <h4>Speciality - {{ doctor.speciality }}</h4>
              <img :src="doctor.image_url" alt="Doctor's Picture"/>
          
          </li>
          <router-link :to="'doctors/'+ doctor.id">
              <button class="btn">Visit my page to book an appointment </button>
          </router-link>

        </ul>
        
      </div>
  </div>

  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';

export default {
  name: 'DoctorsView',
  components: {
   // HelloWorld
  },

  created: function() {
    const headers = {
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "http://localhost:5000/api/doctors" 

    axios.get(url,options).then(this.success).catch(this.failure)    
    
    // console.log("creating restaurant")
}, 

  data: function() {
  return {
    doctors: []

  }
},

 methods : {
  success(response) {
      console.log("SUCCESS", response);
      
      const doctors = response.data 
      this.doctors = doctors
    },
  
    failure(response) {
      console.log("FAILURE", response)
    },


 }

}
</script>

<style scoped>
#health {
  margin-top: 20px;
  display: inline-block;
}


img {
  width: 300px;
  height: 200px
}

button {
  width: 200px;
  color: #555;
  padding: 10px 6px;
  margin: 25px 50px ;
  border-radius: 28px;
  border-style: none;
  border-color: rgb(134, 126, 88);
}

.btn:hover {
  animation: shake 0.5s;
  animation-iteration-count: initial;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }

   
}

.router {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-style: dotted;
  border-color: beige;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(179, 173, 167);
}

.restaurants {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
}

</style>