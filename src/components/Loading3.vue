<template>
<div class="center">


<div class="wrapper">
         
           <strong>  <span class="baslik circle circle--1">p</span> </strong>
           <strong>  <span class="baslik circle circle--2">u</span> </strong>
           <strong>  <span class="baslik circle circle--3">a</span> </strong>
           <strong>  <span class="baslik circle circle--4">n</span> </strong>
           <strong>  <span class="baslik circle circle--5">l</span> </strong>
           <strong>  <span class="baslik circle circle--6">a</span> </strong>
           <strong>  <span class="kbaslik circle circle--7">s</span> </strong>
           <strong>  <span class="kbaslik circle circle--8">a</span> </strong>
           <strong>  <span class="kbaslik circle circle--9">n</span> </strong>
           <strong>  <span class="kbaslik circle circle--10">a</span> </strong>

            
          



</div>
<br>
<div class="baslik d-flex justify-content-center">
   
 </div>
</div>
</template>

<script>


export default {
  setup() {

  

    return {};
  }
};
</script>

<style scoped>



.baslik {
  color: white;
  font-size: 1.9rem;
  
  margin-top: 1.6vh;
  letter-spacing: 0.1vw;

  font-family: "Comfortaa", cursive;
}

.kbaslik {
  color: #DE354C;
  font-size: 1.9rem;
  margin-bottom: 1.3vh;
  letter-spacing: 0.1vw;

  font-family: "Comfortaa", cursive;
}



*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



body{
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper{
    display: flex;
    align-items: center;
}

.circle{
    border-radius: 50%;
    background-color: transparent;
    margin: 10px;
    animation: bounce 1.7s infinite ease;
}

.circle--10{
    animation-delay: .9s;
}

.circle--9{
    animation-delay: .9s;
}

.circle--8{
    animation-delay: .8s;
}


.circle--7{
    animation-delay: .7s;
}

.circle--6{
    animation-delay: .6s;
}

.circle--5{
    animation-delay: .5s;
}

.circle--4{
    animation-delay: .4s;
}
.circle--3{
    animation-delay: .3s;
}
.circle--2{
    animation-delay: .2s;
}

@keyframes bounce {
    0%, 100% { opacity:1;}
  
    60% {
        transform: translateY(15px);
        opacity:.0;
    }
}
</style>
