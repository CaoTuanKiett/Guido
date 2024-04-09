<script setup lang="ts">
import '@/assets/main.scss'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route">
        <router-view />
      </component>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
