<template>
<div v-if="loading"><Loading/></div>

<div v-if="!loading">




<main>
   <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
    <div class="user-header-wrapper flexbox">
        <div class="user-header-inner flexbox">
            <div class="user-header-overlay"></div>
            <img class="user-header" src="https://preview.redd.it/52f61nfzmwl51.jpg?auto=webp&s=ea0d396990fbdffe68c214d263810737f9faac6f" alt="">
        </div>
    </div>
   </transition>
   <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
    <div class="user-info-bar">
        <div class="ufo-bar-col1">
        </div>
        <div class="ufo-bar-col2">
            <div class="ufo-bar-col2-inner">
                <div class="user-icon-wrapper">
                    <img class="user-icon" :src="userimg" data-bs-toggle="modal" data-bs-target="#profilepicedit" alt="">
                </div>
            </div>
        </div>
        <div class="ufo-bar-col3">
            <div class="ufo-bar-col3-inner">
                <div class="username-wrapper-outer">
                    <div class="username-wrapper">
                        <div class="verified" style="opacity: 0; top: 150%;"><p>Verified Account</p></div>
                        <h3 class="username-dev">{{kullaniciad}}</h3>
                        <svg class="uname-verified" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1350.03 1326.16">
                          
                            <g id="Layer_3" data-name="Layer 3">
                                <polygon class="cls-11" points="0 747.37 120.83 569.85 70.11 355.04 283.43 292.38 307.3 107.41 554.93 107.41 693.66 0 862.23 120.83 1072.57 126.8 1112.84 319.23 1293.35 399.79 1256.05 614.6 1350.03 793.61 1197.87 941.29 1202.35 1147.15 969.64 1178.48 868.2 1326.16 675.02 1235.17 493.77 1315.72 354.99 1133.73 165.58 1123.29 152.16 878.64 0 747.37"/></g>
                            <g id="Layer_2" data-name="Layer 2">
                                <path class="cls-12" d="M755.33,979.23s125.85,78.43,165.06,114c34.93-36,234.37-277.22,308.24-331.94,54.71,21.89,85,73.4,93,80.25-3.64,21.89-321.91,418.58-368.42,445.94-32.74-3.84-259-195.16-275.4-217C689.67,1049.45,725.24,1003.85,755.33,979.23Z" transform="translate(-322.83 -335.95)"/></g>
                        </svg>
                    </div>
                    <div class="infobar">
                        <a class="ufo-bar-fff" href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='followers' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span>  Takipçi</a>
                        <a class="ufo-bar-fff" href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='begeniler' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span> Beğeni</a>
                         |&nbsp; 
                        <a v-show="yorumlarshow" @click="goYorumlar" class="ufo-bar-fff profilebtn" style="color:white" href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorumcount' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span> Yorum</a>
                        <a v-show="puanlarshow" @click="goYorumlar" class="ufo-bar-fff profilebtn" href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorumcount' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span> Yorum</a>
                        <a v-show="yorumlarshow" @click="goPuanla" class="ufo-bar-fff profilebtn"  href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='puanladi' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span> Puan</a>
                        <a v-show="puanlarshow" @click="goPuanla" class="ufo-bar-fff profilebtn" style="color:white" href="#"><span><vue3-autocounter ref='counter' :startAmount='0' :endAmount='puanladi' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></span> Puan</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ufo-bar-col4">
            <div class="ufo-bar-col4-inner">
              <button style="float:right;"   type="submit" class="btn btn-danger takipbtn"><i class="fa-solid fa-user-plus"></i> Takip Et</button>
              <!--   <button class="button2 btn-primary2"><i class="uil uil-plus"></i> Takip Et<div class="btn-secondary2"></div></button> -->
            </div>
        </div>
      
    </div>
   </transition>


<div v-if="yorumlarshow">
         

  <transition v-if="yorumcount > 0 " @before-enter="beforeEnter" @enter="enterv2" appear >      
<div class="row">
   
    <div class="container my-2 py-4 text-dark">
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
                <span class="yorumkat" @click="goItem(yorum)">{{yorum.itemisim}}</span> 
                 <!-- <span v-if="yorum.kategori!=null" class="yorumkat" style="margin-left:0.7rem">{{yorum.kategori}}</span>  -->
       


               
      
                
                <p class="yorum">
                  {{yorum.yorum}}
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center likeordis" >
                    <a  @click="likeyorum(yorum)"  :class="yorum.likedcss" class="me-2" ><i class="fas fa-thumbs-up me-1"></i><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorum.like' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></a>
                    <a @click="dislikeyorum(yorum)"  :class="yorum.dislikedcss" ><i class="fas fa-thumbs-down me-1"></i><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorum.dislike' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></a>
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

  <div v-if="yorumcount == 0" class="row text-center text-white" style="margin-top:3vh">
<div class="glow"><marquee behavior="scroll" direction="left" scrollamount="15"> </marquee></div>
  

<!-- <div class="head yellow">
  <div class="face standard">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="mouth"></div>
  </div>
</div> -->
  <transition @before-enter="beforeEnter" @enter="enterv2" appear >      
<div class="head blue">
  <div class="face sad">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="mouth"></div>
  </div>
</div>
  </transition>
    <transition @before-enter="beforeEnter" @enter="enterv2" appear >    
<h5 style="margin-top:2vh">Henüz hiç yorum yapmadınız</h5>
    </transition>
  </div>
       </div>




        <div v-if="puanlarshow" class="d-flex justify-content-center">
    <div class="row">

<div class="container">
  <div class="row" style="margin-top:-0.4vh">


    

   </div>
   <br>
  <transition-group @before-enter="beforeEnter" @enter="enterv2" appear >   
    

  
    <div v-for="item in itemler" :key="item.id" class="user-card">
        

      <div class="user-profile">
      
        <div ><img class="profilecard" :src="item.itemresim" alt=""></div>
    <!--     <div class="last-submit">{{item.itemisim}}</div> -->
       
 
 </div>
      <div class="user-stats">
        <div class="w-clearfix">
          <h1 class="name">
            <i v-if="item.rank==1" style="color:gold" class="fas fa-crown"></i>
            <i v-if="item.rank==2" style="color:silver" class="fas fa-crown"></i>
            <i v-if="item.rank==3" style="color:#CD7F32" class="fas fa-crown"></i>
            <span v-if="item.rank>3" style="color:#DE354C"> {{item.rank}}) </span>
       {{item.itemisim}}
            </h1>
          <div class="score w-clearfix" >
            <h1 class="my-score"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='item.puan' :duration='1.5' suffix='' separator=',' decimalSeparator=',' :decimals='1' :autoinit='true' /></h1>
            
          </div>
        </div>
        <div class="progress">
          <div class="total-progress">
            <div class="my-progress" :style="'width:'+item.puan*10+'%'" ></div>
          </div>
        </div>
        <div class="meta-stats text-right">
         
         <!--  <div class="meta-stat ">
            <button type="button" class="btn btn-outline-danger">Güncelle</button>
          </div> -->
       
        </div>
      </div>
    </div>
  </transition-group>
  </div>
      </div>
 </div>

 
</main>

<div class="modal fade"  id="profilepicedit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg scrollable">
    <div class="modal-content profilepiceditmodal">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Profil Resmi</h5> 
         
          
        <i data-bs-dismiss="modal"  class="fa-solid fa-circle-xmark top-right2 close-btn"></i>
      </div>
      <div class="modal-body text-center">
        <br>
        <div class="row">
          <div class="col-md-3">
           <img src="https://images.squarespace-cdn.com/content/v1/61e79efa49cf0769cacf9ecb/1643603781122-89TALSSE9Q02G3XQJJ1R/placeholder-1.png" data-bs-dismiss="modal" @click="editphoto('https://images.squarespace-cdn.com/content/v1/61e79efa49cf0769cacf9ecb/1643603781122-89TALSSE9Q02G3XQJJ1R/placeholder-1.png')"  class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/4625/4625428.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/4625/4625428.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/1864/1864460.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/1864/1864460.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/3038/3038602.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/3038/3038602.png')"  class="profile-pic">
          </div>
        </div>
<br>
<br>
<br>
         <div class="row">
          <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/2171/2171990.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/2171/2171990.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/3227/3227013.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/3227/3227013.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/8348/8348132.png" data-bs-dismiss="modal"  @click="editphoto('https://cdn-icons-png.flaticon.com/512/8348/8348132.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/1864/1864386.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/1864/1864386.png')" class="profile-pic">
          </div>
        </div>
          <br>
          <br>
          <br>

          <div class="row">
          <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/4140/4140037.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/8884/8884131.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/8884/8884131.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/8910/8910807.png" data-bs-dismiss="modal"  @click="editphoto('https://cdn-icons-png.flaticon.com/512/8910/8910807.png')" class="profile-pic">
          </div>
           <div class="col-md-3">
           <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" data-bs-dismiss="modal" @click="editphoto('https://cdn-icons-png.flaticon.com/512/219/219969.png')" class="profile-pic">
          </div>
        </div>
           
           <br>
      </div>
      
    </div>
  </div>
</div>


</div>



</template>

<script>

import {onMounted,ref} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
import {authRef} from '../firebase/config'
import getUser from "../composables/getUser";
/* import getProfile from "../composables/getProfile"; */
import Vue3autocounter from 'vue3-autocounter';
import Loading from '@/components/intro.vue'
export default {

components: {
    'vue3-autocounter': Vue3autocounter,Loading
 
    
  },
  
    setup() {

      const route=useRoute()
    const router=useRouter()

    const { kullanici } = getUser();
   /*  const { user } = getProfile(route.params.userID); */
    const yorumlar= ref([])
    const itemler= ref([])
    const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const userimg= ref('')
    const yorumcount= ref(0)
    const begeniler= ref(0)
    const puanladi= ref(0)

    const followers= ref(0)

    


    const loading= ref(true)
    const puanlarshow= ref(false)
    const yorumlarshow= ref(true)



 setTimeout(  function(){
loading.value=false

 },2500)





         const beforeEnter = el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enter = el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: el.dataset.index * 0.2
      });
    };

    const enterv2 = el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        delay: el.dataset.index * 0.3,
        ease: "back"
      });
    };


      const goItem=(yorum)=>{

router.push({name:'Puanlas',params:{Kategori:yorum.kategori,itemID:yorum.itemID}})

    }

    const goYorumlar=()=>{

puanlarshow.value=false
yorumlarshow.value=true

    }

const goPuanla=()=>{

puanlarshow.value=true
yorumlarshow.value=false


  
        }


        const editphoto=(imgurl)=>{


          userimg.value=imgurl




firestoreRef.collection('uyeler').doc(route.params.userEmail).update({

                   userimg:userimg.value
                   
                  
                   
        })

        setTimeout(() => {
          window.location.reload();
        }, 500);



  
        }


            onMounted(async () => {


           

           
         setTimeout(  function(){
        firestoreRef.collection('uyeler').where('email','==',route.params.userEmail).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         kullaniciad.value = doc.data().kullaniciad
         userimg.value = doc.data().userimg
         puanladi.value = doc.data().puanladi
         followers.value = doc.data().followers




         //puanları alma



         setTimeout(() => {


       
console.log("veritabanı puanlar")

                       
         firestoreRef.collection('uyeler').doc(route.params.userEmail).collection('puanlar').get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

       itemler.value.push({itemisim:doc.data().itemisim,itemresim:doc.data().itemresim,itemID:doc.data().itemID,kategori:doc.data().kategori,puan:doc.data().puan})
      



          
          
         
        });
            }
            
      


        })

          
           
}, 700);

           
        


         
  




                //yorumları alma ----------------


   

         setTimeout(() => {


       
console.log("veritabanı yorum")

                       
     firestoreRef.collection('uyeler').doc(route.params.userEmail).collection('yorumlar').orderBy('gtarih','desc').get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {

                      yorumcount.value++
                      begeniler.value+= parseInt(doc.data().like)


         

         if (doc.data().begenenler.includes(route.params.userEmail)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:true,disliked:false,likedcss:"likeselected",dislikedcss:"link-muted"})
                    }else if (doc.data().begenmeyenler.includes(route.params.userEmail)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:true,likedcss:"link-muted",dislikedcss:"likeselected"})
                    }else if (doc.data().begenenler.includes(route.params.userEmail)==false && doc.data().begenmeyenler.includes(kullaniciad.value)==false){
                        yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:false,likedcss:"link-muted",dislikedcss:"link-muted"})
                    }

         
        });
            }else{

                console.log('uye yok')
              

            }
        })

          
           
}, 700);

           
        



         
 



         
        });
            }else{

                console.log('uye yok')
              

            }
        })




                },1000)




         

         
        })

        return {beforeEnter,enter,enterv2,kullaniciad,userimg,yorumlar,yorumcount,begeniler,puanladi,loading,goPuanla,puanlarshow,yorumlarshow,itemler,goYorumlar,editphoto,goItem,
        followers
        }
        
    }

}
</script>

<style scoped src="@/assets/profile.css">




</style>