<template>
<div class="d-flex aligns-items-center justify-content-center" style="margin-top:10vh">
   <div class="row">
       <div class="col-md-6">

           <div class="row">
<div class="card text-center shadow rounded" style="width: 47rem;">
  <div class="card-body">
    <h5 class="card-title">Kategori Ekle</h5>
<br>
<form @submit.prevent="verikayit" autocomplete="false">
    <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required maxlength="20" class="form-control" v-model="kisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Kategori İsmi</label>
</div>

 <button type="submit" id="normalbutton" class="btn btn-outline-primary btn-lg btn-block">Ekle</button>
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
    <strong>Kayıt Başarısız!</strong> "{{kisimgoster}}" isminde bir kategori zaten var!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
</div>


  </div>
</div>
           </div>

<br>
           <div class="row">
<div class="card text-center shadow rounded" style="width: 47rem; height:42vh">
  <div class="card-body">
    <h5 class="card-title">Kategori Bilgileri</h5>
<br>
<form @submit.prevent="veriguncelle" autocomplete="false">
    <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required maxlength="20" class="form-control" v-model="guncellekisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Kategori İsmi</label>
</div>
<div class="row">
    <div class="col-md-6">
        <div class="d-grid gap-2">

 <button type="submit" id="guncellebutton" class="btn btn-outline-primary btn-lg btn-block">Güncelle</button>
</div>

    </div>

     <div class="col-md-6">

               <div class="d-grid gap-2">

  <button type="button" @click="veriduzenle(veri)"  data-bs-toggle="modal" data-bs-target="#uyari" id="silbutton" class="btn btn-outline-primary btn-lg btn-block">Sil</button>
</div>
        

    </div>

</div>

</form>

  <!--       <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg> -->
   <div v-if="gbasarili"  role="alert">

       <br>


    <div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    <strong>Güncelleme Başarılı!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
</div>



   <div v-if="gbasarisiz"  role="alert">

       <br>

      

  <div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    <strong>Güncelleme Başarısız!</strong> "{{kisimgoster}}" isminde bir kategori zaten var!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>
</div>


  </div>
</div>
           </div>



       </div>

            <div class="col-md-6">

<div class="card text-center shadow rounded" style="width: 47rem;">
  <div class="card-body">
    <h5 class="card-title">Kategoriler</h5>
<br>


 <div class="fixTableHead" >
<table class="table-fill">
 
 <thead>
<tr>
<th class="text-center">Kategori İsmi</th>
<th class="text-center">Düzelt/Sil</th>
</tr>
</thead>
<tbody class="table-hover">

<tr  v-for="veri in veriler" :key="veri.id" @dblclick="veriyegit(veri.id)">
<td >{{veri.kisim}}</td>


<td  style="width:3vw;">
  

     <div class="btn-group" role="group" aria-label="Basic outlined example">
 

<button  @click="veriduzenle(veri)"  type="button" class="btn btn-outline-info btn-sm" style="width:auto; margin-left:0.3vw"><i class="fas fa-edit"></i></button> 
<button   @click="veriduzenle(veri)"   type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#uyari"  style="width:auto; margin-left:0.3vw"><i class="fas fa-trash-alt"></i></button>






</div>




</td>

</tr>

<div class="modal fade" id="uyari" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Uyarı!</h5>
        <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Silmek İstediğinize Emin misiniz?</h5>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
        <button @click="verisil" type="button" data-bs-dismiss="modal" class="btn btn-danger">Kategoriyi Sil</button>
      </div>
    </div>
  </div>
</div>


</tbody>
    
</table>
</div>



  </div>
</div>

       </div>
   </div>

  


</div>
</template>

<script>
import {onMounted,ref} from 'vue'
import {firestoreRef} from '@/firebase/config'

/* import { useRoute,useRouter} from 'vue-router' */


export default {

    

    setup() {



 const basarili=ref(false)
  const basarisiz=ref(false)

   const gbasarili=ref(false)
  const gbasarisiz=ref(false)

        const veriler=ref([])

        const kisim=ref('')
        const kisimgoster=ref('')
        const guncellekisim=ref('')
        const veriID=ref('')



     
 const veriduzenle= (veri)=>{
          
            guncellekisim.value=veri.kisim
            veriID.value=veri.id
       

        }


    const verisil=async ()=>{


            await firestoreRef.collection('kategoriler').doc(veriID.value).delete()
          





             
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

             let kayitkontrol=false

        
                for(let i = 0;i < veriler.value.length; i++ ) {


                    if (kisim.value==veriler.value[i].kisim) {
                        kayitkontrol=true
                    }



                }

                if (kayitkontrol==false) {
                       let kategoriID = kisim.value

              const datakategori = {
                  kisim:kisim.value,
                 
};

const res = firestoreRef.collection('kategoriler').doc(kategoriID).set(datakategori);

basarili.value=true


setTimeout(  function(){

    basarili.value=false

                },3000)

                }else{

                    basarisiz.value=true
                    kisimgoster.value=kisim.value



setTimeout(  function(){

    basarisiz.value=false

                },3000)


                }
           

             


kisim.value=""


  
         }


                  const veriguncelle=async ()=>{
                      let kayitkontrol = false

                             for(let i = 0;i < veriler.value.length; i++ ) {


                    if (guncellekisim.value==veriler.value[i].kisim) {
                        kayitkontrol=true
                    }



                }



                      if (kayitkontrol==false) {
         

                        await firestoreRef.collection('kategoriler').doc(veriID.value).update({

                   kisim:guncellekisim.value,
                  
                   
        })

gbasarili.value=true


setTimeout(  function(){

    gbasarili.value=false

                },3000)

                }else{

                    gbasarisiz.value=true
                    kisimgoster.value=guncellekisim.value



setTimeout(  function(){

    gbasarisiz.value=false

                },3000)


                }

        
        


  
         }


          return {kisim,verikayit,veriler,veriduzenle,guncellekisim,veriguncelle,verisil,basarili,basarisiz,kisimgoster,gbasarili,gbasarisiz
        }
        
    }

}
</script>

<style>

</style>