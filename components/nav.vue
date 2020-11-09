<template>
  <div class="nav">
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
        <el-menu-item index="3-1">hw2</el-menu-item>
        <el-menu-item index="3-2">hw3</el-menu-item>
        <el-menu-item index="3-3">hw4</el-menu-item>
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
        <el-menu-item index="3-1">hw2</el-menu-item>
        <el-menu-item index="3-2">hw3</el-menu-item>
        <el-menu-item index="3-3">hw4</el-menu-item>
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
    <div class="content" v-if="subIndex === '3,3-1'">hw2</div>
    <div class="content" v-if="subIndex === '3,3-2'">hw3</div>
    <div class="content" v-if="subIndex === '3,3-3'">hw4</div>
  </div>
</template>

<script>
import About from "@/components/aboutMe.vue";
import Skill from "@/components/skill.vue";

export default {
  components: {
    About,
    Skill,
  },
  data() {
    return {
      activeIndex: "1",
      subIndex: "0",
      mode: "horizontal",
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
.nav {
  object-fit: cover;
}

.nav-bar-h {
  display: block;
}

.nav-bar-v {
  display: none;
}

.content{
  margin-left: 10px;
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