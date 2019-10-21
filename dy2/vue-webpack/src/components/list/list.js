import Vue from 'vue/dist/vue';
import template from './list.html';
import axios from 'axios';


const list = new Vue({
    el: "#list",
    data: {
        news: [],
        page:1
    },
    template,
    methods: {
        getpage() {
            let _self = this;
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page:this.page++, // Number 页数
                    tab: 'ask', // String 主题分类。 目前有 ask share job good
                    limit: 10, // Number 每一页的主题数量
                    mdrender: false // String 当为 false 时， 不渲染。 默认为 true， 渲染出现的所有 markdown 格式文本。
                }

            }).then((data) => {
                _self.news = [..._self.news,...data.data.data];
                console.log(data);
                // 注意this的指向问题，如果是箭头函数，那这里就直接指向外部
                // 相当concat的方法，合并数组
            })

        }
    }
})

list.getpage();
// console.log(list);
export default list;