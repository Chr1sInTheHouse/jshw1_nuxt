<template>
  <div id="app">
    <Header class="header" />
    <Nav class="nav" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  animation: Cool 5s infinite;
  line-height: 150%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

@keyframes Cool {
  0% {
    background-color: rgb(255, 255, 255);
  }
  50% {
    background-color: rgb(159, 202, 147);
  }
  100% {
    background-color: rgb(255, 255, 255);
  }
}

.footer {
  width: 1000px;
  height: 10%;
  position: relative;
}

@media only screen and (max-width: 480px) {
  .footer {
    height: 60px;
    position: relative;
  }
}
</style>
