<script setup>
import { ref } from 'vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'

defineProps({
  profile: {
    type: String,
    required: true, // Ensures the prop is provided
  },
  style: {
    type: String,
    default: 'absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2',
  },
})

const isLoading = ref(true)

const handleLoad = () => {
  isLoading.value = false
}

const handleError = () => {
  isLoading.value = false
}
</script>

<template>
  <div>
    <div
      class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-lg relative"
    >
      <img
        v-show="!isLoading"
        :src="profile"
        alt="Profile Image"
        class="object-cover"
        @load="handleLoad"
        @error="handleError"
      />
      <div v-show="isLoading">
        <LoadingIndicator />
      </div>
    </div>
  </div>
</template>
