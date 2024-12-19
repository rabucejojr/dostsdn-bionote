<script setup>
import { ref, onMounted } from 'vue';

const staffData = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/infos.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    staffData.value = await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
});
</script>
<template>
  <div>
{{ console.log(staffData) }}
  </div>
</template>
