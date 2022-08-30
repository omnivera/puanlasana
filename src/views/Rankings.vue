.<template>
 <br>
 <div>


        <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="rankings">


  <transition-group @before-enter="beforeEnter" @enter="enterv2" appear >      
<div v-for="veri in veriler" :key="veri.id">
   <div class="card" >

  <div class="card-body">
    <h5 style="color:#DE354C" class="card-title text-center"><strong>{{veri.kisim}}</strong></h5>
    <ul class="list-group">
          
  <li class="list-group-item d-flex justify-content-between align-items-center">
   {{veri.itemisim}}
    <span class="badge bg-danger rounded-pill">9,7</span>
  </li>

   
</ul>

  </div>
</div>

</div>
   </transition-group>  

 


 

      </div>
        </div>
            </div>

 </div>

</template>

<script>
import {onMounted,ref,watch} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'

import { useRoute,useRouter} from 'vue-router'
export default {

  setup() {

 


        const veriler=ref([])
        const itemler=ref([])

        


            const route=useRoute()
          const router=useRouter()

     
     watch ( () => {


         for (let i = 0; i < veriler.value.length; i++) {
              firestoreRef.collection('itemler').where('kategori','==',veriler.value[i].kisim).limit(5).get()
        .then(doc =>{


            itemler.value.push({...doc.data(),id:doc.id})

        

})

console.log(itemler.value )
             
         }



     })
          

           const randompuanla= ()=>{


               let random = Math.floor(Math.random() * veriler.value.length);
          
         
         router.push({name:'Puanla',params:{Kategori:veriler.value[random].kisim}})
         

        }


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
            duration:1.4,
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

        return {veriler,beforeEnter,enter,puanla,enterv2,randompuanla,itemler
        }
        
    }

}
</script>

<style scoped>


.list-group-item{
    background-color: transparent;
    color: white;
}


.card{
    background-color: #181818;
    color: white;
    width: 33vw;
    height: 30vh;
     box-shadow: -5px -5px 25px 5px red, 5px 5px 25px 5px blue;
}


.rankings{
    display: grid;
     grid-template-columns: 3fr 3fr;
     grid-gap: 3.6vw;
   
}

</style>