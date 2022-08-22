<template>
<div class="d-flex aligns-items-center justify-content-center" style="margin-top:10vh">
   <div class="row">
       <div class="col-md-12">

           <div class="row">
<div class="card text-center shadow rounded" style="width: 67rem;">
  <div class="card-body">
 
<br>

<img :src="resimUrl" style="width:30vw;height:45vh" alt="" srcset="">

<h2>{{itemisim}}</h2>


<br>
<div class="d-flex justify-content-center">
<div class="main">

<div class="star-rating">
      <div class="star-rating__wrap">
        <input class="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
        <input class="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars"></label>
        <input class="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars"></label>
        <input class="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars"></label>
        <input class="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
      </div>
</div>
</div>







 



</div>
<form @submit.prevent="verikayit" autocomplete="false">


       

<br>


</form>


     




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

import { useRoute,useRouter} from 'vue-router'

import firebase from 'firebase/app';
export default {

    

    setup() {

        const kategorikontrol=ref(false)
         const veriler=ref([])

          const route=useRoute()
          const router=useRouter()

       
         const basarisiz=ref(false)
         const itemisimgoster=ref('')
         const basarili=ref(false)


         const resimUrl=ref('')
         const itemisim=ref('')



          

 




        

     onMounted(async () => {

         const ref = firestoreRef.collection('itemler').doc();


           
         await firestoreRef.collection('itemler').where('kategori','==',route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '>=', ref.id).limit(1).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
           itemisim.value = doc.data().itemisim
           resimUrl.value = doc.data().resimUrl
        });
            }else{
                 firestoreRef.collection('itemler').where('kategori','==',route.params.Kategori).where(firebase.firestore.FieldPath.documentId(), '<', ref.id).limit(1).get()
                 .then(snapshot => {
            snapshot.forEach(doc => {
                itemisim.value = doc.data().itemisim
                resimUrl.value = doc.data().resimUrl
            });
        })
            }
        })


         
        })



                 const verikayit=async ()=>{


  
         }



          return {veriler,verikayit,itemisim,resimUrl
        }
        
    }

}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}




.fa {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.star-rating{
  font-size: 0;
}

.star-rating__wrap {
  font-size: 4rem;
}
.star-rating__wrap:after {
  content: "";
  display: table;
  clear: both;
}

.star-rating__input {
  display: none;
}

.star-rating__input {
  display: none;
}
.star-rating__ico:hover:before,
.star-rating__ico:hover ~ .star-rating__ico:before,
.star-rating__input:checked ~ .star-rating__ico:before {
  content: "\f005";
}

.star-rating__ico {
  float: right;
  padding-left: 2px;
  cursor: pointer;
  color: #104a5d;
}

.star-rating__ico:last-child {
  padding-left: 0;
}



.back{
  margin-top: 5px;
  font-size: 1.2rem;
  border: none;
  background: transparent;
  border-bottom: solid black 2px;
}

.back:hover{
  cursor: pointer;
  color: #104a5d;
  border-bottom: solid #104a5d 2px;
}










</style>