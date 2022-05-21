<template>
  <router-view v-slot="{Component, route}" :key="$route.fullPath">
    <keep-alive>
      <suspense>
        <BaseWrapper :class="route.meta.bg">
          <TheHeader />
          <component :is="Component" :key="route.path" />
        </BaseWrapper>
      </suspense>
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import TheHeader from '@components/TheHeader.vue';
import BaseWrapper from '@components/BaseWrapper.vue';
</script>

<style></style>
