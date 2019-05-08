<template>
   <button>
     {{title}}
     <slot></slot>
   </button>
</template>

<script>
    export default {
        name: "mybutton",
        props:['title']
    }
</script>

<style scoped lang="less">
  button{
    padding: 8px 16px;
    font-size: 14px;
    color: white;
    background-color: #24cdd0;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
</style>
