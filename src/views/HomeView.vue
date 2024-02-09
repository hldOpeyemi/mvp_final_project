<template>
  <div id="all">
    <header>
      <h1>HLD Medical Clinic</h1>
      <!-- Add navigation buttons here -->
    </header>

    <main>
      <section id="buttons">
        <div class="button" id="button1">
          <div><img src="../assets/images/pexels-antoni-shkraba-5215017.jpg" alt="Doctors"></div>
          <div><router-link to="/doctor_login">Doctors</router-link></div>
        </div>

        <div class="button" id="button2">
          <div><img src="../assets/images/pexels-mart-production-7089401.jpg" alt="Patients"></div>
          <div><router-link to="/patient_login">Patients</router-link></div>
        </div>

        <div class="button" id="appointments">
          <div>Book an Appointment Here</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
#buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgb(163, 144, 119);
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  height: auto;
}

header {
  background-color: rgb(226, 205, 161);
  padding: 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

header h1 {
  margin: 0;
  font-size: 2rem;
  text-align: center;
}

#all{
background-color: #bdae90;
}

</style>
