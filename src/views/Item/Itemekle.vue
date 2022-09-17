<template>

<div class="bigshadow">

<iframe id="myVideo" :src="itemvideogoster" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



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
 <h6 class="card-subtitle  mt-1 text-muted">
     <select class="textarea form-select" required v-model="kategori" aria-label="Default select example">
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
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">İtem Bilgileri</h5>
        <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form @submit.prevent="verikayit" autocomplete="false">
            <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required maxlength="55" class="form-control" v-model="itemisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem İsmi</label>
</div>

 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required  class="form-control" v-model="itemresim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem Resim URL</label>
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
  <input type="search" autocomplete="off" required  class="form-control" v-model="start" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Start</label>
</div>
    </div>

        <div class="col-md-3">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="end" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">End</label>
</div>
    </div>
</div>


<div class="form-floating">
  <select class="form-select" required v-model="kategori" id="floatingSelect" aria-label="Floating label select example">
 <option v-for="veri in veriler" :key="veri.id" v-bind:value="veri.kisim" >{{veri.kisim}}</option>
  </select>
  <label for="floatingSelect">Kategori</label>
</div>
<br>
<div v-if="kategori=='Film'">


<div class="form-floating">
  <textarea class="form-control" maxlength="1000" required v-model="filmozet" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Film Özeti</label>
</div>
<br>
<div class="row">
    <div class="col-md-6">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="oyuncular" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Oyuncular</label>
</div>
    </div>
     <div class="col-md-6">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="turler" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Türler</label>
</div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="cyili" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Çıkış Yılı</label>
</div>
    </div>
     <div class="col-md-6">
         <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="fsure" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Film Süresi</label>
</div>
    </div>
</div>

</div>






<br>

<div class="d-flex justify-content-center"><button type="submit"   class=" btn-lg shadow "><i class="fas fa-edit"></i> İtem Ekle</button></div>

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

      

  <div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
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

/* import { useRoute,useRouter} from 'vue-router' */


export default {

    

    setup() {

        const kategorikontrol=ref(false)
         const veriler=ref([])
         const kategori=ref('')


         const itemisim=ref('')
         const itemresim=ref('')
         const itemvideo=ref('')
         const start=ref('')
         const end=ref('')
         const filmozet=ref('')
         const oyuncular=ref('')
         const turler=ref('')
         const cyili=ref('')
         const fsure=ref('')
         const itemvideogoster=ref('')

         watch ( () => {

 itemvideogoster.value = 'https://www.youtube.com/embed/'+itemvideo.value+'?start='+start.value+'&end='+end.value+'&autoplay=1&&mute=1&playlist='+itemvideo.value+'&loop=1&controls=0&modestbranding=1'

})


         const basarisiz=ref(false)
         const itemisimgoster=ref('')
         const basarili=ref(false)

         const kategoriID=ref('')


           const dosyaTipleri=ref(["image/png","image/jpeg"]);
            const resimUrl=ref('')
            const resimDosya=ref(null)
            const dosyaHata=ref('')
            const progressStyle=ref('width:0%')
        const progressVisible=ref(false)


        const itemcount=ref(0)

 const kategorisec= ()=>{
          
           kategorikontrol.value=true

   
       

        }

      



               const resimDosyaYukle=(e)=>{
            let secilenDosya=e.target.files[0];

            if(secilenDosya && dosyaTipleri.value.includes(secilenDosya.type)){
                resimDosya.value=secilenDosya;
                dosyaHata.value=null
            }else{
                dosyaHata.value="Seçilen dosya png ya da jpeg olmalı"
            }
        }


        

     onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})
                })
            })

         
        })



                 const verikayit=async ()=>{


                     let itemID= "IT"+Date.parse(new Date())



      



                await firestoreRef.collection(kategori.value).where('itemisim','==',itemisim.value).limit(1).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
             
     basarisiz.value=true
                    itemisimgoster.value=itemisim.value



setTimeout(  function(){

    basarisiz.value=false

                },3000)

            }else{

             const dataitem = {
                  itemisim:itemisim.value,
                  itemresim:itemresim.value,
                  itemvideo:itemvideogoster.value,
                  filmozet:filmozet.value,
                  oyuncular:oyuncular.value,
                  turler:turler.value,
                  cyili:cyili.value,
                  fsure:fsure.value,
                  totalpuan:0,
                  puancount:0,
                  kategori:kategori.value,
                  watchers:{deneme:""}
                  
};

const res = firestoreRef.collection(kategori.value).doc().set(dataitem);


 firestoreRef.collection('iteminfo').get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

            
      
 firestoreRef.collection('iteminfo').doc('eHjkoM7nWcs8ya8kQTmX').update({

                   itemcount: doc.data().itemcount + 1,
                   
                   
                   
                  
                   
        })


          
          
         
        });
            }
            
      


        })


                        


setTimeout(  function(){

itemisim.value=""
itemresim.value=""
itemvideo.value=""
start.value=""
end.value=""



      

basarili.value=true

},1000)



       
          

    

 




setTimeout(  function(){

    basarili.value=false

                },2000)



            }
        })


           
              





               

            
           

             




  
         }



          return {kategorisec,kategorikontrol,veriler,resimDosyaYukle,basarili,basarisiz,verikayit,itemisim,kategori,itemresim,itemvideo,itemvideogoster,start,end,
          oyuncular,turler,cyili,fsure,filmozet
        }
        
    }

}
</script>

<style scoped>


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