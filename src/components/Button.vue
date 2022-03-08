<script setup lang="ts">
defineProps<{
  type?: string;
}>();
</script>
<template>
  <button class="h-button">
    <slot></slot>
  </button>
</template>
<style scoped>
.h-button {
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 4px;
  background: #fff;
  outline: none;
  font-size: 14px;
}
</style>
