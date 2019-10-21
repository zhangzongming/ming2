import Vue from 'vue/dist/vue';
import template from './search.html';
import txt from './search.txt';

const search = new Vue({
    el:"#search",
    data:{
        // 表示搜索框的两个状态，一个是聚焦后的，一个是非聚焦
        searchtxt:'',
        isFocus:false,
        title:txt,
        cancel:'取消',
    },
    template,
    //注册事件
    methods:{
        taggle(){
            this.isFocus = !this.isFocus,
            console.log('点击了取消');
        },
        clear(){
            this.searchtxt = '';
        }
    }
})

export default search;