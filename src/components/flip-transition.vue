<template>
    <transition name="flip" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <slot></slot>
    </transition>
</template>
<style src="./animate.css"></style>
