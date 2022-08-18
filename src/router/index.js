import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Anasayfa from '../views/anasayfa.vue'



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
