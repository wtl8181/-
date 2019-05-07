<template>
  <div class="wrap">
    <p class="grey title">当前位置：</p>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item class="item"  v-for="item in title":key="item">{{item}}</el-breadcrumb-item>
      <el-breadcrumb-item class="grey item" v-for="item in titleGrey":key="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
      name: "breadcrumb",
      props:{
        title:Array,
        titleGrey:Array
      }
    }
</script>

<style scoped lang="less">
  .wrap{
    font-size: 14px;
    font-weight: bold;
    vertical-align: center;
    p{
      text-indent: 1em;
    }
    .item{
      position: relative;
      top: 4px;
    }
    .title{
      float: left;

    }
  }
</style>
