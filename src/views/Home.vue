<template>
    <scroller class="app">
        <div class="icon-container">
            <icon-drawer class="icon-drawer" :class="{'icon-drawer--first': index === 0}" v-for="(drawer, index) in adminDrawers" :key="drawer.title" :title="drawer.title" :data="drawer.data" :limit="drawer.limit">
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
// import axios from 'axios'; 在 weex 中使用 stream 代替 axios
import IconDrawer from '../components/IconDrawer.vue';
import SliderNews from '../components/SliderNews.vue';
// import DrawerData from '../data/drawerData';
import AdminData from '../data/adminData';
const stream = weex.requireModule('stream');
const storage = weex.requireModule('storage');

export default {
    data() {
        return {
            drawers: [], // 从服务器请求数据
            adminDrawers: AdminData,
            adminNews: [
                '床前明月光，疑是地上霜~~~',
                '举头望明月，低头~思故乡~~~',
                '哈哈哈哈，这是黑化后的亚瑟是黑化后的亚瑟哈哈哈哈哈哈~~~',
            ],
        }
    },
    components: {
        IconDrawer,
        SliderNews,
    },
    created() {
        storage.getItem('drawers', event => {
            let data = null;
            try {
                data = JSON.parse(event.data)
                if (data.length > 0) {
                    this.drawers = data;
                    return ;
                }
            } catch (e) {
                console.log('no data, let\'s get some from serve.');
            }

            const url = 'https://zphhhhh.github.io/weex-demo/src/data/drawerData.json';
            const success = res => {
                let data = res.data;
                this.drawers = data;
                storage.setItem('drawers', JSON.stringify(data));
            };

            stream.fetch({
                url,
                method: 'GET',
                type: 'json',
            }, success);
        });
        
        // axios.get(url).then(res => {
        //     this.res = { zph: 'hello' };;
        //     this.drawers = res.data;
        // });
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
