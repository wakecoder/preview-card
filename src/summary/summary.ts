declare var require: any;
const Vue = require ('vue');
import {default as Modal} from '../modal/modal';
const style = require ('src/summary/summary.css');

const Summary = {
    template: require ('src/summary/summary.html'),
    data: function () {
        return {
            isOverflowed: false,
            isModalVisible: false
        }
    },
    props: ['height','width'],
    ready: function () {
        this.isOverflowed = this.$el.scrollHeight > this.$el.clientHeight;
    },
    components: {
        modal: Modal
    }
};

export default Summary;