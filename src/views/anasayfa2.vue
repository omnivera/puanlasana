.<template>


 <section class="showcase">
      <div class="video-container">
        <video src="https://drive.google.com/uc?export=download&id=19hDOay4fFilO0xnSwrgn_X4DgzyHtbyX" autoplay muted loop></video>
      </div>
      <div class="content">
         <div class="baslik d-flex justify-content-center">
          <strong>
            puanla<span class="kbaslik">sana</span>
            
          </strong>
 </div>
        <!-- <p>Full Screen Video Nature Landing Page</p> -->
      
        <button type="button" class="btn" @click="randompuanla">Keşfet</button>
      </div>
    </section>
    <section id="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, et laudantium temporibus laborum saepe vel aliquid hic reiciendis quisquam quaerat commodi facere deleniti consequatur consequuntur doloremque illum repellat eligendi? Fuga?
      </p>
      <h2>Follow us on Social Media</h2>
      <div class="social">
        <a href="#"><i class="fab fa-twitter fa-3x"></i></a>
        <a href="#"><i class="fab fa-facebook fa-3x"></i></a>
        <a href="#"><i class="fab fa-github fa-3x"></i></a>
        <a href="#"><i class="fab fa-linkedin fa-3x"></i></a>
      </div>
    </section>


 



  





</template>

<script>

import {onMounted,ref} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
export default {


    mounted() {

  document.getElementById("myVideo").volume = 0.2;

  }, 
    setup() {


gsap.registerPlugin(ScrollTrigger);




        const veriler=ref([])


            const route=useRoute()
          const router=useRouter()


           const randompuanla= ()=>{


               let random = Math.floor(Math.random() * veriler.value.length);
          
         
         router.go({name:'Puanla',params:{Kategori:veriler.value[random].kisim}})
         

        }


         const puanla= (Kategori)=>{
          
         
         router.push({name:'Puanla',params:{Kategori:Kategori}})
         

        }

          const kategorigit= (Kategori)=>{
          
         
         router.push({name:'Kategoriler'})
         

        }


               const beforeEnter=(el)=>{
          el.style.opacity=0;
          el.style.transform='translateY(100px)'
        }




           const enter=(el)=>{

          gsap.to(el,{
    
            opacity:1,
            y:0,
            duration:1,
            delay:el.dataset.index*0.2,

            
           
          })
        }


          const enterv2=(el)=>{

          gsap.to(el,{
            opacity:1,
            y:0,
            duration:1.5,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }

            onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})
                })
            })

         
        })

        return {veriler,beforeEnter,enter,puanla,enterv2,randompuanla,kategorigit
        }
        
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

.baslik {
  color: white;
  font-size: 2.4rem;
  margin-bottom: 1.2vh;
  letter-spacing: 0.5rem;

  font-family: "Comfortaa", cursive;
}

.kbaslik {
  color: #DE354C;
  font-size: 2.4rem;
  margin-bottom: 1.2vh;

  font-family: "Comfortaa", cursive;
}

:root {
  --primary-color: #3a4052;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

h1 {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.showcase {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: #fff;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--primary-color) url("https://drive.google.com/uc?export=view&id=1ijJoArpWh_4gk_r25MqNga5fd7yLi98K") no-repeat center
    center/cover;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video-container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content {
  z-index: 10;
}

.content p {
  font-size: 2rem;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  background: var(--primary-color);
  color: #fff;
  border: 1px #fff solid;
  border-radius: 20px;
  margin-top: 25px;
  opacity: 0.7;
}

.btn:hover {
  transform: scale(0.98);
}

#about {
  padding: 40px;
  text-align: center;
  color: white;
}

#about p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: auto;
}

#about h2 {
  margin: 30px 0;
  color: var(--primary-color);
}

.social a {
  margin: 0 5px;
}

</style>