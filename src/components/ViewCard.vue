<script setup>
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <!-- Background Image -->
      <div class="w-full sm:w-3/4 md:w-2/5 h-64 bg-gray-200 rounded-2xl flex items-center justify-center mt-[-24px] overflow-hidden">
        <img src="/src/assets/images/bg-2.png" alt="Profile Image" class="border-white object-cover w-full h-full">
      </div>

      <!-- Profile Section -->
      <div class="bg-gray-300 w-full sm:w-5/6 md:w-1/3 h-96 rounded-2xl flex items-center justify-center relative top-[-40px] sm:top-[-30px]">
        <div>
          <div class="flex flex-col">
            <!-- Profile Image -->
            <div class="absolute top-[-30px] sm:top-[-40px] left-1/2 transform -translate-x-1/2">
              <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img src="/src/assets/images/mpm.jpg" alt="Profile Image" class="object-cover hover:border-white">
              </div>
            </div>
            <!-- Personal Details -->
            <div class="h-auto px-4 sm:px-2 text-center mt-20">
              <h2 class="text-lg sm:text-base md:text-xl font-bold m-2">Mariel P. Makinano</h2>
              <p class="text-sm sm:text-xs">Provincial Director, PSTO-SDN</p>
              <p class="text-sm sm:text-xs">Surigao City, Surigao del Norte</p>
              <!-- Clickable Email -->
              <p class="text-sm sm:text-xs mt-1">
                <a href="mailto:mariel.makinano@caraga.dost.gov.ph" class="text-blue-500 hover:underline">
                  mariel.makinano@caraga.dost.gov.ph
                </a>
              </p>
              <p class="text-sm sm:text-xs mt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus natus hic cum possimus illo consequuntur sint dicta amet voluptatum dolores officia recusandae, autem suscipit officiis! Soluta voluptatum delectus, repellendus mollitia eveniet perspiciatis non enim iure voluptates velit dignissimos harum ad?
              </p>
            </div>

            <!-- Logo Section -->
            <div class="flex items-center justify-center mt-4 flex-col">
              <div>
                <img src="/src/assets/dostlogo.png" width="40" class="sm:w-10" alt="DOST Logo">
              </div>
              <div>
                <p class="text-sm p-3 mb-4">All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
