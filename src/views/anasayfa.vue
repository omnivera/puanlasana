.<template>


   

<div class="mainscroll">
<br>

  <div class="row d-flex justify-content-center mt-2">

  
    <div class="baslik d-flex justify-content-center">
          <strong>
            puanla<span class="kbaslik">sana</span>
            
          </strong>
 </div>

  <div id="search"> <input id="searchinput" type="search" autocomplete="off" placeholder="Arama yapsana..." v-model="search" /> <button id="button"><i style="color:White" class="fa fa-search" ></i></button></div>
     
  </div>
 
 <div class="kategoriler">

 <button v-for="kategori in kategoriler" :key="kategori.id" :class="kategori.katbuttoncss" @click="kategorisecti(kategori)" type="button" class="btn btn-outline-dark">{{kategori.kisim}}</button>

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
        <h1>Recommended</h1>

        <div class="videos__container">
          
          <!-- Single Video starts -->
          <div v-for="item in aramaitem" :key="item.id" @click="goPuanla(item)" class="video">
            <div class="video__thumbnail">
              <img :src="item.itemresim" alt="" />
            </div>
            <div class="video__details">
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
            </div>
          </div>
          <!-- Single Video Ends -->

          <!-- Single Video starts -->
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
      const itemler = ref([])
      const puanlar = ref([])
      const kullaniciad= ref('')
    const kullaniciemail= ref('')
    const kullaniciuid= ref('')

    const search= ref('')
    const kategorisec= ref('Tümü')
    const route=useRoute()
    const router=useRouter()

    



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

        
 
        
        


const kategorisecti= (kategori)=>{

kategorisec.value=kategori.kisim

for (let i = 0; i < kategoriler.value.length; i++) {
  kategoriler.value[i].katbuttoncss="katbutton"
  
}
kategori.katbuttoncss="katbuttonhover"



}


watch(() => {

  
    
    });

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

    const aramaitem=computed(()=>{

         

          shuffle(itemler.value);

          if (kategorisec.value=="Tümü") {
             return itemler.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase())  ) 
          }

          
         return itemler.value.filter((tablo)=>tablo.itemisim.toLowerCase().includes(search.value.toLowerCase()) && tablo.kategori == kategorisec.value ) 
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

                  
console.log(JSON.parse(localStorage.getItem('itemler')).length - 1)
                 

       if (doc.data().itemcount != JSON.parse(localStorage.getItem('itemler')).length - 1) {

         setTimeout(() => {

console.log("veritabanı")
       
       firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                kategoriler.value=[]
                snap.docs.forEach(doc=>{
                    kategoriler.value.push({...doc.data(),id:doc.id,katbuttoncss:"katbutton"})

                       
         firestoreRef.collection(doc.data().kisim).get()
        .then(snapshot =>{
            
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {

       itemler.value.push({itemisim:doc.data().itemisim,itemresim:doc.data().itemresim,itemvideo:doc.data().itemvideo,kategori:doc.data().kategori,id:doc.id})
      



          
          
         
        });
            }
            
      


        })

          
          
                })
                kategoriler.value.unshift({kisim:"Tümü",katbuttoncss:"katbuttonhover"})
            })
}, 700);

           
        


setTimeout(() => {
  localStorage.setItem('itemler', JSON.stringify(itemler.value));
  localStorage.setItem('kategoriler', JSON.stringify(kategoriler.value));
}, 1500);
         
       }else{
           let puanarray= JSON.parse(localStorage.getItem('puanladi'))

          let pool=[]

          let random=0


          if (puanarray!=null) {
            let itemarray = JSON.parse(localStorage.getItem('itemler'));
            pool = itemarray.filter((elem) => !puanarray.find(({ itemID }) => elem.id === itemID));
            itemler.value  =  pool
          }else{
            itemler.value  =  JSON.parse(localStorage.getItem('itemler'));
          }

          
     
       kategoriler.value  =  JSON.parse(localStorage.getItem('kategoriler'));
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

       puanlar.value.push({itemisim:doc.data().itemisim,itemID:doc.data().itemID})
      



          
          
         
        });
            }
            
      


        })

          
           
}, 700);

           
        


setTimeout(() => {
  localStorage.setItem('puanladi', JSON.stringify(puanlar.value));
  
}, 1500);
         
       }else{
           let puanarray= JSON.parse(localStorage.getItem('puanladi'))

    

/* 
          if (puanarray!=null) {
            let itemarray = JSON.parse(localStorage.getItem('itemler'));
            pool = itemarray.filter((elem) => !puanarray.find(({ itemID }) => elem.id === itemID));
            itemler.value  =  pool
          }else{
            itemler.value  =  JSON.parse(localStorage.getItem('itemler'));
          } */

          
     
       }
      



          
          
         
        });
            }
            
      


        })





          sessionStorage.clear()

         
        })



        return {kategoriler,beforeEnter,enter,enterv2,itemler,search,aramaitem,kategorisec,kategorisecti,goPuanla
        }
        
    }

}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

 

.baslik {
  color: white;
  font-size: 1.8vw;
  margin-bottom: 1.3vh;

  font-family: "Comfortaa", cursive;
}

.kbaslik {
  color: #DE354C;
  font-size: 1.8vw;
  margin-bottom: 1.3vh;

  font-family: "Comfortaa", cursive;
}






#searchinput{
  background-color: black;
  color: white;
   transition: all .2s ease-in-out;
  
}

#search{
  width:50%;
   background-color: black;
  color: white;
  border: 1px solid white;
   transition: all .2s ease-in-out;
  
}

#searchinput:hover{
  background-color: black;
  color: white;
  transform: scale(1);
  
}

#search:hover{
  width:50%;
   background-color: black;
  color: white;
  border: 1px solid white;
  transform: scale(1.1);
  
}

.arainput{
  font-size: 2vw;
  background-color: black;
  color: white;
}

.kategoriler{
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.katbutton{
  background-color: transparent;
  color: white;
  padding: 10px;
  padding-left: 17px;
  padding-right: 17px;
  margin-left: 12px;
  transition: all .2s ease-in-out;
}

.katbuttonhover{
  background-color: #ffffff;
  color: black;
  padding: 10px;
  padding-left: 17px;
  padding-right: 17px;
  margin-left: 12px;
  transition: all .2s ease-in-out;
}

.katbutton:hover{
  background-color: #181818;
  transform: scale(1.1);
  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

/* header */

.material-icons {
  color: rgb(96, 96, 96);
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 15px;
  z-index: -1;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__left img {
  width: 100px;
  margin-left: 15px;
}

.header i {
  padding: 0 7px;
  cursor: pointer;
}

.header__search form {
  border: 1px solid #ddd;
  height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
}

.header__search input {
  width: 500px;
  padding: 10px;
  margin: 0;
  border-radius: 0;
  border: none;
  height: 100%;
}

.header__search button {
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
  border-radius: 0;
}

/* Sidebar */
.mainBody {
  height: calc(100vh - 70px);
  display: flex;
  margin-top: -1vh;
  background-color: black;
 
}

.sidebar {
  height: 100%;
  width: 230px;
  background-color: black;
  overflow-y: scroll;
  border-right: 1px solid #454545;


}

.sidebar__categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  
}

.sidebar__category {
  display: flex;
  align-items: center;
  padding: 12px 25px;
  
}

.sidebar__category span {
  margin-left: 15px;
    color: white;
}

.sidebar__category:hover {
  background: #DE354C;
  color: black;
  cursor: pointer;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
}

/* videos */

.videos {
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 15px 15px;



}

.videos__container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  
}

.video {
  width: 20vw;

  margin-bottom: 30px;
  transition: all .2s ease-in-out;
  color: white;
}

.video:hover {
 background-color: #181818;
transform: scale(1.1);
font-weight: 500;

}



.video__thumbnail {
  width: 100%;
  height: 47vh;
  cursor: pointer;
}

.video__thumbnail img {
  object-fit:fill;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.author img {
  object-fit: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.video__details {
  display: flex;
  margin-top: 10px;
  cursor: pointer;
   padding-left: 15px;
 padding-right: 15px;
 padding-bottom: 10px;
}

.title {
  display: flex;
  flex-direction: column;
}

.title h3 {
   
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 6px;
}

.title a,
span {
  text-decoration: none;
  color: rgb(96, 96, 96);
  font-size: 14px;
}

h1 {
  font-size: 20px;
  margin-bottom: 10px;
  color: rgb(3, 3, 3);
}

@media (max-width: 425px) {
  .header__search {
    display: none;
  }

  .header__icons .material-icons {
    display: none;
  }

  .header__icons .display-this {
    display: inline;
  }

  .sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .header__search {
    display: none;
  }

  .sidebar {
    display: none;
  }

  .show-sidebar {
    display: inline;
    position: fixed;
    top: 4.4rem;
    height: auto;
  }
}

@media (max-width: 941px) {
  .header__search input {
    width: 300px;
  }
}

</style>