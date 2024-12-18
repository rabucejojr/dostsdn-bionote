<script setup>
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <!-- Background Image -->
      <div class="w-2/5 h-64 bg-white rounded-2xl flex items-center justify-center mt-[-24px] overflow-hidden">
        <img src="/src/assets/images/bg-2.png" alt="Profile Image" class="border-white">
      </div>

      <!-- Profile Section -->
      <div class="w-1/3 h-auto rounded-2xl flex items-center justify-center relative top-[-60px]">
        <div>
          <div class="flex flex-col">
            <div class="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
              <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img src="/src/assets/images/mpm.jpg" alt="Profile Image" class="object-cover border-white hover:border-white">
              </div>
            </div>
            <!-- Personal Details -->
            <div class="h-auto">
              <div class="text-center">
                <h2 class="text-xl font-bold">Mariel P. Makinano</h2>
                <p class="text-sm">Provincial Director, PSTO-SDN</p>
                <p class="text-sm">Surigao City, Surigao del Norte</p>
                <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores veniam rem autem vitae hic fuga quas numquam officia eligendi.</p>
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus natus hic cum possimus illo consequuntur sint dicta amet voluptatum dolores officia recusandae, autem suscipit officiis! Soluta voluptatum delectus, repellendus mollitia eveniet perspiciatis non enim iure voluptates velit dignissimos harum ad?</p>
              </div>
              <div class="flex items-center justify-center">
                <div class=" text-sm">
                  <img src="/src//assets/dostlogo.png" width="50" alt="">
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
