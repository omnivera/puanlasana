<template>

<div class="bigshadow">

<video v-if="itemvideo!=''" id="myVideo" autoplay muted loop width="320" height="240" >
  <source :src="'https://drive.google.com/uc?export=download&id='+itemvideo"   type="video/mp4">

</video>

   </div>
 

<div class="text-center">
  <div class="row">

         <div class="col ms-auto mt-auto mb-0">
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

         <div  class="card">
  <div id="infocard" class="card-body">
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
                   
<div id="showcard" class="card text-center" >
    <img :src="itemresim" class="img-fluid" data-bs-toggle="modal" data-bs-target="#visualview" style="height:54vh"  alt="" srcset="">
  <div class="card-body">


      <div class="row d-flex justify-content-center">

     
 







<h2 style="margin-top:2vh" class="text-center"><input class="textarea" type="text" v-model="itemisim"></h2>
 <h6 class=" mt-1 text-muted">
     <select class="textarea form-select text-center"  v-model="kategorigoster" aria-label="Default select example">
  <option v-for="veri in veriler" :key="veri.id" v-bind:value="veri.kisim" >{{veri.kisim}}</option>
</select></h6>
</div>





   </div>


<div class="">



<div class="stars">
<form action="">
    <input disabled @click="yildizladi=true;puan=10" class="star star-10"  id="star-10" type="radio" name="star"/>
  <label class="star star-10" for="star-10"></label>
    <input disabled @click="yildizladi=true;puan=9" class="star star-9" id="star-9" type="radio" name="star"/>
  <label class="star star-9" for="star-9"></label>
    <input disabled @click="yildizladi=true;puan=8" class="star star-8" id="star-8" type="radio" name="star"/>
  <label class="star star-8" for="star-8"></label>
    <input disabled @click="yildizladi=true;puan=7" class="star star-7" id="star-7" type="radio" name="star"/>
  <label class="star star-7" for="star-7"></label>
  <input disabled @click="yildizladi=true;puan=6" class="star star-6" id="star-6" type="radio" name="star"/>
  <label class="star star-6" for="star-6"></label>
  <input disabled @click="yildizladi=true;puan=5" class="star star-5" id="star-5" type="radio" name="star"/>
  <label class="star star-5" for="star-5"></label>
  <input disabled @click="yildizladi=true;puan=4" class="star star-4" id="star-4" type="radio" name="star"/>
  <label class="star star-4" for="star-4"></label>
  <input disabled @click="yildizladi=true;puan=3" class="star star-3" id="star-3" type="radio" name="star"/>
  <label class="star star-3" for="star-3"></label>
  <input disabled @click="yildizladi=true;puan=2" class="star star-2" id="star-2" type="radio" name="star"/>
  <label class="star star-2" for="star-2"></label>
  <input disabled @click="yildizladi=true;puan=1" class="star star-1" id="star-1" type="radio" name="star"/>
  <label class="star star-1" for="star-1"></label>
</form>
</div>















 



</div>



     




  </div>





      </div>   


 </transition> 

 
    </div>




    <div class="col ms-auto mt-auto mb-0">
      <button type="button" @click="toggleMute" id="mutebtn" class="shadow mutebutton top-right3">
  <i v-if="mutecheck" class="fas fa-volume-up"></i>
  <i v-if="!mutecheck" class="fas fa-volume-mute"></i>
  </button>
        <div v-if="puanladi">
             <transition @before-enter="beforeEnter" @enter="enter" appear >

         <div id="infocard" class="card">
  <div class="card-body shadow-lg rounded">
       
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

 




      </div>   


 </transition> 
         </div>

         

                <div v-if="yildizladi">
         <transition @before-enter="beforeEnter" @enter="enter" appear >   
 
                     
                     
 <div class="d-flex align-items-center">
                   
<br>

 
<button type="button" id="yorumlabutton" @click="guncelle" class=" btn-lg shadow "><i class="fas fa-trophy"></i> Puanlasana</button>



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


<div class="modal fade" id="visualview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content infoedit">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">İtem Bilgileri</h5>
        <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
          <form @submit.prevent="guncelle" autocomplete="false">
            <div class="form-floating">
  <select class="form-select" required v-model="kategorigoster" id="floatingSelect" aria-label="Floating label select example">
 <option v-for="veri in veriler" :key="veri.id" v-bind:value="veri.kisim" >{{veri.kisim}}</option>
  </select>
  <label for="floatingSelect">Kategori</label>
</div>


<!--      <div class="form-floating">
  <select class="form-select" required v-model="kategorigoster" id="floatingSelect" aria-label="Floating label select example">
 <option v-for="veri in veriler" :key="veri.id" v-bind:value="veri.kisim" >{{veri.kisim}}</option>
  </select>
  <label for="floatingSelect">Alt Kategoriler</label>
</div> -->

<br>
<div class="row">
  <div class="col-md-6">
   <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required maxlength="55" class="form-control" v-model="itemisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem İsmi</label>
</div>
  </div>

  <div class="col-md-6">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required  class="form-control" v-model="itemresim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem Resim URL</label>
</div>
  </div>
</div>
         


<div class="row">
    <div class="col-md-6">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="itemvideo" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem Video Kodu</label>
</div>
    </div>

        <div class="col-md-3">
 <div class="form-floating mb-3">
  <input type="number" autocomplete="off" required  class="form-control" v-model="start" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Start</label>
</div>
    </div>

        <div class="col-md-3">
 <div class="form-floating mb-3">
  <input type="number" autocomplete="off" required class="form-control" v-model="end" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">End</label>
</div>
    </div>
</div>

<div class="row">
  <div class="col-md-6">
<div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="sirket" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Şirket</label>
</div>
  </div>

  <div class="col-md-6">
<div class="form-floating mb-3">
  <input type="number" autocomplete="off" required class="form-control" v-model="cyili" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Çıkış Yılı</label>
</div>
  </div>


 
  
</div>

<div class="row">
  <div class="col-md-12">
<div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="platformlar" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Platformlar</label>
</div>
  </div>

</div>



<div v-if="kategorigoster=='Film' || kategorigoster=='Dizi' || kategorigoster=='Anime'">


<div class="form-floating">
  <textarea class="form-control" maxlength="1500" required v-model="ozet" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 10rem"></textarea>
  <label for="floatingTextarea2">{{kategorigoster}} Özeti</label>
</div>
<br>
<div class="row">
    <div class="col-md-4">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info1" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><span v-if="kategorigoster=='Film' || kategorigoster=='Dizi' ">Oyuncular</span> <span v-if="kategorigoster=='Anime'">Ana Karakterler</span></label>
</div>
    </div>
     <div class="col-md-4">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info2" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Tür</label>
</div>
    </div>

       <div class="col-md-4">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info3" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><span v-if="kategorigoster=='Film'">Film Süresi</span> <span v-if="kategorigoster=='Dizi'">Sezon</span>  <span v-if="kategorigoster=='Anime'">Sezon / Bölüm</span> </label>
</div>
    </div>
</div>



</div>



<div v-if="kategorigoster=='Oyun'">


<div class="form-floating">
  <textarea class="form-control" maxlength="1000" required v-model="ozet" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">{{kategorigoster}} Özeti</label>
</div>
<br>
<div class="row">
    <div class="col-md-4">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info1" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Platformlar</label>
</div>
    </div>
     <div class="col-md-4">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info2" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Tür</label>
</div>
    </div>

       <div class="col-md-4">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="info3" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">{{kategorigoster}} Süresi</label>
</div>
    </div>
</div>

</div>






<br>

<div class="d-flex justify-content-center"><button type="submit"  id="guncelbtn"  class=" btn-lg shadow "><i class="fas fa-edit"></i>Güncelle</button></div>

          </form>
           <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

  <div v-if="basarili"  role="alert">

       <br>


    <div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    <strong>Kayıt Başarılı!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
</div>


 <div v-if="basarisiz"  role="alert">

       <br>

      

  <div class="alert alert-danger d-flex align-items-center uyari" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="2rem" height="2rem" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    <strong>Kayıt Başarısız!</strong> "{{itemisim}}" isminde bir item zaten var!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
</div>


      </div>
     
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


         const sirket=ref('')


         const itemresim=ref('')
         const itemisim=ref('')
         const itemvideo=ref('')
         const start=ref('')
         const end=ref('')
         const ozet=ref()
         const info1=ref()
         const info2=ref()
         const cyili=ref()
         const info3=ref()
         const platformlar=ref()
         const itemvideogoster=ref('')
        const mutecheck=ref(false)

         const kategorigoster=ref(route.params.kategori)


         const puanladi = ref(false)
         const yildizladi = ref(false)

         const load = ref(false)

         setTimeout(() => {
           load.value=true
         }, 500);

         const puan=ref(0)
         const ortpuan=ref(0)
         const totalpuan=ref(0)
         const puancount=ref(0)

               let itemarray = JSON.parse(localStorage.getItem('itemler'));
/*        itemarray = itemarray.filter((item)=>item.id == route.params.veriID) */
       


         const itemID=ref('')


            watch ( () => {

})




        
         const toggleMute=()=>{
  let video=document.getElementById("myVideo");

  video.muted = !video.muted;
  mutecheck.value= !mutecheck.value
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



     await firestoreRef.collection('kategoriler').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})
                })
            })
           
         const doc = await firestoreRef.collection(route.params.kategori).doc(route.params.veriID).get()
      
           
                
           itemisim.value = doc.data().itemisim
           itemresim.value = doc.data().itemresim
            itemvideo.value = doc.data().itemvideo
            info1.value = doc.data().info1
            info2.value = doc.data().info2
            cyili.value = doc.data().cyili
            info3.value = doc.data().info3
            platformlar.value = doc.data().platformlar
            ozet.value = doc.data().ozet
            sirket.value = doc.data().sirket

            start.value = doc.data().start
            end.value = doc.data().end

           kategorigoster.value = doc.data().kategori

           totalpuan.value = doc.data().totalpuan
           puancount.value = doc.data().puancount
           itemID.value = doc.id






              console.log(itemvideo.value)
          
         
 
            
 


         
        })

    



                 const guncelle=async ()=>{


                   for (let i = 0; i < itemarray.length; i++) {
                     if (itemarray[i].id==route.params.veriID) {
                   itemarray[i].itemisim = itemisim.value
                   itemarray[i].itemresim = itemresim.value
                   itemarray[i].itemvideo = itemvideo.value
                   itemarray[i].kategori = kategorigoster.value

                     }
                     
                   }

                    localStorage.setItem('itemler', JSON.stringify(itemarray))


                   console.log(itemarray)





           await firestoreRef.collection(route.params.kategori).doc(itemID.value).update({

                   itemisim: itemisim.value,
                   itemresim: itemresim.value,
                   itemvideo:itemvideo.value,
                   kategori: kategorigoster.value,
                   start:start.value,
                   end:end.value,
                   ozet:ozet.value,
                   info1:info1.value,
                   info2:info2.value,
                   cyili:cyili.value,
                   info3:info3.value,
                   sirket:sirket.value,
                   platformlar:platformlar.value
                   
                   
                  
                   
        })

basarili.value=true
        setTimeout(  function(){




      basarili.value=false



},1000)




  
         }


    



          return {veriler,guncelle,itemisim,itemresim,itemvideo,beforeEnter,enter,kategorigoster,puanladi,puan,ortpuan,yildizladi,ortpuanimation,next,anasayfagit,
          itemvideogoster,info1,info2,cyili,info3,ozet,start,end,sirket,basarili,load,toggleMute,mutecheck,platformlar
        }
        
    }

}
</script>

<style scoped>



.btn-close{
  background-color: transparent;
  color: white;
}


#floatingTextarea2{
  background-color: #272727;
  color: white;

}


#floatingSelect{
  background-color: #272727;
  color: white;
}

#floatingInput{
  background-color: #272727;
  color: white;
}

#guncelbtn{
  margin-top: 2.9vh;

  border-color: transparent;
  background-color: #0f0f0f;
  font-size: 0.9rem;
 padding: 1rem 1.2rem;
  color: white;
  border: 0.85px solid #454545;
  margin-top: -1vh;
border-radius: 20px;
  
  font-family: "Comfortaa", cursive;


  
  }


    #guncelbtn i{
  
    margin-left: -0.1vw;
 
    
    }

      #guncelbtn:hover{
  background-color: #272727;
  color: white;
  border-color: transparent;
  }

.infoedit{
  background-color: #0f0f0f;
  color: white;
  border-radius: 20px;
}


.textarea{
    width: 100%;
    color: #FFF;
    background: transparent;
    border: none;
    outline: none;
     text-align: center;
}

.bigshadow{
  z-index: 2;
    background: black;
    opacity: 0.85;

    pointer-events: none;
   
}



.card{
    background: #181818;
      border-radius: 6px;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#showcard{

    margin-top:5vh;
    width:30vw;
    
   
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
    
}

#infocard{
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
 
  
  
}
h1{
font-size: 2.3vw;
color: white;
}

h2{
font-size: 2vw;
color: white;
}

h4{
  color: #DE354C;  
  font-size: 1.7vw;
}

button {
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
  padding: 0.5vw;
  font-size: 1.4vw;
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