<template>
    <div>
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
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      headline: [],
      counter: 0,
      popular: [],
      popularDisplay: false,
      spin: false
    }
  },
  methods: {
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
  }
}
</script>
