<template>
  <div class="footer">
    <el-avatar class="icon" icon="el-icon-user-solid"></el-avatar>
    <el-button
      class="button"
      type="info"
      icon="el-icon-message"
      round
      @click="mail()"
      v-if="display === 1"
    >
      Mail
    </el-button>
    <el-button
      class="button-h"
      :size="'small'"
      type="info"
      icon="el-icon-message"
      round
      @click="mail()"
      v-if="display === 2"
    >
      
    </el-button>
    <el-button
      class="button"
      type="primary"
      icon="el-icon-user-solid"
      round
      @click="facebook()"
      v-if="display === 1"
    >
      Facebook
    </el-button>
    <el-button
      class="button-h"
      :size="'small'"
      type="primary"
      icon="el-icon-user-solid"
      round
      @click="facebook()"
      v-if="display === 2"
    >
      
    </el-button>
    <el-button
      class="button"
      type="danger"
      @click="open"
      style="float: right"
      icon="el-icon-thumb"
      round
      v-if="display === 1"
    >
      Login
    </el-button>
    <el-button
      class="button-h"
      :size="'small'"
      type="danger"
      style="float: right"
      @click="open"
      icon="el-icon-thumb"
      round
      v-if="display === 2"
    >
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: 3,
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth >= 480) {
        this.display = 1;
        console.log(this.display);
      } else {
        this.display = 2;
        console.log(this.display);
      }
    },
    open() {
      this.$prompt(
        "Please input Password(加入後端後，可以透過登入來直接修改內容)",
        "還沒做的功能",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
        }
      )
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "success: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Input canceled",
          });
        });
    },
    facebook() {
      window.open("https://www.facebook.com/eric.justin.92");
    },
    mail() {
      window.open("mailto:bpploabc@gmail.com");
    },
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style>
.footer {
  height: 100%;
  background-color: rgb(159, 202, 147);
  position: relative;
}
.icon {
  margin: 20px;
  display: inline;
}

.button {
  margin: 20px;
  display: inline;
}

.button-h {
  margin: 20px;
  display: inline;
}
.mail-address {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>