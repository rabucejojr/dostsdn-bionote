<script setup>
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <!-- Background Image -->
      <div class="w-2/5 h-64 bg-gray-400 rounded-2xl flex items-center justify-center mt-[-24px] overflow-hidden">
        <img src="/src/assets/images/bg-2.png" alt="Profile Image" class="border-white">
      </div>

      <!-- Profile Section -->
      <div class="w-1/3 h-96 bg-black rounded-2xl flex items-center justify-center relative top-[-60px]">
        <div>
          <div class="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              <img src="/src/assets/images/mpm.jpg" alt="Profile Image" class="object-cover border-white hover:border-white">
            </div>
          </div>
          <!-- Personal Details -->
          <div class="">
            <div class="text-center text-white">
              <h2 class="text-xl font-bold">Mariel P. Makinano</h2>
              <p class="text-sm">Provincial Director, PSTO-SDN</p>
              <p class="text-sm">Surigao City, Surigao del Norte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
