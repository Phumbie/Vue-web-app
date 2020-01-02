<template>
    <div>
        <div class="container-fluid p-0 head mt-4">
            <div class="container text-center blog pt-4">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="contact my-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="image">
                            <img style="height:100%; width: 100%" src="@/assets/image/group-contact.svg" alt="">
                        </div>
                        <div class="address mt-5">
                            <h3 class="topic">ADDRESS</h3>
                            <div class="address-description mt-4">
                                <p>Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>
                            </div>
                            <div class="phone-no my-4">
                                <h3 class="topic">PHONE</h3>
                                <div class="phone-contact mt-3">
                                    <p class="d-flex">
                                        <img  class="mr-3" src="@/assets/image/ic_phone_24px.svg" alt="">
                                        +62-812-7313-4321
                                    </p>
                                    <p class="d-flex mt-3">
                                        <img  class="mr-3" src="@/assets/image/ic_phone_24px.svg" alt="">
                                        +62-812-7313-4321
                                    </p>
                                </div>
                            </div>
                            <div class="online-service mt-4">
                                <h3 class="topic">ONLINE SERVICE</h3>
                                   <div class="online mt-3">
                                    <p class="d-flex">
                                        <img  class="mr-3" src="@/assets/image/web.svg" alt="">
                                       www.afrianska.com
                                    </p>
                                    <p class="d-flex mt-3">
                                        <img  class="mr-3" src="@/assets/image/email.svg" alt="">
                                        hello.afrian@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ml-auto">
                        <div class="contact-card p-3">
                            <div class="form-header">
                                <h3 class='topic'>SEND US MESSAGE</h3>
                                <form action="#" method="post">
                                    <div class="full-name pt-3">
                                        <label for="fname">First Name</label> <br>
                                        <input type="text" id="fname" name="fullname" placeholder="Your name">
                                    </div>
                                    <div class="email pt-3">
                                        <label for="email">Email</label> <br>
                                        <input type="email" id="email" name="email" placeholder="Your email">
                                    </div>
                                    <div class="message pt-3">
                                        <label for="message">Message</label>
                                        <textarea name="messgae" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
                                    </div>
                                </form>
                                <button class="submit">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="maps my-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.8370545284333!2d3.275299695985421!3d6.562756324483859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fe149198a39%3A0x76bfddcc0c5da765!2sTwin%20FajA%20Super%20market!5e0!3m2!1sen!2sng!4v1577992394818!5m2!1sen!2sng" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import footer from '../components/footer'
export default {
  components: {
    'app-footer': footer
  }
}
</script>
<style scoped>
.head{
    height: 20vh;
    background-image: url('../assets/image/header.svg');
    background-size: cover;
}
.blog{
    color: white;
    width: 40%
}
.contact-card{
    background: #FFFFFF;
    box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
}
#message{
    resize:none
}
input{
    width:100%;
    border-radius: 10px;
    padding: 20px 15px;
    border: 1px solid #356EAD;
    opacity:0.4
}
textarea{
    width:100%;
    border-radius: 10px;
    padding: 20px 15px;
    border: 1px solid #356EAD;
    opacity: 0.4
}
.submit{
    background: #5A98D0;
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
    border:none;
    padding: 20px 15px;
    width: 100%;
    margin-top: 20px;
    color: white
}
.topic{
    color:#1F3F68;
}
label{
    color:#1F3F68;
    opacity:0.8
}
iframe{
    border-radius: 5px
}
</style>
