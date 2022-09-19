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
             <span class="baslik">Hakkı<span class="kbaslik2">mızda</span></span> 
            
          </strong>
 </div>
<br>
<hr>
  
 <div class="d-flex justify-content-center">
    <div class="row">

<div class="container">
  <div class="row" style="margin-top:-1vh">

      <div class="about">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore impedit sequi iure voluptas, maiores aspernatur eius laudantium. Ipsam illum inventore iure aperiam consectetur velit doloribus quos aliquam ratione? Deserunt!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem incidunt repellendus error velit deserunt quasi? Odit nesciunt ea aliquam quae delectus incidunt, qui eaque fugit blanditiis modi, quo quisquam.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, suscipit natus! Dolore aliquid pariatur cupiditate rerum corrupti ducimus, eum quod eaque sed id facere tempore sunt perferendis possimus neque esse?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta esse, possimus reiciendis suscipit molestias eligendi minima hic sequi explicabo tenetur vero ipsam quaerat voluptatum! Voluptatum earum iure minima reiciendis.
    

      </div>


   </div>
   <br>

  </div>
      </div>
 </div>
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
  
  

    return {
     
    };
  }
};
</script>

<style scoped>


.about{
    padding: 3.2vw;
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

.kbaslik2 {
  color: #DE354C;
  font-size: 1.9vw;


  font-family: "Comfortaa", cursive;
}

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
}



</style>