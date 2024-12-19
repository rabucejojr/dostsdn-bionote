<script setup>
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="flex flex-col items-center justify-center w-full px-4">
      <!-- Background Image -->
      <div class="w-full sm:w-3/4 md:w-2/5 h-64 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
        <img src="/src/assets/images/bg-2.png" alt="Profile Image" class="border-white object-cover w-full h-full">
      </div>

      <!-- Profile Section -->
      <div class="bg-gray-300 w-full sm:w-5/6 md:w-1/3 h-auto rounded-2xl flex flex-col items-center justify-center relative -mt-16 sm:-mt-20">
        <!-- Profile Image -->
        <div class="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2">
          <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <img src="/src/assets/images/mpm.jpg" alt="Profile Image" class="object-cover">
          </div>
        </div>

        <!-- Personal Details -->
        <div class="px-4 sm:px-6 text-center mt-16">
          <h2 class="text-lg sm:text-base md:text-xl font-bold m-2">Mariel P. Makinano</h2>
          <p class="text-sm sm:text-sm">Provincial Director, PSTO-SDN</p>
          <p class="text-sm sm:text-sm">Surigao City, Surigao del Norte</p>
          <!-- Clickable Email -->
          <p class="text-sm sm:text-sm mt-1">
            <a href="mailto:mariel.makinano@caraga.dost.gov.ph" class="text-blue-500 hover:underline">
              mariel.makinano@caraga.dost.gov.ph
            </a>
          </p>
          <p class="text-sm sm:text-sm mt-1 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus natus hic cum possimus illo consequuntur sint dicta amet voluptatum dolores officia recusandae, autem suscipit officiis! Soluta voluptatum delectus, repellendus mollitia eveniet perspiciatis non enim iure voluptates velit dignissimos harum ad?
          </p>
        </div>

        <!-- Logo Section -->
        <div class="flex flex-col items-center justify-center mt-4">
          <!-- Logo and Text Container -->
          <div class="flex flex-col items-center">
            <!-- Logo -->
            <img src="/src/assets/dostlogo.png" alt="DOST Logo" class="w-12 h-12 mb-2">
            <!-- Centered Text -->
            <p class="text-sm font-semibold text-gray-800">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

