.<template>


   <section id="main-landing">
    <div id="black-ov"></div>
  

    <div id="main-landing-message" style="margin-top:-3vh">
        <div class="bigshadow">

<!-- <iframe  id="myVideo" src='https://www.youtube.com/embed/G5uKQuYSgEI?autoplay=1&mute=1&playlist=G5uKQuYSgEI&loop=1&controls=0&modestbranding=1&cc_load_policy=0' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<video id="myVideo" muted autoplay  loop>
  <source src="@/assets/videos/mainvideo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

   </div>
        <div class="d-flex justify-content-center">
            

       
<transition @before-enter="beforeEnter" @enter="enterv2" appear >      
     <img @click="randompuanla" data-bs-toggle="tooltip" data-bs-placement="top" title="Puanlamak için tıkla" src="@/assets/plogo6.png" style="width:13vw;" alt="">
         </transition>  



       
   </div>

<div class="row">


         <div class="d-flex justify-content-center">
  <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
      <h1>puanlasana</h1>
      
        </transition> 


      
         </div>

         </div>

         <div class="row">


         <div class="d-flex justify-content-center">
            

            <div class="row g-2">

                <div class="col">

    <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
     <button type="button" id="mainbutton" @click="randompuanla" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded"><i class="fas fa-trophy"></i> <br> Puanlasana</button>
      </transition> 

                </div>


                <div class="col">
                     <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
              <button type="button" id="mainbutton" @click="kategorigit" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded"><i class="fa-solid fa-cubes"></i> <br> Kategoriler</button>
  
     </transition> 
                </div>



            </div>

    

            
  
             </div>
         </div>
 
   



        


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
          
         
         router.push({name:'Puanla',params:{Kategori:veriler.value[random].kisim}})
         

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

@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');


@font-face {
  src: url("https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2")
    format("woff2");
  font-family: "Meta";
  font-style: normal;
  font-weight: normal;
}




@keyframes switch {
    0% { opacity: 0;filter: blur(10px); transform:scale(7)}
   


    100% { transform:scale(1); filter: blur(0);}
}


@keyframes MoveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

@keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}


#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
 pointer-events: none;
  
  
}

img {
  display: block;
  cursor: pointer;
 -webkit-animation: action 1s infinite  alternate;
    animation: action 1s infinite  alternate;
    
    
}


.baslik{
      font-variation-settings: "wght" 900, "ital" 0;
      color: #DE354C;
      font-size:2.3vw ;

}

main {
  transition: all 0.5s;
  -webkit-text-stroke: 4px #d6f4f4;
  font-variation-settings: "wght" 900, "ital" 0;
  font-size: 4vw;
  text-align: center;
  color: transparent;
  font-family: "Meta", sans-serif;
  
  cursor: pointer;
}

main:hover {
  font-variation-settings: "wght" 100, "ital" 0;
  text-shadow: none;
}


h1{
    font-size: 3vw;
    color: #DE354C;
}

/* GLOBAL STYLES */
body {
  margin: 0;
  font-family: sans-serif;
   overflow: hidden
}


h1, h2, p {
  margin: 0;
 

  
}
a {
  display: block;
}

.option {
 
  
  align-items: center;
  height: 91px;
  width: 460px;
  color: #FFF;
  padding: 40px 0;
  opacity: 0.5;
  cursor: pointer;
}
.option:hover {
  opacity: 1;
}

.option svg {
  margin-bottom: 5px;
  fill: #FFF;
}
.option p {
  font-weight: 600;
}
/* ================= */
/* SECTION MAIN LANDING */
#main-landing {
 /*  background-image: url('http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg'); */
  padding: 20px 40px;
  position: relative;
 background-size: cover;
 height: 95vh;
  overflow: hidden
 
}


/* HEADER */
/* logo */
#brand svg {
  width: 180px;
  height: auto;
}

/* MAIN LANDING MESSAGE */
/* black gradient overlay */
#black-ov {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right,#000000de, #00000029);
  left: 0;
  top: 0;
}



#main-landing-message {

  padding: 18em 0;
}
#main-landing-message h1, h2 {
  color: #FFF;

  margin-top: 2vh;
  font-family: 'Comfortaa', cursive;
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
  

}
#main-landing-message > h1 {
  font-size: 6em;
  margin-bottom: 15px;
  
}
#main-landing-message > h2 {
  font-weight: 300;
  margin-bottom: 1em;
}
#main-landing-message > a {
 
  font-size: 15px;
  padding: 12px 26px;
  letter-spacing: 1px;
}
#option-select-view {
  background: #000;
}
/* SELECT OPTIONS */
#option-select-clickable-options {
  background-color: #141414;
  display: flex;
  justify-content: space-around;
  padding: 0 10em;
  border-bottom: 2px solid #2d2d2d;
}

/* VIEW OPTIONS */
.view-option {
  padding: 3em 14em;
}
.view-option > div > a {

  font-size: 15px;
  padding: 12px 26px;
  letter-spacing: 1px;
}

.view-option a {
  padding: 16px 30px !important;
  min-width: 268.5px;
  min-height: 49px;
  max-height: 49px;
}
.view-option:nth-child(1) > div:nth-child(1) {
  margin-top: 4em;
}
.view-option > div > h1 {
  color: #FFF;
  font-weight: 300;
}
.view-option:nth-child(1) > div > h1 {
  margin-bottom: 20px;
  font-size: 2em;
}
.view-option:nth-child(2) {
  flex-direction: column;
}

.view-option:nth-child(2) > div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.view-option:nth-child(2) > div:nth-child(2) > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  margin: 20px;
}
.view-option:nth-child(2) > div:nth-child(2) > div p {
  opacity: 0.6;
  font-weight: 300;
  text-align: center;
}
.view-option:nth-child(2) > div:nth-child(2) > div h1 {
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: center;
}
.view-option:nth-child(2) > div:nth-child(2){
  display: flex;
}
.view-option:nth-child(2) > div:nth-child(2) img{
  width: 100%;
  margin-bottom: 10px;
}

.view-option:nth-child(3) {
  flex-direction: column;
}
.view-option:nth-child(3) > div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.view-option:nth-child(3) > div:nth-child(1) h1 {
  margin-right: 40px;
}

.view-option:nth-child(3) > div:nth-child(1) h1 {
  margin-right: 40px;
}

.view-option:nth-child(3) table {
  color: #FFF;
}
/* .view-option:nth-child(2) > div > h1 {
  margin-bottom: 20px;
  font-size: 2.4em;
} */


.kategoriler{
    display: grid;
     grid-template-columns: 5fr 2fr 5fr 2fr;
     grid-gap: 4vw;
   
}


</style>