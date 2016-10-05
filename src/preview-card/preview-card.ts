declare var require: any;
const Vue = require('vue');
const animations = require("src/preview-card/animate.css");
const style = require("src/preview-card/preview-card.css");
import {default as Modal} from '../modal/modal';
import {default as Summary} from '../summary/summary';

//Used if the user puts in a width or height without specifying pixels.
function addPx(number) {
    return number + 'px';
}

const PreviewCard = {
    template: require('src/preview-card/preview-card.html'),
    data: function () {
        return {
            isFrontVisible: true,
            buttonLabel: this.backTitle
        };
    },
    props: {
        width: null,
        height: null,
        transition: {
            default: 'flip'
        },
        'flip-on-hover': false
    },
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
                this.flip();
            }
        },
        mouseLeave: function () {
            if (this.flipOnHover && !this.isFrontVisible) {
                this.flip();
            }
        }
    },
    computed: {
        styleWidth: function () { // By default, assume pixel width.
            if (!isNaN(this.width)) { return addPx(this.width) };
            return this.width;
        },
        styleHeight: function () { // By default assume pixel height
            if (!isNaN(this.height)) { return addPx(this.height) };
            return this.height
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
            leaveClass: "deleted"
        }
    },
    components: {
        modal: Modal,
        summary: Summary
    }
};

export default PreviewCard