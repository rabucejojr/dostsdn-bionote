<script setup>

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
</script>

<template>
  <div class="">
    <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center shadow-lg">
      <img :src="profile" alt="Profile Image" class="object-cover">
    </div>
  </div>
</template>
