<template>
  <div>
    <div class="big">
      <el-row>
        <el-col :span="8">
          <div>
            <img src="/me.jpg" width="300" height="400" />
          </div>
        </el-col>
        <el-col :span="16">
          <h3>基本資料</h3>
          <br />
          <ul>
            <li>姓名：王耀德</li>
            <li>英文姓名：Chris Wang</li>
            <li>學號：0716055</li>
            <li>生日：1999.12.08</li>
          </ul>
          <br />
          <h3>聯絡資訊</h3>
          <br />
          <ul>
            <li>email: bpploabc@gmail.com</li>
            <li>Address: 新北市蘆洲區光榮路1號6樓</li>
            <li>Number: 0983601878</li>
          </ul>
          <br />
        </el-col>
      </el-row>
    </div>

    <div class="small">
      <el-row>
        <el-col>
          <div>
            <img src="/me.jpg" width="300" height="400" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h3>基本資料</h3>
          <br />
          <ul>
            <li>姓名：王耀德</li>
            <li>英文姓名：Chris Wang</li>
            <li>學號：0716055</li>
            <li>生日：1999.12.08</li>
          </ul>
          <br />
          <h3>聯絡資訊</h3>
          <br />
          <ul>
            <li>email: bpploabc@gmail.com</li>
            <li>Address: 新北市蘆洲區光榮路1號6樓</li>
            <li>Number: 0983601878</li>
          </ul>
          <br />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.big {
  display: block;
}

.small {
  display: none;
}
@media only screen and (max-width: 480px) {
  .big {
    display: none;
  }

  .small {
    display: block;
  }
}
</style>