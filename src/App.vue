<template>
<!--template这个html5当中的模板标签，这个标签的内容，默认是不显示的-->
  <!--应用只有一个页面，index.html App.vue这里的内容，就是显示在index.html当中的
  app.vue中写啥，index中就显示啥
  相当于下面的语句：把template标签当中的内容，放到app当中
  document.querySelect("#app).innerHtml=document.querySelect("template).innerHTML

  template模板标签下vue的脚手架，只能有一个根标签，我们内容只能写在跟标签下


  .vue后缀文件，这个文件包含三个信息
  template：用来编写页面的
  script：编写js
  style：编写这个页面的样式
<router-view/>:表示的是一个不确定显示的内容，这个要显示的内容是vue的组件，根据不同的路径来显示
  -->
  <div class="app-box">
    <!--这里视图可变的,写一个登入的页面和管理的主页面views里店里login包，和mian包-->
    <router-view/>
  </div>

</template>
<style lang="less">
/*重置边距*/
* {
  margin: 0;
  padding: 0;
}
html,body,.app-box{
  wdith:100%;
  height: 100%;

}
</style>
