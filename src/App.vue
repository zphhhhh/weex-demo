<template>
    <scroller class="container">
        <div class="icon-container">
            <icon-drawer :title="adminDrawer.title" :data="adminDrawer.data" :limit="adminDrawer.limit">
                 <div slot="footer" class="drawer-footer">
                    <slider-news title="公告" :data="adminNews"></slider-news>
                </div> 
            </icon-drawer>
        </div>
        <div class="icon-container">
            <icon-drawer :style="{'border-top': index !== 0 ? '1px solid #ccc' : '0'}" v-for="(drawer, index) in drawers" :key="drawer.title" :title="drawer.title" :data="drawer.data" :limit="drawer.limit" />
        </div>
        <div class="icon-container">
            <icon-drawer v-for="(drawer, index) in drawers.slice(0, 1)" :key="drawer.title" :title="drawer.title" :data="drawer.data" :limit="drawer.limit" />
        </div>
    </scroller>
</template>

<script>
import IconDrawer from './components/IconDrawer.vue';
import SliderNews from './components/SliderNews.vue';
import DrawerData from './data/drawerData';
import AdminData from './data/adminData';

export default {
    data() {
        return {
            drawers: DrawerData,
            adminDrawer: AdminData[0],
            adminNews: [
                '窗前明月光，疑是地上霜~~~',
                '举头望明月，低头~思故乡~~~',
                '哈哈哈哈，这是黑化后的亚瑟哈哈哈哈哈哈哈哈~~~',
            ]
        }
    },
    components: {
        IconDrawer,
        SliderNews,
    }
}
</script>

<style scoped>
.container {
    flex-direction: column;
    align-items: stretch;
    background: #f7f7f7;
}

.icon-container {
    background: white;
    align-items: center;
    margin-bottom: 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.icon-drawer {
    border-bottom: 1px solid #ccc;
}

.drawer-footer {
    border-top: 1px solid #ccc;
}
</style>
