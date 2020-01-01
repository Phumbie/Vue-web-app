<template>
    <div>
        <app-nav></app-nav>
        <div class="container-fluid p-0 head mt-4">
            <div class="container text-center blog pt-4">
                <h2>Blog Afrianska</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="container">
            <form class="my-4">
                <div class="input-group mt-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text span" id="basic-addon1"> <img src="@/assets/image/search.svg" alt=""> </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
            </form>
            <h6 class="popular my-3">
                POPULAR
            </h6>
        </div>
        <div class="loader" ref="load">loading...
        </div>
        <div class="container mt-3" >
            <div class="row" v-if="headline.length">
                <div class="col-md-6">
                    <div class="popular-header py-3">
                        <h1> {{headline[0].title}}  </h1>
                    </div>
                    <div class="popular-article py-4">
                        <p>{{ headline[0].content | shortenString }}</p>
                    </div>
                    <div class="autor align-self-end">
                        <p> {{headline[0].author}} </p>
                        <p> {{headline[0].publishedAt | dateConvert}}, 3 min read </p>

                        <!-- <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                        <a class="a2a_dd" href="xvideos.com"></a>
                        <a class="a2a_button_facebook"></a>
                        <a class="a2a_button_twitter"></a>
                        <a class="a2a_button_email"></a>
                        <a class="a2a_button_whatsapp"></a>
                        </div> -->
                    </div>
                </div>
                <div class="col-md-6">
                    <img style="height: 100%; width: 100%" :src= 'headline[0].urlToImage' alt="healine-image">
                </div>
            </div>
            <div class="popular-card my-4">
              <div class="row">
                <div class="col-md-4 d-flex mt-4" v-for="(headlines, index) in headline.slice(1)" :key="index">
                    <div class="card" style="width: 100%; height: 38em">
                      <img style=" height:250px; width: 100%" :src='headlines.urlToImage' class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title"> {{headlines.title}}</h5>
                        <p class="card-text"> {{headlines.content | shortenString}} </p>
                        <p class="mt-5"> {{headlines.author}} </p>
                        <p class=" d-flex align-self-end"> {{headlines.publishedAt | dateConvert}}, 3min read</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

             <div class="popular-card my-4" v-if="popularDisplay" ref="displayPopular">
              <div class="row">
                <div class="col-md-4 d-flex mt-4" v-for="(populars, index) in popular" :key="index">
                    <div class="card" style="width: 100%; height: 38em">
                      <img style=" height:250px; width: 100%" :src='populars.urlToImage' class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title"> {{populars.title}}</h5>
                        <p class="card-text"> {{populars.content | shortenString}} </p>
                        <p class="mt-5"> {{populars.author}} </p>
                        <p class=" d-flex align-self-end"> {{populars.publishedAt | dateConvert}}, 3min read</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="d-flex ">
              <div class="ml-auto mt-4"><h6  class="popular-article" @click="getAllaticlesOnThisCategory" ref="popularArticle">SEE ALL POPULAR ARTICLE</h6></div>
            </div>
            <div class="text-center" v-if="spin">
              <div class="lds-dual-ring"></div>
            </div>
            <hr class="my-4">
            <div class="container-fluid p-0 mt-5">
              <app-articles></app-articles>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import nav from '../../components/nav'
import footer from '../../components/footer'
import articles from './articles'
export default {
  data () {
    return {
      headline: [],
      counter: 0,
      popular: [],
      popularDisplay: false,
      spin: false
      // headlineStories: null
    }
  },
  components: {
    'app-nav': nav,
    'app-articles': articles,
    'app-footer': footer
  },
  methods: {
    // async fetchTopData() {
    //   try {
    //     let response = await this.$http.get(`https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=${API_KEY}`)
    //     this.headline = response.data.articles;
    //   }
    //   catch(err) {
    //     console.log(err)
    //   }
    // }
    fetchTopData () {
      this.$http.get(`https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=3d65f891e67841f3b2ca700bb6746399`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.headline = data.articles.slice(0, 4)
          console.log(data.articles.length)
          this.$refs.load.hidden = true
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllaticlesOnThisCategory (event) {
      this.spin = true
      this.$http.get(`https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=3d65f891e67841f3b2ca700bb6746399`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.popular = data.articles.slice(5)
          console.log(data.articles.length)
        })
        .catch(err => {
          console.log(err)
        })
      if (!this.popularDisplay) {
        this.popularDisplay = true
        this.$refs.popularArticle.innerText = 'SEE LESS ARTICLE'
        console.log(this.$refs)
      } else {
        this.popularDisplay = false
        this.$refs.popularArticle.innerText = 'SEE POPULAR ARTICLE'
      }
      this.spin = false
    }
  },
  filters: {
    dateConvert: (value) => {
      let msec = new Date(value)
      return msec.toString().substring(4, 10)
    },
    shortenString: (value) => {
      return value.length > 150 ? value.substring(0, 150) + '...  Read more' : value + '...  Read more'
    }
  },
  created () {
    this.fetchTopData()
  }
}
</script>
<style scoped>
.head{
    height: 20vh;
    background-image: url('../../assets/image/header.svg');
    background-size: cover;
}
.blog{
    color: white;
    width: 40%
}
.form-control{
    background-color: #F4F4F4;
    color:#1F3F68;
    opacity: 0.6;
    border-left: none;
}
.span{
  background-color:#F4F4F4;
  border-right: none;
}
.prepend{
    border-color: #ced4da !important;
    background-color:#F4F4F4 !important;
}
.popular{
    color:#356EAD
}
.popular-article{
  cursor: pointer !important;
  color:#356EAD
}
.popular-article:hover{
  color:#356EAF
}
/* .card{
  overflow: auto !important;
} */
.loader {
  color: #356EAF;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.lds-dual-ring {
  display: block;
  width: 80px;
  height: 80px;
  margin:auto
}
.lds-dual-ring:after {
  content: " ";
  width: 50px;
  display: block;
  height: 50px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #356EAF;
  border-color: #356EAF transparent #356EAF transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
