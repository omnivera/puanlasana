<template>

<div  >


<div  class="bigshadow">

<iframe  autofocus id="myVideo" :src="itemvideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



   </div>
 

<div class="text-center">
  <div class="row">

         <div class="col ms-auto mt-auto mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

                      <div id="infocard" class="card">
  <div class="card-body shadow-lg rounded">
       
     <h4>Senin Puanın</h4>
    <h1>
 <vue3-autocounter ref='counter' :startAmount='0' :endAmount='puan' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='1' :autoinit='true' />
    </h1>
    
    
     
  </div>
</div>

      
 </transition>
 </div>

    </div>


   

    <div class="col-6 d-flex justify-content-center">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex justify-content-center">
                   
<div id="showcard" :class="showcardV"  class="card text-center" >
    <img :src="itemresim" class="img-fluid" style="height:58vh"  alt="" srcset="">
  <div class="card-body">


      <div class="row d-flex justify-content-center">

     
 



  <!--   <h2>Kategori: {{kategorigoster}}</h2> -->



<h2 style="margin-top:1vh">{{itemisim}}</h2>
 <h6 class="card-subtitle  mt-2 text-muted">Kategori: {{kategorigoster}}</h6>
</div>





   </div>


<div v-show="yildizladi" class="">



   <div class="stars">
<form action="">
    <input :disabled="puanladi" @click="doYildizla(10)" class="star star-10"  id="star-10" type="radio" name="star"/>
  <label class="star star-10" for="star-10"></label>
    <input :disabled="puanladi" @click="doYildizla(9)" class="star star-9" id="star-9" type="radio" name="star"/>
  <label class="star star-9" for="star-9"></label>
    <input :disabled="puanladi" @click="doYildizla(8)" class="star star-8" id="star-8" type="radio" name="star"/>
  <label class="star star-8" for="star-8"></label>
    <input :disabled="puanladi" @click="doYildizla(7)" class="star star-7" id="star-7" type="radio" name="star"/>
  <label class="star star-7" for="star-7"></label>
  <input :disabled="puanladi" @click="doYildizla(6)" class="star star-6" id="star-6" type="radio" name="star"/>
  <label class="star star-6" for="star-6"></label>
  <input :disabled="puanladi" @click="doYildizla(5)" class="star star-5" id="star-5" type="radio" name="star"/>
  <label class="star star-5" for="star-5"></label>
  <input :disabled="puanladi" @click="doYildizla(4)" class="star star-4" id="star-4" type="radio" name="star"/>
  <label class="star star-4" for="star-4"></label>
  <input :disabled="puanladi" @click="doYildizla(3)" class="star star-3" id="star-3" type="radio" name="star"/>
  <label class="star star-3" for="star-3"></label>
  <input :disabled="puanladi" @click="doYildizla(2)" class="star star-2" id="star-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2"></label>
  <input :disabled="puanladi" @click="doYildizla(1)" class="star star-1" id="star-1" type="radio" name="star"/>
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

         <div id="infocard" class="card">
  <div class="card-body shadow-lg rounded">
       
    <h4>Ortalama Puan</h4>
    <h1>
 <vue3-autocounter ref='counter' :startAmount='0' :endAmount='ortpuan' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='1' :autoinit='true' />
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
 <button type="button" id="yorumlabutton" @click="anasayfagit" class=" btn-lg shadow normalbutton"><i class="fas fa-backward"></i> Kategoriler</button>
        
             </transition>
</div>

 

    </div>


   

    <div class="col-6 d-flex justify-content-center">
         <div v-if="puanladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex align-items-center">
                   
<br>

<a href="#yorumyap"><button type="button" @click="yorumshow" id="yorumlabutton" class="shadow normalbutton"><i class="fas fa-comments"></i> Yorum Yapsana</button></a>





      </div>   


 </transition> 
         </div>

              <div v-if="yildizladi==false && titlecheck==true" class="card center-bottom" style="background-color:transparent;border-color:transparent;margin-bottom:3vh" >
  <div :class="showtitle" class="card-body " style="background-color:transparent;border-color:transparent; ">
       
    <span @click="watchinfo=true" class="bigtitle">{{itemisim}}</span>
    <br>

    <div class="stars">
<form action="">
    <input :disabled="puanladi" @click="doYildizla(10)" class="star star-10"  id="star-10" type="radio" name="star"/>
  <label class="star star-10" for="star-10"></label>
    <input :disabled="puanladi" @click="doYildizla(9)" class="star star-9" id="star-9" type="radio" name="star"/>
  <label class="star star-9" for="star-9"></label>
    <input :disabled="puanladi" @click="doYildizla(8)" class="star star-8" id="star-8" type="radio" name="star"/>
  <label class="star star-8" for="star-8"></label>
    <input :disabled="puanladi" @click="doYildizla(7)" class="star star-7" id="star-7" type="radio" name="star"/>
  <label class="star star-7" for="star-7"></label>
  <input :disabled="puanladi" @click="doYildizla(6)" class="star star-6" id="star-6" type="radio" name="star"/>
  <label class="star star-6" for="star-6"></label>
  <input :disabled="puanladi" @click="doYildizla(5)" class="star star-5" id="star-5" type="radio" name="star"/>
  <label class="star star-5" for="star-5"></label>
  <input :disabled="puanladi" @click="doYildizla(4)" class="star star-4" id="star-4" type="radio" name="star"/>
  <label class="star star-4" for="star-4"></label>
  <input :disabled="puanladi" @click="doYildizla(3)" class="star star-3" id="star-3" type="radio" name="star"/>
  <label class="star star-3" for="star-3"></label>
  <input :disabled="puanladi" @click="doYildizla(2)" class="star star-2" id="star-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2"></label>
  <input :disabled="puanladi" @click="doYildizla(1)" class="star star-1" id="star-1" type="radio" name="star"/>
  <label class="star star-1" for="star-1"></label>
</form>
</div>

<br>

<button class="upbutton"   data-bs-toggle="modal" data-bs-target="#filminfo"><i  class="bi bi-chevron-up"></i></button>
    
    
     
  </div>
</div>

<br>


         

         
    </div>




    <div class="col ms-auto  mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
    <button id="yorumlabutton" class="shadow next" @click="next"><i class="fa fa-play"></i>Devam</button>
             </transition>
</div>



             


    </div>




  </div>
        <div v-if="!yildizladi && !puanladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     

                   


 
<button type="button" id="yorumlabutton" @click="next" class=" btn-lg shadow top-right next"><i class="fas fa-fast-forward"></i> Pas Geç</button>






 </transition> 
         </div>

</div>


</div>


<div class="modal fade" @focus="titlecheck=false" @blur="titlecheck=true" id="filminfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl scrollable">
    <div class="modal-content infomodal">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="bi bi-film"></i> {{itemisim}}</h5> 
        <i data-bs-dismiss="modal"  class="fa-solid fa-circle-xmark top-right2 close-btn"></i>
      </div>
      <div class="modal-body">
          <div class="row text-left">
              <div class="col-md-4">
                  <img :src="itemresim" class="img-fluid" style="height:50vh"  alt="" srcset="">

              </div>
              <div class="col-md-8">

                  <div class="row">
                  
                      <p class="aciklama">
                          {{filmozet}}
                 </p>
                       </div>

                       <br>

                  <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">Oyuncular</h5>
                      <hr class="">
                      <p>{{oyuncular}}</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">Türler</h5>
                      <hr>
                      <p>{{turler}}</p>

                      </div>
                     
                  </div>

                  <br>

                         <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">Çıkış Yılı</h5>
                      <hr class="">
                      <p>{{cyili}}</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">Film Süresi</h5>
                      <hr>
                      <p>{{fsure}}</p>

                      </div>
                     
                  </div>

              </div>
          </div>
      </div>
      
    </div>
  </div>
</div>


<div v-if="yorumclick" class="yorumlar">
<h2 class="text-center">YORUMLAR</h2>
<hr style="color:white">
<br>
    <section id="yorumyap">
<div class="container text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-10 col-xl-9">
        <div class="card yorumcard">
          <div id="yorumyapcardbody" class="card-body p-5">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"  :src="userimg"  width="65" height="65" />
                
                
              <div class="w-100">
                 <form @submit.prevent="yorumkayit" autocomplete="false">
                <h5>{{kullaniciad}}</h5>

                <div class="form-floating">
  <textarea class="form-control" required maxlength="400" v-model="yorum" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Yorum Yapsana</label>
</div>
<br>
   <div class="me-0">
                  
                 <a href="#yorumlar"> <button style="float:right" type="submit" id="yorumlabuttonv2" class="shadow"><i class="fas fa-paper-plane"></i> Gönder</button></a>
                </div>
                 </form>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
    </section>
        <section id="yorumlar" class="mb-5">
  <transition @before-enter="beforeEnter" @enter="enteryorumlar" appear >      
<div class="row">
    
    <div class="container my-2 py-5 text-dark">
    <div class="row d-flex justify-content-center">
        
      <div v-for="yorum in yorumlar" :key="yorum.id" class="col-md-11 col-lg-9 col-xl-7">
        <div class="d-flex flex-start mb-4">
          <img class="rounded-circle shadow-1-strong me-3"
            :src="yorum.userimg" alt="avatar" width="65"
            height="65" />
          <div  class="card w-100 yorumcard">
            <div id="yorumcardbody" class="card-body p-4">
              <div class="">
                <h5>{{yorum.kullaniciad}}<p style="float:right" class="small text-muted">{{yorum.tarih}}</p></h5>  
                <p class="small text-muted">{{itemisim}}</p>
                <p>
                  {{yorum.yorum}}
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <a @click="likeyorum(yorum)"  :class="yorum.likedcss" class="me-2" style="cursor:pointer"><i class="fas fa-thumbs-up me-1"></i>{{yorum.like}}</a>
                    <a @click="dislikeyorum(yorum)"  :class="yorum.dislikedcss" style="cursor:pointer"><i class="fas fa-thumbs-down me-1"></i>{{yorum.dislike}}</a>
                  </div>
                  <a href="#!" class="link-muted">    
<div class="small-ratings">

                <i v-if="yorum.puan > 0" class="fa fa-star rating-color"></i> 
                <i v-if="yorum.puan == 0"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 1" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 1"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 2" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 2"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 3" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 3"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 4" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 4"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 5" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 5"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 6" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 6"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 7" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 7"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 8" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 8"  class="fa fa-star"></i>
                <i v-if="yorum.puan > 9" class="fa fa-star rating-color"></i>
                <i v-if="yorum.puan <= 9"  class="fa fa-star"></i>
                
               

            
                
                
            </div>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>




    </div>
  </div>
      
</div>
  </transition>
        </section>
  </div>


</template>

<script>
 import {ref,onMounted,watch} from 'vue'
import {firestoreRef,storageRef,authRef} from '@/firebase/config' 

import { useRoute,useRouter} from 'vue-router'
import gsap from 'gsap'
import firebase from 'firebase/app';
import Vue3autocounter from 'vue3-autocounter';
/* import LiteYouTubeEmbed from 'vue-lite-youtube-embed' */
import moment from 'moment';
import getUser from "../composables/getUser";

export default {

      components: {
    'vue3-autocounter': Vue3autocounter,
    
  },

  

    setup() {


    


     
        const kategorikontrol=ref(false)
         const veriler=ref([])
         const yorumlar=ref([])
      
  const seenItems=ref([{itemisim:""}])

          const route=useRoute()
          const router=useRouter()

       
         const basarisiz=ref(false)
         const itemisimgoster=ref('')
         const basarili=ref(false)


         const itemresim=ref('')
         const itemisim=ref('')
         const itemvideo=ref('')

         const kategorigoster=ref(route.params.Kategori)


         const puanladi = ref(false)
         const yildizladi = ref(false)

         const watchinfo = ref(false)
          const titlecheck = ref(true)

          const filmozet=ref()
         const oyuncular=ref()
         const turler=ref()
         const cyili=ref()
         const fsure=ref()

         

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)

         let yorumclickcount=0



         const itemID=ref('')

         const yorum=ref('')
const tarih=ref(moment(new Date()).format('YYYY-MM-DD'))

         const showcardV=ref('visible')
         const showtitle=ref('hidden')

         const yorumclick=ref(false)

    const { kullanici } = getUser();


    const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const userimg= ref('')


    authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
   
})

      

            watch ( () => {

                

})


const yorumshow=()=>{

    if (yorumclickcount==0) {
        firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').limit(5).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
         
yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:false,likedcss:"link-muted",dislikedcss:"link-muted"})
         
         
        });
            }else{

                console.log("yorum yok")
              

            }
        })

        firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         kullaniciad.value = doc.data().kullaniciad
         userimg.value = doc.data().userimg


         
        });
            }else{

                console.log('uye yok')
              

            }
        })
        
     yorumclick.value=true
    }

    yorumclickcount++;

     
        }


                 const likeyorum= (yorum)=>{


                     if (yorum.liked==false && yorum.disliked==false) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1
                  
                   
        })

        yorum.like = yorum.like + 1
        yorum.likedcss="likeselected"
        yorum.liked=true

                     }else      if (yorum.liked==false && yorum.disliked==true) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1,
                   dislike:parseInt(yorum.dislike) - 1

                  
                   
        })

        yorum.like = yorum.like + 1
        yorum.dislike = yorum.dislike - 1
        yorum.disliked=false
        yorum.dislikedcss="link-muted"
        yorum.likedcss= "likeselected"
        yorum.liked=true
                     }else if (yorum.liked==true && yorum.disliked==false) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) - 1
                  
                   
        })

        yorum.like = yorum.like - 1
        yorum.likedcss="link-muted"

        yorum.liked=false

                     }
                         


                   





                     






       
         }

                  const dislikeyorum= (yorum)=>{


if (yorum.disliked==false && yorum.liked==false) {

            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1
                  
                   
        })

        yorum.dislike = yorum.dislike + 1
        yorum.dislikedcss= "likeselected"
        yorum.disliked=true

}else if (yorum.disliked==false && yorum.liked==true) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1,
                   like:parseInt(yorum.like) - 1

                  
                   
        })

        yorum.dislike = yorum.dislike + 1
        yorum.like = yorum.like - 1
        yorum.liked=false
        yorum.likedcss="link-muted"
        yorum.dislikedcss= "likeselected"
        yorum.disliked=true
                     }else if (yorum.disliked==true && yorum.liked==false) {

            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) - 1
                  
                   
        })

        yorum.dislike = yorum.dislike - 1
        yorum.dislikedcss= "link-muted"
        yorum.disliked=false

}


    


       
         }


         setTimeout(  function(){
     if (yildizladi.value == false) {
    showcardV.value="hidden"
    showtitle.value="visible"
     }

                },3000)
         
    const doHidden=()=>{
            if (yildizladi.value == false) {
                      setTimeout(  function(){
            

    showcardV.value="hidden"
    showtitle.value="visible"

                },3000)
               }
     
        }

           const doVisible=()=>{
               if (yildizladi.value == false) {
                   showcardV.value="visible"
showtitle.value="hidden"
               }




        }


          const doYildizla=(sayi)=>{
        puan.value = sayi
        yildizladi.value = true
        showcardV.value="visible"
        showtitle.value="hidden"
        doVisible()

        verikayit()

        }


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

          const enteryorumlar=(el)=>{

          gsap.to(el,{
            opacity:1,
            y:0,
            duration:2,
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

         const ref = firestoreRef.collection(route.params.Kategori).doc();


           
         await firestoreRef.collection(route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '>=', ref.id).limit(1).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
           itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
           itemvideo.value = 'https://www.youtube.com/embed/'+doc.data().itemvideo+'?start='+doc.data().start+'&end='+doc.data().end+'&autoplay=1&&mute=1&playlist='+doc.data().itemvideo+'&loop=1&controls=0&modestbranding=1'
           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
           oyuncular.value = doc.data().oyuncular
            turler.value = doc.data().turler
            cyili.value = doc.data().cyili
            fsure.value = doc.data().fsure
            filmozet.value = doc.data().filmozet






 /* for (let i = 0; i < sessionStorage.length; i++) {
     if (sessionStorage.key(i) == itemisim.value) {
         return console.log("var")
     }
     
 }

 sessionStorage.setItem(itemisim.value, itemisim.value);
 return console.log("yok") */



          
          
         
        });
            }else{
                 firestoreRef.collection(route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '<', ref.id).limit(1).get()
                 .then(snapshot => {
            snapshot.forEach(doc => {
                itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
            itemvideo.value = 'https://www.youtube.com/embed/'+doc.data().itemvideo+'?start='+doc.data().start+'&end='+doc.data().end+'&autoplay=1&&mute=1&playlist='+doc.data().itemvideo+'&loop=1&controls=0&modestbranding=1'

           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
           oyuncular.value = doc.data().oyuncular
            turler.value = doc.data().turler
            cyili.value = doc.data().cyili
            fsure.value = doc.data().fsure
            filmozet.value = doc.data().filmozet

           
      

          
            });
        })
            }


        })

      


         
        })



                 const verikayit=async ()=>{




           await firestoreRef.collection(route.params.Kategori).doc(itemID.value).update({

                   totalpuan: puan.value + totalpuan.value,
                   puancount: puancount.value + 1,
                   puan:parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
                  
                   
        })

puanladi.value=true;

ortpuan.value = parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
  
         }

               const yorumkayit=async ()=>{


       const datayorum = {
                   kullaniciad:kullaniciad.value,
                   yorum:yorum.value,
                   like:0,
                   dislike:0,
                   puan:puan.value,
                   userimg:userimg.value,
                   tarih:moment(tarih.value).format('DD/MM/YYYY'),
                   gtarih:Date.parse(tarih.value.toString()),
                 
};

yorumlar.value.unshift({
  kullaniciad:kullaniciad.value,
  yorum:yorum.value,
  like:0,
  dislike:0,
  likedcss:"link-muted",
  dislikedcss:"link-muted",
  liked:false,
  disliked:false,
  puan:puan.value,
  userimg:userimg.value,
  tarih:moment(tarih.value).format('DD/MM/YYYY'),
  gtarih:Date.parse(tarih.value.toString()),
  })

const res = firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc().set(datayorum);

   yorum.value=""

  
         }



          return {veriler,verikayit,itemisim,itemresim,itemvideo,beforeEnter,enter,kategorigoster,puanladi,puan,ortpuan,yildizladi,ortpuanimation,next,anasayfagit,showcardV,doHidden,doVisible,
          showtitle,doYildizla,watchinfo,titlecheck,yorumclick,enteryorumlar,yorum,yorumkayit,yorumshow,yorumlar,likeyorum,dislikeyorum,oyuncular,turler,cyili,fsure,filmozet,kullaniciad,userimg
          
        }
        
    }

}
</script>

<style scoped>

.ratings{
    margin-right:1vw;
}

.ratings i{
    
    color:#cecece;
    font-size:3vw;
}

.rating-color{
    color:#DE354C !important;
}

.review-count{
    font-weight:400;
    margin-bottom:2px;
    font-size:24px !important;
}

.small-ratings i{
  color:#cecece;   
  margin: 0.1vw;
  cursor: default;
}


#floatingTextarea2{
    background-color: #181818;
    color: white;
        resize: none;

}

#floatingTextarea2:focus {
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px #181818;
  }

.yorumcard{

    border: none;
    outline: none;
    color: white;
}

#yorumyapcardbody{
    background-color: black;
}

#yorumcardbody{
    background-color: #181818;
 
}

.link-muted { color: #aaa; text-decoration: none;} .link-muted:hover { color: #DE354C; }


.likeselected { color: white; text-decoration: none;} .likeselected:hover { color: #DE354C; }


/* .textarea{
    width: 100%;
    color: #FFF;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #DE354C;
    outline: none;
     text-align: center;
     bottom: 0;
     right: 3vw;
     position: relative;
     text-align: left;
     margin-top: 5vh;
     margin-left: 1vw;

} */


.yorumresim{
    margin-top:1vh;
    width: 4.2vw;
    height: 7vh;
}

.yorumlar{
    margin-top: 25vh;
    margin-left:5vw;
    margin-right:5vw;
}


.close-btn{
   font-size:25px;
   cursor:pointer;

}


.aciklama{
    height:20vh; float: left;   overflow: scroll;
overflow-x: hidden; 


}

.redtitle{
    color: #DE354C;
    font-weight: 500;
}


.infomodal{
    background-color: #181818;
    color: white;
    opacity: 0.8;

}



@-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
}

@keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
}


.upbutton{
font-size: 3vw;

background-color: transparent;
border-color: transparent;
color: white;
margin-top: -3vh;
text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
outline: none;
   
}


.upbutton:hover{
  -webkit-animation: action 1s infinite  alternate;
    animation: action 1s infinite  alternate;
}


.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;

}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
 
  
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-bottom{
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.top-right2{
   position: absolute;
    top: 1.8vh;
    right: 0.4vw;
    
}

.top-right{
   position: absolute;
    bottom: 1.8vh;
    right: 0.7vw;
    
}

.top-left{
   position: absolute;
    bottom: 2.8vh;
    left: 0.7vw;
    
}

  

.bigshadow{
  z-index: 2;
    background: black;
    opacity: 0.85;


   
}




#showcard{

      background: #181818;
      border-radius: 6px;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


margin-top:4vh;


    width:30vw;

     
    
   
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
    
}

#infocard{
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
      background: #181818;
      border-radius: 6px;
    

}

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
 pointer-events: none;
  
  
}

.bigtitle{
font-size: 2.9vw;
color: white;
text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
 
}

h1{
font-size: 2.1vw;
color: white;
}

h2{
font-size: 1.8vw;
color: white;
}

h4{
  color: #DE354C;  
  font-size: 1.7vw;
}

.normalbutton {
  background-color: #fff;
  border: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2vw;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.next {
  background-color: #fff;
  border: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2vw;
  padding: 1rem 1.5rem;
  border-radius: 6px;
 
  z-index: 2;
}

.next:before {
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
  padding: 0.5vw;
  font-size: 1.5vw;
  color: #DE354C;
  transition: all .2s;

}

label.staryorum {
  float: right;
  padding: 0.1vw;
  font-size: 1.2vw;
  color: #DE354C;
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

label.staryorum:before{
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