<template>
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
  <div class="container-fluid">
     <span class="navbar-brand mb-0 h1"><strong>puanlasana</strong></span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li class="nav-item">
           <router-link :to="{name:'anasayfa'} ">   <a class="nav-link" aria-current="page" href="#"><button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-house"></i> Ana Sayfa</button></a></router-link>
        

        </li>
        <li class="nav-item">
          <router-link :to="{name:'anasayfa'} ">   <a class="nav-link" aria-current="page" href="#"><button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-ranking-star"></i> Sıralamalar</button></a></router-link>
        
          
        </li>

         <li class="nav-item">
            <router-link :to="{name:'anasayfa'} "> <a class="nav-link" aria-current="page" href="#"><button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-address-card"></i> Hakkımızda</button></a></router-link>
          
        </li>

         <li class="nav-item">
           <router-link :to="{name:'Kategoriekle'} "> <a class="nav-link" aria-current="page" href="#"><button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-folder-plus"></i> Kategori Ekle</button></a></router-link>
          
        </li>

         <li class="nav-item">
           <router-link :to="{name:'Itemekle'} "> <a class="nav-link" aria-current="page" href="#"><button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-file-circle-plus"></i> İtem Ekle</button></a></router-link>
          
        </li>
    
        
      </ul>
        <div class="d-flex">
   
      <button class="btn btn-outline-light" type="submit"><i class="fa-solid fa-user"></i> Giriş Yap</button>
      
    </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
  
</style>
