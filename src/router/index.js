import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


import Login from '../views/auth/Login.vue'

import Anasayfa from '../views/anasayfa.vue'

import Rankings from '../views/Rankings.vue'

import Kategoriekle from '../views/kategori/Kategoriekle.vue'

import Kategoriler from '../views/Kategoriler.vue'

import Itemekle from '../views/Item/Itemekle.vue'
import Itemduzenle from '../views/Item/Itemduzenle.vue'
import Itemview from '../views/Item/Itemview.vue'


import Puanla from '../views/Puanla.vue'



/* import {authRef} from '../firebase/config'
import getYetki from '@/composables/getYetki'
const authGiris=(to,from,next)=>{
  let kullanici=authRef.currentUser

  if(!kullanici){
    next({name:'Login'})
  }else{
    next()
  }
}
 */

/* const adminkontrol=async (to,from,next)=>{

  let kullanici=authRef.currentUser;
           
  const {admin} = await getYetki(kullanici.email) 

  if(admin.value==true){
    next()
  }else{
    next({name:'Home'})
  }

} */









const routes = [





  


  {
    path: '/',
    name: 'Home',
    component: Home,
   /*  beforeEnter:authGiris, */

    children:[
      
     
      {
        path: '/',
        name: 'anasayfa',
        component: Anasayfa,
       
      },

      {
        path: '/Rankings',
        name: 'Rankings',
        component: Rankings,
       
      },

      {
        path: '/Kategoriekle',
        name: 'Kategoriekle',
        component: Kategoriekle,
       
      },

      {
        path: '/Kategoriler',
        name: 'Kategoriler',
        component: Kategoriler,
       
      },

      {
        path: '/Itemekle',
        name: 'Itemekle',
        component: Itemekle,
       
      },

      {
        path: '/Itemduzenle',
        name: 'Itemduzenle',
        component: Itemduzenle,
       
      },

      {
        path: '/Itemview/:kategori/:veriID',
        name: 'Itemview',
        component: Itemview,
       
      },

      {
        path: '/Puanla/:Kategori',
        name: 'Puanla',
        component: Puanla,
       
      },


      {
        path: '/Login',
        name: 'Login',
        component: Login,
       
      },

      


      
    

     
      


    ],
   
    
  },

 
/*   {
    path: '/login',
    name: 'Login',
    component: Login
  }, */

 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
