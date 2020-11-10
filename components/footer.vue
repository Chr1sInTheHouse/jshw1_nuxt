<template>
  <div class="footer">
    <el-row>
      <el-col :span="2">
        <el-avatar class="icon"  icon="el-icon-user-solid"></el-avatar>
      </el-col>
      <el-col :span="3">
        <el-button class="button" type="info" icon="el-icon-message" round>
          <a class="mail-address" href="mailto:bpploabc@gmail.com">Mail</a>
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button class="button-h" type="info" icon="el-icon-message" round>
          <a class="mail-address" href="mailto:bpploabc@gmail.com">M</a>
        </el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="button" type="primary" icon="el-icon-user-solid" round>
          <a class="mail-address" href="https://www.facebook.com/eric.justin.92">Facebook</a>
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button class="button-h" type="primary" icon="el-icon-user-solid" round>
          <a class="mail-address" href="https://www.facebook.com/eric.justin.92">F</a>
        </el-button>
      </el-col>
      <el-col :span="15">
        <el-button class="button" type="danger" @click="open" style="float: right;" icon="el-icon-thumb" round>
          Login
        </el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="button-h" type="danger" @click="open" icon="el-icon-thumb" round>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$prompt('Please input Password(加入後端後，可以透過登入來直接修改內容)', '還沒做的功能', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'success: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
    }
  }
</script>

<style>
.footer {
  height: 100%;
  background-color: rgb(159, 202, 147);
  position: relative;
}
.icon {
  margin: 20px;
}

.button {
  margin: 20px;
  text-align: center;
  display: block;
}

.button-h {
  margin: 20px;
  text-align: center;
  display: none;
}
.mail-address {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
@media only screen and (max-width: 480px) {

.button {
  margin: 20px;
  text-align: center;
  display: none;
}

.button-h {
  margin: 20px;
  text-align: center;
  display: block;
}
}
</style>