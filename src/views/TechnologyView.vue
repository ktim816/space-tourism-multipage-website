<template>
  <div :class="[$style.container]">
    <div :class="[$style.content]">
      <div :class="[$style.col1]">
        <h1 :class="[$style.title]">Space launch 101</h1>
        <SliderGroup
          vertical
          :defaultIndex="0"
          :class="[$style.slider]"
          @change="changeTab"
        >
          <SliderPagination vertical :class="[$style.pagination]">
            <SliderButton
              v-for="(technology, index) in technologyData"
              :key="technology.name"
              >{{ index + 1 }}</SliderButton
            >
          </SliderPagination>
          <div ref="slides">
            <SliderSlides>
              <SliderSlide
                :key="technology.name"
                class="transition-opacity"
                v-for="technology in technologyData"
              >
                <div :class="[$style.info]">
                  <div :class="[$style.pretitle]">The terminology...</div>
                  <h2 :class="[$style.name]">{{ technology.name }}</h2>
                  <p :class="[$style.description]">
                    {{ technology.description }}
                  </p>
                </div>
              </SliderSlide>
            </SliderSlides>
          </div>
        </SliderGroup>
      </div>
      <img
        alt=""
        ref="image"
        :class="$style.image"
        :src="technologyData[currentTab].images.portrait"
      />
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
import SliderButton from '@components/Slider/SliderButton.vue';
import SliderSlides from '@components/Slider/SliderSlides.vue';
import SliderSlide from '@components/Slider/SliderSlide.vue';

const image = ref(null);
const slides = ref(null);
const currentTab = ref(0);
const technologyData = ref(data.technology);

function changeTab(payload: any) {
  currentTab.value = payload;
}

function animateView() {
  gsap.fromTo(slides.value, {opacity: 0}, {opacity: 1});
  gsap.fromTo(image.value, {opacity: 0}, {opacity: 1});
}

onMounted(animateView);
watch(currentTab, animateView);
</script>

<style lang="scss" module>
.wrapper {
  @apply bg-technology-desktop;
}
.image {
  @apply mt-[3.75rem];
}
.pagination {
  @apply pr-20;
}
.col1 {
  @apply space-y-[8.5rem];
}
.container {
  @apply px-[10.4rem] pt-[4.8rem] pb-[7rem] my-auto;
}
.content {
  @apply flex items-start justify-between space-x-20 mt-14 w-full max-w-7xl mx-auto;
}
.info {
  @apply max-w-[29.375rem];
}
.description {
  @apply mt-4;
}
.footer {
  @apply flex space-x-20 pt-7 mt-[3.375rem] border-t border-arsenic;
}
.slider {
  @apply flex items-start;
}
.name {
  @apply text-white font-serif text-h3;
}
.pretitle {
  @apply font-display text-nav mb-3 uppercase tracking-[2.7px];
}
.title {
  @apply w-full relative font-display text-h5 text-white tracking-[4.72px] pl-[3.4rem];

  &::before {
    content: '03';
    @apply absolute top-0 left-0 font-bold opacity-25;
  }
}
</style>
