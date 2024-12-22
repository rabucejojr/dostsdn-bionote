<script setup>
import { ref } from 'vue';

defineProps({
  profile: {
    type: String,
    required: true, // Ensures the prop is provided
  },
  style: {
    type: String,
    default: 'absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2',
  },
});

const isLoading = ref(true);

const handleLoad = () => {
  isLoading.value = false;
};

const handleError = () => {
  isLoading.value = false;
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<template>
  <div>
    <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-lg relative">
      <img 
        v-show="!isLoading" 
        :src="profile" 
        alt="Profile Image" 
        class="object-cover" 
        @load="handleLoad" 
        @error="handleError"
      />
      <div v-show="isLoading" class="loader"></div>
    </div>
  </div>
</template>

