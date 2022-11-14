.<template>

<div v-if="loading"><Loading/></div>
<div v-if="!loading">

   <section id="main-landing">
    <div id="black-ov"></div>
  

    <div id="main-landing-message" style="margin-top:-6vh">
        <div class="bigshadow">

<!-- <video  id="myVideo" autoplay muted loop  >
  <source :src="'https://drive.google.com/uc?export=download&id=19hDOay4fFilO0xnSwrgn_X4DgzyHtbyX'" type="video/mp4">

</video> -->

   </div>
        <div v-if="register" class="center">
            

       
<transition @before-enter="beforeEnter" @enter="enterv2" appear >      
<div class="card authcard" style="width: 37vw;">
  <div class="card-body authcardbd">
      <div class="row text-center">
<strong>
             <span class="baslikfooter">puanla<span class="kbaslikfooter">sana</span></span> 
            
          </strong> 
          <br>
     
      </div>
  
    <hr>
     <form @submit.prevent="handleRegister" autocomplete="off">
       <div class="row">
         <div class="col-md-6">
  <div class="form-floating mb-3">
  <input type="search" autocomplete="off" required class="form-control" v-model="regkullaniciadi" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><i class="fa-solid fa-user"></i> Kullanıcı Adı</label>
</div>
         </div>

         <div class="col-md-6">
<div class="form-floating mb-3">
  <input type="password" autocomplete="off" required class="form-control" v-model="regparola" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><i class="fa-solid fa-lock"></i> Parola</label>
</div>
         </div>
       </div>
  

<div class="form-floating mb-3">
  <input type="email" autocomplete="off" required class="form-control" v-model="regemail" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><i class="fa-solid fa-envelope"></i> Email</label>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="form-floating mb-3">
  <input type="date" autocomplete="off" required class="form-control" v-model="regdtarih" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Doğum Tarihi</label>
</div>
    </div>

    <div class="col-md-6">
        <div class="form-floating">
  <select class="form-select" v-model="regcinsiyet" id="floatingSelect" aria-label="Floating label select example">
    <option value="Erkek">Erkek</option>
    <option value="Kız">Kız</option>

  </select>
  <label for="floatingSelect">Cinsiyet</label>
</div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">

     <button type="button" @click="goLogin" id="logbutton"  class=" btn-lg shadow top-right next">Hesabım Var</button>

    </div>

    <div class="col-md-6">
 
    <button type="submit" id="logbuttonv2" class=" btn-lg shadow top-right next btn-block">Kayıt Ol</button>
     
    </div>
</div>
<br>
<div class="text-center" style="color:#DE354C">
<strong>{{hata}}</strong>
</div>
     </form>
   
  </div>
</div>




         </transition>  



       
   </div>



<div v-if="loginkontrol" class="center">
            
<!-- <div class="g-recaptcha" data-sitekey="6Lc_MYUiAAAAAG1bAdvSlvXWXUcipt6MGeCeo2Q8"></div> -->
       
<transition @before-enter="beforeEnter" @enter="enterv2" appear >      
<div class="card authcard" style="width: 37vw;">
  <div class="card-body authcardbd">
      <div class="row text-center">
 <strong>
             <span class="baslikfooter">puanla<span class="kbaslikfooter">sana</span></span> 
            
          </strong> 
          
      </div>
  
    <hr>
     <form @submit.prevent="handleLogin" autocomplete="false">
    <div class="form-floating mb-3">
  <input type="email" autocomplete="off" required class="form-control" v-model="loginemail" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><i class="fa-solid fa-user"></i> Email</label>
</div>

<div class="form-floating mb-3">
  <input type="password" autocomplete="off" required class="form-control" v-model="loginparola" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput"><i class="fa-solid fa-lock"></i> Parola</label>
</div>



<div class="row">
    <div class="col-md-6">

     <button type="button" @click="goRegister" id="logbutton" class=" btn-lg shadow top-right next">Hesabım Yok</button>

    </div>

    <div class="col-md-6">
 
    <button  id="logbuttonv2" class=" btn-lg shadow top-right next btn-block">Giriş Yap</button>
     
    </div>
</div>
<br>
<div class="text-center" style="color:#DE354C">
<strong>{{hatalogin}}</strong>
</div>

     </form>
   
  </div>
</div>




         </transition>  



       
   </div>


  
 
   



        


    </div>

  </section>


 



  



</div>

</template>

<script>
import useSignup from '@/composables/useSignup'
import {onMounted,ref} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
import moment from 'moment';
import useLogin from '@/composables/useLogin'

export default {


    mounted() {

  /* document.getElementById("myVideo").volume = 0.2; */

  }, 
    setup() {


gsap.registerPlugin(ScrollTrigger);


const {hata,signup}=useSignup();
 const {hatalogin,login}=useLogin();

        const veriler=ref([])

        const register=ref(false)
        const loginkontrol=ref(true)

        const regkullaniciadi=ref('')
        const regparola=ref('')
        const regemail=ref('')
        const regcinsiyet=ref('')
        const regdtarih=ref('')

        const loginemail=ref('')
        const loginparola=ref('')


            const route=useRoute()
          const router=useRouter()


          const handleLogin=async ()=>{
         


            
            const res=await login(loginemail.value,loginparola.value)
           
            if(!hatalogin.value){


         
router.push({name:'anasayfa'})


             

               
              
            }
        }


        const handleRegister=async ()=>{
            const res=await signup(regemail.value,regparola.value,regkullaniciadi.value)
            if(!hata.value){

              const datauye = {
                  kullaniciad:regkullaniciadi.value,
                  parola:regparola.value,
                  email:regemail.value.toLowerCase(),
                  cinsiyet:regcinsiyet.value,
                  dtarih:moment(regdtarih.value).format('DD/MM/YYYY'),
                  gtarih:Date.parse(regdtarih.value.toString()),
                  userimg:"https://images.squarespace-cdn.com/content/v1/61e79efa49cf0769cacf9ecb/1643603781122-89TALSSE9Q02G3XQJJ1R/placeholder-1.png",
                  listcount:0
};

const res = firestoreRef.collection('uyeler').doc(regemail.value.toLowerCase()).set(datauye);
              


                console.log('kullanıcı üye oldu');

                router.push({name:'anasayfa'})
               
       

            }

           

                
        }


         const goLogin= ()=>{
          
         
         register.value=false
         loginkontrol.value=true

         loginemail.value=""
         loginparola.value=""
         
         

        }


        const goRegister= ()=>{
          
         
         register.value=true
         loginkontrol.value=false

         regkullaniciadi.value=""
         regparola.value=""
         regemail.value=""
         regdtarih.value=""
         
         
         

        }

       


               const beforeEnter=(el)=>{
          el.style.opacity=0;
          el.style.transform='translateY(100px)'
        }




           const enter=(el)=>{

          gsap.to(el,{
    
            opacity:0.8,
            y:0,
            duration:1,
            delay:el.dataset.index*0.2,

            
           
          })
        }


          const enterv2=(el)=>{

          gsap.to(el,{
            opacity:1,
            y:0,
            duration:1.5,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }

            onMounted(async () => {

           
           

         
        })

        return {veriler,beforeEnter,enter,enterv2,register,loginkontrol,regdtarih,regcinsiyet,regemail,regkullaniciadi,regparola,goLogin,goRegister,handleRegister,handleLogin,
        loginemail,loginparola,hatalogin,hata
        }
        
    }

}
</script>

<style scoped>


.baslikfooter {
  color: white;
  font-size: 1.7vw;
  
  
  margin-top: 1.6vh;

  letter-spacing: 0.3vw;

  font-family: "Comfortaa", cursive;
}

.kbaslikfooter {
  color: #DE354C;
  font-size: 1.7vw;
  margin-bottom: 1.2vh;

  font-family: "Comfortaa", cursive;
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}

#logbutton{
    margin-top: 1.5vh;

    border-color: transparent;
    background-color: white;
    font-size: 1vw;
    color: #DE354C;
    width: 100%;
    border-radius: 20px;

 
    
    }
    
    #logbutton:hover{
    background-color: #454545;
    color: white;
    border-color: transparent;
    }


    #logbuttonv2{
    margin-top: 1.5vh;

    border-color: transparent;
    background-color: #DE354C;
    font-size: 1vw;
    color: white;
    width: 100%;
    border-radius: 20px;
 
    
    }
    
    #logbuttonv2:hover{
    background-color: #454545;
    color: white;
    border-color: transparent;
    }



::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

#floatingSelect{
color: white;
    background-color: #181818;
}

#floatingInput{
color: white;
    background-color: #181818;
    caret-color: #DE354C;
    
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
  border-color: #DE354C;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #DE354C;
  outline: 0 none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
}

.authcard{
border: none;
opacity: 0.8;
background-color: #0f0f0f;
border-radius: 20px;
box-shadow: 0 0 5px 3px #454545;

}

.authcardbd{
    background-color: #0f0f0f;
    opacity: 0.8;
    color: white;
    border-radius: 20px;
  
}

@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');


@font-face {
  src: url("https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2")
    format("woff2");
  font-family: "Meta";
  font-style: normal;
  font-weight: normal;
}









#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
 pointer-events: none;
  
  
}






main {
  transition: all 0.5s;
  -webkit-text-stroke: 4px #d6f4f4;
  font-variation-settings: "wght" 900, "ital" 0;
  font-size: 4vw;
  text-align: center;
  color: transparent;
  font-family: "Meta", sans-serif;
  
  cursor: pointer;
}

main:hover {
  font-variation-settings: "wght" 100, "ital" 0;
  text-shadow: none;
}










#main-landing-message {

  padding: 18em 0;
}
#main-landing-message h1, h2 {
   color: #DE354C;

  margin-top: 2vh;
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
   
  

}



.view-option:nth-child(2) > div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.view-option:nth-child(2) > div:nth-child(2) > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  margin: 20px;
}
.view-option:nth-child(2) > div:nth-child(2) > div p {
  opacity: 0.6;
  font-weight: 300;
  text-align: center;
}
.view-option:nth-child(2) > div:nth-child(2) > div h1 {
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: center;
}
.view-option:nth-child(2) > div:nth-child(2){
  display: flex;
}
.view-option:nth-child(2) > div:nth-child(2) img{
  width: 100%;
  margin-bottom: 10px;
}




</style>