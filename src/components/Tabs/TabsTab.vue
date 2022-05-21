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
  @apply relative text-nav uppercase font-display text-lavender-blue tracking-[2.7px] pb-3.5;

  &::before {
    content: '';
    @apply absolute bottom-0 left-0 h-[3px] bg-white bg-opacity-50 w-full transform scale-x-0 transition-transform origin-right;
  }

  &--selected {
    @apply text-white;

    &::before {
      @apply bg-opacity-100;
    }
  }

  &--selected,
  &:hover {
    &::before {
      @apply scale-x-100 origin-left;
    }
  }
}
</style>
