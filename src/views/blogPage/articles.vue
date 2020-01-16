<template>
    <div>
        <h6 class="mt-3 topic">ALL ARTICLES</h6>
        <div class="articles container-fluid p-0">
            <div class="row my-3 p-0 box" v-for="(article, index) in articles" :key="index">
                <div class="col-md-4 image">
                    <img style="height:100%; width: 100%" :src='article.urlToImage' alt="">
                </div>
                <div class="col-md-6 description">
                    <div class="header">
                        <a :href="article.url"  target="_blank"><h5>{{ article.title }}</h5></a>
                    </div>
                    <div class="article mt-2">
                        {{ article.content | shortenString }}
                    </div>
                    <div class="author mt-2">
                        {{ article.author }}
                    </div>
                    <div class="time mt-2">
                        <p> {{article.publishedAt | dateConvert}}, 3 min read </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex navigation justify-content-between my-3">
            <div class="d-flex previous" :class="{isDisabled: disabled}"  ref="previous">
                <div class="arrow-left mr-2">
                    <img src="@/assets/image/ic_arrow_back_18px.svg" alt="">
                </div>
                <div>
                    <p @click.prevent="prev">New Post</p>
                </div> <br>
                <!-- <section>Error</section> -->
            </div>
            <div class="d-flex next">
                <p class="next" @click.prevent="next">Old Post</p>
                <div class="arrow-right ml-2">
                    <img src="@/assets/image/ic_arrow_forward_18px.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      maxPerPage: 5,
      totalResults: 0,
      articles: [],
      disabled: false
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.totalResults / this.maxPerPage)
    },
    isFirstPage () {
      return this.currentPage === 1
    },
    isLastPage () {
      return this.currentPage >= this.pageCount
    },
    apiUrl () {
      return `https://newsapi.org/v2/everything?q=technology&language=en&page=${this.currentPage}&pageSize=${this.maxPerPage}&apiKey=3d65f891e67841f3b2ca700bb6746399`
    }
  },
  methods: {
    fetchNews () {
      this.$http.get(this.apiUrl)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.articles = data.articles
          this.totalResults = data.totalResults
        })
        .catch(err => {
          console.log(err)
        })
    },
    next () {
      this.disabled = false

      console.log(this.articles.length)
      console.log(this.currentPage)
      this.currentPage += 1
      this.fetchNews()
      console.log(this.$refs)
    },
    prev () {
      if (this.currentPage === 1) {
        this.disabled = true
      } else {
        this.disabled = false
        this.currentPage -= 1
        this.fetchNews()
      }
    }
  },
  created () {
    this.fetchNews()
  }
}
</script>
<style scoped>
.previous{
    cursor: pointer !important;
  color:#356EAD
}
.next{
    cursor: pointer !important;
  color:#356EAD
}
.topic{
    color: #356EAD
}
.header{
    color:#1F3F68
}
.box{
    /* height:12rem */
}
.isDisabled{
  color: currentColor;
  cursor: not-allowed !important;
  opacity: 0.5;
  pointer-events: none
}
a{
  color:inherit
}
a:hover{
  color: #356EAF;
  text-decoration:none
}
</style>
