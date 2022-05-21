<template>
  <Tab as="template" v-slot="{selected}">
    <button
      :class="[
        [$style.wrapper],
        {
          [$style['wrapper--selected']]: selected,
        },
      ]"
    >
      <slot />
    </button>
  </Tab>
</template>

<script lang="ts" setup>
import {Tab} from '@headlessui/vue';
</script>

<style lang="scss" module>
button.wrapper {
  @apply bg-white w-[0.9375rem] h-[0.9375rem] rounded-full bg-opacity-[0.17] transition-colors;

  &:hover {
    @apply bg-opacity-50;
  }

  &--selected {
    @apply bg-opacity-100 hover:bg-opacity-100;
  }
}
</style>
