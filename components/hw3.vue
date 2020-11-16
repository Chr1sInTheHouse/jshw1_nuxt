<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3 style="float: left">Homework 3</h3>
        <el-button
          style="float: right"
          size="small"
          icon="el-icon-view"
          type="primary"
          round
          @click="openHw(3)"
        >
          View HW3
        </el-button>
      </div>
      <ul>
        <li>使用Javascript實作魔術小遊戲。</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    openHw(num) {
      if (num == 2) {
        window.open("/jshw1_nuxt/hw2_0716055/hw2-0716055-王耀德.html");
      } else if (num == 3) {
        window.open("/jshw1_nuxt/hw3_0716055/hw3-0716055-王耀德.html");
      } else if (num == 4) {
        window.open("/jshw1_nuxt/hw4_0716055/OOJS3.html");
      } else if (num == 5) {
        window.open("https://www.nctu.edu.tw");
      }
    },
  }
};
</script>

<style scoped>
.box-card {
  width: 520px;
  height: 500px;
  margin-left: 30%;
}
.openHW {
  color: aliceblue;
}

@media only screen and (max-width: 480px) {
  .box-card {
    width: 300px;
    margin-left: 0;
  }
}
</style>