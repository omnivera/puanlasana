<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark navbar-custom">
    <div class="container-fluid">
      <router-link :to="{name:'anasayfa'}" class="navbar-brand mb-0 h1">
        <span>
          <img src="@/assets/plogo6.png" style="width:2vw" alt />
          <strong>
            puanla<span style="color:#DE354C;font-weight:bold">sana</span>
            
          </strong>
        </span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
          <li class="nav-item">
            <router-link :to="{name:'anasayfa'} ">
              <a class="nav-link" style="border-color:red" aria-current="page" href="#">
                <button class="btn btn-outline-light" type="submit">
                  <i class="fa-solid fa-house"></i> Ana Sayfa
                </button>
              </a>
            </router-link>
          </li>

          

          <li class="nav-item">
            <router-link :to="{name:'Rankings'} ">
              <a class="nav-link" aria-current="page" href="#">
                <button class="btn btn-outline-light" type="submit">
                  <i class="fa-solid fa-ranking-star"></i> Top 10
                </button>
              </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'About'} ">
              <a class="nav-link" aria-current="page" href="#">
                <button class="btn btn-outline-light" type="submit">
                  <i class="fa-solid fa-address-card"></i> Hakkımızda
                </button>
              </a>
            </router-link>
          </li>

          <li v-if="kullaniciemail=='mert@gmail.com' || kullaniciemail=='haktanuzun@gmail.com' " class="nav-item">
            <router-link :to="{name:'Kategoriekle'} ">
              <a class="nav-link" aria-current="page" href="#">
                <button class="btn btn-outline-light" type="submit">
                  <i class="fa-solid fa-folder-plus"></i> Kategori Ekle
                </button>
              </a>
            </router-link>
          </li>

          <div v-if="kullaniciemail=='mert@gmail.com' || kullaniciemail=='haktanuzun@gmail.com' " class="dropdown nav-link">
            <button
              class="btn btn-outline-light dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="submit"
            >
              <i class="fa-solid fa-file"></i> İtemler
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <router-link :to="{name:'Itemekle'} " class="dropdown-item">
                <li>
                  <i class="fa-solid fa-file-circle-plus"></i> İtem Ekle
                </li>
              </router-link>
              <router-link :to="{name:'Itemduzenle'} " class="dropdown-item">
                <li>
                  <i class="fa-solid fa-file-pen"></i> İtem Düzenle
                </li>
              </router-link>
            </ul>
          </div>
        </ul>
        <div class="d-flex">
          <router-link v-if="!kullanici" :to="{name:'Login'} ">
            <button class="btn btn-outline-light" type="submit">
              <i class="fa-solid fa-user"></i> Giriş Yap
            </button>
          </router-link>

          <div v-if="kullanici" class="dropdown nav-link">
            <button
              class="btn btn-outline-light dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="submit"
            >
              <i class="fa-solid fa-user"></i> {{kullanici.displayName}}
            </button>

            <ul class="dropdown-menu" style="width:100%;z-index: 1000" aria-labelledby="dropdownMenuButton1">
             <li class="dropdown-item" @click="goProfile">
                  <i class="bi bi-person-square"></i> Profil
                </li>

                <li class="dropdown-item" @click="handleLogout">
                  <i class="fas fa-sign-out-alt"></i> Çıkış Yap
                </li>
           
         
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { firestoreRef } from "../firebase/config";
import {authRef} from '../firebase/config'
import getUser from "../composables/getUser";
import { ref, onMounted,watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import getYetki from '../composables/getYetki'

import firebase from 'firebase/app';

export default {
  setup() {

    const router = useRouter();
    const route = useRoute();
    const { kullanici } = getUser();
    const kullaniciad = ref("");
    const kullaniciemail = ref("");
    const adminkontrol = ref("");

  
 


 

    onMounted(async () => {

     

      

await authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
   
})

   

 
      /* const { admin } = await getYetki(adminmi.email);
      adminkontrol.value = admin.value; */

    
    });

    const goProfile= ()=>{
        
            router.push({name:'Profile'})
        }

      const handleLogout=async ()=>{
        sessionStorage.clear()
         localStorage.setItem('puanladi', JSON.stringify([]));
      
            await authRef.signOut()
          
        
            setTimeout(() => {
            router.go({name:'anasayfa'})
         
        }, 600);
       
        }

    return {kullaniciad,kullanici,handleLogout,goProfile,kullaniciemail};
  }
};
</script>

<style scoped>

.dropdown-item{

  cursor: pointer;
}
button:hover,
button:focus {
  outline: none;
}

.navbar.scrolled {
  background-color: red;
}

span {
  color: white;
  font-size: 1.1vw;

  font-family: "Comfortaa", cursive;
}

.btn {
  border-color: transparent;
}
</style>
