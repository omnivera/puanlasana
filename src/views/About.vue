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
  <div class="row">
<transition @before-enter="beforeEnter" @enter="enterv2" appear > 
      <p class="about">
<strong>Sitemizin Özellikleri / Site Amacı / Sizi Bekleyen Site</strong>

<br>
Siteyi oluştururken amacımız her insanın bir film, dizi, oyun ve benzeri ürünler hakkında kendi düşüncelerini yorum yaparak ve
 puanlayarak beyan edecek, tasarımı hoş ve kullanımı kolay olan bir yer oluşturmaktı. Bu amacı gerçekleştirebilmek için diğer sitelerden farklı olarak kullanıcıları kritik/kullanıcı veya benzeri ayrımlar yapmıyoruz, sadece bir ürüne odaklanmak yerine farklı farklı, örnek olarak dizi, oyun, film, vb. ürünler verilebilir, ürünlere yer veriyoruz. Sitemizde bulunan bir başka özellik ise sıralamalardır, burada insanların en fazla beğendiği ürünlerinin puanını, kaç insanın oy verdiğini, çıkış yılı ve ürünün sahibini görebilirsiniz.  Bununla birlikte siteye günlük yeni ürünler ilave edildiğinden dolayı sürekli bakabileceğiniz bir ürün olacaktır.
<br>
<br>
<br>
<strong>İletişim</strong>
<br>
Bize  <span class="vurgu">info@puanlasana.com</span> mail adresi üzerinden siteyle ilgili sorularınızı, problemlerinizi, eklenmesini istediğiniz kategori veya yeni özellik önerilerinizi ve eleştirilerinizi paylaşabilirsiniz. En kısa zamanda attığınız mailleri değerlendirmeye çalışacağız şimdiden anlayışınız için teşekkür ederiz.

Umarım sitemiz ile ilgili kısa bilgilendirmemiz yardımcı olmuştur. <span class="vurgu">İyi puanlamalar dileriz.</span> 


      </p>

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


.vurgu{
    color: #DE354C;
}


.footer {
  position: fixed;
  left: 0;
  bottom: 2vh;
  width: 100%;

  text-align: center;
}


.bot-left{
    bottom: 10vh;
    left: 6vw;
    position:absolute;

  font-family: "Comfortaa", cursive;
}

.bot-right{
    bottom: 10vh;
    right: 6vw;
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
    font-size: 1.1rem;
  
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
  font-size: 1.5rem;


  font-family: "Comfortaa", cursive;
}

.altsubbaslik {
  color: white;
  font-size: 1rem;
  font-family: "Comfortaa", cursive;
}

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
}



</style>