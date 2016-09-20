declare var require: any;
const Vue = require('vue');
const style = require ("src/modal/modal.css");
const Modal = {
    template: require('src/modal/modal.html'),
    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
    }
};

export default Modal;