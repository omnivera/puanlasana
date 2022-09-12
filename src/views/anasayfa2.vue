.<template>


   

<div>
<!--   <div class="header">
      <div class="header__left">
        <i id="menu" class="material-icons">menu</i>
        <img
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
        />
      </div>

      <div class="header__search">
        <form action="">
          <input type="text" placeholder="Search" />
          <button><i class="material-icons">search</i></button>
        </form>
      </div>

      <div class="header__icons">
        <i class="material-icons display-this">search</i>
        <i class="material-icons">videocam</i>
        <i class="material-icons">apps</i>
        <i class="material-icons">notifications</i>
        <i class="material-icons display-this">account_circle</i>
      </div>
    </div> -->
    <!-- Header Ends -->

    <!-- Main Body Starts -->
    <div class="mainBody">
      <!-- Sidebar Starts -->
     <!--  <div class="sidebar">
        <div class="sidebar__categories">
          <div v-for="kategori in kategoriler" :key="kategori.id" class="sidebar__category text-white">
            <i class="fas fa-dice-d6"></i>
            <span style="text-align:center">{{kategori.kisim}}</span>
          </div>
          
        </div>
     
      </div> -->
      <!-- Sidebar Ends -->

      <div class="col-md-2"></div>

      <div class="col-md-8">
        <!-- Videos Section -->
      <transition @before-enter="beforeEnter" @enter="enterv2" appear >  
      <div class="videos">
        <h1>Recommended</h1>

        <div class="videos__container">
          
          <!-- Single Video starts -->
          <div class="video">
            <div class="video__thumbnail">
              <img src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Spiderman 2
                </h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>
          <!-- Single Video Ends -->

          <!-- Single Video starts -->
          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>
          <!-- Single Video Ends -->

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                <a href="">Netflix</a>
                <span>10M Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                <a href=""> Chispa Motivation</a>
                <span>10M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Javascript Fundamentals</h3>
                <a href="">Coding Addict</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build Real Time Face Detection With JavaScript</h3>
                <a href=""> Web Dev Simplified </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>AWS Basics for Beginners - Full Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>36K Views • 1 Day Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                </h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                <a href="">Netflix</a>
                <span>10M Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                <a href=""> Chispa Motivation</a>
                <span>10M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Javascript Fundamentals</h3>
                <a href="">Coding Addict</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build Real Time Face Detection With JavaScript</h3>
                <a href=""> Web Dev Simplified </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>AWS Basics for Beginners - Full Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>36K Views • 1 Day Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                </h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                <a href="">Netflix</a>
                <span>10M Views • 11 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                <a href=""> Chispa Motivation</a>
                <span>10M Views • 1 Month Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Javascript Fundamentals</h3>
                <a href="">Coding Addict</a>
                <span>179K • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>470K Views • 8 Months Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>Build Real Time Face Detection With JavaScript</h3>
                <a href=""> Web Dev Simplified </a>
                <span>875K Views • 1 Year Ago</span>
              </div>
            </div>
          </div>

          <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>AWS Basics for Beginners - Full Course</h3>
                <a href=""> freeCodeCamp.org </a>
                <span>36K Views • 1 Day Ago</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
      </transition>
      </div>

      
    </div>
</div>





</template>

<script>

import {onMounted,ref} from 'vue'
import {firestoreRef} from '@/firebase/config'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute,useRouter} from 'vue-router'
export default {

    setup() {

      const kategoriler = ref([])




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
        y: 0,
        duration: 2,
        delay: el.dataset.index * 0.3,
        ease: "back"
      });
    };



      onMounted(async () => {

           
            await firestoreRef.collection('kategoriler').orderBy('click','desc').onSnapshot(snap=>{
                kategoriler.value=[]
                snap.docs.forEach(doc=>{
                    kategoriler.value.push({...doc.data(),id:doc.id})
                })
            })

         
        })



        return {kategoriler,beforeEnter,enter,enterv2
        }
        
    }

}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

/* header */

.material-icons {
  color: rgb(96, 96, 96);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__left img {
  width: 100px;
  margin-left: 15px;
}

.header i {
  padding: 0 7px;
  cursor: pointer;
}

.header__search form {
  border: 1px solid #ddd;
  height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
}

.header__search input {
  width: 500px;
  padding: 10px;
  margin: 0;
  border-radius: 0;
  border: none;
  height: 100%;
}

.header__search button {
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
  border-radius: 0;
}

/* Sidebar */
.mainBody {
  height: calc(100vh - 70px);
  display: flex;
  overflow-y: scroll;
  background-color: black;
 
}

.sidebar {
  height: 100%;
  width: 230px;
  background-color: black;
  overflow-y: scroll;
  border-right: 1px solid #454545;


}

.sidebar__categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  
}

.sidebar__category {
  display: flex;
  align-items: center;
  padding: 12px 25px;
  
}

.sidebar__category span {
  margin-left: 15px;
    color: white;
}

.sidebar__category:hover {
  background: #DE354C;
  color: black;
  cursor: pointer;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

hr {
  height: 1px;
  background-color: #e5e5e5;
  border: none;
}

/* videos */

.videos {
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 15px 15px;



}

.videos__container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  
}

.video {
  width: 20vw;

  margin-bottom: 30px;
  transition: all .2s ease-in-out;
}

.video:hover {
 background-color: #181818;
transform: scale(1.1);

}

.video__thumbnail {
  width: 100%;
  height: 310px;
  cursor: pointer;
}

.video__thumbnail img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.author img {
  object-fit: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.video__details {
  display: flex;
  margin-top: 10px;
  cursor: pointer;
   padding-left: 15px;
 padding-right: 15px;
 padding-bottom: 10px;
}

.title {
  display: flex;
  flex-direction: column;
}

.title h3 {
    color: white;
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 6px;
}

.title a,
span {
  text-decoration: none;
  color: rgb(96, 96, 96);
  font-size: 14px;
}

h1 {
  font-size: 20px;
  margin-bottom: 10px;
  color: rgb(3, 3, 3);
}

@media (max-width: 425px) {
  .header__search {
    display: none;
  }

  .header__icons .material-icons {
    display: none;
  }

  .header__icons .display-this {
    display: inline;
  }

  .sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .header__search {
    display: none;
  }

  .sidebar {
    display: none;
  }

  .show-sidebar {
    display: inline;
    position: fixed;
    top: 4.4rem;
    height: auto;
  }
}

@media (max-width: 941px) {
  .header__search input {
    width: 300px;
  }
}

</style>