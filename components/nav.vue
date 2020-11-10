<template>
  <div class="nav-wrapper">
    <el-menu
      :default-active="activeIndex"
      class="nav-bar-h"
      mode="horizontal"
      @select="handleSelect"
      text-color="#303133"
      background-color="#fff"
      active-text-color="#4fb379"
    >
      <el-menu-item index="1">About me</el-menu-item>
      <el-menu-item index="2">專長</el-menu-item>
      <el-submenu index="3">
        <template slot="title">作業</template>
        <el-menu-item index="3-1">
          <a class="hw" href="/hw2_0716055/hw2-0716055-王耀德.html" target="_blank">
            hw2
          </a></el-menu-item>
        <el-menu-item index="3-2">
          <a class="hw" href="/hw3_0716055/hw3-0716055-王耀德.html" target="_blank">
            hw3
          </a></el-menu-item></el-menu-item>
        <el-menu-item index="3-3">
          <a class="hw" href="/hw4_0716055/OOJS3.html" target="_blank">
            hw4
          </a></el-menu-item></el-menu-item>
      </el-submenu>
      <el-menu-item index="4"
        ><a href="https://www.nctu.edu.tw" target="_blank"
          >NCTU</a
        ></el-menu-item
      >
    </el-menu>
    <el-menu
      :default-active="activeIndex"
      class="nav-bar-v"
      mode="vertical"
      @select="handleSelect"
      text-color="#303133"
      background-color="#fff"
      active-text-color="#4fb379"
    >
      <el-menu-item index="1">關於我</el-menu-item>
      <el-menu-item index="2">專長</el-menu-item>
      <el-submenu index="3">
        <template slot="title">作業</template>
        <el-menu-item index="3-1">
          <a href="/hw2_0716055/hw2-0716055-王耀德.html" target="_blank">
            hw2
          </a></el-menu-item>
        <el-menu-item index="3-2">
          <a href="/hw3_0716055/hw3-0716055-王耀德.html" target="_blank">
            hw3
          </a></el-menu-item></el-menu-item>
        <el-menu-item index="3-3">
          <a href="/hw4_0716055/OOJS3.html" target="_blank">
            hw4
          </a></el-menu-item></el-menu-item>
      </el-submenu>
      <el-menu-item index="4"
        ><a href="https://www.nctu.edu.tw" target="_blank"
          >NCTU</a
        ></el-menu-item
      >
    </el-menu>
    <br />
    <div class="content" v-if="activeIndex === '1'">
      <About />
    </div>
    <div class="content" v-if="activeIndex === '2'">
      <Skill />
    </div>
    <div class="content" v-if="subIndex === '3,3-1'">
      <Hw2 />
    </div>
    <div class="content" v-if="subIndex === '3,3-2'">
      <Hw3 />
    </div>
    <div class="content" v-if="subIndex === '3,3-3'">
      <Hw4 />
    </div>
  </div>
</template>

<script>
import About from "@/components/aboutMe.vue";
import Skill from "@/components/skill.vue";
import Hw2 from "@/components/hw2.vue";
import Hw3 from "@/components/hw3.vue";
import Hw4 from "@/components/hw4.vue";

export default {
  components: {
    About,
    Skill,
    Hw2,
    Hw3,
    Hw4,
  },
  data() {
    return {
      activeIndex: "1",
      subIndex: "0",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = String(key);
      this.subIndex = String(keyPath);
    },
  },
};
</script>

<style>
.nav-bar-h {
  display: block;
}

.nav-bar-v {
  display: none;
}

.content{
  margin-left: 10px;
}

.hw {
  color: rgb(59, 59, 59);
}

@media only screen and (max-width: 480px) {
  .nav-bar-h {
    display: none;
  }

  .nav-bar-v {
    display: block;
  }
}
</style>