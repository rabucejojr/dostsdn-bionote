<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'sm',
  },
})

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
}

const currentSize = computed(() => sizeClasses[props.size])
</script>

<template>
  <div :class="['loader', currentSize]"></div>
</template>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
