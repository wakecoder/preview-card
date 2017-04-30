<template>
    <transition name="bounce" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
        <slot></slot>
    </transition>
</template>
<style src="./animate.css"></style>
