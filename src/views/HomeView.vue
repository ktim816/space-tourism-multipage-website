<template>
  <div :class="[$style.container]">
    <div ref="info" :class="[$style.info]">
      <div :class="[$style.pretitle]">So, you want to travel to</div>
      <h1 :class="[$style.title]">Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <MainButton ref="button" @click="goToDestination">Explore</MainButton>
  </div>
</template>

<script lang="ts" setup>
import {gsap} from 'gsap';
import {onMounted, ref} from 'vue';
import router from '../router';
import MainButton from '@components/MainButton.vue';

const info = ref();
const button = ref();

function goToDestination() {
  router.push('/destination');
}

function animateView() {
  gsap.fromTo(info.value, {y: 10, opacity: 0}, {y: 0, opacity: 1});
  gsap.fromTo(
    button.value.innerRef,
    {scale: 0.9, opacity: 0},
    {scale: 1, opacity: 1}
  );
}

onMounted(animateView);
</script>

<style lang="scss" module>
.container {
  @apply flex justify-between items-end space-x-20 px-[165px] pt-[15.6875rem] pb-[8.1875rem] mt-auto;
}
.info {
  @apply max-w-[28.125rem];
}
.pretitle {
  @apply text-h5 uppercase font-display tracking-[4.72px];
}
.title {
  @apply font-serif text-h1 text-white uppercase;
}
</style>
