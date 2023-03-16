<template>
  <div class="wrapper">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @select="handleMenuSelect"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#46a0fc"
        >
          <el-menu-item index="/home">
            <el-icon>
              <House />
            </el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-sub-menu index="service">
            <template #title>
              <el-icon>
                <Grid />
              </el-icon>
              <span>Server</span>
            </template>
            <el-menu-item index="/service/SMI-BLAST">SMI-BLAST</el-menu-item>
            <el-menu-item index="/service/SMI-HMMER">SMI-HMMER</el-menu-item>
            <el-menu-item index="/service/SMI-DELTABLAST">SMI-DELTABLAST</el-menu-item>
            <el-menu-item index="/service/SMI-PSIBLASTexB">SMI-PSIBLASTexB</el-menu-item>
            <el-menu-item index="/service/SMI-PredictCovid-19">PredictCovid-19</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/download">
            <el-icon>
              <Download />
            </el-icon>
            <span>Download</span>
          </el-menu-item>
          <el-menu-item index="/citation">
            <i class="el-icon-menu"></i>
            <span>Citation</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <strong style="color:#fff">SMI-BLAST</strong>
        </el-header>
        <el-main>
          <!-- 页面内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  methods: {
    handleMenuSelect(index) {
      // 处理菜单点击事件
      this.$router.push(index);
    }
  }
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #545c64;
}
.el-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3c8dbc;
}
.wrapper {
  height: 100vh;
}

.el-menu-vertical-demo {
  width: 100%;
}

.el-submenu__title:hover {
  color: #ffd04b !important;
}

.el-menu-item__active,
.el-submenu__active > .el-submenu__title {
  background-color: #409eff !important;
}
</style>
