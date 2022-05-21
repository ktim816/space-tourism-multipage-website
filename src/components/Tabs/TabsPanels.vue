<template>
  <TabPanels :class="[$style.wrapper]">
    <slot />
  </TabPanels>
</template>

<script lang="ts" setup>
import {TabPanels} from '@headlessui/vue';
</script>

<style lang="scss" module>
.wrapper {
  @apply mt-10;
}
</style>
