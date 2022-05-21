<template>
  <div :class="[$style.container]">
    <div :class="[$style.content]">
      <div :class="[$style.col1]">
        <BaseTitle data-content="02">Meet your crew</BaseTitle>
        <SliderGroup
          :defaultIndex="0"
          :class="[$style.slider]"
          @change="changeTab"
        >
          <div ref="slides">
            <SliderSlides>
              <SliderSlide v-for="crew in crewData" :key="crew.name">
                <div :class="[$style.info]">
                  <div :class="[$style.role]">{{ crew.role }}</div>
                  <h2 :class="[$style.name]">{{ crew.name }}</h2>
                  <p :class="[$style.bio]">{{ crew.bio }}</p>
                </div>
              </SliderSlide>
            </SliderSlides>
          </div>
          <SliderPagination :class="[$style.pagination]">
            <SliderDot v-for="crew in crewData" :key="crew.name" />
          </SliderPagination>
        </SliderGroup>
      </div>
      <img ref="person" :src="crewData[currentTab].images.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {gsap} from 'gsap';
import {onMounted, ref, watch} from 'vue';
import data from '@misc/data.json';
import MainButton from '@components/MainButton.vue';
import SliderGroup from '@components/Slider/SliderGroup.vue';
import SliderPagination from '@components/Slider/SliderPagination.vue';
import SliderDot from '@components/Slider/SliderDot.vue';
import SliderSlides from '@components/Slider/SliderSlides.vue';
import SliderSlide from '@components/Slider/SliderSlide.vue';
import BaseTitle from '@components/BaseTitle.vue';

const slides = ref(null);
const person = ref(null);
const currentTab = ref(0);
const crewData = ref(data.crew);

function changeTab(payload: any) {
  currentTab.value = payload;
}

function animateView() {
  gsap.fromTo(slides.value, {opacity: 0}, {opacity: 1});
  gsap.fromTo(person.value, {scale: 0.95, opacity: 0}, {scale: 1, opacity: 1});
}

onMounted(animateView);
watch(currentTab, animateView);
</script>

<style lang="scss" module>
.wrapper {
  @apply bg-crew-desktop;
}
.pagination {
  @apply pt-14 mt-auto;
}
.col1 {
  @apply space-y-[9.65rem];
}
.container {
  @apply px-[10.4rem] pt-[4.8rem] pb-[7rem] my-auto;
}
.content {
  @apply flex items-start justify-between space-x-20 mt-14 mx-auto max-w-7xl;
}
.bio {
  @apply max-w-[27.5rem] mt-6;
}
.slider {
  @apply min-h-[26rem] flex flex-col;
}
.name {
  @apply text-white font-serif text-h3;
}
.role {
  @apply uppercase font-serif text-h4 mb-4 text-white text-opacity-50;
}
</style>
