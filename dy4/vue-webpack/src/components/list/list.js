import Vue from 'vue/dist/vue';
import template from './list.html';
import axios from 'axios';
import observer from '../../tools/observer';


const list = Vue.component("ming-list", {
    data() {
        return {
            news: [],
            page: 1,
            searchText: ''
        }

    },
    template,
    methods: {
        getpage() {
            let _self = this;
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++, // Number 页数
                    tab: 'ask', // String 主题分类。 目前有 ask share job good
                    limit: 10, // Number 每一页的主题数量
                    mdrender: false // String 当为 false 时， 不渲染。 默认为 true， 渲染出现的所有 markdown 格式文本。
                }

            }).then((data) => {
                _self.news = [..._self.news, ...data.data.data];
                console.log(data);
                // 注意this的指向问题，如果是箭头函数，那这里就直接指向外部
                // 相当concat的方法，合并数组
            })

        }
    },
    computed: {
        newsConputed() {
            // 有搜索值的时候就执行过滤逻辑，否则原封不动返回原数组
            console.log(this.searchText);
            if (this.searchText) {
                return this.news.filter((item) => {
                    if (item.title.indexOf(this.searchText) != -1) {
                        return item;
                    }
                })
            } else {
                return this.news

            }
        }
    },
    mounted() {
        observer.on('setSearchText', (searchText) => {
            this.searchText = searchText;

        })
        console.log(this);
        this.getpage()
    }
})
console.log(observer);


// console.log(list);
export default list;