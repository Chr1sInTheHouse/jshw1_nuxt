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
      <el-menu-item index="1">關於我</el-menu-item>
      <el-menu-item index="2">專長</el-menu-item>
      <el-submenu index="3">
        <template slot="title">作業</template>
        <el-menu-item index="3-1" @click="openHw(2)"> hw2 </el-menu-item>
        <el-menu-item index="3-2" @click="openHw(3)"> hw3 </el-menu-item>
        <el-menu-item index="3-3" @click="openHw(4)"> hw4 </el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="openHw(5)"> NCTU </el-menu-item>
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
        <el-menu-item index="3-1" @click="openHw(2)"> hw2 </el-menu-item>
        <el-menu-item index="3-2" @click="openHw(3)"> hw3 </el-menu-item>
        <el-menu-item index="3-3" @click="openHw(4)"> hw4 </el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="openHw(5)"> NCTU </el-menu-item>
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
    <div class="content" v-if="activeIndex === '4'">
      Welcome to my College!!
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
  },
};
</script>

<style>
.nav-wrapper {
  background-color: rgb(186, 204, 181);
}

.nav-bar-h {
  display: block;
}

.nav-bar-v {
  display: none;
}

.content {
  margin-left: 10%;
  min-height: 700px;
}
a {
  text-decoration: none;
}
a:hover {
  color: rgb(255, 255, 255);
  font-weight: bold;
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

  .content {
    margin-left: 7%;
    min-height: 700px;
  }
}
</style>