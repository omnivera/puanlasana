.<template>


   

<div class="mainscroll">
<br>

  <div class="row d-flex justify-content-center mt-2">

  
    <div class="baslik d-flex justify-content-center">
          <strong>
            puanla<span class="kbaslik">sana</span>
            
          </strong>
 </div>

  <div id="search"> <input id="searchinput" type="search" autocomplete="off" placeholder="Arama yapsana..." v-model="search" /> <button id="button"><i style="color:#454545" class="fa fa-search" ></i></button></div>
     
  </div>
 
 <div class="kategoriler">

 <button v-for="kategori in kategoriler" :key="kategori.id" :class="kategori.katbuttoncss" @click="kategorisecti(kategori)" type="button" class="btn btn-outline-dark">{{kategori.kisim}}</button>

 </div>
<hr v-if="kategorisec!='Tümü'" >
  <div v-if="kategorisec!='Tümü'" class="kategoriler">

 <button v-for="altkategori in aramaaltkategori" :key="altkategori.id" :class="altkategori.katbuttoncss"  @click="altkategorisecti(altkategori)" type="button" class="btn btn-outline-dark">{{altkategori.altkatad}}</button>

 </div>
<hr>
    <!-- Header Ends -->



    <!-- Main Body Starts -->
    <div class="mainBody">
      <!-- Sidebar Starts -->
     <!--  <div class="sidebar">
        <div class="sidebar__categories">
          <div v-for="kategori in kategoriler" :key="kategori.id" class="sidebar__category text-white">
            <i class="fas fa-dice-d6"></i>
            <span style="text-align:center">{{kategori.kisim}}</span>
          </div>
          
        </div>
     
      </div> -->
      <!-- Sidebar Ends -->

      <div class="col-md-2"></div>

      <div class="col-md-8">
        <!-- Videos Section -->
      <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
      <div class="videos">
        <h1></h1>

        <div class="videos__container">
          
          <!-- Single Video starts -->
          <div v-for="item in aramaitem" :key="item.id" @click="goPuanla(item)" >
            <div v-if="item.puanladi==false || item.puanladi==null" class="video">
            <div   class="video__thumbnail">
              <img :src="item.itemresim" alt="" />
             
      
            




            </div>

        

            <div class="video__details" >
           <!--    <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div> -->
              <div class="title">
                <h3>
                  {{item.itemisim}}
                </h3>
                <a href="">{{item.kategori}}</a>
               
                <!-- <span>10M Views • 3 Months Ago</span> -->
              </div>
             <!--  <div class="addlist">
                 <i title="Listeme Ekle"  class="fas fa-plus"></i>
              </div> -->
            </div>
          </div>









 <div  v-if="item.puanladi==true" class="videop">
           

            <div  class="video__thumbnail">
           
             
      
            

   <img :src="item.itemresim" class="puanladi"  alt="" />
  <div class="centered my-auto">
     <img src="@/assets/plogo6.png" style="width:5vw" alt />
    </div>


            </div>

            <div class="video__details" >
           <!--    <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div> -->
              <div class="title">
                <h3>
                  {{item.itemisim}}
                </h3>
                <a href="">{{item.kategori}}</a>
                <!-- <span>10M Views • 3 Months Ago</span> -->
              </div>
             <!--   <div  class="addlist">
                 <i  title="Listeme Ekle" class="fas fa-plus"></i>
              </div> -->
            </div>
          </div>


          
          <!-- Single Video Ends -->

          <!-- Single Video starts -->
          </div>
        </div>
      </div>
      </transition>
      </div>

      
    </div>
    
</div>





</template>

<script>

import {onMounted,ref,watch,computed} from 'vue'
import {firestoreRef,storageRef,authRef} from '@/firebase/config' 
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
import firebase from 'firebase/app';

export default {

    setup() {

      const kategoriler = ref([])
      const altkategoriler = ref([])
      const itemler = ref([])
      const puanlar = ref([])
      const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const kullaniciuid= ref('')

    const search= ref('')
    const kategorisec= ref('Tümü')
    const altkategorisec= ref('Tümü')
    const route=useRoute()
    const router=useRouter()


    watch(() => {

      




  

     
            let puanlananlar = []
            let puanlanmayanlar = []

            puanlananlar = itemler.value.filter(({id}) => puanlar.value.some(puan => puan.itemID == id))
            puanlanmayanlar = itemler.value.filter(({id}) => !puanlar.value.some(puan => puan.itemID == id))

           puanlananlar.forEach(element => {
             element.puanladi=true
             
           });

            puanlanmayanlar.forEach(element => {
             element.puanladi=false
           });
           

          let merged =  [...new Set([...puanlananlar, ...puanlanmayanlar])];

            itemler.value  =  merged

      
    });

    



     if (sessionStorage.getItem('pasladi')==null) {
          
          sessionStorage.setItem('pasladi', JSON.stringify([]));
        }


        if (localStorage.getItem('puanladi')==null) {
          
          localStorage.setItem('puanladi', JSON.stringify([]));
        }

          if (localStorage.getItem('itemler')==null) {
          
          localStorage.setItem('itemler', JSON.stringify([]));
        }

        if (localStorage.getItem('kategoriler')==null) {
          localStorage.setItem('kategoriler', JSON.stringify([]));
        }

        if (localStorage.getItem('altkategoriler')==null) {
          localStorage.setItem('altkategoriler', JSON.stringify([]));
        }

        
 
        
        


const kategorisecti= (kategori)=>{

kategorisec.value=kategori.kisim


altkategorisec.value=altkategoriler.value[0].altkatad
altkategoriler.value[0].katbuttoncss="katbuttonhover"

 for (let i = 1; i < altkategoriler.value.length; i++) {
  altkategoriler.value[i].katbuttoncss="katbutton"
  
}         

for (let i = 0; i < kategoriler.value.length; i++) {
  kategoriler.value[i].katbuttoncss="katbutton"
  
}
kategori.katbuttoncss="katbuttonhover"





}






const altkategorisecti= (altkategori)=>{

altkategorisec.value=altkategori.altkatad


for (let i = 0; i < altkategoriler.value.length; i++) {
  altkategoriler.value[i].katbuttoncss="katbutton"
  
}
altkategori.katbuttoncss="katbuttonhover"



}




    authRef.onAuthStateChanged(k=>{
    kullaniciad.value=k.displayName
    kullaniciemail.value=k.email
    kullaniciuid.value=k.uid
   
})


    const goPuanla= (item)=>{

router.push({name:'Puanlas',params:{Kategori:item.kategori,itemID:item.id}})


}


    function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const aramakategori=computed(()=>{

         

        

          if (kategorisec.value=="Tümü") {
             return itemler.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase())  ) 
          }

         

          

          
         return itemler.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase()) && tablo.kategori == kategorisec.value ) 
        })

    const aramaitem=computed(()=>{

         

          shuffle(aramakategori.value);

          if (altkategorisec.value=="Tümü") {
             return aramakategori.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase())  ) 
          }

         

          

          
         return aramakategori.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase()) && tablo.info2.toLowerCase().includes(altkategorisec.value.toLowerCase()) ) 
        })


const aramaaltkategori=computed(()=>{

         

        
          
         return altkategoriler.value.filter((tablo)=>tablo.kategori == kategorisec.value || tablo.altkatad == "Tümü" ) 
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
        y: 20,
        duration: 2,
        delay: el.dataset.index * 0.3,
        ease: "back"
      });
    };



      onMounted(async () => {

      

    await firestoreRef.collection('iteminfo').get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

                 

                 

       if (doc.data().itemcount != JSON.parse(localStorage.getItem('itemler')).length || doc.data().kategoricount != JSON.parse(localStorage.getItem('kategoriler')).length -1 || doc.data().altkategoricount != JSON.parse(localStorage.getItem('altkategoriler')).length -1) {
           console.log("veritabanı")

       /*     firestoreRef.collection('iteminfo').doc(doc.id).update({

                   itemcount: JSON.parse(localStorage.getItem('itemler')).length,
                   kategoricount: JSON.parse(localStorage.getItem('kategoriler')).length,
                   altkategoricount: JSON.parse(localStorage.getItem('altkategoriler')).length,
                   
                   
                   
                  
                   
        }) */

         setTimeout(() => {


       
       firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                kategoriler.value=[]
                snap.docs.forEach(doc=>{
                    kategoriler.value.push({...doc.data(),id:doc.id,katbuttoncss:"katbutton"})

                       
         firestoreRef.collection(doc.data().kisim).get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

       itemler.value.push({itemisim:doc.data().itemisim,itemresim:doc.data().itemresim,itemvideo:doc.data().itemvideo,kategori:doc.data().kategori,info2:doc.data().info2,id:doc.id})
      



          
          
         
        });
            }
            
      


        })

     let kategori = doc.data().kisim
          
      firestoreRef.collection('kategoriler').doc(kategori).collection('altkategoriler').get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
              
             
                  snapshot.forEach(doc => {
                  

                   altkategoriler.value.push({...doc.data(),id:doc.id,katbuttoncss:"katbutton",kategori:kategori})
         
        });


            }else{

         

                console.log("yok")
              

            }
        })

          
          
                })
                kategoriler.value.unshift({kisim:"Tümü",katbuttoncss:"katbuttonhover"})
                altkategoriler.value.unshift({altkatad:"Tümü",katbuttoncss:"katbuttonhover"})


          
            })


   
}, 700);

           
    


setTimeout(() => {
     puanlar.value= JSON.parse(localStorage.getItem('puanladi'))

          let puanlananlar=[]
          let puanlanmayanlar=[]

          let random=0


          if (puanlar.value!=null) {
          
            puanlananlar = itemler.value.filter(({id}) => puanlar.value.some(puan => puan.itemID == id))
            puanlanmayanlar = itemler.value.filter(({id}) => !puanlar.value.some(puan => puan.itemID == id))

           puanlananlar.forEach(element => {
             element.puanladi=true
             
           });

            puanlanmayanlar.forEach(element => {
             element.puanladi=false
           });
           

          let merged =  [...new Set([...puanlananlar, ...puanlanmayanlar])];

            itemler.value  =  merged

          
          }
  localStorage.setItem('itemler', JSON.stringify(itemler.value));
  localStorage.setItem('kategoriler', JSON.stringify(kategoriler.value));
  localStorage.setItem('altkategoriler', JSON.stringify(altkategoriler.value));
}, 1500);
         
       }else{
            puanlar.value= JSON.parse(localStorage.getItem('puanladi'))

          let puanlananlar=[]
          let puanlanmayanlar=[]

          let random=0


          if (puanlar.value!=null) {
            itemler.value = JSON.parse(localStorage.getItem('itemler'));
            puanlananlar = itemler.value.filter(({id}) => puanlar.value.some(puan => puan.itemID == id))
            puanlanmayanlar = itemler.value.filter(({id}) => !puanlar.value.some(puan => puan.itemID == id))

           puanlananlar.forEach(element => {
             element.puanladi=true
             
           });

            puanlanmayanlar.forEach(element => {
             element.puanladi=false
           });
           

          let merged =  [...new Set([...puanlananlar, ...puanlanmayanlar])];

            itemler.value  =  merged

          
          }else{
            itemler.value  =  JSON.parse(localStorage.getItem('itemler'));
          }

          
     
       kategoriler.value  =  JSON.parse(localStorage.getItem('kategoriler'));
       altkategoriler.value  =  JSON.parse(localStorage.getItem('altkategoriler'));
       }
      



          
          
         
        });
            }
            
      


        })







// puanları alma


          await firestoreRef.collection('uyeler').where('email','==',kullaniciemail.value).get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

                  

                 

       if (doc.data().puanladi != JSON.parse(localStorage.getItem('puanladi')).length) {

         setTimeout(() => {


       
console.log("veritabanı uye")

                       
         firestoreRef.collection('uyeler').doc(kullaniciemail.value).collection('puanlar').get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

       puanlar.value.push({itemisim:doc.data().itemisim,itemresim:doc.data().itemresim,itemID:doc.data().itemID,kategori:doc.data().kategori,puan:doc.data().puan})
      



          
          
         
        });
            }
            
      


        })

          
           
}, 700);

           
        


setTimeout(() => {
  localStorage.setItem('puanladi', JSON.stringify(puanlar.value));
  
}, 1500);
         
       }else{
           let puanarray= JSON.parse(localStorage.getItem('puanladi'))

          
     
       }
      



          
          
         
        });
            }
            
      


        })





          sessionStorage.clear()

         
        })



        return {kategoriler,beforeEnter,enter,enterv2,itemler,search,aramaitem,kategorisec,kategorisecti,goPuanla,altkategoriler,altkategorisecti,aramaaltkategori
        }
        
    }

}
</script>

<style scoped src="@/assets/mainmenu.css">



</style>