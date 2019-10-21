import Vue from 'vue/dist/vue';
import 'weui';
import './styles/style.css';
import './components/footer/footer';
import './pages/wachat/wachat';
import './pages/addbook/addbook';
import './pages/main/main';
import './pages/finds/finds';
import './pages/mine/mine';

new Vue({
    el: "#app",
    template: `
        <div>
        <ming-main></ming-main>
        <ming-footer></ming-footer>
        </div>
        `
})