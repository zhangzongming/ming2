import Vue from 'vue/dist/vue';
import '../../components/header/header';
import '../../components/search/search';
import '../../components/list/list';

export default Vue.component("ming-wachat", {
    template: `
    <div>
            <ming-header color="green">微信</ming-header>
            <ming-search></ming-search>
            <ming-list></ming-list>
    </div>

    `
})