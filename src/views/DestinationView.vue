<template>
  <div :class="[$style.container]">
    <div :class="[$style.content]">
      <div :class="[$style.col1]">
        <BaseTitle data-content="01">Pick your destination</BaseTitle>
        <div :class="[$style.sphere]">
          <img alt="" ref="sphere" :src="destinations[currentTab].images.png" />
        </div>
      </div>
      <TabsGroup :class="[$style.tabs]" @change="changeTab">
        <TabsList>
          <TabsTab
            v-for="destination in destinations"
            :key="destination.name"
            >{{ destination.name }}</TabsTab
          >
        </TabsList>
        <div ref="panels">
          <TabsPanels>
            <TabsPanel
              v-for="destination in destinations"
              :key="destination.name"
            >
              <div :class="[$style.info]">
                <h2 :class="[$style.name]">{{ destination.name }}</h2>
                <p>{{ destination.description }}</p>
              </div>
              <div :class="[$style.footer]">
                <div :class="[$style.caption]">
                  <h4>Avg. Distance</h4>
                  <div>{{ destination.distance }}</div>
                </div>
                <div :class="[$style.caption]">
                  <h4>Est. Travel time</h4>
                  <div>{{ destination.travel }}</div>
                </div>
              </div>
            </TabsPanel>
          </TabsPanels>
        </div>
      </TabsGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUpdated, ref, watch} from 'vue';
import {gsap} from 'gsap';
import data from '@misc/data.json';
import MainButton from '@components/MainButton.vue';
import TabsGroup from '@components/Tabs/TabsGroup.vue';
import TabsList from '@components/Tabs/TabsList.vue';
import TabsTab from '@components/Tabs/TabsTab.vue';
import TabsPanels from '@components/Tabs/TabsPanels.vue';
import TabsPanel from '@components/Tabs/TabsPanel.vue';
import BaseTitle from '@components/BaseTitle.vue';

const currentTab = ref(0);
const panels = ref(null);
const sphere = ref(null);
const destinations = ref(data.destinations);

function changeTab(payload: any) {
  currentTab.value = payload;
}

function animateView() {
  gsap.fromTo(panels.value, {opacity: 0}, {opacity: 1}),
    gsap.fromTo(
      sphere.value,
      {scale: 0.95, opacity: 0},
      {scale: 1, opacity: 1}
    );
}

onMounted(animateView);
watch(currentTab, animateView);
</script>

<style lang="scss" module>
.wrapper {
  @apply bg-destination-desktop;
}
.sphere {
  @apply pl-16;
}
.col1 {
  @apply space-y-24;
}
.container {
  @apply px-[10.4rem] pt-[4.8rem] pb-[7rem] my-auto;
}
.content {
  @apply flex items-start justify-between space-x-40 mt-14 mx-auto max-w-7xl;
}
.caption {
  @apply space-y-3.5;

  h4 {
    @apply text-subheading-2 font-display tracking-[2.36px];
  }

  div {
    @apply font-serif text-subheading-1 uppercase text-white;
  }
}
.info {
  @apply space-y-3;
}
.footer {
  @apply flex space-x-20 pt-7 mt-[3.375rem] border-t border-arsenic;
}
.tabs {
  @apply max-w-[28.125rem] mt-[5.6rem];
}
.name {
  @apply text-white font-serif text-h2;
}
.info {
  @apply max-w-[28.125rem];
}
</style>
