<template>
    <div class="container">
        <text>Hello, zphhhhh!</text>
        <text class="button" @click="onClick">点我回到主页 :)</text>
    </div>
</template>
<script>
import router from '../routers/router'
export default {
  methods: {
      onClick() {
        router.back();
      }
  }
}
</script>

<style scoped>
.container {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.button {
    margin-top: 20px;
    padding: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    line-height: 38px;
    background-color: #4dddc0;
    color: white;
}
</style>
