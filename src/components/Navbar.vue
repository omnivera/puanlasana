<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark navbar-custom">
    <div class="container-fluid">
      <router-link :to="{name:'anasayfa'}" class="navbar-brand mb-0 h1">
        <span>
          <img src="@/assets/plogo6.png" style="width:36px" alt />
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
                  <i class="fa-solid fa-folder-plus"></i> Kategoriler
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
                <span> <i class="fa-solid fa-file-circle-plus"></i> İtem Ekle</span> 
                </li>
              </router-link>
              <router-link :to="{name:'Itemduzenle'} " class="dropdown-item">
                <li>
                <span>  <i class="fa-solid fa-file-pen"></i> İtem Düzenle </span>
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
              class="btn btn-outline-light"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="submit"
            >
             <img v-if="userimg!=''" :src="userimg"  class="profile-pic-nav">{{kullanici.displayName}}
            </button>

            <ul class="dropdown-menu" style="width:100%;z-index: 1000" aria-labelledby="dropdownMenuButton1">
             <li class="dropdown-item" @click="goProfile">
                <span > <i class="bi bi-person-square"></i> Profil</span> 
                </li>
                <li class="dropdown-item" @click="goList">
                 <span> <i class="fas fa-list-ul"></i> Listem</span>
                </li>
                <hr>

                <li class="dropdown-item" @click="handleLogout">
               <span>  <i class="fas fa-sign-out-alt"></i> Çıkış Yap</span> 
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
    const userimg = ref("");

  
 


 

    onMounted(async () => {

     

      

await authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
   
})

      setTimeout(  function(){
        firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

        
         userimg.value = doc.data().userimg
        
     


         
        });
            }else{

                console.log('uye yok')
              

            }
        })




                },1300)

 
      /* const { admin } = await getYetki(adminmi.email);
      adminkontrol.value = admin.value; */

    
    });

    const goProfile= ()=>{
        
            router.push({name:'Profile'})
        }

          const goList= ()=>{
        
            router.push({name:'Listem'})
        }

      const handleLogout=async ()=>{
        sessionStorage.clear()
         localStorage.setItem('puanladi', JSON.stringify([]));
      
            await authRef.signOut()
          
        
            setTimeout(() => {
            router.go({name:'anasayfa'})
         
        }, 600);
       
        }

    return {kullaniciad,kullanici,handleLogout,goProfile,kullaniciemail,goList,userimg};
  }
};
</script>

<style scoped>


hr{
  margin: 5px 0;
}


.dropdown-menu{
  background-color: #0f0f0f;
  color: white;
  border: 1px solid #272727;
  padding: 0;
   
}

.dropdown-item i{
margin-right: 0.7rem;
}

.dropdown-item span{
display: table-cell; vertical-align: middle;
font-size: 0.9rem;
}

.dropdown-item{



  cursor: pointer;
 color: white;
 display: table; overflow: hidden;
 height: 3rem;

}


.dropdown-item:hover{

  background-color: #272727;
 color: white;
}

button{
   border-radius: 20px;
   transition: all .2s ease-in-out;
   font-size: 1rem;
}

button:hover{
    background-color: #272727;
 color: white;
 
   transform: scale(1.05);
}

button:focus {
  outline: none;
 box-shadow: 0 0 10px #181818;
}

.navbar.scrolled {
  background-color: red;
}

span {
  color: white;
  font-size: 1.15rem;

  font-family: "Comfortaa", cursive;
}

.btn {
  border-color: transparent;
}
</style>
