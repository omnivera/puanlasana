.<template>
 
  <div>
    
    <br>
    <!-- <div class="patterns">
  <svg width="100%" height="100%">
   
              
    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
     
    
   
 <text x="50%" y="60%"  text-anchor="middle"  >
   Top 10
 </text>
 </svg>
</div> -->


<div class="baslik d-flex justify-content-center">
          <strong>
             <span class="baslik">Top<span class="kbaslik2">10</span></span> 
            
          </strong>
 </div>

 <div class="d-flex justify-content-center">

   <div class="kategoriler">

 <button v-for="veri in veriler" :key="veri.id" :class="veri.katbuttoncss" @click="kategorisec(veri)" type="button" class="btn btn-outline-dark">{{veri.kisim}}</button>

 </div>

 

     </div>
     <br>
     <hr>
  
 <div class="d-flex justify-content-center">
    <div class="row">

<div class="container">
  <div class="row" style="margin-top:-0.4vh">


    

   </div>
   <br>
  <transition-group @before-enter="beforeEnter" @enter="enterv2" appear >   
    

  
    <div v-for="item in itemler" :key="item.id" class="deneme">
        
<div class="user-card" @click="goPuanla(item)">


      <div class="user-profile">
      
        <div ><img class="profile" :src="item.itemresim" alt=""></div>
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
        <div class="meta-stats text-center">
         
          <div class="meta-stat ">
            <h4 class="meta-stat-label">Şirket</h4>
            <div class="meta-stat-block text-center">
              <h3 class="meta-stat-num text-center">{{item.sirket}}</h3>
            </div>
          </div>
          <div class="meta-stat">
            <h4 class="meta-stat-label">Çıkış Yılı</h4>
            <div class="meta-stat-block">
              <h3 class="meta-stat-num">{{item.cyili}}</h3>
              <h1 class ="meta-stat-total"></h1>
            </div>
          </div>
         <!--   <div class="meta-stat">
            <h4 class="meta-stat-label">Puanlayan Sayısı</h4>
            <div class="meta-stat-block">
              <h3 class="meta-stat-num"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='item.puancount' :duration='1.5' suffix='' separator=',' decimalSeparator=',' :decimals='0' :autoinit='true' /></h3>
              <h1 class ="meta-stat-total text-center"></h1>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    </div>
  </transition-group>
  </div>
      </div>
 </div>
  </div>
  
 

</template>

<script>
import { onMounted, ref, watch } from "vue";
import { firestoreRef } from "@/firebase/config";
import gsap from "gsap";
import Vue3autocounter from "vue3-autocounter";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    'vue3-autocounter': Vue3autocounter,
  },

  setup() {
    const veriler = ref([]);
    const itemler = ref([]);

    const videourl = ref(
      "background:url(https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg) 100% bottom no-repeat;"
    );

    const kategori = ref('');

    const route = useRoute();
    const router = useRouter();

    watch(() => {
      /*   for (let i = 0; i < veriler.value.length; i++) {
              firestoreRef.collection('itemler').where('kategori','==',veriler.value[i].kisim).limit(5).get()
        .then(doc =>{


            itemler.value.push({...doc.data(),id:doc.id})

        

})

console.log(itemler.value )
             
         } */

      console.log(itemler.value);
    });

     const goPuanla= (item)=>{

router.push({name:'Puanlas',params:{Kategori:item.kategori,itemID:item.id}})


}

    const kategorisec = (veri) => {
      kategori.value=veri.kisim

      itemler.value=[]
      firestoreRef.collection(kategori.value).orderBy('puan','desc').limit(10).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
            
              let rank=1
                  snapshot.forEach(doc => {
         
itemler.value.push({...doc.data(),id:doc.id,rank:rank})

rank++
         
         
        });
            }else{

                console.log("boşşşş")
              

            }
        })


        kategorisec.value=veri.kisim

for (let i = 0; i < veriler.value.length; i++) {
  veriler.value[i].katbuttoncss="katbutton"
  
}
veri.katbuttoncss="katbuttonhover"


    };

    

    const beforeEnter = el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(0px)";
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
        duration: 1.5,
        delay: el.dataset.index * 0.2,
        ease: "back"
      });
    };


    const kategorisecti= (kategori)=>{





}

    onMounted(async () => {
            await firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                veriler.value=[]
                let rank=1
                snap.docs.forEach(doc=>{
                  
                    if (rank==1) {
                      kategori.value=doc.data().kisim
                        veriler.value.push({...doc.data(),id:doc.id,katbuttoncss:"katbuttonhover"})
                    }else{
                 veriler.value.push({...doc.data(),id:doc.id,katbuttoncss:"katbutton"})
                    }

                     

                    rank++
                    
                 
                })

                firestoreRef.collection(kategori.value).orderBy('puan','desc').limit(10).get()
              
        .then(snapshot =>{
            if (snapshot.size > 0) {
                itemler.value=[]
              let rank=1
                  snapshot.forEach(doc => {
         
itemler.value.push({...doc.data(),id:doc.id,rank:rank})

rank++
         
         
        });
            }else{

                console.log("boşşşş")
              

            }
        })


            })
    });

    return {
      veriler,
      beforeEnter,
      enter,
      enterv2,
      itemler,
      videourl,kategori,kategorisec,goPuanla
    };
  }
};
</script>

<style scoped>

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
  margin-bottom: -2vh;
}

.baslik {
  color: white;
  font-size: 2.7vw;
  margin-bottom: 1vh;
  margin-top: 1.1vh;
  letter-spacing: 0.3vw;

  font-family: "Comfortaa", cursive;
}

.kbaslik {
  color: #DE354C;
  font-size: 1.9vw;
  margin-bottom: 1.3vh;

  font-family: "Comfortaa", cursive;
}

.kbaslik2 {
  color: #DE354C;
  font-size: 3vw;
  margin-bottom: 1.3vh;

  font-family: "Comfortaa", cursive;
}

.kategoriler{
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  margin-bottom: -2vh;
}

.katbutton{
  background-color: #181818;
  color: white;
  padding: 0.4rem 1.4rem;
  margin-left: 12px;
  transition: all .2s ease-in-out;
  border-radius: 10px;
  border-color: transparent;
  font-size: 0.9rem;
 
}

.katbuttonhover{
  background-color: #ffffff;
  color: black;
  padding: 0.4rem 1.3rem;
  margin-left: 12px;
  transition: all .2s ease-in-out;
  border-radius: 10px;

}

.katbutton:hover{
  background-color: #272727;
  transform: scale(1.1);
  
}



.patterns {
 height: 20vh;
 margin-bottom: -5vh;
 margin-top: -5vh;
}



svg text {
  font-family: Lora;
  letter-spacing: 10px;
  stroke: white;
  font-size: 4vw;
  font-weight: 700;
  stroke-width: 3;
 
  animation: textAnimate 6s forwards alternate;
  
}

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset:  20%;
    fill:#DE354C

  }
  
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: black
  }
  
}


.dropdown {
overflow: visible;
}

.body {
  font-family: sans-serif;
}

.custom-select {
  color: #FFFFFF!important;

 
 width: 10vw;
}

select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;       /* Remove default arrow */
    background: transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'><path fill='%23ffffff' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>") right .75rem center/8px 10px no-repeat!important;

}

.dropbtn{


  background-color: transparent;
  border-color: white;
  color: white;
  width: 12vw;
 

  
}



.container {
  margin: 48px;
}

.user-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 65vw;
   background-color: #121312;
  margin-bottom: 3vh;
  height: 12.5rem;
  
  
 position:relative;
 border-radius: 20px;
 
  transition: all .2s ease-in-out;
  cursor: pointer;


}



.user-card:hover {

transform: scale(1.1);

}

.user-profile {

  width: 10rem;
 border-radius: 20px;
   background-color: transparent;
  text-align: center;

  
  
  
}

.profile {
  

height: 12.5rem;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: transparent;
 

 
  
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
  font-size: 1.8rem;
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
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 500;
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
  margin-top: 0.4rem;
  margin-bottom:1vh;
  color: #999;
  font-size: 0.9rem;
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
  font-size: 1.2rem;
  line-height: 24px;
  font-weight: 500;
  
}

.meta-stat-total {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #DE354C;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
}




</style>