<template>
    <div class="outer-container" :style="{
        width: styleWidth,
        height: styleHeight
    }">
        <div @click="click" @mouseover="mouseOver" @mouseleave="mouseLeave" @touchstart="touchStart" class="preview-card-container" :style="{ 
                                        cursor: !oneSided ? 'pointer' : null
                                    }">
            <transition :name="transition">
                <div class="animated preview-card-front" :style="{
                                        width: styleWidth,
                                        height: styleHeight
                                        }" v-if="isFrontVisible" :transition="transition">
                    <slot name="front" style="{
                                            width: styleWidth,
                                            heigh: styleHeight}">
                    </slot>
                </div>
            </transition>
            <transition :name="transition">
                <div class="animated preview-card-back" :style="{
                                        width: styleWidth,
                                        height: styleHeight,
                                        position: 'relative'
                                        }" v-if="!isFrontVisible" :transition="transition">
                    <content-summary :width="styleWidth" :height="styleHeight">
                        <div slot="content">
                            <slot name="back"></slot>
                        </div>
                    </content-summary>
                </div>
            </transition>
        </div>
    </div>
</template>
<style>
.deleted {
    display: none;
}

.outer-container {
    background-color: red;
}

.preview-card-container {
    margin-bottom: 60px;
    /*display: inline-block;*/
    background: transparent;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
}

.preview-card-back {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

.preview-card-front {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
<style src="./animate.css"></style>
<script>
import modal from './modal.vue'
import contentSummary from './content-summary.vue'

// Used if the user puts in a width or height without specifying pixels.
function addPx(number) {
    return number + 'px'
}

export default {
    name: 'preview-card',
    data: function () {
        return {
            isFrontVisible: !this.oneSided
        }
    },
    props: {
        'one-sided': {
            default: false
        },
        width: null,
        height: null,
        transition: {
            default: 'flip'
        },
        'flip-on-hover': false
    },
    methods: {
        flip: function () {
            if (!this.oneSided) {
                this.isFrontVisible = !this.isFrontVisible
            }
        },
        click: function () {
            console.log(this.isFrontVisible + ' = frontVisible ' + this.flipOnHover + ' = fliponhover')
            this.flipOnHover = false // Disable hover flipping if the user clicks
            this.flip()
        },
        mouseOver: function () {
            if (this.flipOnHover && this.isFrontVisible) {
                this.flip()
            }
        },
        mouseLeave: function () {
            if (this.flipOnHover && !this.isFrontVisible) {
                this.flip()
            }
        },
        touchStart: function () {
            this.flipOnHover = false
        }
    },
    computed: {
        styleWidth: function () { // By default, assume pixel width.
            if (!isNaN(this.width)) { return addPx(this.width) }
            return this.width
        },
        styleHeight: function () { // By default assume pixel height
            if (!isNaN(this.height)) { return addPx(this.height) }
            return this.height
        }
    },
    components: {
        modal,
        contentSummary
    }
}

</script>
