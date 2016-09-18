declare var require: any;
const Vue = require ('vue');
const style = require ("src/preview-card/preview-card.css");
import {default as Modal} from '../modal/modal';
import {default as Summary} from '../summary/summary';

const PreviewCard = {
    template: require('src/preview-card/preview-card.html'),
    data: function () {
        return {
            isFrontVisible: true,
            buttonLabel: this.backTitle
        };
    },
    props: ['header', 'footer', 'width', 'height', 'transition', 
    'hide-footer', 'hide-header', 'front-title', 'back-title',
    'flip-on-hover'],
    methods: {
        flip: function () {
            this.isFrontVisible = !this.isFrontVisible;

            //Make the button show the title of the side not being displayed.
            if (!this.isFrontVisible) {
                this.buttonLabel = this.frontTitle;
            }
            else { 
                this.buttonLabel = this.backTitle;
            }
        },
        click: function () {
            if (!this.flipOnHover) {
                this.flip();
            }
        },
        mouseOver: function () {
            if (this.flipOnHover && this.isFrontVisible) {
                 this.flip(); }
        },
        mouseLeave: function () {
            if (this.flipOnHover && !this.isFrontVisible) { 
                this.flip(); }
        }
    },
    transitions: {
        zoom: {
            enterClass: "zoomIn",
            leaveClass: "deleted"
        },
        flip: {
            enterClass: "flipInX",
            leaveClass: "deleted"
        },
        fade: {
            enterClass: "fadeInDown",
            leaveClas: "deleted"
        }
    },
    components: {
        modal: Modal,
        summary: Summary
    }
};

export default PreviewCard