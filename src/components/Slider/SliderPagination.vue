<template>
  <TabList
    :class="[
      $style.wrapper,
      {
        [$style['wrapper--vertical']]: vertical,
      },
    ]"
  >
    <slot />
  </TabList>
</template>

<script lang="ts" setup>
import {TabList} from '@headlessui/vue';

const props = defineProps<{
  vertical?: boolean;
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply space-x-6;

  &--vertical {
    @apply space-x-0 space-y-8;
  }
}
</style>
