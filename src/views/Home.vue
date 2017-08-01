<template>
    <scroller class="app">
        <div class="icon-container">
            <icon-drawer class="icon-drawer" :class="{'icon-drawer--first': index === 0}" v-for="(drawer, index) in adminDrawers" :key="drawer.title"   :title="drawer.title" :data="drawer.data" :limit="drawer.limit">
                <div slot="footer" class="drawer-footer">
                    <slider-news title="公告" :data="adminNews"></slider-news>
                </div>
            </icon-drawer>
        </div>
        <div class="icon-container">
            <icon-drawer class="icon-drawer" :class="{'icon-drawer--first': index === 0}" v-for="(drawer, index) in drawers" :key="drawer.title" :title="drawer.title" :data="drawer.data" :limit="drawer.limit" />
        </div>
        <div class="icon-container icon-container--last">
            <icon-drawer class="icon-drawer" :class="{'icon-drawer--first': index === 0}" v-for="(drawer, index) in drawers.slice(0, 1)" :key="drawer.title" :title="drawer.title" :data="drawer.data" :limit="drawer.limit" />
        </div>
    </scroller>
</template>

<script>
import IconDrawer from '../components/IconDrawer.vue';
import SliderNews from '../components/SliderNews.vue';
import DrawerData from '../data/drawerData';
import AdminData from '../data/adminData';

export default {
    data() {
        return {
            drawers: DrawerData,
            adminDrawers: AdminData,
            adminNews: [
                '床前明月光，疑是地上霜~~~',
                '举头望明月，低头~思故乡~~~',
                '哈哈哈哈，这是黑化后的亚瑟是黑化后的亚瑟哈哈哈哈哈哈~~~',
            ]
        }
    },
    components: {
        IconDrawer,
        SliderNews,
    }
}
</script>

<style>
.app {
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    background-color: #f7f7f7;
}

.icon-container {
    background: white;
    align-items: stretch;
    margin-bottom: 20px;
    border-top-width: 1px;
    border-top-color: #ccc;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
}

.icon-container--last {
    margin-bottom: 0;
}

.icon-drawer {
    flex: 1;
    border-top-width: 1px;
    border-top-color: #ccc;
}

.icon-drawer--first {
    border-top-width: 0;
}

.drawer-footer {
    border-top-width: 1px;
    border-top-color: #ccc;
}
</style>
