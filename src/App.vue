<template>
  <div id="app">
      <app-nav></app-nav>
    <app-sidebar>
     <ul class="sidebar-panel-nav">
       <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/blogpage">Blog Page</router-link></li>
       <li><router-link to="/contact">Contact Us</router-link></li>
     </ul>
   </app-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from './components/nav.vue'
import sideBar from './components/sidebar'
export default {
  components: {
    'app-sidebar': sideBar,
    'app-nav': nav
  }
}
</script>
<style>
body{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html {
   /* height: 100%; */
   overflow:scroll;
 }
 /* body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 } */
 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }
 ul.sidebar-panel-nav {
   list-style-type: none;
 }
 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>
