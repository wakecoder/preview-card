declare var require: any;
import {previewCard} from "./preview-card/preview-card";
const Vue = require( 'vue');
const vue = new Vue({
    el: "#exampleApp",
    data: {},
    components: {
        "preview-card": previewCard
    }
});