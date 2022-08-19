.<template>

  <div class="d-flex justify-content-center" style="margin-top:3vh">
   
      <h2>KATEGORİLER</h2>
       

     
  </div>

   <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="kategoriler">

       

     
       <button type="button" id="kategoributton" class="btn btn-outline-primary btn-lg">Filmler</button>
       <button type="button" id="kategoributton" class="btn btn-outline-primary btn-lg">Diziler</button>
       <button type="button" id="kategoributton" class="btn btn-outline-primary btn-lg">Oyunlar</button>
       <button type="button" id="kategoributton" class="btn btn-outline-primary btn-lg">Kitaplar</button>
       
       

      </div>
        </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>


.kategoriler{
    display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 20px;
   
}


</style>