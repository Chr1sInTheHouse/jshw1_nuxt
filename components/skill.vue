<template>
  <div class="wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Front end</span>
      </div>
      <ul>
        <li>html</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Computer Science Basic</span>
      </div>
      <ul>
        <li>Data Structure</li>
        <li>Algorithm</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Front end</span>
      </div>
      <ul>
        <li>html</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Front end</span>
      </div>
      <ul>
        <li>html</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  background: transparent;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 250px;
  height: 300px;
  margin: 10px;
}

@media only screen and (max-width: 480px) {
  .wrapper {
    display: inline;
  }
}
</style>