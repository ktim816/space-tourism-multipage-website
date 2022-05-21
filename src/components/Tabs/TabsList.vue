<template>
  <TabList :class="[$style.wrapper]">
    <slot />
  </TabList>
</template>

<script lang="ts" setup>
import {TabList} from '@headlessui/vue';
</script>

<style lang="scss" module>
.wrapper {
  @apply space-x-[2.075rem];
}
</style>
