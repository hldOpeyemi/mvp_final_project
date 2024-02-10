<template>
  <div>

    <div>
      <span id="links">
       <nav>
          <router-link  to="/">
            <li>
           Home
            </li>
          </router-link>

          <router-link  to="/patient_dashboard">
            <li>
           My DashBoard
            </li>
          </router-link>

        </nav>
      </span>
    </div>

    <div>
      <h1>Welcome to my page</h1>
      
      <h3>I am Dr. {{ doctor.first_name }}  {{ doctor.last_name }}</h3>

      <h4>I am a {{ doctor.speciality }}</h4>
    
    <div>
      <img :src="doctor.image_url" alt="Doctor's image" class="images"/>
    </div>
    
    <router-link to="/appointment">
      <button class="btn">Book an Appointment</button>
    </router-link>
    
    </div>
    <div class="about">
        
    </div> 
  

    

  </div>

  
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';


export default {
  name: 'DoctorView',
  components: { 
   // HelloWorld
  },
  
  data: function() {
    return {
      doctor: {},
      
    }
  },

  methods: {
    getDoctor() {
      const { id } = this.$route.params
      
      const token = VueCookies.get("token")

      const headers = {
      "Content-Type": "application/json",
       "token": token
    }
        const options = {
        headers: headers
    }
      
    const url = `http://localhost:5000/api/doctor?doctor_id=${id}`

    //console.log(restaurant_id)

    axios.get(url,options).then(this.success).catch(this.failure)
    },

     success(response) {
      console.log("SUCCESS", response)
      const doctor=response.data

      console.log("JUST THE DOCTOR", doctor)
      this.doctor=doctor
    },
    failure(response) {
      //console.log("FAILURE", response)
    },

  },

  created() {
    // this.getMenu()
    this.getDoctor()
    //console.log(cookies)
  }
 

}
</script>

<style scoped>

#menuholder {
  margin-top: 20px;
  display: inline-block;
}

.menulist {
  display: grid;
  padding: 20px;
  width: 400px;
  height: 600px;
  margin: 20px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
}

#dishimage {
  width: 200px;
  height: 200px

}

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
  width: 200px
}

/* #menu-name {
  display: grid;
} */

</style>