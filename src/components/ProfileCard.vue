<script setup>
import ProfilePicture from './ProfilePicture.vue'

defineProps({
  to: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <router-link :to="to" class="flex flex-col items-center group">
      <ProfilePicture :profile="profile" />
      <p class="text-sm font-semibold mt-2">{{ name }}</p>
      <p class="text-xs">{{ position }}</p>
    </router-link>
  </div>
</template>
