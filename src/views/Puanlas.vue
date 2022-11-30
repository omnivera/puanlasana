<template>

<div  >

<!-- <div v-if="loading"><Loading/></div> -->
<div>
<div class="bigshadow">

<video v-if="itemvideo!=''" id="myVideo" autoplay muted loop  >
  <source :src="'https://drive.google.com/uc?export=download&id='+itemvideo" type="video/mp4">


</video>

<!-- <iframe src="https://player.vimeo.com/video/758465713?h=c9a69bc961&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Y2Mate.is - Aquaman - Official Trailer 1 - Now Playing In Theaters-WDkg3h8PCVU-720p-1654834192928"></iframe> -->

<!-- 
 <iframe id="myVideo"  src="https://drive.google.com/file/d/19hDOay4fFilO0xnSwrgn_X4DgzyHtbyX/preview?autoplay=1"  allow="autoplay"></iframe> -->
 

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


   

    <div class="col-6">
         <transition >   
 
                     
                     
 <div class="centershow">
                   
<div id="showcard" :class="showcardV"   class="card text-center" >
    <img :src="itemresim" data-bs-toggle="modal" data-bs-target="#filminfo" class="img-fluid showcardimg"   alt="" srcset="">
  <div  class="card-body">


      <div class="row d-flex justify-content-center">

     
 



  <!--   <h2>Kategori: {{kategorigoster}}</h2> -->



<h2 style="margin-top:0.1rem">{{itemisim}}</h2>
 <h6 class="card-subtitle  mt-1 ">{{kategorigoster}}</h6>
</div>





   </div>





     




  </div>





      </div>   


 </transition> 
    </div>




    <div class="col ms-auto mt-auto mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

         <div id="infocard2" class="card">
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

                <div v-if="true">
             <transition @before-enter="beforeEnter" @enter="enterbtn" appear >   
 <button type="button" id="controlyanbtn"  @click="anasayfagit" class=" btn-lg shadow  top-left contbutton"><i class="fa-solid fa-house"></i></button>
        
             </transition>
</div>

 

    </div>


   

    <div class="col ms-auto mt-auto mb-0 ">
      
 
          

 <div class="btn-group center-btm" role="group" aria-label="Basic outlined example">
  <button type="button" data-bs-toggle="modal" data-bs-target="#filminfo" class="btn btn-outline-primary shadow-none contbutton cleft" id="controlyanbtn"><i class="bi bi-info-circle-fill"></i></button>
  <a href="#yorumyap" > <button type="button"  @click="yorumshow" class="btn btn-outline-primary shadow-none contbutton cmid" id="controlyanbtn"><i  class="fas fa-comments"></i></button></a>
  <button v-if="showcardV=='visible'"  type="button"  @click="showcardV='hidden';showtitle='visible'" class="btn btn-outline-primary shadow-none contbutton cmid" id="controlyanbtn"><i class="fa-solid fa-chevron-down"></i></button>
  <button v-if="showcardV=='hidden'"  type="button"  @click="showcardV='visible';showtitle='hidden'" class="btn btn-outline-primary shadow-none contbutton cmid" id="controlyanbtn"><i class="fa-solid fa-chevron-up"></i></button>
  <button v-if="!listemcheck" type="button"  @click="addlist" class="btn btn-outline-primary shadow-none contbutton cmid" id="controlyanbtn"><i  title="Listeme Ekle" class="fas fa-plus"></i></button>
  <button v-if="listemcheck" type="button"  @click="deleteList" class="btn btn-outline-primary shadow-none contbutton cmid" id="controlyanbtn"><i class="fas fa-check"></i></button>
  <button type="button" @click="toggleMute" class="btn btn-outline-primary shadow-none contbutton cright" id="controlyanbtn"> 
  <i v-if="mutecheck" class="fas fa-volume-up"></i>
  <i v-if="!mutecheck" class="fas fa-volume-mute"></i>
  </button>
</div>
                   



<div v-if="starhover && yildizladi==false" class="center pointcircle d-flex justify-content-center" >
  <div class="center">
<span class="point" style="z-index:999">{{point}}</span>
  </div>

</div>
       

              <div v-if="titlecheck==true" class="card center-bottom" style="background-color:transparent;border-color:transparent;margin-bottom:3vh" >
  <div :class="showtitle" class="card-body " style="background-color:transparent;border-color:transparent; ">
       
    <span @click="watchinfo=true" class="bigtitle">{{itemisim}}</span>
    <br>

    <div v-if="!puanladi" class="stars" >
<form action="">
    <input :disabled="puanladi" @click="doYildizla(10)"  class="star star-10"  id="star-10" type="radio" name="star"/>
  <label class="star star-10" for="star-10"  @mouseover="dostarhover(10)" @mouseleave="undostarhover" ></label>
    <input :disabled="puanladi" @click="doYildizla(9)"  class="star star-9" id="star-9" type="radio" name="star"/>
  <label class="star star-9" for="star-9"  @mouseover="dostarhover(9)" @mouseleave="undostarhover" ></label>
    <input :disabled="puanladi" @click="doYildizla(8)"  class="star star-8" id="star-8" type="radio" name="star"/>
  <label class="star star-8" for="star-8"  @mouseover="dostarhover(8)" @mouseleave="undostarhover" ></label>
    <input :disabled="puanladi" @click="doYildizla(7)"  class="star star-7" id="star-7" type="radio" name="star"/>
  <label class="star star-7" for="star-7"  @mouseover="dostarhover(7)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(6)" class="star star-6" id="star-6" type="radio" name="star"/>
  <label class="star star-6" for="star-6"  @mouseover="dostarhover(6)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(5)"  class="star star-5" id="star-5" type="radio" name="star"/>
  <label class="star star-5" for="star-5"  @mouseover="dostarhover(5)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(4)" class="star star-4" id="star-4" type="radio" name="star"/>
  <label class="star star-4" for="star-4"  @mouseover="dostarhover(4)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(3)"  class="star star-3" id="star-3" type="radio" name="star"/>
  <label class="star star-3" for="star-3"  @mouseover="dostarhover(3)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(2)" class="star star-2" id="star-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2"  @mouseover="dostarhover(2)" @mouseleave="undostarhover" ></label>
  <input :disabled="puanladi" @click="doYildizla(1)"  class="star star-1" id="star-1" type="radio" name="star"/>
  <label class="star star-1" for="star-1"  @mouseover="dostarhover(1)" @mouseleave="undostarhover" ></label>
</form>
</div>
<div v-if="puanladi" class="show-ratings" >
               <i v-if="puan > 0" class="fa fa-star rating-color"></i> 
                <i v-if="puan == 0"  class="fa fa-star"></i>
                <i v-if="puan > 1" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 1"  class="fa fa-star"></i>
                <i v-if="puan > 2" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 2"  class="fa fa-star"></i>
                <i v-if="puan > 3" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 3"  class="fa fa-star"></i>
                <i v-if="puan > 4" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 4"  class="fa fa-star"></i>
                <i v-if="puan > 5" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 5"  class="fa fa-star"></i>
                <i v-if="puan > 6" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 6"  class="fa fa-star"></i>
                <i v-if="puan > 7" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 7"  class="fa fa-star"></i>
                <i v-if="puan > 8" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 8"  class="fa fa-star"></i>
                <i v-if="puan > 9" class="fa fa-star rating-color"></i>
                <i v-if="puan <= 9"  class="fa fa-star"></i>

</div>



<br>

<!-- <button class="upbutton" @click="showcardV='visible';showtitle='hidden'"><i  class="bi bi-chevron-up"></i></button> -->

    
    
     
  </div>
  <!-- <button v-if="!yildizladi" class="clsbutton" @click="showcardV='hidden';showtitle='visible'"><i  class="bi bi-chevron-down"></i></button> -->
</div>

<br>


         

         
    </div>




    <div class="col ms-auto  mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enterbtn" appear >   
 
    <button id="controlyanbtn" class="btn-lg shadow top-right contbutton" @click="next"><i class="fa-solid fa-forward"></i></button>
             </transition>
</div>



             


    </div>




  </div>
        <div v-if="!yildizladi && !puanladi">
         <transition @before-enter="beforeEnter" @enter="enterbtn" appear >   
 
                     

                   


 
<button type="button" id="controlyanbtn" @click="next"  class=" btn-lg shadow top-right contbutton"><i class="fa-solid fa-forward"></i></button>






 </transition> 
         </div>

</div>


</div>


<div class="modal fade" @focus="titlecheck=false" @blur="titlecheck=true" id="filminfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl scrollable">
    <div class="modal-content infomodal">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          <i v-if="kategorigoster=='Film' || kategorigoster=='Dizi' || kategorigoster=='Anime' " class="bi bi-film"></i> 
          <i v-if="kategorigoster=='Oyun'" class="fa-solid fa-gamepad"></i>
          {{itemisim}}
          </h5> 
        <i data-bs-dismiss="modal"  class="fa-solid fa-circle-xmark top-right2 close-btn"></i>
      </div>
      <div class="modal-body">
          <div class="row text-left">
              <div class="col-md-4">
                  <img :src="itemresim" class="img-fluid modalimg"  alt="" srcset="">

              </div>
              <div class="col-md-8">

                  <div class="row">
                  
                      <p class="aciklama">
                          {{ozet}}
                 </p>
                       </div>

                       <br>

                  <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">
                        <span v-if="kategorigoster=='Film' || kategorigoster=='Dizi'">Oyuncular</span>
                        <span v-if="kategorigoster=='Oyun'">Platformlar</span>
                        <span v-if="kategorigoster=='Anime'">Ana Karakterler</span>
                        </h5>
                      <hr class="">
                      <p>{{info1}}</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">Türler</h5>
                      <hr>
                      <p>{{info2}}</p>

                      </div>
                     
                  </div>

                 

                         <div class="row">
                      <div class="col-md-6">
                      <h5 class="redtitle">Çıkış Yılı</h5>
                      <hr class="">
                      <p>{{cyili}}</p>
                      </div>

                        <div class="col-md-6">
                      <h5 class="redtitle">
                        <span v-if="kategorigoster=='Film'">Film Süresi</span>
                        <span v-if="kategorigoster=='Dizi'">Sezon</span>
                        <span v-if="kategorigoster=='Anime'">Sezon / Bölüm</span>
                        <span v-if="kategorigoster=='Oyun'">Oyun Süresi</span></h5>
                      <hr>
                      <p>{{info3}}</p>

                      </div>
                     
                  </div>
   <div class="row text-center">
      
                     
                      <div v-if="kategorigoster=='Film' || kategorigoster=='Dizi' " class="d-flex justify-content-center">
           <p v-if="aramaplatform('Netflix')" class="platform"><img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"  class="platform-pic"> Netflix</p> 
           <p v-if="aramaplatform('Disney Plus')" class="platform"><img src="https://img.icons8.com/fluency/512/disney-plus.png"  class="platform-pic" >Disney Plus</p>
           <p  v-if="aramaplatform('Amazon')" class="platform"><img src="https://www.pngmart.com/files/Amazon-Logo-PNG-Image.png"  class="platform-pic" > Amazon</p>
           <p v-if="aramaplatform('HBO')" class="platform"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968611.png"  class="platform-pic" > HBO</p>

           
           
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
        <div v-if="!yorumladi" class="card yorumcard">
          <div id="yorumyapcardbody" class="card-body p-5">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"  :src="userimg"  width="65" height="65" />
                
                
              <div class="w-100">
                 <form @submit.prevent="yorumkayit" autocomplete="false">
                <h5>{{kullaniciad}} </h5>

                <div class="form-floating">
  <textarea autofocus class="form-control yorumbar" required maxlength="400"  v-model="yorum" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Yorum Yapsana</label>
</div>
<br>
   <div class="me-0">
                  
                 <a v-if="puanladi" href="#yorumlar"> <button style="float:right;"   type="submit" class="btn btn-danger yorumlabtn">Gönder</button> </a>
                 
                 <a v-if="!puanladi" href="#yorumlar"> <button style="float:right;"   type="button" @click="backtotop" class="btn btn-danger yorumlabtn">Yorum yapmak için puanla</button></a>
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
    <div class="ms-auto">
             <div class="row">
               
             </div>
 
           </div>

           <div v-if="yorumladi" class="text-center">
<div class="checkbox">
  <div class="check">
    <div class="line1"></div>
    <div class="line2"></div>
  </div>
  <div class="circle"></div>
</div>
<br>
<p style="color:white">Yorum yaptığınız için teşekkürler</p>

      </div>
        <section id="yorumlar" class="mt-5">
           
         

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
                <p class="yorum">
                  {{yorum.yorum}}
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <a @click="likeyorum(yorum)"  :class="yorum.likedcss" class="me-2" style="cursor:pointer"><i class="fas fa-thumbs-up me-1"></i>{{yorum.like}}</a>
                    <a @click="dislikeyorum(yorum)"  :class="yorum.dislikedcss"  style="cursor:pointer"><i class="fas fa-thumbs-down me-1"></i>{{yorum.dislike}}</a>
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
</div>

</template>

<script>
 import {ref,onMounted,watch,computed} from 'vue'
import {firestoreRef,storageRef,authRef} from '@/firebase/config' 

import { useRoute,useRouter} from 'vue-router'
import gsap from 'gsap'
import firebase from 'firebase/app';
import Vue3autocounter from 'vue3-autocounter';
/* import LiteYouTubeEmbed from 'vue-lite-youtube-embed' */
import moment from 'moment';
import getUser from "../composables/getUser";
import Loading from '@/components/Loading.vue'


export default {

      components: {
    'vue3-autocounter': Vue3autocounter
   
    
  },

  

    setup() {


if (sessionStorage.getItem('pasladi')==null) {
          
          sessionStorage.setItem('pasladi', JSON.stringify([]));
        }


        if (localStorage.getItem('listem')==null) {
          
          localStorage.setItem('listem', JSON.stringify([]));
        }

let pasarray= JSON.parse(sessionStorage.getItem('pasladi'))
     
        const kategorikontrol=ref(false)
         const veriler=ref([])
         const yorumlar=ref([])

      
         const listemcheck=ref(false)
      
  const seenItems=ref([{itemisim:""}])

          const route=useRoute()
          const router=useRouter()

       
         const basarisiz=ref(false)
         const itemisimgoster=ref('')
         const basarili=ref(false)


         const itemresim=ref('')
         const itemisim=ref('')
         
         const itemvideogoster=ref('')
         const start=ref('')
         const end=ref('')

         const kategorigoster=ref(route.params.Kategori)


         const puanladi = ref(false)
         const yildizladi = ref(false)

         const watchinfo = ref(false)
          const titlecheck = ref(true)
          const starhover = ref(false)
        

          const ozet=ref()
         const info1=ref()
         const info2=ref()
         const cyili=ref()
         const sirket= ref('')
         const info3=ref()
         const platformlar=ref('')

         

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)

         const point=ref(0)

         let yorumclickcount=0

let listarray = JSON.parse(localStorage.getItem('listem'))

  const aramaplatform= (pname)=>{

         
if (platformlar.value!=null) {
    return platformlar.value.includes(pname)
}
      
 return false

          

    
  }
 
          const addlist= ()=>{

            


            listemcheck.value=true



     const datalist = {

       itemisim:itemisim.value,
       itemresim:itemresim.value,
       info2:info2.value,
       kategori:kategorigoster.value,
       id:itemID.value




                  
                 
};




listarray.unshift(datalist)



   localStorage.setItem('listem', JSON.stringify(listarray));



const res = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('Liste').doc(itemID.value).set(datalist);

 


}



          const deleteList= ()=>{

listemcheck.value=false

const res = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('Liste').doc(itemID.value).delete();

 for (let i = 0; i < listarray.length; i++) {
                     if (listarray[i].id==itemID.value) {
                    listarray.splice(i,1)

                     }
                     
                   }

                    localStorage.setItem('listem', JSON.stringify(listarray))



}

 const backtotop= ()=>{


   window.scrollTo(0,0);


}

 const dostarhover= (a)=>{


   starhover.value=true
   point.value=a
   


}

 const undostarhover= ()=>{


   starhover.value=false


}

         const itemID=ref('')

         const yorum=ref('')
         const yorumladi=ref(false)
const tarih=ref(moment(new Date()).format('YYYY-MM-DD'))

         const showcardV=ref('visible')
         const showtitle=ref('hidden')

         const yorumclick=ref(false)

    const { kullanici } = getUser();

  let UIDPUA = ""
    const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const kullaniciuid= ref('')
    const userimg= ref('')
    const puanladiuser= ref(0)
    const yorumcountuser= ref(0)


    const loading= ref(true)
    let listemcount 

const mutecheck=ref(false)


  if (localStorage.getItem('mutecheck')==null) {
          
          localStorage.setItem('mutecheck', true);
        }

        




const toggleMute=()=>{
  let video=document.getElementById("myVideo");

  video.muted = !video.muted;
  localStorage.setItem("mutecheck", video.muted);
  mutecheck.value= !mutecheck.value
}

const startVideo=(start)=>{
  let video=document.getElementById("myVideo");

 if (localStorage.getItem("mutecheck") == "true") {
    video.muted = true;
     mutecheck.value = false;
  }

    if (localStorage.getItem("mutecheck")=="false") {
      video.muted = false;
    mutecheck.value = true;
  }
  


  video.currentTime = start;

}










     let puanarray= JSON.parse(localStorage.getItem('puanladi'))
    
    const itemvideo=ref('')

    if (localStorage.getItem('puanladi')==null) {
          
          localStorage.setItem('puanladi', JSON.stringify([]));
        }



    

 setTimeout(  function(){

loading.value=false

 

  


 },500)


    authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
    kullaniciuid.value=k.uid
   
})

   





const yorumshow=()=>{


    


    if (yorumclickcount==0) {
         firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').limit(10).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

                    if (doc.data().begenenler.includes(kullaniciemail.value)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:true,disliked:false,likedcss:"likeselected",dislikedcss:"link-muted"})
                    }else if (doc.data().begenmeyenler.includes(kullaniciemail.value)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:true,likedcss:"link-muted",dislikedcss:"likeselected"})
                    }else if (doc.data().begenenler.includes(kullaniciemail.value)==false && doc.data().begenmeyenler.includes(kullaniciad.value)==false){
                        yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:false,likedcss:"link-muted",dislikedcss:"link-muted"})
                    }


                    if (kullaniciemail.value==doc.data().kullaniciemail) {
                      yorumladi.value=true
                    }
         
         
        });
            }else{

                console.log("yorum yok")
              

            }
        })

        
        
     yorumclick.value=true
    }

    yorumclickcount++;


 
     
        }


                 const likeyorum= (yorum)=>{


                     if (yorum.liked==false && yorum.disliked==false) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1,
                   begenenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value),
                   
                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1,
                   begenenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value),
                   
                  
                   
        })

        yorum.like = yorum.like + 1
        yorum.likedcss="likeselected"
        yorum.liked=true

                     }else  if (yorum.liked==false && yorum.disliked==true) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1,
                   dislike:parseInt(yorum.dislike) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value),
                   begenmeyenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value)
                   


                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) + 1,
                   dislike:parseInt(yorum.dislike) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value),
                   begenmeyenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value)
                   


                  
                   
        })

        yorum.like = yorum.like + 1
        yorum.dislike = yorum.dislike - 1
        yorum.disliked=false
        yorum.dislikedcss="link-muted"
        yorum.likedcss= "likeselected"
        yorum.liked=true
                     }else if (yorum.liked==true && yorum.disliked==false) {
                         
             firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value),
                   
                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   like:parseInt(yorum.like) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value),
                   
                  
                   
        })

        yorum.like = yorum.like - 1
        yorum.likedcss="link-muted"

        yorum.liked=false

                     }
                         


                   





                     






       
         }

                  const dislikeyorum= (yorum)=>{


if (yorum.disliked==false && yorum.liked==false) {

            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1,
                   begenmeyenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value)
                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1,
                   begenmeyenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value)
                  
                   
        })

        yorum.dislike = yorum.dislike + 1
        yorum.dislikedcss= "likeselected"
        yorum.disliked=true

}else if (yorum.disliked==false && yorum.liked==true) {
                         
            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1,
                   like:parseInt(yorum.like) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value),
                   begenmeyenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value)

                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) + 1,
                   like:parseInt(yorum.like) - 1,
                   begenenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value),
                   begenmeyenler:firebase.firestore.FieldValue.arrayUnion(kullaniciemail.value)

                  
                   
        })

        yorum.dislike = yorum.dislike + 1
        yorum.like = yorum.like - 1
        yorum.liked=false
        yorum.likedcss="link-muted"
        yorum.dislikedcss= "likeselected"
        yorum.disliked=true
                     }else if (yorum.disliked==true && yorum.liked==false) {

            firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) - 1,
                   begenmeyenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value)
                  
                   
        })

        firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorum.id).update({

                   dislike:parseInt(yorum.dislike) - 1,
                   begenmeyenler:firebase.firestore.FieldValue.arrayRemove(kullaniciemail.value)
                  
                   
        })

        yorum.dislike = yorum.dislike - 1
        yorum.dislikedcss= "link-muted"
        yorum.disliked=false

}


    


       
         }


      
         
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

           

            if (kullaniciemail.value != "") {
        puan.value = sayi
        yildizladi.value = true
       

        verikayit()
            }else{
              router.push({name:'Login'})
            }
      

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
            opacity:0.8,
            y:0,
            duration:1.2,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }


         const enterbtn=(el)=>{

          gsap.to(el,{
            opacity:0.75,
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



      pasarray.unshift({itemID:itemID.value,itemisim:itemisim.value,kategori:route.params.Kategori})

 sessionStorage.setItem('pasladi', JSON.stringify(pasarray))

        setTimeout(() => {
          router.push({name:'Puanla',params:{Kategori:route.params.Kategori}})
          
        }, 500);



  
        }


          const verigetir=async ()=>{


        
          }


         


       



       


     onMounted(async () => {

  

     setTimeout(() => {
         showcardV.value="hidden"
    showtitle.value="visible"
     }, 3000);
  

    
      const doc = await firestoreRef.collection(route.params.Kategori).doc(route.params.itemID).get()

          let iframe = document.getElementById('myVideo')


         
           
           itemvideo.value = doc.data().itemvideo
           itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
            info1.value = doc.data().info1
            info2.value = doc.data().info2
            cyili.value = doc.data().cyili
            sirket.value = doc.data().sirket
            info3.value = doc.data().info3
            ozet.value = doc.data().ozet
            platformlar.value = doc.data().platformlar

           
let listem = JSON.parse(localStorage.getItem('listem'))
     
 listemcount = listem.filter((liste)=>liste.id.includes(doc.id))



if (listemcount.length > 0) {
  listemcheck.value=true
}

  
    let puaninfo = puanarray.filter((puan)=>puan.itemID.includes(doc.id) ) 

  

 if (puaninfo.length > 0) {
     puanladi.value=true
     puan.value=puaninfo[0].puan
     ortpuan.value = parseFloat((totalpuan.value) / (puancount.value))
 }

    watch ( () => {

              if (itemvideo.value != "") {
                setTimeout(() => {
                  
                   startVideo(doc.data().start)
                   
                }, 600);


/* if (puaninfo.length == 0) {
   setTimeout(() => {
       if (yildizladi.value == false) {
    showcardV.value="hidden"
    showtitle.value="visible"
     }
   }, 3000);
   

               
} */
 
              }

              


})

 

          /* await firestoreRef.collection(route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '>=', firestoreRef.collection(route.params.Kategori).doc().id).where('puanlayanlar','not-in',[kullaniciuid.value]).limit(1).get() */
         
   





        


           
          
setTimeout(() => {
  

      
firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         kullaniciad.value = doc.data().kullaniciad
         userimg.value = doc.data().userimg
         if (doc.data().puanladi==undefined) {
           puanladiuser.value=0
         }else{
         puanladiuser.value=doc.data().puanladi
         }
         




         
        });
            }else{

                console.log('uye yok')
              

            }
        })
}, 500);
         
        })



                 const verikayit=async ()=>{

                 
UIDPUA="PUA"+kullaniciuid.value







           await firestoreRef.collection(route.params.Kategori).doc(itemID.value).update({

                   totalpuan: puan.value + totalpuan.value,
                   puancount: puancount.value + 1,
                   puan:parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
                  
                   
        })


        firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         if (doc.data().puanladi==undefined) {
           puanladiuser.value=0
         }else{
             firestoreRef.collection('uyeler').doc(kullaniciemail.value).update({

                   
                   puanladi: doc.data().puanladi + 1,
                  
                  
                   
        })
         }
         




         
        });
            }
        })

      


    

        const dataitem = {
                   kullaniciad:kullaniciad.value,
                   kullaniciemail:kullaniciemail.value,
                   itemisim:itemisim.value,
                   itemresim:itemresim.value,
                   itemID:itemID.value,
                   tarih:moment(tarih.value).format('DD/MM/YYYY'),
                   gtarih:Date.parse(tarih.value.toString()),
                   kategori:kategorigoster.value,
                   puan:puan.value             
};

       const res2 = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('puanlar').doc(itemID.value).set(dataitem);

puanarray.unshift({itemisim:itemisim.value,itemresim:itemresim.value,itemID:itemID.value,kategori:route.params.Kategori,puan:puan.value})

 localStorage.setItem('puanladi', JSON.stringify(puanarray))
        
  
puanladi.value=true;

ortpuan.value = parseFloat((puan.value + totalpuan.value) / (puancount.value + 1))
  
         }

               const yorumkayit=async ()=>{


                         if (kullaniciemail.value!="") {

                 yorumladi.value=true

const yorumkod=ref("Y"+Date.parse(new Date()))

       const datayorum = {
                   kullaniciad:kullaniciad.value,
                   kullaniciemail:kullaniciemail.value,
                   itemisim:itemisim.value,
                   itemID:itemID.value,
                   kategori:kategorigoster.value,
                   yorum:yorum.value,
                   like:0,
                   dislike:0,
                   puan:puan.value,
                   userimg:userimg.value,
                   tarih:moment(tarih.value).format('DD/MM/YYYY'),
                   gtarih:Date.parse(tarih.value.toString()),
                   begenenler:[],
                   begenmeyenler:[]
                 
};

yorumlar.value.unshift({
  kullaniciad:kullaniciad.value,
  kullaniciemail:kullaniciemail.value,
  yorum:yorum.value,
  id:yorumkod.value,
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
  begenenler:[],
  begenmeyenler:[]
  })

const res = firestoreRef.collection(route.params.Kategori).doc(itemID.value).collection('yorumlar').doc(yorumkod.value).set(datayorum);
const res2 = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').doc(yorumkod.value).set(datayorum);


firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         if (doc.data().yorumcount==undefined) {
           firestoreRef.collection('uyeler').doc(kullaniciemail.value).update({

                   
                   yorumcount: 1,
                  
                  
                   
        })
         }else{
             firestoreRef.collection('uyeler').doc(kullaniciemail.value).update({

                   
                   yorumcount: doc.data().yorumcount + 1,
                  
                  
                   
        })
         }
         




         
        });
            }
        })

   yorum.value=""

    }else{
       router.push({name:'Login'})
    }

  
         }



          return {veriler,verikayit,itemisim,itemresim,itemvideo,beforeEnter,enter,kategorigoster,puanladi,puan,ortpuan,yildizladi,ortpuanimation,next,anasayfagit,showcardV,doHidden,doVisible,
          showtitle,doYildizla,watchinfo,titlecheck,yorumclick,enteryorumlar,yorum,yorumkayit,yorumshow,yorumlar,likeyorum,dislikeyorum,info1,info2,cyili,info3,ozet,kullaniciad,userimg,kullaniciemail,
          yorumladi,loading,itemvideogoster,sirket,toggleMute,mutecheck,backtotop,enterbtn,starhover,dostarhover,undostarhover,point,addlist,listemcheck,deleteList,
          aramaplatform
          
        }
        
    }

}
</script>



<style scoped src="@/assets/puanla.css">















</style>