<template>
  <button ref="innerRef" :class="[$style.wrapper]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const innerRef = ref();
defineExpose({innerRef});
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center rounded-full w-[17.125rem] h-[17.125rem] text-h4 tracking-[2px] uppercase outline-none bg-white font-serif text-rich-black transition-shadow;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);

  &:focus,
  &:hover {
    box-shadow: 0 0 0 5rem rgba(255, 255, 255, 0.1);
  }
}
</style>
