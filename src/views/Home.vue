<template>

  <button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        @click="backtotop"
        >
  <i class="fas fa-arrow-up"></i>
</button>
  
  <Navbar/>
  <div >
    <router-view />
  </div>

 <!--   <footer class="footer">
    <hr>
    <div class="">
       <strong>
             <span class="baslikfooter">puanla<span class="kbaslikfooter">sana</span></span> 
            
          </strong>
       
   </div> 
</footer> -->
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'


export default {


 components:{Navbar},


 mounted() {
   //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 95 ||
document.documentElement.scrollTop > 95
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
 },


 setup() {

   


   const backtotop= ()=>{


   window.scrollTo(0,0);


}


   return{backtotop}
 }
 
  
}
</script>

<style >





#btn-back-to-top {
position: fixed;
bottom: 20px;
right: 20px;
display: none;
z-index: 999;
background-color: #DE354C;
border-radius: 50%;

}

@media only screen and (max-width: 980px) {  
html, body {

  display: none;
 
 }
}
</style>