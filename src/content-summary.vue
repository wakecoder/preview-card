<template>
    <div class="content-summary" v-bind:style="contentSummaryStyle">
        <slot name="content"></slot>
        <!--A gradient transparency mask to fade out text if we're overflowed.-->
        <div v-if="isOverflowed" class="summary-mask" v-bind:style="summaryMaskStyle">
            <a @click.stop="isModalVisible=true" class="summary-btn"> More</a>
        </div>
        <modal v-on:close="isModalVisible=false" :show="isModalVisible">
            <div slot="body">
                <slot name="content"></slot>
            </div>
        </modal>
    </div>
</template>
<style>
.summary-mask {
    background-color: rgba(238, 238, 238, 0.89);
    height: 40px;
}

.summary-btn {
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 60px;
    margin-top: 10px;
    font-size: 1.5em;
    cursor: pointer;
    -webkit-border-radius: 6;
    -moz-border-radius: 6;
    border-radius: 6px;
    color: #ed952b;
    text-decoration: none;
    border-width: 1px;
    padding-bottom: 4px;
}
</style>
<script>
import modal from './modal.vue'
export default {
    name: 'content-summary',
    data: function () {
        return {
            isOverflowed: false,
            isModalVisible: false,
            contentSummaryStyle:
            {
                position: 'relative',
                width: this.width,
                height: this.height,
                overflow: 'hidden'
            },
            summaryMaskStyle: {
                position: 'absolute',
                bottom: '0px',
                width: this.width
            }
        }
    },
    props: ['height', 'width'],
    mounted() {
        this.isOverflowed = this.$el.scrollHeight > this.$el.clientHeight
    },
    components: {
        modal: modal
    }
}

</script>
