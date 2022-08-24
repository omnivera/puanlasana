.<template>


   <section id="main-landing">
    <div id="black-ov"></div>
  

    <div id="main-landing-message">
<transition @before-enter="beforeEnter" @enter="enterv2" appear >      
      <h1 style="color:#DE354C">Puanlasana.com</h1>
         </transition>  

         <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
      <h2>Buraya bir Slogan</h2>
        </transition> 
       <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
     <button type="button" id="yorumlabutton" @click="randompuan" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded"><i class="fas fa-trophy"></i> Puanlasana</button>
      </transition> 

             <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
    <a href="#option-select-view"><button type="button" id="yorumlabutton" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded"><i class="fa-solid fa-cubes"></i> Kategoriler</button></a> 
     </transition> 

    </div>

  </section>


  <section id="option-select-view">
    <div class="view-option">
   
          

            <div class="d-flex justify-content-center" style="margin-top:7vh">
   
     <h1 style="font-size:3vw; color: #DE354C">KATEGORİLER </h1>

      <hr>
       

     
  </div>

   <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="kategoriler">

  <transition-group @before-enter="beforeEnter" @enter="enter" appear >      
<div v-for="veri in veriler" :key="veri.id">
<button type="button" id="kategoributton" @click="puanla(veri.kisim)" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded">{{veri.kisim}}</button>
</div>
   </transition-group>   

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

import { useRoute,useRouter} from 'vue-router'
export default {


  
    setup() {



        const veriler=ref([])


            const route=useRoute()
          const router=useRouter()


         const puanla= (Kategori)=>{
          
         
         router.push({name:'Puanla',params:{Kategori:Kategori}})
         

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
            duration:1.2,
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

        return {veriler,beforeEnter,enter,puanla,enterv2
        }
        
    }

}
</script>

<style scoped>




/* GLOBAL STYLES */
body {
  margin: 0;
  font-family: sans-serif;
}

img {
  display: block;
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
  background-image: url('http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg');
  padding: 20px 40px;
  position: relative;
}

#main-landing > header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
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
  position: relative;
  padding: 18em 0;
}
#main-landing-message h1, h2 {
  color: #FFF;
}
#main-landing-message > h1 {
  font-size: 6em;
  margin-bottom: 15px;;
}
#main-landing-message > h2 {
  font-weight: 300;
  margin-bottom: 1em;
}
#main-landing-message > a {
  display: inline-block;
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
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 20px;
   
}


</style>