<template>
<div class="d-flex aligns-items-center justify-content-center" style="margin-top:10vh">
   <div class="row">
       <div class="col-md-12">

           <div class="row">
<div class="card text-center shadow rounded" style="width: 47rem;">
  <div class="card-body">
      <form @submit.prevent="arama" autocomplete="false">
 <div id="search"> <input id="input" type="search" autocomplete="off" placeholder="İtem Ara..." v-model="search" /> <button id="button"><i class="fa fa-search" ></i></button>
</div>

      </form>


 
<ul class="list-group">
    <div v-for="veri in veriler" :key="veri.id">
  <li @click="veriyegit(veri)" class="list-group-item d-flex justify-content-between align-items-center">
    {{veri.itemisim}}
    <span class="badge bg-danger rounded-pill">{{veri.kategori}}</span>
  </li>

    </div>

</ul>





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

/* import { useRoute,useRouter} from 'vue-router' */


export default {

    

    setup() {

        const kategorikontrol=ref(false)
         const veriler=ref([])
         const router=useRouter()


         const search=ref('')
       



 const arama= ()=>{
          
     
  firestoreRef.collection('itemler').where('itemisim','==',search.value).get()
        .then(snapshot =>{

            if (snapshot.size > 0 ) {
                 veriler.value= []
                     snapshot.forEach(doc => {


                       veriler.value.push({...doc.data(),id:doc.id})



                  }) 
            }else{
                veriler.value= []

            }
    
            
   
       

        })

        

 

      
 }


  const veriyegit= (veri)=>{
             
 router.push({name:'Itemview',params:{veriID:veri.id}})
 

      
 }


        
        




          return {arama,veriler,search,veriyegit
        }
        
    }

}
</script>

<style>

li{
    cursor: pointer;
}

#search {
    -webkit-box-align: center;
    align-items: center;
    background: #ebebeb;
    border-radius: 10px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0.5em 0;
    padding: 0.5em 0.5em 0.5em 1em;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
   
}



#search:hover,
#search:focus {
    background: #E0DEDE;
  

}

#search button,
#search input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
    color: black;
}

#button i {
    font-size: 22px;
    color: #454545;
    
}

#search button {
    cursor: pointer;
    padding: 0 0.25em
}

#search input {
    -webkit-box-flex: 1;
    flex: 1;
    font-weight: 450;
    font-size: 20px;

    
}


</style>