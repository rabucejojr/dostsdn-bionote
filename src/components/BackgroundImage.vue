<script setup>
defineProps({
divStyle:{
  type:String,
  default: "w-full sm:w-3/4 md:w-2/5 h-64 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
}
});
</script>

<template>
      <div :class="divStyle">
        <img src="/src/assets/images/bg-2.png" alt="Background Image" class="object-cover w-full h-full">
      </div>
</template>
