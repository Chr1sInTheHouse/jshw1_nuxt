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
  width: auto;
  margin: 0 0;
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
    background-color: rgb(243, 77, 77);
  }
  100% {
    background-color: rgb(255, 255, 255);
  }
}

.footer {
  width: auto;
  height: 10%;
}

@media only screen and (max-width: 480px) {
#app {
  width: 100%;
  animation: Cool 5s infinite;
  line-height: 150%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
  .footer {
    height: 10%;
    position: relative;
  }
}
</style>
