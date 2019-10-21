import Vue from 'vue/dist/vue';
import observer from '../../tools/observer';


export default Vue.component("ming-main", {
    data() {
        return {
            tabbrr: "ming-wachat"
        }
    },
    template: `
        <div>
        <keep-alive>
            <component :is="tabbrr">
            </component>
            </keep-alive>
        </div>
        `,

    mounted() {
        observer.on('settabber', (index) => {
            switch (index) {
                case 0:
                    this.tabbrr = "ming-wachat";
                    break;
                case 1:
                    this.tabbrr = "ming-addbook";
                    break;
                case 2:
                    this.tabbrr = "ming-finds";
                    break;
                case 3:
                    this.tabbrr = "ming-mine";
            }
        })
    }

})