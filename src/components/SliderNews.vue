<template>
    <div class="container">
        <div>
            <text class="title">{{ title || '公告' }}</text>
        </div>
        <slider class="content" interval="3000" auto-play="true">
            <a class="content-item" v-for="item in data" :key="item">
                <text class="content-text">{{ item }}</text>
            </a>
        </slider>
        <div>
            <text class="aside">更多</text>
        </div>
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
    justify-content: space-between;
    align-items: stretch;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 82px;
}

.title {
    color: #0b98d8;
    border-width: 2px;
    border-color: #0b98d8;
    border-radius: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 22px;
}

.content {
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    margin-left: 20px;
    margin-right: 20px;
    height: 42px;
}

.content-item {
    align-self: flex-start;
}

.content-text {
    width: 522px;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 28px;
    line-height: 42px;
    lines: 1;
    /* white-space: nowrap;
    overflow: hidden;  */
    text-overflow: ellipsis;
}

.aside {
    color: #666;
    font-size: 28px;
    line-height: 42px;
}
</style>
