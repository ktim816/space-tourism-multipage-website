<template>
  <main :class="$style.wrapper">
    <slot />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.wrapper {
  @apply flex flex-col min-h-screen bg-cover bg-center;
}
</style>
