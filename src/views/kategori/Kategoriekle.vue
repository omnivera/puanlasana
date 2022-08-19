<template>
<div class="d-flex aligns-items-center justify-content-center" style="margin-top:10vh">
   <div class="row">
       <div class="col-md-6">

<div class="card text-center" style="width: 47rem;">
  <div class="card-body">
    <h5 class="card-title">Kategori Ekle</h5>
<br>
<form @submit.prevent="verikayit" autocomplete="false">
    <div class="form-floating mb-3">
  <input type="search" autocomplete="off" class="form-control" v-model="kisim" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Kategori İsmi</label>
</div>
 <button type="submit" id="normalbutton" class="btn btn-outline-primary btn-lg btn-block">Ekle</button>
</form>
  </div>
</div>

       </div>

            <div class="col-md-6">

<div class="card text-center" style="width: 47rem;">
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
        <button @click="carisil" type="button" data-bs-dismiss="modal" class="btn btn-danger">Cariyi Sil</button>
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




        const veriler=ref([])

        const kisim=ref('')

     




           onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})
                })
            })

         
        })


         const verikayit=async ()=>{

        
                 
           

                let kategoriID = "K"+(Date.parse(new Date()))

              const datakategori = {
                  kisim:kisim.value
};

const res = firestoreRef.collection('kategoriler').doc(kategoriID).set(datakategori);


  
         }


          return {kisim,verikayit,veriler
        }
        
    }

}
</script>

<style>

</style>