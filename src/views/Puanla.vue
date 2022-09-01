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

<button type="button" id="yorumlabutton" class="shadow normalbutton"><i class="fas fa-comments"></i> Yorum Yapsana</button>





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
                  
                      <p class="aciklama">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maxime sint possimus commodi incidunt quos deleniti voluptatibus assumenda aliquam quae, consequuntur non autem accusantium aperiam natus earum unde reiciendis deserunt?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maxime sint possimus commodi incidunt quos deleniti voluptatibus assumenda aliquam quae, consequuntur non autem accusantium aperiam natus earum unde reiciendis deserunt?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maxime sint possimus commodi incidunt quos deleniti voluptatibus assumenda aliquam quae, consequuntur non autem accusantium aperiam natus earum unde reiciendis deserunt?
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maxime sint possimus commodi incidunt quos deleniti voluptatibus assumenda aliquam quae, consequuntur non autem accusantium aperiam natus earum unde reiciendis deserunt?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore maxime sint possimus commodi incidunt quos deleniti voluptatibus assumenda aliquam quae, consequuntur non autem accusantium aperiam natus earum unde reiciendis deserunt?
                 </p>
                       </div>

                       <br>

                  <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">Oyuncular</h5>
                      <hr class="">
                      <p>Mert Dallar, Haktan Uzun</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">Türler</h5>
                      <hr>
                      <p>Aksiyon, Komedi, Macera, Bilim Kurgu</p>

                      </div>
                     
                  </div>

                  <br>

                         <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">Çıkış Yılı</h5>
                      <hr class="">
                      <p>2009</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">Film Süresi</h5>
                      <hr>
                      <p>2 Saat 15 dakika</p>

                      </div>
                     
                  </div>

              </div>
          </div>
      </div>
      
    </div>
  </div>
</div>




<div class="yorumlar">
    <div class="row">

  
    <div class="col-md-1">
<img class="yorumresim" src="@/assets/plogo6.png" alt=""> 
    </div>

    <div class="col-md-11">
         <textarea class="textarea" rows = "5" cols = "60" name = "description" placeholder="Yorum Yapsana!">
            
         </textarea>
<!-- <input class="textarea" type="textarea" placeholder="Yorum Yapsana!"> -->
    </div>

</div>

<div class="row">
    <div class="comments-container">
        

    <ul id="comments-list" class="comments-list">
      <li>
        <div class="comment-main-level">
          <!-- Avatar -->
          <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
          <!-- Contenedor del Comentario -->
          <div class="comment-box">
            <div class="comment-head">
              <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
              <span>hace 20 minutos</span>
              <i class="fa fa-reply"></i>
              <i class="fa fa-heart"></i>
            </div>
            <div class="comment-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
            </div>
          </div>
        </div>
        <!-- Respuestas de los comentarios -->
        <ul class="comments-list reply-list">
          <li>
            <!-- Avatar -->
            <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div>
            <!-- Contenedor del Comentario -->
            <div class="comment-box">
              <div class="comment-head">
                <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                <span>hace 10 minutos</span>
                <i class="fa fa-reply"></i>
                <i class="fa fa-heart"></i>
              </div>
              <div class="comment-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
              </div>
            </div>
          </li>

          <li>
            <!-- Avatar -->
            <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
            <!-- Contenedor del Comentario -->
            <div class="comment-box">
              <div class="comment-head">
                <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                <span>hace 10 minutos</span>
                <i class="fa fa-reply"></i>
                <i class="fa fa-heart"></i>
              </div>
              <div class="comment-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
              </div>
            </div>
          </li>
        </ul>
      </li>

      <li>
        <div class="comment-main-level">
          <!-- Avatar -->
          <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div>
          <!-- Contenedor del Comentario -->
          <div class="comment-box">
            <div class="comment-head">
              <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
              <span>hace 10 minutos</span>
              <i class="fa fa-reply"></i>
              <i class="fa fa-heart"></i>
            </div>
            <div class="comment-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
  </div>

</template>

<script>
 import {ref,onMounted,watch} from 'vue'
import {firestoreRef,storageRef} from '@/firebase/config' 

import { useRoute,useRouter} from 'vue-router'
import gsap from 'gsap'
import firebase from 'firebase/app';
import Vue3autocounter from 'vue3-autocounter';
/* import LiteYouTubeEmbed from 'vue-lite-youtube-embed' */



export default {

      components: {
    'vue3-autocounter': Vue3autocounter,
    
  },

  

    setup() {


    


     
        const kategorikontrol=ref(false)
         const veriler=ref([])
      
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

         

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)


         const itemID=ref('')


         const showcardV=ref('visible')
         const showtitle=ref('hidden')

      

            watch ( () => {

                

})


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
           itemresim.value = doc.data().itemresim
           itemvideo.value = 'https://www.youtube.com/embed/'+doc.data().itemvideo+'?autoplay=1&&mute=1&playlist='+doc.data().itemvideo+'&loop=1&controls=0&modestbranding=1'
           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id





 /* for (let i = 0; i < sessionStorage.length; i++) {
     if (sessionStorage.key(i) == itemisim.value) {
         return console.log("var")
     }
     
 }

 sessionStorage.setItem(itemisim.value, itemisim.value);
 return console.log("yok") */



          
          
         
        });
            }else{
                 firestoreRef.collection('itemler').where('kategori','==',route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '<', ref.id).limit(1).get()
                 .then(snapshot => {
            snapshot.forEach(doc => {
                itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
            itemvideo.value = 'https://www.youtube.com/embed/'+doc.data().itemvideo+'?autoplay=1&&mute=1&playlist='+doc.data().itemvideo+'&loop=1&controls=0&modestbranding=1'

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

ortpuan.value = parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
  
         }



          return {veriler,verikayit,itemisim,itemresim,itemvideo,beforeEnter,enter,kategorigoster,puanladi,puan,ortpuan,yildizladi,ortpuanimation,next,anasayfagit,showcardV,doHidden,doVisible,
          showtitle,doYildizla,watchinfo,titlecheck
        }
        
    }

}
</script>

<style scoped>


* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
   }
  
   a {
    color: #03658c;
    text-decoration: none;
   }
  
  ul {
    list-style-type: none;
  }
  
  body {
    font-family: 'Roboto', Arial, Helvetica, Sans-serif, Verdana;
    background: #dee1e3;
  }
  
  /** ====================
   * Lista de Comentarios
   =======================*/
  .comments-container {
    margin: 60px auto 15px;
    width: 768px;
  }
  
  .comments-container h1 {
    font-size: 36px;
    color: #283035;
    font-weight: 400;
  }
  
  .comments-container h1 a {
    font-size: 18px;
    font-weight: 700;
  }
  
  .comments-list {
    margin-top: 30px;
    position: relative;
  }
  
  /**
   * Lineas / Detalles
   -----------------------*/
  .comments-list:before {
    content: '';
    width: 2px;
    height: 100%;
    background: #c7cacb;
    position: absolute;
    left: 32px;
    top: 0;
  }
  
  .comments-list:after {
    content: '';
    position: absolute;
    background: #c7cacb;
    bottom: 0;
    left: 27px;
    width: 7px;
    height: 7px;
    border: 3px solid #dee1e3;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  
  .reply-list:before, .reply-list:after {display: none;}
  .reply-list li:before {
    content: '';
    width: 60px;
    height: 2px;
    background: #c7cacb;
    position: absolute;
    top: 25px;
    left: -55px;
  }
  
  
  .comments-list li {
    margin-bottom: 15px;
    display: block;
    position: relative;
  }
  
  .comments-list li:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    width: 0;
  }
  
  .reply-list {
    padding-left: 88px;
    clear: both;
    margin-top: 15px;
  }
  /**
   * Avatar
   ---------------------------*/
  .comments-list .comment-avatar {
    width: 65px;
    height: 65px;
    position: relative;
    z-index: 99;
    float: left;
    border: 3px solid #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    overflow: hidden;
  }
  
  .comments-list .comment-avatar img {
    width: 100%;
    height: 100%;
  }
  
  .reply-list .comment-avatar {
    width: 50px;
    height: 50px;
  }
  
  .comment-main-level:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }
 
  .comments-list .comment-box {
    width: 680px;
    float: right;
    position: relative;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  
  .comments-list .comment-box:before, .comments-list .comment-box:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    display: block;
    border-width: 10px 12px 10px 0;
    border-style: solid;
    border-color: transparent #FCFCFC;
    top: 8px;
    left: -11px;
  }
  
  .comments-list .comment-box:before {
    border-width: 11px 13px 11px 0;
    border-color: transparent rgba(0,0,0,0.05);
    left: -12px;
  }
  
  .reply-list .comment-box {
    width: 610px;
  }
  .comment-box .comment-head {
    background: #FCFCFC;
    padding: 10px 12px;
    border-bottom: 1px solid #E5E5E5;
    overflow: hidden;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
  }
  
  .comment-box .comment-head i {
    float: right;
    margin-left: 14px;
    position: relative;
    top: 2px;
    color: #A6A6A6;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }
  
  .comment-box .comment-head i:hover {
    color: #03658c;
  }
  
  .comment-box .comment-name {
    color: #283035;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
  }
  
  .comment-box .comment-name a {
    color: #283035;
  }
  
  .comment-box .comment-head span {
    float: left;
    color: #999;
    font-size: 13px;
    position: relative;
    top: 1px;
  }
  
  .comment-box .comment-content {
    background: #FFF;
    padding: 12px;
    font-size: 15px;
    color: #595959;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
  }
  
  .comment-box .comment-name.by-author, .comment-box .comment-name.by-author a {color: #03658c;}
  .comment-box .comment-name.by-author:after {
    content: 'autor';
    background: #03658c;
    color: #FFF;
    font-size: 12px;
    padding: 3px 5px;
    font-weight: 700;
    margin-left: 10px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  
  /** =====================
   * Responsive
   ========================*/
  @media only screen and (max-width: 766px) {
    .comments-container {
      width: 480px;
    }
  
    .comments-list .comment-box {
      width: 390px;
    }
  
    .reply-list .comment-box {
      width: 320px;
    }
  }


  /* Comments END */


.textarea{
    width: 100%;
    color: #FFF;
    background: transparent;
 
    border-color: #DE354C;
    outline: none;
     text-align: center;
     bottom: 0;
     right: 3vw;
     position: relative;
     text-align: left;
     border-radius: 6px;
     margin-left: 1vw;

}

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
    margin-left:8vw;
    margin-right:8vw;
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
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px #DE354C;
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