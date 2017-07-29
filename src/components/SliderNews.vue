<template>
    <div class="container">
        <text class="title">{{ title || '公告' }}</text>
        <slider class="content" interval="3000" auto-play="true">
            <a class="content-item" v-for="item in data" :key="item">
                <text class="content-text">{{ item }}</text>
            </a>
        </slider>
        <text class="aside">更多</text>
    </div>
</template>

<script>
export default {
    props: ['title', 'data'],
}
</script>

<style scoped>
.container {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 82px;
}

.title {
    color: #0b98d8;
    border: 2px solid #0b98d8;
    border-radius: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 22px;
}

.content {
    flex: 1;
    height: 40px;
    margin-left: 20px;
    text-align: left;
}

.content-item {
    align-self: flex-start;
}

.content-text {
    text-align: left;
    text-overflow: ellipsis;
    font-size: 28px;
    height: 28px;
    line-height: 28px;
    lines: 1;
    /* white-space: nowrap;
    overflow: hidden; */
    text-overflow: ellipsis;
}

.aside {
    color: #666;
    font-size: 28px;
    height: 28px;
    line-height: 28px;
}
</style>
