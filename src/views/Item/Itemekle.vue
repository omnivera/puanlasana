<template>
<div class="d-flex aligns-items-center justify-content-center" style="margin-top:10vh">
   <div class="row">
       <div class="col-md-12">

           <div class="row">
<div class="card text-center shadow rounded" style="width: 47rem;">
  <div class="card-body">
    <h5 class="card-title">İtem Ekle</h5>
<br>
<form @submit.prevent="verikayit" autocomplete="false">


             <div class="form-floating">
   <select class="form-select" required v-model="kategori" @change="kategorisec"  id="floatingSelect" aria-label="Floating label select example">
 <option v-for="veri in veriler" :key="veri.id" v-bind:value="veri.kisim" >{{veri.kisim}}</option>
   
  </select>
  <label for="floatingSelect">Kategori Türü</label>
</div>

<br>
<div v-if="kategorikontrol">


    <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required maxlength="45" class="form-control" v-model="itemisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem İsmi</label>
</div>

 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required  class="form-control" v-model="itemresim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem Resim URL</label>
</div>

 <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required  class="form-control" v-model="itemvideo" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">İtem Video Kodu</label>
</div>


 



 <button type="submit" id="normalbutton" class="btn btn-outline-primary btn-lg btn-block">Ekle</button>


</div>

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

<br>
 



       </div>

      
   </div>

  


</div>
</template>

<script>
 import {ref,onMounted} from 'vue'
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



      



                await firestoreRef.collection('itemler').where('kategori','==',kategori.value).where('itemisim','==',itemisim.value).limit(1).get()
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
                  itemvideo:"https://www.youtube.com/embed/"+itemvideo.value+"?autoplay=1&&mute=1&playlist="+itemvideo.value+"&loop=1&controls=0",
                  totalpuan:0,
                  puancount:0,
                  kategori:kategori.value
};

const res = firestoreRef.collection('itemler').doc().set(dataitem);

itemisim.value=""
itemresim.value=""
itemvideo.value=""


      

basarili.value=true

       
          

    

 




setTimeout(  function(){

    basarili.value=false

                },2000)



            }
        })


           
              





               

            
           

             




  
         }



          return {kategorisec,kategorikontrol,veriler,resimDosyaYukle,basarili,basarisiz,verikayit,itemisim,kategori,itemresim,itemvideo
        }
        
    }

}
</script>

<style>

</style>