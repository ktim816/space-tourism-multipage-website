<template>
  <h1 :class="$style.title">
    <slot />
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.title {
  @apply w-full relative font-display text-h5 text-white tracking-[4.72px] pl-[3.4rem];

  &::before {
    content: attr(data-content);
    @apply absolute top-0 left-0 font-bold opacity-25;
  }
}
</style>
