.<template>





  <section id="option-select-view">
    <div class="view-option">
   
          


   <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="kategoriler">

  <transition-group @before-enter="beforeEnter" @enter="enter" appear >      
<div v-for="veri in veriler" :key="veri.id">
    <main @click="puanla(veri)">{{veri.kisim}}</main>
<!-- <button type="button" id="kategoributton" @click="puanla(veri.kisim)" class="btn btn-outline-primary btn-lg  p-3 mb-5 rounded">{{veri.kisim}}</button> -->
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
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
export default {


  
    setup() {


gsap.registerPlugin(ScrollTrigger);

        const veriler=ref([])


            const route=useRoute()
          const router=useRouter()


           const randompuanla= ()=>{


               let random = Math.floor(Math.random() * veriler.value.length);
          
         
         router.push({name:'Puanla',params:{Kategori:veriler.value[random].kisim}})
         

        }


         const puanla= (veri)=>{

             if (veri.click==undefined || veri.click==null  || veri.click==false) {
                 veri.click=0
             }


                  firestoreRef.collection("kategoriler").doc(veri.kisim).update({

                   click:parseInt(veri.click) + 1
                   
        })
          
         
         router.push({name:'Puanla',params:{Kategori:veri.kisim}})
         

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
            duration:1,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }

            onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})
                })
            })

         
        })

        return {veriler,beforeEnter,enter,puanla,enterv2,randompuanla
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





.kategoriler{
    
    display: grid;
     grid-template-columns: 10vw 10vw 10vw 10vw;
     grid-gap: 8vw;
   
}


</style>