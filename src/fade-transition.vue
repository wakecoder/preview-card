<template>
    <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <slot></slot>
    </transition>
</template>
<style src="./animate.css"></style>
