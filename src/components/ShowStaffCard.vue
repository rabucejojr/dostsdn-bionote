<script setup>
import BackgroundImage from './BackgroundImage.vue';
import FooterDetails from './FooterDetails.vue';
import PersonalDetails from './PersonalDetails.vue';
import ProfileImage from './ProfileImage.vue'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="flex flex-col items-center justify-center w-full px-4">
      <!-- Background Image -->
      <BackgroundImage/>

      <!-- Profile Section -->
      <div class="bg-white w-full sm:w-5/6 md:w-1/3 h-auto rounded-2xl shadow-md flex flex-col items-center justify-center relative -mt-16 sm:-mt-20">
        <!-- Profile Image -->
        <ProfileImage profile="/src/assets/images/mpm.jpg"/>

        <!-- Personal Details -->
        <div class="px-6 sm:px-8 text-center mt-20">
          <PersonalDetails
          name="Mariel P. Makinano"
          designation="Provincial Director, PSTO-SDN"
          location="Surigao City, Surigao del Norte"
          email="mariel.makinano@caraga.dost.gov.ph"
          phone="+639498820707"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus natus hic cum possimus illo consequuntur sint dicta amet voluptatum dolores officia recusandae, autem suscipit officiis! Soluta voluptatum delectus, repellendus mollitia eveniet perspiciatis non enim iure voluptates velit dignissimos harum ad?"
          />
        </div>
        <!-- Logo Section -->
        <div class="flex flex-col items-center justify-center mt-1">
          <FooterDetails/>
        </div>
      </div>
    </div>
  </div>
</template>
