<template>
  <div class="home">
    <div>
      <h1>AOS Oyun Bulutu</h1>
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <div>
            <p>Buluta oyun eklemek ve oyunları görmek için giriş yapınız</p>
            <button @click="handleGiris">Misafir Girişi</button>
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script>

import {ref} from 'vue'
import girisYap from '../composables/girisYap'
import {useRouter} from 'vue-router';
import gsap from 'gsap'
export default {
  name: 'Home',
  setup(){
    const {login} =girisYap();

    const router=useRouter()

    const handleGiris=async ()=>{

      await login()
      router.push({name:'Ekle'})
    }


    const beforeEnter=(el)=>{
      el.style.transform='translateY(200px)'
      el.style.opacity=0
    }

    const enter=(el,done)=>{
      gsap.to(el,{
        duration:2,
        y:0,
        opacity:1,
        ease:'back',
        onComplete:done
      })
    }


    return {handleGiris,enter,beforeEnter}
  }
}
</script>


<style scoped>

  button{
    background-color: #FD7272;
  }


  
</style>
