<template>


<div class="text-center">
  <div class="row">

         <div class="col ms-auto mt-auto mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

         <div class="card">
  <div class="card-body shadow rounded">
  <h4>Senin Puanın</h4>
    <h1>
 <vue3-autocounter ref='counter' :startAmount='0' :endAmount='puan' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='2' :autoinit='true' />
    </h1>
  </div>
</div>
 </transition>
 </div>

    </div>


   

    <div class="col-6 d-flex justify-content-center">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex justify-content-center">
                   
<div class="card text-center shadow rounded" style="margin-top:5vh;width:30vw" >
    <img :src="resimUrl" class="img-fluid shadow" style="height:54vh"  alt="" srcset="">
  <div class="card-body">


      <div class="row d-flex justify-content-center">

     
 



  <!--   <h2>Kategori: {{kategorigoster}}</h2> -->



<h2 style="margin-top:4vh">{{itemisim}}</h2>
</div>





   </div>


<div class="">



<div class="stars">
<form action="">
    <input :disabled="puanladi" @click="yildizladi=true;puan=10" class="star star-10"  id="star-10" type="radio" name="star"/>
  <label class="star star-10" for="star-10"></label>
    <input :disabled="puanladi" @click="yildizladi=true;puan=9" class="star star-9" id="star-9" type="radio" name="star"/>
  <label class="star star-9" for="star-9"></label>
    <input :disabled="puanladi" @click="yildizladi=true;puan=8" class="star star-8" id="star-8" type="radio" name="star"/>
  <label class="star star-8" for="star-8"></label>
    <input :disabled="puanladi" @click="yildizladi=true;puan=7" class="star star-7" id="star-7" type="radio" name="star"/>
  <label class="star star-7" for="star-7"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=6" class="star star-6" id="star-6" type="radio" name="star"/>
  <label class="star star-6" for="star-6"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=5" class="star star-5" id="star-5" type="radio" name="star"/>
  <label class="star star-5" for="star-5"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=4" class="star star-4" id="star-4" type="radio" name="star"/>
  <label class="star star-4" for="star-4"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=3" class="star star-3" id="star-3" type="radio" name="star"/>
  <label class="star star-3" for="star-3"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=2" class="star star-2" id="star-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2"></label>
  <input :disabled="puanladi" @click="yildizladi=true;puan=1" class="star star-1" id="star-1" type="radio" name="star"/>
  <label class="star star-1" for="star-1"></label>
</form>
</div>















 



</div>



     




  </div>





      </div>   


 </transition> 
    </div>




    <div class="col ms-auto mt-auto mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

         <div id="puanlainfo" class="card">
  <div class="card-body shadow rounded">
       
    <h4>Ortalama Puan</h4>
    <h1>
 <vue3-autocounter ref='counter' :startAmount='0' :endAmount='ortpuan' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='2' :autoinit='true' />
    </h1>
    
    
     
  </div>
</div>
 </transition>
 </div>

    </div>




  </div>

</div>









<div class="text-center">
  <div class="row">

         <div class="col ms-auto mt-auto mb-0">

                <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >   
 <button type="button" id="yorumlabutton" @click="anasayfagit" class=" btn-lg shadow "><i class="fas fa-backward"></i> Kategoriler</button>
        
             </transition>
</div>



    </div>


   

    <div class="col-6 d-flex justify-content-center">
         <div v-if="puanladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex align-items-center">
                   
<br>

<button type="button" id="yorumlabutton" class="shadow"><i class="fas fa-comments"></i> Yorum Yapsana</button>



      </div>   


 </transition> 
         </div>


                   <div v-if="!yildizladi && !puanladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex align-items-center">
                   
<br>

 
<button type="button" id="yorumlabutton" @click="next" class=" btn-lg shadow "><i class="fas fa-fast-forward"></i> Pas Geç</button>



      </div>   


 </transition> 
         </div>

         

                <div v-if="yildizladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex align-items-center">
                   
<br>

 
<button type="button" id="yorumlabutton" @click="verikayit" class=" btn-lg shadow "><i class="fas fa-trophy"></i> Puanlasana</button>



      </div>   


 </transition> 
         </div>
    </div>




    <div class="col ms-auto  mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
    <button id="yorumlabutton" class="shadow" @click="next"><i class="fa fa-play"></i>Devam</button>
             </transition>
</div>
    </div>




  </div>

</div>



</template>

<script>
 import {ref,onMounted} from 'vue'
import {firestoreRef,storageRef} from '@/firebase/config' 

import { useRoute,useRouter} from 'vue-router'
import gsap from 'gsap'
import firebase from 'firebase/app';
import Vue3autocounter from 'vue3-autocounter';

export default {

      components: {
    'vue3-autocounter': Vue3autocounter,
    
  },

    setup() {

        const kategorikontrol=ref(false)
         const veriler=ref([])

          const route=useRoute()
          const router=useRouter()

       
         const basarisiz=ref(false)
         const itemisimgoster=ref('')
         const basarili=ref(false)


         const resimUrl=ref('')
         const itemisim=ref('')

         const kategorigoster=ref(route.params.Kategori)


         const puanladi = ref(false)
         const yildizladi = ref(false)

         

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)


         const itemID=ref('')



          const anasayfagit=()=>{
        router.push({name:'anasayfa'})
        }

 

       const beforeEnter=(el)=>{
          el.style.opacity=0;
          el.style.transform='translateY(100px)'
        }

           const enter=(el)=>{

          gsap.to(el,{
            opacity:1,
            y:0,
            duration:1.2,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }



            const ortpuanimation=(el)=>{


                

    gsap.to(el,{
            opacity:1,
            y:0,
            duration:1.2,
            delay:el.dataset.index*0.2,
            ease:'linear'
          })
 

      
  
        }


    const next=()=>{

location. reload()

  
        }


        

     onMounted(async () => {

         const ref = firestoreRef.collection('itemler').doc();


           
         await firestoreRef.collection('itemler').where('kategori','==',route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '>=', ref.id).limit(1).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
           itemisim.value = doc.data().itemisim
           resimUrl.value = doc.data().resimUrl

           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
          
          
         
        });
            }else{
                 firestoreRef.collection('itemler').where('kategori','==',route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '<', ref.id).limit(1).get()
                 .then(snapshot => {
            snapshot.forEach(doc => {
                itemisim.value = doc.data().itemisim
           resimUrl.value = doc.data().resimUrl

           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
          
            });
        })
            }
        })


         
        })



                 const verikayit=async ()=>{




           await firestoreRef.collection('itemler').doc(itemID.value).update({

                   totalpuan: puan.value + totalpuan.value,
                   puancount: puancount.value + 1
                  
                   
        })

puanladi.value=true;
yildizladi.value=false;

ortpuan.value = parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
  
         }



          return {veriler,verikayit,itemisim,resimUrl,beforeEnter,enter,kategorigoster,puanladi,puan,ortpuan,yildizladi,ortpuanimation,next,anasayfagit
        }
        
    }

}
</script>

<style scoped>

h4{
  color: #DE354C;  
}

button {
  background-color: #fff;
  border: none;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

button:before {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  right: 0;
  content:  '';
  z-index: 0;
  animation: fill 2s linear forwards;
  z-index: 3;
}

button .reverse:before {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  right: 0;
  content:  '';
  z-index: 0;
  animation: fillreverse 2s linear forwards;
  z-index: 3;
}

i {
  margin: 0 1rem;
}

@keyframes fill {
  from {width: 100%}
  to {width: 0}

}


@keyframes fillreverse {
  from {width: 0}
  to {width: 100%}

}





*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}


svg {
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);
  overflow: initial;
}

circle {
  stroke-width: 20px;
  fill: none;
}
circle:nth-child(1) {
  stroke: rgb(0, 0, 0);
}
circle:nth-child(2) {
  stroke: #f00;
  /* position: relative; */
  /* animation: anim 1s linear 1; */
  transition: all 8s ease;
}
.circle_box:nth-child(1) circle:nth-child(2) {
  stroke-dashoffset: calc(100 * 6);
  stroke-dasharray: calc(100 * 6);
  stroke-dashoffset: calc((100 * 6) - ((100 * 6) * 0) / 100);
}

.circle_box {
  font-size: 36px;
  color: #fff;
  text-align: center;
}
.circle_box div {
  position: relative;
}
.circle_box span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 40px;
}
span.danger {
  color: #f00;
  font-size: 30px;
}

input {
  margin-bottom: 20px;
}



@import url(https://fonts.googleapis.com/css?family=Roboto:500,100,300,700,400);



body {
  overflow: hidden; /* Hide scrollbars */
}


#puanlainfo{
   
}


div.stars{
 
  display: inline-block;
}

input.star{
  display: none;
}

label.star {
  float: right;
  padding: 10px;
  font-size: 1.4vw;
  color: #444;
  transition: all .2s;
}

input.star:checked ~ label.star:before {
  content:'\f005';
  color: #FD4;
  transition: all .25s;
}


input.star-10:checked ~ label.star:before {
  color:#8000ff;
  text-shadow: 0 0 20px #bf00ff;
}



input.star-9:checked ~ label.star:before {
  color: #0000ff;
}


input.star-8:checked ~ label.star:before {
  color: #00ff40;
}
input.star-7:checked ~ label.star:before {
  color: #00ff40;
}
input.star-6:checked ~ label.star:before {
  color: #00ff40;
}


input.star-5:checked ~ label.star:before {
  color: #ffbf00;
}
input.star-5:checked ~ label.star:before {
  color: #ffbf00;
}
input.star-4:checked ~ label.star:before {
  color: #ffbf00;
}



input.star-3:checked ~ label.star:before {
  color: #ff8000;
}

input.star-2:checked ~ label.star:before {
  color: #ff8000;
}



input.star-1:checked ~ label.star:before {
  color: #ff0000;
}

label.star:hover{
  transform: rotate(-15deg) scale(1.3);
}

label.star:before{
  content:'\f006';
  font-family: FontAwesome;
}

.rev-box{
  overflow: hidden;
  height: 0;
  width: 100%;
  transition: all .25s;
}

textarea.review{
  background: #222;
  border: none;
  width: 100%;
  max-width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #EEE;
}

label.review{
  display: block;
  transition:opacity .25s;
}



input.star:checked ~ .rev-box{
  height: 125px;
  overflow: visible;
}















</style>