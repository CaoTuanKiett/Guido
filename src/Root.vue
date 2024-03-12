<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "./layouts/DefaultLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

const route = useRoute();
const currentMeta = computed(() => route.meta.layout || "default");

const layoutMap = {
  default: DefaultLayout,
  auth: AuthLayout,
};

const VNodeLayout = computed(() => {
  layoutMap[currentMeta.value];
});
</script>

<template>
  <Component :is="VNodeLayout">
    <div>
      <RouterView />
    </div>
  </Component>
</template>

<style scoped></style>
