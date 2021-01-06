<template>
<div class="supplier-box">
<!--操作部分,主要是两个按钮，新建和批量删除
size：表示大小：	medium / small / mini
type：表示按钮颜色：primary / success / warning / danger / info / text
plain：镂空颜色
round：button是否是圆角显示
-->
  <div class="execute-box">
    <el-button-group>
      <el-button size="mini" type="danger">新建</el-button>
      <el-button size="mini" type="danger">删除</el-button>
    </el-button-group>
  </div>

  <!--查询部分-->
  <div class="search-box">
   <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>-->
  </div>
  <!--数据展示-->
  <div class="table-box">
    <!--stripe:隔行变色，border：设置边框-->
    <!--tooltip-effect="light"给下面文字太多的那行设置显示颜色-->
    <el-table
        stripe
        border
        tooltip-effect="light"
        :data="tableData"
        style="width: 100%">
      <!--多选框-->
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <!--prop:读取js中某个对象，这里读取的是js中的日期（date）
      label表示表单中第一行的头（这里表示日期）table中的width不加px表示这个列占多宽-->
      <el-table-column
          prop="date"
          label="日期"
          align="center"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="180">
      </el-table-column>
      <!--show-overflow-tooltip>:如果改行文字太多
      又不想让他换行显示则可以使用它，后面的文字会显示...-->
      <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="地址">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作">
        <!--如果点击编辑或者删除，想要取得这个行的某些值，就要包裹在template里面-->
        <template>
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!--分页  page-size:表示每一页的大小，默认是10，current-page:表示当前页默认是1-->
  <div class="page-box">

    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>

  </div>
</div>
</template>

<script src="./index.js">

</script>

<style scoped lang="less">
@import "./index";
</style>