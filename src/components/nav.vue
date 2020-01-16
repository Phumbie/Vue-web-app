<template>
    <div>
                <div class="mt-3 d-flex">
                        <router-link to="/"><img src="@/assets/image/Group.svg" alt="logo"></router-link>
                    <div class="ml-auto menu">
                        <!-- <div>
                            <b-dropdown id="dropdown-1" text="menu"  class="m-md-2">
                                <b-dropdown-item> <router-link to="/"> Home </router-link> </b-dropdown-item>
                                <b-dropdown-item> <router-link to="/blogpage">Blog Page  </router-link></b-dropdown-item>
                                <b-dropdown-item> Contact Us</b-dropdown-item>
                            </b-dropdown>
                            </div> -->
                            <div id="burger"
                             :class="{ 'active' : isBurgerActive }"
                            @click.prevent="toggle">
                            <slot>
                                    <button type="button" class="burger-button" title="Menu">
                                         <span class="hidden">Toggle menu</span>
                                        <span class="burger-bar burger-bar--1"></span>
                                        <span class="burger-bar burger-bar--2"></span>
                                        <span class="burger-bar burger-bar--3"></span>
                                    </button>
                            </slot>
    </div>
                    </div>
                    </div>
                </div>
    <!-- </div> -->
</template>

<script>
// import { Slide } from 'vue-burger-menu'
import { store, mutations } from '@/store.js'
export default {
  computed: {
    isBurgerActive () {
      return store.isNavOpen
    }
  },
  methods: {
    toggle () {
      //   this.isBurgerActive = !this.isBurgerActive
    //   alert('Clicked')
      mutations.toggleNav()
    }
  }
//   component: {
//       slide,
//   }
}
</script>
<style scoped>
.dropdown{
    list-style: none;
}
.d-flex{
    padding: 0 100px;
}
.menu:hover{
    cursor: pointer;
}
.hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        height: 40px;
        width: 40px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: #356EAD;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 3px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
        border-radius: 5px;
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar {
        background-color: #356EAD;
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>
