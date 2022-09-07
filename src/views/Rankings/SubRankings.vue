.<template>


 <br>
 <div>
<svg style="display: none;">
  <symbol id="cup" x="0px" y="0px" width="25px" height="26px" viewBox="0 0 25 26" enable-background="new 0 0 25 26" xml:space="preserve">
<path fill="#F26856" d="M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69
	C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148
	C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563
	c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303
	c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191
	c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525
	c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257
	c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31
	c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865
	c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148
	C25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99
	c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883
	L18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686
	c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033
	C13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273
	C17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06
	c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z"/>
      </symbol>
</svg>

        <div class="d-flex justify-content-center"  style="margin-top:7vh">

       <div class="row">

           <div class="rankings">


  <transition-group @before-enter="beforeEnter" @enter="enterv2" appear >      
<section id="leaderboard">
		<nav class="ladder-nav">
			<div class="ladder-title">
			<h1>Standings</h1>
			</div>
			<div class="ladder-search">
				<input type="text" id="search-leaderboard" class="live-search-box" placeholder="Search Team, Player..." />
			</div>
		</nav>
		<table id="rankings" class="leaderboard-results" width="100%">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Team</th>
					<th>Country</th>
					<th>P1</th>
					<th>P2</th>
          <th>Games Played</th>
					<th>PTS</th>
				</tr>
			</thead>
			<tbody>
				<!-- Load SCRIMcom Leaderboard Ranings -->
			</tbody>
		</table>
	</section>
   </transition-group>  

 


 

      </div>
        </div>
            </div>

 </div>

</template>

<script>
import {onMounted,ref,watch} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'
import Vue3autocounter from 'vue3-autocounter';
import { useRoute,useRouter} from 'vue-router'
export default {


    components: {
  /*   'vue3-autocounter': Vue3autocounter, */
    
  },

  setup() {

 


        const veriler=ref([])
        const itemler=ref([])

        


            const route=useRoute()
          const router=useRouter()

     
     watch ( () => {


       /*   for (let i = 0; i < veriler.value.length; i++) {
              firestoreRef.collection('itemler').where('kategori','==',veriler.value[i].kisim).limit(5).get()
        .then(doc =>{


            itemler.value.push({...doc.data(),id:doc.id})

        

})

console.log(itemler.value )
             
         } */

         console.log(itemler.value)



     })
          

           const randompuanla= ()=>{


               let random = Math.floor(Math.random() * veriler.value.length);
          
         
         router.push({name:'Puanla',params:{Kategori:veriler.value[random].kisim}})
         

        }


         const puanla= (Kategori)=>{
          
         
         router.push({name:'Puanla',params:{Kategori:Kategori}})
         

        }


               const beforeEnter=(el)=>{
          el.style.opacity=0;
          el.style.transform='translateY(100px)'
        }



           const enter=(el)=>{

          gsap.to(el,{
    
            opacity:1,
            y:0,
            duration:1,
            delay:el.dataset.index*0.2,

            
           
          })
        }


          const enterv2=(el)=>{

          gsap.to(el,{
            opacity:1,
            y:0,
            duration:1.4,
            delay:el.dataset.index*0.2,
            ease:'back'
          })
        }

            onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                veriler.value=[]
                snap.docs.forEach(doc=>{
                    veriler.value.push({...doc.data(),id:doc.id})


                         firestoreRef.collection(doc.data().kisim).orderBy('puan','desc').limit(5).get()
        .then(snapshot =>{
            if (snapshot.size > 0) {
                  snapshot.forEach(doc => {
         
itemler.value.push({...doc.data(),id:doc.id})
         
         
        });
            }else{

                console.log("boşşşş")
              

            }
        })

                 
                })
            })


       
         
        })

        return {veriler,beforeEnter,enter,puanla,enterv2,randompuanla,itemler
        }
        
    }

}
</script>

<style scoped>

* {
  margin:0;
  padding:0;
  font-family:Helvetica, Arial, sans-serif;
}
body {
  background:#232323;
}
input[type=text], textarea, input[type=email], input[type=password], input[type=tel], input[type=url], input[type=search], input[type=date] {
    padding: 10px;
    width: 100%;
    font-size: 14px;
    font-family: inherit;
    line-height: 24px;
    color: #555;
    background-color: #f1f1f1;
    border: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
}
input[type=text], textarea, input[type=email], input[type=password], input[type=tel], input[type=url], input[type=search], input[type=date], .material.woocommerce-page[data-form-style="default"] input#coupon_code {
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
    border: 2px solid rgba(0,0,0,0);
}
/* /end Codepen Specific */
/* Ladder Navigation */
  #leaderboard {
      padding:50px;
  }
  .ladder-nav {
      display:flex;
      flex-wrap:wrap;
      align-items: center;
      background:#5055CB;
      padding:10px 25px;
      border-radius:10px;
      border:1px solid #686EF9;
  }
  .ladder-title {
    flex:2;
  }
  .ladder-search {
    flex:1;
    padding-right:25px;
  }
  .ladder-title {
    font-size:20px;
    color:#888DFF!important;
    font-weight:bold;
    text-transform:uppercase;
  }
  .ladder-search input {
      color:white
  }
  .ladder-search input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #888DFF;
  }
  .ladder-search input::-moz-placeholder { /* Firefox 19+ */
      color: #888DFF;
  }
  .ladder-search input:-ms-input-placeholder { /* IE 10+ */
      color: #888DFF;
  }
  .ladder-search input:-moz-placeholder { /* Firefox 18- */
      color: #888DFF;
  }
/* /end Ladder Navigation */
/* Leaderboard Results */
.leaderboard-results {
  text-align:left;
  border-collapse: collapse;
}
.leaderboard-results thead th {
  padding: 25px;
  color:#747474;
  font-size:14px;
  font-weight:bold;
}
.leaderboard-results tbody td {
  padding:15px 25px;
  background:#1a1a1a;
  font-size:16px;
  border-bottom:5px solid #232323;
}
.leaderboard-results tbody td:nth-of-type(7) {
  font-weight:bold;
}
.leaderboard-results tbody tr:hover td {
    background:#1d1d1d;
}
.leaderboard-results tbody tr {
  color:#747474;
}
.leaderboard-results tbody tr:first-child {
  color:#686EF9;
}
.leaderboard-results tbody span {
  font-weight:bold;
  padding:10px 15px;
  border-radius:50%;
}
.leaderboard-results tbody tr:first-child span {
  background:#5055CB;
  color:white;
}
.leaderboard-results tbody tr span {
  background:#262626;
  color:#747474;
}

</style>