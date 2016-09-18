declare var require: any;
import {default as PreviewCard} from "./preview-card/preview-card";
const Vue = require( 'vue');
const vue = new Vue({
    el: "#exampleApp",
    data: {},
    components: {
        "preview-card": PreviewCard
    }
});