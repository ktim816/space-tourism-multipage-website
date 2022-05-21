<template>
  <header :class="[$style.wrapper]">
    <router-link to="/" :class="[$style.logo]">
      <Logo />
    </router-link>
    <div ref="line" :class="[$style.line]" />
    <nav :class="[$style.navigation]">
      <ul :class="[$style.list]">
        <li v-for="link in routerLinks" :key="link.path">
          <router-link :active-class="$style.linkActive" :to="link.path">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import {gsap} from 'gsap';
import Logo from '@icons/logo.svg';
import {ref, onMounted} from 'vue';

const line = ref(null);
const routerLinks = ref([
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/destination',
    name: 'Destination',
  },
  {
    path: '/crew',
    name: 'Crew',
  },
  {
    path: '/technology',
    name: 'Technology',
  },
]);

onMounted(() => {
  gsap.fromTo(line.value, {scaleX: 0}, {scaleX: 1});
});
</script>

<style lang="scss" module>
.wrapper {
  @apply flex items-center justify-between pt-10 pl-[55px];
}
.navigation {
  @apply bg-white bg-opacity-5;
  backdrop-filter: blur(81.5485px);
}
.line {
  @apply relative w-full h-px bg-white bg-opacity-25 ml-16 -mr-8 z-10 origin-right;
}
.logo {
  @apply rounded-full;

  svg {
    @apply text-white min-w-[3rem] min-h-[3rem];
  }
}
.list {
  @apply flex space-x-[49px] pt-[39px] pl-[123px] pr-[165px] font-display text-nav;
  counter-reset: nav-counter -1;

  li {
    @apply relative uppercase text-white tracking-[2.7px];
    counter-increment: nav-counter;

    &::before {
      content: '0' counter(nav-counter);
      @apply absolute top-0 left-0 font-bold pointer-events-none;
    }

    a {
      @apply relative pb-[38px] pl-[29px] outline-none;

      &::before {
        content: '';
        @apply absolute bottom-0 left-0 h-[3px] bg-white bg-opacity-50 w-full transform scale-x-0 transition-transform origin-right;
      }

      &.linkActive {
        &::before {
          @apply bg-opacity-100;
        }
      }

      &.linkActive,
      &:focus,
      &:hover {
        &::before {
          @apply scale-x-100 origin-left;
        }
      }
    }
  }
}
</style>
