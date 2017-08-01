<template>
    <div class="container">
        <image class="icon" :src="url" @click="oItemClick"></image>
        <text class="title">{{ title }}</text>
    </div>
</template>

<script>
import router from '../routers/router';

export default {
    props: ['url', 'title', 'router'],
    methods: {
        oItemClick() {
            debugger
            if (this.router) {
                router.push(this.router)
            }
        }
    }
}
</script>


<style scoped>
.container {
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-around;
    align-items: center;
}

.icon {
    width: 88px;
    height: 88px;
}

.title {
    display: block;
    margin-top: 10px;
    width: 140px;
    height: 38px;
    text-align: center;
    font-size: 28px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
