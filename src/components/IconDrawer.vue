<template>
    <div class="container">
        <div class="header" v-if="title">
            <text class="header-title">{{ title }}</text>
            <a class="header-aside" v-if="data.length > limit" @click="onMoreClick">
                <text class="aside-text">{{ status }}</text>
            </a>
        </div>
        <div class="body" ref="body">
            <icon-item class="icon-item" v-for="item in data.slice(0, curLimit)" :key="item.title" :url="item.url" :title="item.title" @item-click="onItemClick(item.click, item.url)" />
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import IconItem from './IconItem.vue';
import CONST from '../constants/const';

const animation = weex.requireModule('animation');

export default {
    props: ['title', 'data', 'limit'],
    components: {
        IconItem,
    },
    data() {
        return {
            status: CONST.SHOW_TEXT,
        }
    },
    computed: {
        curLimit() {
            return this.status === CONST.SHOW_TEXT ? this.limit : this.data.length;
        }
    },
    methods: {
        onItemClick(fn, url) {
            if (typeof fn === 'function') {
                fn(url);
            }
        },
        onMoreClick() {
            console.log('onMoreClick');
            const body = this.$refs.body;
            
            switch(this.status) {
                case CONST.SHOW_TEXT: 
                    this.status = CONST.HIDE_TEXT;
                    this.animator(body, {height: `${this.getHeight(this.data.length)}px`});
                    break;
                case CONST.HIDE_TEXT:
                    this.animator(body, {height: `${this.getHeight(this.limit)}px`}, () => {
                        this.status = CONST.SHOW_TEXT;
                    });
                    break;
            }
        },
        getHeight(length) {
            const per = 188;
            console.log(Math.ceil(length / 4) * per)
            return Math.ceil(length / 4) * per;
        },
        animator(el, styles, callback) {
            animation.transition(el, {
                styles,
                duration: 600,
                timingFunction: 'ease',
                delay: 0
            }, callback);
        }
    }
}
</script>

<style scoped>
.container {
    flex-direction: column;
    align-items: stretch;
    align-content: flex-start;
}

.header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

.aside-text {
    color: #666;
    font-size: 28px;
}

.body {
    width: 720px;
    height: 188px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
}

.icon-item {
    margin: 20px;
}

.footer {
    width: 720px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>
