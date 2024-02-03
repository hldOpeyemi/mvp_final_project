<template>
  <body>
    <div id="header" class="headers">
    
      <h1> HLD Medical Clinic </h1>  

      <!-- navigation buttons here on the header -->
    </div>

    <section id="pages">
       
      <div id="pagesdiv" >
        
        <div class="button" id="button1">
          <div><img src="../assets/images/pexels-antoni-shkraba-5215017.jpg"></div>
          <div><router-link  to="/doctor_login"> Doctors </router-link></div>
        </div>

        <div class="button" id="button2">
          <div><img src="../assets/images/pexels-mart-production-7089401.jpg"></div>
          <div><router-link  to="/patient_login"> Patients </router-link></div>
        </div>

        <div class="button" id="appts">
          <div>Book an Appointments Here</div>
        </div>
            
      </div>

    </section>   
        
   

 
</body>
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
   // HelloWorld
  }
}
</script>

<style scoped>

divform {
  border-radius: 50px
}


#pagesdiv {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  
  

}

#div1 {
  background-image: url('../assets/images/pexels-karolina-grabowska-6627854.jpg');
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 800px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: right;
  align-items: right;
  min-height: 80vh;
  border-radius: 50px;
}

#image1 {
  width: 1500px;
  height: 800px;
}

.button {
  
  width: 100%;
  margin: 25px;
  display: block;  
  background-color: rgb(201, 189, 183);   
  border-radius: 20px;
}

#button1 {
  
  width: 60%;
  padding: 20px;
  border-radius: 20px;
  justify-content: flex-end; 
}

#pages {
  background-color: rgb(224, 211, 198);
  border-radius: 20px;
  display: inline;
 }

#button2 {
  
  width: 55%;
  padding: 20px;
  border-radius: 20px;
  justify-content: left;
}

#pagesdiv :hover {
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

img {
  width: 300px;
  height: 350px;
}

#header {
  background-color: rgb(206, 204, 200);
  margin: 50px;
  border-radius: 20px;
}


</style>