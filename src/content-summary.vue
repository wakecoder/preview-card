<template>
    <div class="content-summary">
        <slot name="content"></slot>
        <!--A gradient transparency mask to fade out text if we're overflowed.-->
        <div v-if="isOverflowed" @click.stop="isModalVisible=true" class="summary-mask" :style="{ top: maskTop + 'px', height: maskHeight + 'px' }">
            <span class="summary-btn"> More</span>
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
    cursor: pointer;
    position: absolute;
    width: 100%;
}

.summary-btn {
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 60px;
    margin-top: 10px;
    font-size: 1.5em;
    -webkit-border-radius: 6;
    -moz-border-radius: 6;
    border-radius: 6px;
    color: #ed952b;
    text-decoration: none;
    border-width: 1px;
    padding-bottom: 4px;
}

.content-summary {
    bottom: 0px;
    overflow: hidden;
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
            maskHeight: 40
        }
    },
    props: ['overflowHeight'],
    mounted() {
        this.isOverflowed = this.$el.clientHeight > this.overflowHeight
    },
    computed: {
        maskTop() {
            return this.overflowHeight - this.maskHeight
        }
    },
    components: {
        modal: modal
    }
}

</script>
