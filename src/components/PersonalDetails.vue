<script setup>

  defineProps({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

</script>
<template>
  <div>
    <h2 class="text-xl md:text-2xl font-semibold text-gray-800">{{ name }}</h2>
    <p class="text-sm md:text-base text-gray-600 mt-1">{{ designation }}</p>
    <p class="text-sm md:text-base text-gray-600"></p>
    <!-- Clickable Email -->
    <p class="text-sm md:text-base mt-1">
      <a :href="'mailto:'+email" class="text-blue-600 hover:underline">
        {{ email }}
      </a>
    </p>
    <!-- Clickable Phone Number -->
    <p class="text-sm md:text-base mt-1">
      <a :href="'tel:' + phone" class="text-blue-600 hover:underline">
        {{phone}}
      </a>
    </p>
    <p class="text-sm md:text-base text-gray-600 mt-1 leading-relaxed text-justify">
     {{ description }}
    </p>
  </div>
</template>
