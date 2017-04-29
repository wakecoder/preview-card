<template>
    <div class="outer-container" :style="styleSize">
        <div @click="click" @mouseover="mouseOver" @mouseleave="mouseLeave" @touchstart="touchStart" class="preview-card-container" :style="previewCardContainerStyle">
            <div class="animated preview-card-front" :style="styleSize" v-if="isFrontVisible" :transition="transition">
                <slot name="front">
                </slot>
            </div>
            <div class="animated preview-card-back" :style="styleSize" v-if="!isFrontVisible" :transition="transition">
                <content-summary :width="styleSize.width" :height="styleSize.height">
                    <template slot="content" scope="childProps">
                        <slot name="back"></slot>
                    </template>
                </content-summary>
            </div>
        </div>
    </div>
</template>
<style>
.deleted {
    display: none;
}

.preview-card-container {
    margin-bottom: 60px;
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
            isFrontVisible: !this.oneSided,
            previewCardContainerStyle: {
                cursor: !this.oneSided ? 'pointer' : null
            },
            // Once the user clicks, we inhibit flip-on-hover to
            // prevent corner-case bugs with some browsers that don't support touch events
            stopFlipOnHover: false
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
            this.stopFlipOnHover = true // Disable hover flipping if the user clicks
            this.flip()
        },
        mouseOver: function () {
            if (this.flipOnHover && this.isFrontVisible && !this.stopFlipOnHover) {
                this.flip()
            }
        },
        mouseLeave: function () {
            if (this.flipOnHover && !this.isFrontVisible && !this.stopFlipOnHover) {
                this.flip()
            }
        },
        touchStart: function () {
            this.stopFlipOnHover = true
        }
    },
    computed: {
        styleSize: function () {
            return {
                width: !isNaN(this.width) ? addPx(this.width) : this.width,
                height: !isNaN(this.height) ? addPx(this.height) : this.height
            }
        }
    },
    components: {
        modal,
        contentSummary
    }
}

</script>
