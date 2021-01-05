<template>
  <!--具体的样式页面布局在app.vue里面写最好，这样就不用
  给每一个都布局了，因为，所有的页面都是在app里面布局的-->
<div class="main-box">
  <el-container>
    <el-aside width="200px"><div class="title-wrapper">
      <img src="../../assets/01.jpg" alt="" style="width: 40px;height: 40px;border-radius: 50%
;vertical-align: middle;margin:0 8px 0 10px">
      <span>管理系统</span>
    </div>
      <!--导航栏el-menu：大导航  default-active：默认高亮的内容（现在为索引4）
      一般情况下默认是el-menu-item中的index取值-->

      <el-scrollbar class="scrollbar">
      <el-menu
          default-active="4"
          class="el-menu-vertical-demo">
        <!--不能展开，里面没有东西了-->
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
        <!--二级导航：el-submenu（点击可以展开的）-->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商品相关</span>
          </template>

          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>
            <span slot="title">品牌管理</span>
          </el-menu-item>

          <el-menu-item index="2-2">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>

          <el-menu-item index="2-3">
            <i class="el-icon-menu"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>

          <el-menu-item index="2-4">
            <i class="el-icon-menu"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>

        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">运营商管理</span>
        </el-menu-item>
      </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>企业管理系统</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</div>
</template>
<script>
export default {
  name: "index",
  /*data() {
    return {
      isCollapse: false
    };
  },*/
}
</script>

<style scoped lang="less">
.main-box{
  height: 100%;
}
.scrollbar{
  height: calc(100% - 70px);
  width: 102%;
  overflow-x: hidden;
}
.el-scrollbar_thumb{
  display: none!important;
}
.el-header{
  background-color: #F56C6C;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #444;
  text-align: center;
}
.title-wrapper{
  line-height: 60px;
  background-color: #F56C6C;
}
.title-wrapper span{
  font-weight: 700;
  color: white;
  font-size: 18px;
  /*font-family: "华文宋体";*/
}
.el-main {
  background-color: #E9EEF3;
  color: #444;
  text-align: center;
}
.el-container {
  height: 100%;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>