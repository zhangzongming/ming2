import Vue from 'vue/dist/vue';
import template from './footer.html';
import icon from '../images/icon_tabbar.png';

    const footer = new Vue({
        el:"#footer",
        data:{
            icon,
            tabbr:[{
                title:'微信',
                url:'/WeChat',
                badge:8,
                dot:false
            },{
                title:'通讯录',
                url:'/address',
                badge:0,
                dot:false
            },{
                title:'发现',
                url:'/discover',
                badge:0,
                dot:true
            },{
                title:'我',
                url:'/me',
                badge:0,
                dot:false
            }],

           offset:0  
            
        },
        template,
        methods:{
            highLight(index){
                this.offset = index;
                console.log(index);
            }
        }
    })

    export default footer;