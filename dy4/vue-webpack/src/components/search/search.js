import Vue from 'vue/dist/vue';
import template from './search.html';
import txt from './search.txt';
import observer from '../../tools/observer';

const search = Vue.component('ming-search', {

    data() {
        return {
            // 表示搜索框的两个状态，一个是聚焦后的，一个是非聚焦
            searchText: '',
            isFocus: false,
            title: txt,
            cancel: '取消'
        }


    },
    template,
    //注册事件
    methods: {
        taggle() {
            this.isFocus = !this.isFocus,
                console.log('点击了取消');
        },
        clear() {
            this.searchText = '';
        }
    },
    watch: {
        //监听搜索框
        searchText() {
            //使用观察者模式
            observer.emit('setSearchText', this.searchText)
        }
    }
})

export default search;