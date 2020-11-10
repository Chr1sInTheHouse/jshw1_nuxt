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
        <li>Operating System</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Network Basic</span>
      </div>
      <ul>
        <li>Introdiction to Computer Network</li>
        <li>Pronsiple of Network Communication</li>
        <li>Network Programing</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Machine Learning</span>
      </div>
      <ul>
        <li>Machine Learning</li>
        <li>Reinforce Learning</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Programing Language</span>
      </div>
      <ul>
        <li>c/c++</li>
        <li>Python</li>
        <li>Matlab</li>
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
  min-height: 650px;
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
  margin: 15px;
}

@media only screen and (max-width: 480px) {
  .wrapper {
    display: inline;
  }
}
</style>