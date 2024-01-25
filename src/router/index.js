import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PatientSignup from '../views/PatientSignup.vue'
import PatientLogin from '../views/PatientLogin.vue'
import DoctorsView from '../views/DoctorsView.vue'
import DoctorSignup from '../views/DoctorSignup.vue'
import DoctorView from '../views/DoctorView.vue'
import PatientDashboard from '../views/PatientDashboard.vue'
import DoctorDashboard from '../views/DoctorDashboard.vue'
import DoctorLogin from '../views/DoctorLogin.vue'
import DeletePatient from '../views/DeletePatient.vue'
import DeleteDoctor from '../views/DeleteDoctor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/patient_signup',
    name: 'patient_signup',
    component: PatientSignup
  },
  {
    path: '/patient_login',
    name: 'patient_login',
    component: PatientLogin
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsView
  },
  {
    path: '/doctor_signup',
    name: 'doctor_signup',
    component: DoctorSignup
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: DoctorView
  },
  {
    path: '/patient_dashboard',
    name: 'patient_dashboard',
    component: PatientDashboard
  },
  {
    path: '/doctor_dashboard',
    name: 'doctor_dashboard',
    component: DoctorDashboard
  },

  {
    path: '/doctor_login',
    name: 'doctor_login',
    component: DoctorLogin
  },
  
  {
    path: '/delete_doctor',
    name: 'delete_doctor',
    component: DeleteDoctor
  },

  {
    path: '/delete_patient',
    name: 'delete_patient',
    component: DeletePatient
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

