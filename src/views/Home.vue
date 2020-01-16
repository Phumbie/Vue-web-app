<template>
  <div>
    <div class="container-flex p-0">
    <app-header></app-header>
    <home-Section></home-Section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1>Our Finished Projects</h1>
        </div>
        <div class="col-md-8">
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
        <div class="col-md-12 smart-home mt-5 pt-5">
          <div class="row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6 pt-5">
              <h2>Smart Home Installation</h2>
              <p>In Lekki Epe Estate</p>
            </div>
          </div>
          </div>
          <div class="d-flex pt-5 phones">
            <div >
              <div class="iphone">
                <div class="summary p-5">
                  <h5 class="">Sparklite App</h5>
                  <p class="pt-3">Marketplace</p>
                </div>
              </div>
            </div>
            <div class="ml-auto">
              <div class="car">
                <div class="summary p-5">
                  <h5>Car-Rapetition App</h5>
                  <p class="pt-3">Board</p>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div class="container-flex down-flow pt-5">
      <div class="container pt-5">
        <div class="row pb-5">
          <div class="col-md-3">
            <h4>OurBeloved Clients</h4>
          </div>
          <div class="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
        <div class="row pt-5 text-center">
          <div class="col-md-3 border-right border-bottom p-3">
            <p>LOGO CLIENT 1</p>
          </div>
          <div class="col-md-3 border-right border-bottom p-3">
             <p>LOGO CLIENT 2</p>
          </div>
          <div class="col-md-3 border-right border-bottom p-3">
             <p>LOGO CLIENT 3</p>
          </div>
          <div class="col-md-3 border-bottom p-3">
             <p>LOGO CLIENT 4</p>
          </div>
          <div class="col-md-3 border-right p-3">
            <p>LOGO CLIENT 5</p>
          </div>
          <div class="col-md-3 border-right p-3">
             <p>LOGO CLIENT 6</p>
          </div>
          <div class="col-md-3 border-right p-3">
             <p>LOGO CLIENT 7</p>
          </div>
          <div class="col-md-3 p-3 more">
             <p>More Client</p>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    </div>
  </div>
</template>

<script>
import header from '../components/header.vue'
import homeSection from '../components/homeSection.vue'
import footer from '../components/footer.vue'
import { store } from '@/store.js'
// import sideBar from '../components/sidebar'
export default {
  components: {
    'app-header': header,
    'home-Section': homeSection,
    'app-footer': footer
    // 'app-sidebar': sideBar
  },
  created () {
    store.isNavOpen = false
  }
}
</script>
<style scoped>
.smart-home{
  background-image:url('../assets/image/smart-home.jpg');
  background-size:cover;
  /* background-repeat: no-repeat; */
  color:white;
  height: 500px;
  border-radius: 10px
}
.iphone{
  background-image: url('../assets/image/iphone.jpg');
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: red; */
  border-radius: 10px;
  width: 25rem;
}
.car{
  background-image: url('../assets/image/cars.jpg');
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: blue; */
  border-radius: 10px;
  width: 25rem;
}
.phones{
  height:25rem;
  width: 100%
}
.summary{
  color: white;
}

.down-flow{
  margin-top: 100px;
  background-color: #5A98D0;
  border-top-left-radius: 200px;
  /* height: 800px; */
  color: white;
}
.more{
  background-color:#1F3F68;
  opacity: 0.2;
}
</style>
