.<template>
<div v-if="loading"><Loading/></div>

<div v-if="!loading">


<transition @before-enter="beforeEnter" @enter="enterv2" appear >   
<section class="profile sticky-top" style="z-index: 999">
  <header class="header">
    <div class="details">
      <img :src="userimg" alt="" data-bs-toggle="modal" data-bs-target="#profilepicedit"  class="profile-pic">
      <h1 class="heading">{{kullaniciad}}</h1>
      <div class="location">
        
   
      </div>
      <div class="stats">
          <div v-if="!puanlarshow" @click="goPuanla" class="col-4">
          <h4><vue3-autocounter ref='counter' :startAmount='0' :endAmount='puanladi' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h4>
          <p>Puanladı</p>
        </div>
         <div v-if="puanlarshow" @click="goPuanla" class="col-4" style="color:#DE354C">
          <h4><vue3-autocounter ref='counter' :startAmount='0' :endAmount='puanladi' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h4>
          <p>Puanladı</p>
        </div>
        <div v-if="!yorumlarshow" @click="goYorumlar" class="col-4">
          <h4><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorumcount' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h4>
          <p>Yorumlar</p>
        </div>
        <div v-if="yorumlarshow" @click="goYorumlar" class="col-4" style="color:#DE354C">
          <h4><vue3-autocounter ref='counter' :startAmount='0' :endAmount='yorumcount' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h4>
          <p>Yorumlar</p>
        </div>
        <div class="col-4">
          <h4><vue3-autocounter ref='counter' :startAmount='0' :endAmount='begeniler' :duration='2' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h4>
          <p>Beğeniler</p>
        </div>
        
      </div>
    </div>
  </header>
</section>
</transition>

<br>

           
         <div v-if="yorumlarshow">
         

  <transition v-if="yorumcount > 0 " @before-enter="beforeEnter" @enter="enterv2" appear >      
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
                <span class="yorumkat" @click="goItem(yorum)">{{yorum.itemisim}}</span> 
                 <span v-if="yorum.kategori!=null" class="yorumkat" style="margin-left:0.7rem">{{yorum.kategori}}</span> 

<hr>
               
      
                
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

  <div v-if="yorumcount == 0" class="row text-center text-white" style="margin-top:4vh">
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
import Vue3autocounter from 'vue3-autocounter';
import Loading from '@/components/Loading3.vue'
export default {

components: {
    'vue3-autocounter': Vue3autocounter,Loading
 
    
  },
  
    setup() {

    const { kullanici } = getUser();
    const yorumlar= ref([])
    const itemler= ref([])
    const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const userimg= ref('')
    const yorumcount= ref(0)
    const begeniler= ref(0)
    const puanladi= ref(0)

    const route=useRoute()
    const router=useRouter()


    const loading= ref(true)
    const puanlarshow= ref(false)
    const yorumlarshow= ref(true)


    if (localStorage.getItem('puanladi')==null) {
          
          localStorage.setItem('puanladi', JSON.stringify([]));
        }
        
        if (localStorage.getItem('yorumlar')==null) {
          
          localStorage.setItem('yorumlar', JSON.stringify([]));
        }

 setTimeout(  function(){
loading.value=false

 },2000)

     authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
   
})

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




firestoreRef.collection('uyeler').doc(kullaniciemail.value).update({

                   userimg:userimg.value
                   
                  
                   
        })

        setTimeout(() => {
          window.location.reload();
        }, 500);



  
        }


            onMounted(async () => {


           

           
         setTimeout(  function(){
        firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {
         

         kullaniciad.value = doc.data().kullaniciad
         userimg.value = doc.data().userimg
         puanladi.value = doc.data().puanladi




         //puanları alma


         if (doc.data().puanladi != JSON.parse(localStorage.getItem('puanladi')).length) {

         setTimeout(() => {


       
console.log("veritabanı puanlar")

                       
         firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('puanlar').get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

       itemler.value.push({itemisim:doc.data().itemisim,itemresim:doc.data().itemresim,itemID:doc.data().itemID,kategori:doc.data().kategori,puan:doc.data().puan})
      



          
          
         
        });
            }
            
      


        })

          
           
}, 700);

           
        


setTimeout(() => {
  localStorage.setItem('puanladi', JSON.stringify(itemler.value));
  
}, 1500);
         
       }else{
           let puanarray= JSON.parse(localStorage.getItem('puanladi'))

       itemler.value=puanarray

          
     
       }




                //yorumları alma ----------------


         if (doc.data().yorumcount != JSON.parse(localStorage.getItem('yorumlar')).length) {

         setTimeout(() => {


       
console.log("veritabanı yorum")

                       
     firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('yorumlar').orderBy('gtarih','desc').get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
    
                  snapshot.forEach(doc => {

                      yorumcount.value++
                      begeniler.value+= parseInt(doc.data().like)


         

         if (doc.data().begenenler.includes(kullaniciemail.value)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:true,disliked:false,likedcss:"likeselected",dislikedcss:"link-muted"})
                    }else if (doc.data().begenmeyenler.includes(kullaniciemail.value)==true) {
                      yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:true,likedcss:"link-muted",dislikedcss:"likeselected"})
                    }else if (doc.data().begenenler.includes(kullaniciemail.value)==false && doc.data().begenmeyenler.includes(kullaniciad.value)==false){
                        yorumlar.value.push({...doc.data(),id:doc.id,liked:false,disliked:false,likedcss:"link-muted",dislikedcss:"link-muted"})
                    }

         
        });
            }else{

                console.log('uye yok')
              

            }
        })

          
           
}, 700);

           
        


setTimeout(() => {
  localStorage.setItem('yorumlar', JSON.stringify(yorumlar.value));
  
}, 1500);
         
       }else{
         
           let yorumarray= JSON.parse(localStorage.getItem('yorumlar'))
           yorumcount.value=yorumarray.length
           yorumarray.forEach(element => {
             begeniler.value+= parseInt(element.like)
           });
           

       yorumlar.value=yorumarray


          
     
       }



         
        });
            }else{

                console.log('uye yok')
              

            }
        })




                },1000)




         

         
        })

        return {beforeEnter,enter,enterv2,kullaniciad,userimg,yorumlar,yorumcount,begeniler,puanladi,loading,goPuanla,puanlarshow,yorumlarshow,itemler,goYorumlar,editphoto,goItem
        }
        
    }

}
</script>

<style scoped>


.profilepiceditmodal{
  background-color: #0f0f0f;
  color: white;
  border-radius: 20px;
}


.user-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 65vw;
  background-color: #121312;
  margin-bottom: 3vh;


  
 position:relative;
  z-index:30;
 border-radius: 20px;
  transition: all .2s ease-in-out;
}

.user-card:hover {

transform: scale(1.1);

}

.user-profile {

  width: 10vw;
border-radius: 20px;


  background-color: #181818;
  text-align: center;
  
  
  
}

.profilecard {
  
object-fit:fill;
height: 20vh;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #ddd;

  
  
}


.last-submit {
  font-size: 16px;
  color: #999;
}

.user-stats {
  display: inline-block;
  padding: 1vw;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.w-clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.name {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: -7px;
  float: left;
  font-size: 1.8vw;
  line-height: 42px;
  color: white;
}

.score {
  display: -webkit-box;
  display: -webkit-flex;
  display: -msflexbox;
  display: flex;
  float: right;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}

.my-score {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  float: right;
  color: #DE354C;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  text-align: right;
}

.total-score {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  float: right;
  color: #DE354C;
  font-size: 10px;
  line-height: 20px;
  font-weight: 400;
  text-align: right;
}

.progress {
  padding-top: 32px;
  padding-bottom: 30px;
  background-color: transparent;
}

.my-progress {
  width: 80%;
  height: 10px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 5px;
  background-color: #DE354C;
}

.total-progress {
  border-radius: 5px;
  background-color: #ddd;
  height: 10px;
  width: 100%;
}

.meta-stats {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.meta-stat {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.meta-stat-label {
  margin-top: 0px;
  margin-bottom: 16px;
  color: #999;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
}

.meta-stat-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -msflexbox;

  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: center;
}

.meta-stat-num {
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  font-size: 1.4vw;
  line-height: 24px;
  font-weight: 700;
  
}

.meta-stat-total {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #DE354C;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
}











.textarea{
    width: 100%;
    color: #FFF;
    background: transparent;
    border: none;
    outline: none;
     text-align: center;
}

@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");










@keyframes neon {
    0% {
        color: #b4fcff;
    border: 2px solid #b4fcff;
      text-shadow: 0px 0px 10px #b4fcff, 2px 2px 4px #000;
      box-shadow: inset 0px 0px 10px #8cfbff, 0px 0px 10px #b4fcff;
    }
    50% {
            color: #ffd1f7;
        border: 2px solid #ffd1f7;
          text-shadow: 0px 0px 14px #ffd1f7, 2px 2px 4px #000;
      box-shadow: inset 0px 0px 14px #ffbbbb, 0px 0px 14px #ffd1f7;
  }
      75% {
          color: #fffbc6;
    border: 2px solid #fffbc6;
      text-shadow: 0px 0px 10px #fffbc6, 2px 2px 4px #000;
      box-shadow: inset 0px 0px 10px #fff77a, 0px 0px 10px #fffbc6;
    }
      100% {
          color: #b4fcff;
    border: 2px solid #b4fcff;
      text-shadow: 0px 0px 10px #b4fcff, 2px 2px 4px #000;
      box-shadow: inset 0px 0px 10px #97fbff, 0px 0px 10px #b4fcff;
    }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

html, body {
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #FFFCEF;
}

.head {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 230px;
  height: 230px;
  background-color: #FFEB97;
  border-radius: 50%;
  position: relative;
}

.face {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 230px;
  height: 230px;
  position: relative;
}
.pink{
    background-color: #ffd1f7;
}
.yellow{
    background-color: #fffbc6;
}
.blue{
    background-color: #DE354C;
}
.happy {
  animation: happy-look 5s infinite;
}

.standard {
  animation: standard-look 5s infinite;
}

.sad {
  animation: sad-look 5s infinite;
}
.eye
{
  width: 25px;
  height: 25px;
  position: absolute;
  background-color: #000;
  border-radius: 50%;
}

.mouth
{
 width: 100px;
  height: 50px;
  border-style: solid;
  border-radius: 50%;
  border-width: 8px;
  border-color: transparent transparent #000 transparent;
  position: absolute;
}

.happy .eye {
  top: 75px;
  animation: blink 12s infinite;
}


.happy .mouth {
  left: 68px;
  top: 80px;
  animation: happy-mouth 10s infinite;
}
.left{
   left:45px;
}
.right{
  left:165px;
}
.standard .eye {
  top: 125px;
  animation: blink 6s infinite;
  animation-delay: 1.3s;
}

.standard .mouth {
  width: 75px;
  height: 8px;
  border-radius: 8px;
  left: 75px;
  top: 175px;
}

.sad .eye {
  top: 110px;
  position: absolute;
  animation: blink 20s infinite;
  animation-delay: 3.7s;
}

.sad .mouth {
  border-color: #000 transparent transparent transparent;
  left: 68px;
  top: 166px;
  animation: sad-mouth 10s infinite;
}


@keyframes blink {
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1, 1);
  }
  12% {
    transform: scale(1, .1);
  }
  14% {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1, 1);
  }
  32% {
    transform: scale(1, .1);
  }
  34% {
    transform: scale(1, 1);
  }
  60% {
    transform: scale(1, 1);
  }
  62% {
    transform: scale(1, .1);
  }
  64% {
    transform: scale(1, 1);
  }
}

@keyframes happy-look {
  0% {
    transform: translate(0px, 0px);
  }
  10% {
    transform: translate(10px, 0px);
  }
  20% {
    transform: translate(10px, 0px);
  }
  30% {
    transform: translate(0px, 0px);
  }
  60% {
    transform: translate(0px, 0px);
  }
  70% {
    transform: translate(-10px, -15px);
  }
  80% {
    transform: translate(-10px, -15px);
  }
  90% {
    transform: translate(0px, 0px);
  }
}

@keyframes happy-mouth {
  0% {
    height: 50px;
  }
  10% {
    height: 50px;
  }
  20% {
    height: 50px;
  }
  30% {
    height: 50px;
  }
  60% {
    height: 50px;
  }
  70% {
    height: 40px;
  }
  80% {
    height: 40px;
  }
  90% {
    height: 50px;
  }
}

@keyframes standard-look {
  0% {
    transform: translate(0px, 0px);
  }
  10% {
    transform: translate(-25px, 0px);
  }
  20% {
    transform: translate(-25px, 0px);
  }
  30% {
    transform: translate(0px, 0px);
  }
  60% {
    transform: translate(0px, 0px);
  }
  70% {
    transform: translate(15px, -15px);
  }
  80% {
    transform: translate(15px, -15px);
  }
  90% {
    transform: translate(0px, 0px);
  }
}

@keyframes sad-look {
  0% {
    transform: translate(0px, 0px);
  }
  15% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(0px, -25px);
  }
  35% {
    transform: translate(0px, -25px);
  }
  45% {
    transform: translate(0px, 0px);
  }
  70% {
    transform: translate(0px, 0px);
  }
  80% {
    transform: translate(-15px, -25px);
  }
  90% {
    transform: translate(-15px, -25px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes sad-mouth {
  0% {
    height: 25px;
  }
  15% {
    height: 25px;
  }
  25% {
    height: 50px;
  }
  35% {
    height: 50px;
  }
  45% {
    height: 25px;
  }
  70% {
    height: 25px;
  }
  80% {
    height: 50px;
  }
  90% {
    height: 50px;
  }
  100% {
    height: 25px;
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

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
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

.link-muted { color: #aaa; text-decoration: none;cursor:not-allowed;} 


.likeselected { color: white; text-decoration: none;cursor:not-allowed;} 




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

.header {
  min-height: 35vh;
  background-color: black;
  border-bottom: 1px solid #454545;
  color: white;
  clip-path: ellipse(100vw 60vh at 50% 50%);
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;
  /* box-shadow: -5px -5px 20px 5px red, 5px 5px 20px 5px #DE354C; */
}

.details {
  text-align: center;
  margin-top: 6vh;
}



.location p {
  display: inline-block;
}

.location svg {
  vertical-align: middle;
}

.stats {
  display: flex;
  
 
}

.stats .col-4 {
  width: 10rem;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.stats .col-4:hover {
  transform: scale(1.05);
  color: #DE354C;
}

.heading {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 1.1rem 0;
}


</style>