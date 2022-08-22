.<template>

  <div class="d-flex justify-content-center" style="margin-top:3vh">
   
      <h2>KATEGORİLER</h2>
       

     
  </div>

   <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="kategoriler">

  <transition-group @before-enter="beforeEnter" @enter="enter" appear >      
<div v-for="veri in veriler" :key="veri.id">
<button type="button" id="kategoributton" @click="puanla(veri.kisim)" class="btn btn-outline-primary btn-lg shadow p-3 mb-5 rounded">{{veri.kisim}}</button>
</div>
   </transition-group>   

      </div>
        </div>
            </div>
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
            duration:0.8,
            delay:el.dataset.index*0.2
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

        return {veriler,beforeEnter,enter,puanla
        }
        
    }

}
</script>

<style>


.kategoriler{
    display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 20px;
   
}


</style>