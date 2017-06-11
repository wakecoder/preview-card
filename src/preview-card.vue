<template>
        <div @click="click" @mouseover="mouseOver" @mouseleave="mouseLeave" @touchstart="touchStart" class="preview-card-container">
            <div class="animated preview-card-front" v-if="isFrontVisible">
                <slot name="front">
                </slot>
            </div>
            <div class="animated preview-card-back" v-if="!isFrontVisible">
                <content-summary :overflowHeight="overflowHeight">
                    <template slot="content" scope="childProps">
                        <slot name="back"></slot>
                    </template>
                </content-summary>
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
    overflow: hidden;
}

.preview-card-back {
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
}

.preview-card-front {
    overflow: hidden;
    /*position: absolute;*/
    top: 0;
    left: 0;
}
</style>
<style src="./animate.css"></style>
<script>
import modal from './modal.vue'
import contentSummary from './content-summary.vue'

export default {
    name: 'preview-card',
    data: function () {
        return {
            isFrontVisible: !this.oneSided,
            // Once the user clicks, we inhibit flip-on-hover to
            // prevent corner-case bugs with some browsers that don't support touch events
            stopFlipOnHover: false
        }
    },
    props: {
        'one-sided': {
            default: false
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
    components: {
        modal,
        contentSummary
    },
    computed: {
        overflowHeight() {
            return this.$el.clientHeight
        }
    }
}
</script>
