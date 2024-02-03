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
    
    </div>
    <div class="about">
        
        <!-- <h3>{{ doctor.speciality }}</h3> -->
        <!-- <router-link :to="'doctor?id='+ doctor.id"/>     -->
    </div> 
     
    <!-- <div id="cart">
      <h3 class="main-title">Choose Order</h3>
      <router-link  to="/cart"> <h3>Cart</h3> </router-link>
    </div>

    <div v-for="menuItem in menu" :key="menuItem.id" id="menuholder">
      <ul>
          <li class="menulist">
            <div id="menu-desc">
              <img :src="menuItem.image_url" alt="Menu_Image" id="dishimage"/>          
              <h1 class="menuname">{{menuItem.name}}</h1>
              <h3>{{menuItem.description}}</h3>
              <h1>${{menuItem.price}}.00</h1>
              <button v-on:click="addToCart(menuItem)"> Click to Order</button>
              
            </div>
          </li>

      </ul>
     
  
    </div> -->
  

    

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
      // menu: [],
      // cart: []
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
      
    const url = `http://localhost:5000/api/doctor/${id}`

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

    // getMenu() {
    //   const restaurant_id = this.$route.query.restaurant_id
      
    //   const headers = {
    //   "x-api-key":"xldxOub6XfltqnJDAbVl",
    //   "Content-Type": "application/json"
    // }
    //     const options = {
    //     headers: headers
    // }
      
    // const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`

    // //console.log(restaurant_id)

    // axios.get(url,options).then(this.menuSuccess).catch(this.menuFailure)
    // },


    // menuSuccess(response) {
    //   //console.log("Menu SUCCESS", response)
    //   const menu=response.data
    //   this.menu=menu
    
    // },
    // menuFailure(response) {
    //   //console.log("Menu FAILURE", response)
    // },

    // addToCart(item) {
      
    //   this.cart.push(item)
      
    //   VueCookies.set("cart", JSON.stringify(this.cart))
    //   const cookies = this.$cookies.get("cart")
    //   console.log(cookies)
    // },


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