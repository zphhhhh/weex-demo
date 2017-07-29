<template>
    <div class="container">
        <image class="icon" :src="url" @click="oItemClick"></image>
        <text class="title">{{ title }}</text>
    </div>
</template>

<script>
export default {
    props: ['url', 'title', 'onClick'],
    methods: {
        oItemClick() {
            this.$emit('item-click');
        }
    }
}
</script>


<style scoped>
.container {
    justify-content: space-around;
    align-items: center;
}

.icon {
    width: 100px;
    height: 100px;
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
