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
  @apply flex items-center justify-center bg-transparent focus:ring-2 ring-white font-serif leading-none w-20 h-20 rounded-full transition-colors border border-white border-opacity-25 text-white text-h4 uppercase;

  &:hover {
    @apply border-opacity-100;
  }

  &--selected {
    @apply bg-white border-opacity-100 text-rich-black;
  }
}
</style>
