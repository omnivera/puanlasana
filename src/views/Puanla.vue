<template>

<div  >

<!-- <div v-if="loading"><Loading/></div> -->
<div>
<div class="bigshadow">
  
<video v-if="itemvideo!=''" id="myVideo" autoplay muted loop width="320" height="240" >
  <source  :src="'https://drive.google.com/uc?export=download&id='+itemvideo" type="video/mp4">

</video>



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
         <transition >   
 
                     
                     
 <div class="d-flex justify-content-center">
                   
<div id="showcard" :class="showcardV"  class="card text-center" >
    <img :src="itemresim" data-bs-toggle="modal" data-bs-target="#filminfo" class="img-fluid showcardimg"  alt="" srcset="">
  <div class="card-body">


      <div class="row d-flex justify-content-center">

     
 



  <!--   <h2>Kategori: {{kategorigoster}}</h2> -->



<h2 style="margin-top:1vh">{{itemisim}}</h2>
 <h6 class="card-subtitle  mt-1">{{kategorigoster}}</h6>
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


   

    <div class="col ms-auto mt-auto mb-0">
         <div v-if="true">
 
 
                     

                   

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
    <div v-if="!puanladi" class="stars">
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


    
    
     
  </div>
</div>

<br>


         

         
    </div>




    <div class="col ms-auto  mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enterbtn" appear >   
 
      <button id="controlyanbtn" class="btn-lg shadow top-right contbutton" @click="next"><i class="fa fa-play"></i></button>
             </transition>
</div>



             


    </div>




  </div>
        <div v-if="!yildizladi && !puanladi">
         <transition @before-enter="beforeEnter" @enter="enterbtn" appear >   
 
                     

                   


 
<button type="button" id="controlyanbtn" @click="next"  class=" btn-lg shadow top-right contbutton"><i class="fas fa-fast-forward"></i></button>






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
                  <img :src="itemresim" class="img-fluid" style="height:50vh;border-radius:20px"  alt="" srcset="">

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

                  <br>

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
                        <span v-if="kategorigoster=='Oyun'">Oyun Süresi</span></h5>
                      <hr>
                      <p>{{info3}}</p>

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
  <textarea class="form-control" required maxlength="400"  v-model="yorum" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 130px"></textarea>
  <label for="floatingTextarea2">Yorum Yapsana</label>
</div>
<br>
   <div class="me-0">
                  
                 <a v-if="puanladi" href="#yorumlar"> <button  style="float:right" type="submit" id="yorumlabuttonv2" class="shadow"><i class="fas fa-paper-plane"></i> Gönder</button></a>
                 <a v-if="!puanladi" href="#yorumlar"> <button  style="float:right;" type="button" @click="backtotop" id="yorumlabuttonv2dis" class="shadow"><i class="fas fa-star"></i> Yorum yapmak için puanla</button></a>
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
import Loading from '@/components/Loading.vue'



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


         const itemresim=ref()
         const itemisim=ref()
         const itemvideo=ref('')
         const itemvideogoster=ref()
         const start=ref()
         const end=ref()

         const kategorigoster=ref(route.params.Kategori)

         const listemcheck=ref(false)
         const puanladi = ref(false)
         const yildizladi = ref(false)

         const watchinfo = ref(false)
          const titlecheck = ref(true)

          const filmozet=ref()
         const oyuncular=ref()
         const turler=ref()
        
         const fsure=ref()

      

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)

         let yorumclickcount=0



         const itemID=ref('')

         const yorum=ref('')
         const yorumladi=ref(false)
const tarih=ref(moment(new Date()).format('YYYY-MM-DD'))

         const showcardV=ref('visible')
         const showtitle=ref('hidden')


         let listemcount 


              const addlist= ()=>{

            


            listemcheck.value=true



     const datalist = {

       itemisim:itemisim.value,
       itemresim:itemresim.value,
       info2:info2.value,
       kategori:kategorigoster.value,
       id:itemID.value




                  
                 
};


let listarray = JSON.parse(localStorage.getItem('listem'))

listarray.unshift(datalist)



   localStorage.setItem('listem', JSON.stringify(listarray));



const res = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('Liste').doc(itemID.value).set(datalist);

 


}



          const deleteList= ()=>{

listemcheck.value=false

const res = firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('Liste').doc(itemID.value).delete();



}


 const backtotop= ()=>{


   window.scrollTo(0,0);


}

         const ozet=ref()
         const info1=ref()
         const info2=ref()
         const cyili=ref()
         const sirket= ref('')
         const info3=ref()

         const yorumclick=ref(false)

    const { kullanici } = getUser();


    const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const kullaniciuid= ref('')
    const userimg= ref('')
    const puanladiuser= ref(0)
    const starhover = ref(false)
    const point = ref(0)

    const loading= ref(true)


     const dostarhover= (a)=>{


   starhover.value=true
   point.value=a
   


}

 const undostarhover= ()=>{


   starhover.value=false


}



            if (sessionStorage.getItem('pasladi')==null) {
          
          sessionStorage.setItem('pasladi', JSON.stringify([]));
        }


        if (localStorage.getItem('puanladi')==null) {
          
          localStorage.setItem('puanladi', JSON.stringify([]));
        }


  if (localStorage.getItem('mutecheck')==null) {
          
          localStorage.setItem('mutecheck', true);
        }
        
          let itemarray= JSON.parse(localStorage.getItem('itemler'))
          itemarray = itemarray.filter((item)=>item.kategori == route.params.Kategori)
          let puanarray= JSON.parse(localStorage.getItem('puanladi'))
          let pasarray= JSON.parse(sessionStorage.getItem('pasladi'))

          let pool=[]

          let random=0


          if (puanarray.length > 0 && pasarray.length > 0) {
            pool= itemarray.filter(({id}) => !puanarray.some(puan => puan.itemID == id))
            pool= pool.filter(({id}) => !pasarray.some(puan => puan.itemID == id))
            random = pool[Math.floor(Math.random()*pool.length)];
            console.log("puanarray.length > 0 && pasarray.length > 0")
          }else if (puanarray.length > 0 && pasarray.length==0){
            pool= itemarray.filter(({id}) => !puanarray.some(puan => puan.itemID == id))
            random = pool[Math.floor(Math.random()*pool.length)];
            console.log("puanarray.length > 0 && pasarray.length==0")
          }else if (puanarray.length==0 && pasarray.length > 0){
            pool= itemarray.filter(({id}) => !pasarray.some(puan => puan.itemID == id))
            random = pool[Math.floor(Math.random()*pool.length)];
            console.log("puanarray.length==0 && pasarray.length > 0")
          }else if(puanarray.length == 0 && pasarray.length == 0){
            random = itemarray[Math.floor(Math.random()*itemarray.length)];
            console.log("puanarray.length == 0 && pasarray.length == 0")
          }
         

        


       

          console.log(pasarray)



                 
     /* let puaninfo = puanarray.filter((puan)=>puan.itemID == doc.id) */


const mutecheck=ref(false)


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





         

 setTimeout(  function(){
loading.value=false


 },1200)


    authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
    kullaniciuid.value=k.uid
   
})

       

            watch ( () => {

              if (itemvideo.value != "") {
                setTimeout(() => {
                  startVideo(start.value)
                }, 600);

                 setTimeout(  function(){
     if (yildizladi.value == false) {
    showcardV.value="hidden"
    showtitle.value="visible"
     }

                },3000)
 
              }

              


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
            opacity:1,
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
          location. reload()
        }, 500);



  
        }


    /*     const next=()=>{

      pasarray.unshift({itemID:itemID.value,itemisim:itemisim.value,kategori:route.params.Kategori})

 sessionStorage.setItem('pasladi', JSON.stringify(pasarray))

    

        setTimeout(() => {
        yeni.value=false
        showcardV.value="fastvisible"
        yeni.value=true
        
        showtitle.value="fasthidden"
        



           




                if (sessionStorage.getItem('pasladi')==null) {
          
          sessionStorage.setItem('pasladi', JSON.stringify([]));
        }


        if (localStorage.getItem('puanladi')==null) {
          
          localStorage.setItem('puanladi', JSON.stringify([]));
        }

        
          let itemarray= JSON.parse(localStorage.getItem('itemler'))
          itemarray = itemarray.filter((item)=>item.kategori == route.params.Kategori)
          let puanarray= JSON.parse(localStorage.getItem('puanladi'))
          let pasarray= JSON.parse(sessionStorage.getItem('pasladi'))

          let pool=[]

          let random=0


          if (puanarray!=null && pasarray!=null) {
            pool = itemarray.filter((elem) => !puanarray.find(({ itemID }) => elem.id === itemID));
            pool = itemarray.filter((elem) => !pasarray.find(({ itemID }) => elem.id === itemID));
            random = pool[Math.floor(Math.random()*pool.length)];
          }else if (puanarray!=null && pasarray==null){
            pool = itemarray.filter((elem) => !puanarray.find(({ itemID }) => elem.id === itemID));
            random = pool[Math.floor(Math.random()*pool.length)];
          }else if (puanarray==null && pasarray!=null){
            pool = itemarray.filter((elem) => !pasarray.find(({ itemID }) => elem.id === itemID));
            random = pool[Math.floor(Math.random()*pool.length)];
          }else{
            random = itemarray[Math.floor(Math.random()*itemarray.length)];
          }


             firestoreRef.collection(route.params.Kategori).where(firebase.firestore.FieldPath.documentId(),'==',random.id).get()   
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {


   


             itemvideo.value=doc.data().itemvideo
            itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id
           oyuncular.value = doc.data().oyuncular
            turler.value = doc.data().turler
            cyili.value = doc.data().cyili
            fsure.value = doc.data().fsure
            filmozet.value = doc.data().filmozet
       
                   


           





          
          
         
        });
            }
            
      


        })
        }, 500);



  
        } */


          const verigetir=async ()=>{


        
          }


           setTimeout(() => {
          if (sessionStorage.getItem(kullaniciuid.value) !== null) {
     console.log("var");
  
     
} else {
console.log("yok");

  
 /*      firestoreRef.collection(route.params.Kategori).where('watchers','array-contains-any',[["PAS"+kullaniciuid.value]]).get()
        .then(snapshot =>{
           
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
                firestoreRef.collection(route.params.Kategori).doc(doc.id).update({

                   
                   watchers:firebase.firestore.FieldValue.arrayRemove("PAS"+kullaniciuid.value),
                   
                  
                   
        })


           





          
          
         
        });
            }
            
      


        }) */

sessionStorage.setItem(kullaniciuid.value,kullaniciuid.value)

      
}
        }, 500);



       


     onMounted(async () => {

     


    
    

      
    


         await  firestoreRef.collection(route.params.Kategori).where(firebase.firestore.FieldPath.documentId(),'==',random.id).get()   
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {


   


             itemvideo.value=doc.data().itemvideo
            itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           start.value = doc.data().start
           end.value = doc.data().end
           itemID.value = doc.id
            info1.value = doc.data().info1
            info2.value = doc.data().info2
            cyili.value = doc.data().cyili
            sirket.value = doc.data().sirket
            info3.value = doc.data().info3
            ozet.value = doc.data().ozet
       
                   


           

let listem = JSON.parse(localStorage.getItem('listem'))
     
 listemcount = listem.filter((liste)=>liste.id.includes(doc.id))



if (listemcount.length > 0) {
  listemcheck.value=true
}



          
          
         
        });
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
          showtitle,doYildizla,watchinfo,titlecheck,yorumclick,enteryorumlar,yorum,yorumkayit,yorumshow,yorumlar,likeyorum,dislikeyorum,oyuncular,turler,cyili,fsure,filmozet,kullaniciad,userimg,kullaniciemail,
          yorumladi,loading,itemvideogoster,toggleMute,mutecheck,info1,info2,info3,ozet,backtotop,starhover,dostarhover,undostarhover,point,enterbtn,addlist,deleteList,listemcheck
          
        }
        
    }

}
</script>

<style scoped>






.checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  overflow: hidden;
  margin-left: 47.5%;
}


.check {
  width: 36px;
  height: 18px;
  transform: rotate(-45deg);
  z-index: 2;
  overflow: hidden;
  margin-top: -9px;
}

.circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #DE354C;
  animation-duration: 400ms;
  animation-name: draw-circle;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}


.line1 {
  width: 4px;
  height: 0;
  background-color: #fff;
  animation-name: draw-line1;
  animation-duration: 160ms;
  animation-delay: 430ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}


.line2 {
  width: 0;
  height: 4px;
  margin-top: -4px;
  background-color: #fff;
  animation-name: draw-line2;
  animation-duration: 120ms;
  animation-delay: 590ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

@keyframes draw-line1 {
  0% {
    height: 0px;
  }

  100% {
    height: 18px;
  }
}

@keyframes draw-line2 {
  0% {
    width: 5px;
  }

  100% {
    width: 36px;
  }
}

@keyframes draw-circle {
  0% {
    width: 0px;
    height: 0px;
  }
  
  90% {
    width: 84px;
    height: 84px;
  }  

  100% {
    width: 80px;
    height: 80px;
  }
}



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
  
     color: white;
        resize: none;
        border-radius: 20px;
         height: 130px;
         border: 0.8px solid #454545;
  background:#0f0f0f;

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
    border-radius: 20px;

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



  

.bigshadow{
  z-index: 2;
    background: black;
    opacity: 0.85;


   
}






#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
 pointer-events: none;
  
  
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
  font-size: 1.5vw;
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


.altbutton {
  background-color: black;
  border: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2vw;
  padding: 1rem 1.5rem;
  border-radius: 6px;
 
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
  margin-top: -1vh;
}

input.star{
  display: none;
}

label.star {
  float: right;
  padding: 0.4vw;
  font-size: 1.4vw;
  color: #DE354C;
  transition: all .2s;
  cursor: pointer;

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
  color: #DE354C;
  text-shadow: 0 0 20px #DE354C;
}



input.star-9:checked ~ label.star:before {
 color: #DE354C;
}


input.star-8:checked ~ label.star:before {
 color: #DE354C;
}
input.star-7:checked ~ label.star:before {
  color: #DE354C;
}
input.star-6:checked ~ label.star:before {
 color: #DE354C;
}


input.star-5:checked ~ label.star:before {
 color: #DE354C;
}
input.star-5:checked ~ label.star:before {
color: #DE354C;
}
input.star-4:checked ~ label.star:before {
  color: #DE354C;
}



input.star-3:checked ~ label.star:before {
  color: #DE354C;
}

input.star-2:checked ~ label.star:before {
 color: #DE354C;
}



input.star-1:checked ~ label.star:before {
  color: #DE354C;
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