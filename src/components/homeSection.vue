<template>
    <div>
        <div class="container mt-5 p-5">
            <div class="row p-5">
                <div class="col-md-6">
                    <div class="animated fadeInRight delay-1s">
                         <h1>What we do to help our clients grow in digital era,</h1>
                    </div>
                    <div>
                         <div class="card mt-5 border-0 ml-auto animated fadeInLeft delay-0.5s" style="width: 18rem;">
                            <img src="@/assets/image/business.svg" class="card-img-top pr-3" alt="..." style="width: 100%; height:100%">
                            <div class="card-body">
                            <h5 class="card-title">Make Your business To be Better Famous in the Internet</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Learn more <img class="animated infinite slideOutRight delay-0.5s" src="@/assets/image/Vector.svg" alt="" style="width: 20px; height: 13px"> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 tech">
                    <div>
                        <div class="card border-0 mx-auto animated fadeInRight delay-0.8s" style="width: 18rem;">
                            <img src="@/assets/image/technology.svg" class="card-img-top" alt="..." style="width: 100%; height:100%">
                            <div class="card-body">
                            <h5 class="card-title">Bring Technology To Your Comfrotable Home</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Learn more <img class="animated infinite slideOutRight delay-0.5s" src="@/assets/image/Vector.svg" alt="" style="width: 20px; height: 13px"> </a>
                            </div>
                            </div>
                    </div>
                    <div class="pt-5 animated fadeInRight delay-0.9s">
                        <div class="card border-0 mx-auto " style="width: 18rem;">
                            <img src="@/assets/image/digital-product.svg" class="card-img-top pr-5" alt="..." style="width: 100%; height:100%">
                            <div class="card-body">
                                <h5 class="card-title">Build Your Digital Product That Suitable For Your Need</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Learn more <img class="animated infinite slideOutRight delay-0.5s" src="@/assets/image/Vector.svg" alt="" style="width: 13px; height: 13px"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.card{
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px
}

@media (max-width:768px) {
    .container{
        padding: 0 !important;
    }
    h1{
        text-align: center !important;
    }
    .tech{
        margin-top: 50px !important;
    }
}
a:hover{
    text-decoration: none;
}
</style>
