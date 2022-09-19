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
             <span class="baslik">Hakkı<span class="kbaslik">mızda</span></span> 
            
          </strong>
 </div>
<br>
<hr>
  
 <div class="d-flex justify-content-center">
    <div class="row">

<div class="container">
  <div class="row" style="margin-top:-1vh">
<transition @before-enter="beforeEnter" @enter="enterv2" appear > 
      <div class="about">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore impedit sequi iure voluptas, maiores aspernatur eius laudantium. Ipsam illum inventore iure aperiam consectetur velit doloribus quos aliquam ratione? Deserunt!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem incidunt repellendus error velit deserunt quasi? Odit nesciunt ea aliquam quae delectus incidunt, qui eaque fugit blanditiis modi, quo quisquam.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit natus! Dolore aliquid pariatur cupiditate rerum corrupti ducimus, eum quod eaque sed id facere tempore sunt perferendis possimus neque esse?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta esse, possimus reiciendis suscipit molestias eligendi minima hic sequi explicabo tenetur vero ipsam quaerat voluptatum! Voluptatum earum iure minima reiciendis.
    

      </div>

</transition>


   </div>
   <br>


  

  </div>
      </div>
 </div>

<transition @before-enter="beforeEnter" @enter="enterv2" appear > 

  <div class="bot-left">
       <h2 class="altbaslik">Yazılım Geliştirici</h2>
       <div class="d-flex justify-content-center">
       <p class="altsubbaslik">Mert Dallar</p>
       </div>
   </div>

</transition>

<transition @before-enter="beforeEnter" @enter="enterv2" appear > 

     <div class="bot-right">
       <h2 class="altbaslik">Website Editörü</h2>
       <div class="d-flex justify-content-center">
       <p class="altsubbaslik">Haktan Uzun</p>
       </div>
       
   </div>
</transition>

<footer class="footer">
    <hr>
    <div class="">
       <strong>
             <span class="baslikfooter">puanla<span class="kbaslikfooter">sana</span></span> 
            
          </strong>
       
   </div> 
</footer>

  


  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { firestoreRef } from "@/firebase/config";
import gsap from "gsap";
/* import Vue3autocounter from "vue3-autocounter"; */
import { useRoute, useRouter } from "vue-router";
export default {
 /*  components: {
    'vue3-autocounter': Vue3autocounter,
  }, */

  setup() {
  
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
  
    }

    return {
     beforeEnter,enter,enterv2
    };
  }
};
</script>

<style scoped>


.footer {
  position: fixed;
  left: 0;
  bottom: 2vh;
  width: 100%;

  text-align: center;
}


.bot-left{
    bottom: 15vh;
    left: 7vw;
    position:absolute;

  font-family: "Comfortaa", cursive;
}

.bot-right{
    bottom: 15vh;
    right: 7vw;
    position: absolute;

  font-family: "Comfortaa", cursive;
}



.bot-center{
   position: fixed;
  left: 50%;
  bottom:3.5vh;
  transform: translate(-50%, -50%);
  margin: 0 auto;

  font-family: "Comfortaa", cursive;
}


.about{
    padding-left: 15vw;
    padding-right: 15vw;
    padding-top: 2vh;
    color: white;
}


.baslik {
  color: white;
  font-size: 1.9vw;
  
  margin-top: 1.6vh;
  letter-spacing: 0.3vw;

  font-family: "Comfortaa", cursive;
}

.kbaslik {
  color: #DE354C;
  font-size: 1.9vw;
  margin-bottom: 1.3vh;

  font-family: "Comfortaa", cursive;
}




.altbaslik {
  color: #DE354C;
  font-size: 1.7vw;


  font-family: "Comfortaa", cursive;
}

.altsubbaslik {
  color: white;
  font-size: 1vw;
  font-family: "Comfortaa", cursive;
}

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
}



</style>