<template>
    <div>
                <div class="mt-3 d-flex">
                        <img src="@/assets/image/Group.svg" alt="logo">
                    <div class="ml-auto menu">
                        <div>
                            <b-dropdown id="dropdown-1" text="menu"  class="m-md-2">
                                <b-dropdown-item> <router-link to="/"> Home </router-link> </b-dropdown-item>
                                <b-dropdown-item> <router-link to="/blogpage">Blog Page  </router-link></b-dropdown-item>
                                <b-dropdown-item> Contact Us</b-dropdown-item>
                            </b-dropdown>
                            </div>
                    </div>
                    </div>
                </div>
    <!-- </div> -->
</template>

<script>
// import { Slide } from 'vue-burger-menu'
export default {
  data () {
    return {
      isDropdownOpen: false,
      reactive: true
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
</style>
