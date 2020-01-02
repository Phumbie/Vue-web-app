<template>
    <div class="header">
        <!-- <app-nav></app-nav> -->
        <div id="overlay"></div>
        <div class="d-flex pt-5 px-3 ">
            <div class="automation pt-5 mt-3 ml-auto">
                <h1>New Automation Tool for Your Home</h1>
                <p class="pt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                <button class="btn btn-primary mt-5 px-5 py-3">See Our Project</button>
            </div>
            <div class="image animated fadeInRight delay-0.5s">
                <img src="@/assets/image/illustration-2.svg" alt="" style="width:100%; height: 100%" class="ml-auto">
            </div>
        </div>
    </div>
</template>
<script>

// import nav from './nav'

export default {
//   components: {
//     'app-nav': nav
//   }
}
</script>
<style scoped>
.header{
    height: 100vh;
    background: linear-gradient(0deg, #98C3E8 8.84%, rgba(152, 195, 232, 0) 31.12%);
}
.automation{
    width: 40%;
    font-size:16px;
    line-height: 26px;
    letter-spacing: 0.05em;
}
@media (max-width:768px) {
    .automation {
        width:100%;
        padding-top:10px !important;
        text-align: center
    }
    .d-flex{
        padding-top:0 !important;
        display: flex !important;
        flex-direction: column-reverse;
    }
    button{
        margin-top: 10px !important
    }
}
h1{
    font-size: 64px
}

@media (max-width:768px) {
    h1 {
        font-size: 30px
    }
}
.image{
    position: relative;
    right: 40px;
}
@media (max-width:768px) {
    .image {
        /* display: none */
        right: 0;
        height: 220px;
        margin-top: 10px !important;
        position:static;
    }
}
</style>
