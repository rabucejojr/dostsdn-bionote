<script setup>
import ProfilePicture from '@/components/ProfilePicture.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <!-- Top Level: Mariel Makinano -->
    <div class="text-center mb-4">
      <div class="flex flex-col items-center">
        <ProfilePicture profile="/images/mpm.jpg" />
        <p class="text-sm font-semibold mt-2">Mariel Makinano</p>
        <p class="text-xs">Provincial Director</p>
      </div>
    </div>

    <div class="w-full max-w-4xl px-4">
      <!-- Middle Level: 4 Personnel -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/mgms.jpg" />
          <p class="text-sm font-semibold mt-2">Mary Grace Sabuero</p>
          <p class="text-xs">SRS II</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/melr.jpg" />
          <p class="text-sm font-semibold mt-2">Mildred Eileen Ronsable</p>
          <p class="text-xs">SRS II</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/rjit.jpg" />
          <p class="text-sm font-semibold mt-2">Rey Jeeve Tambole</p>
          <p class="text-xs">SRS I</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/faf.jpg" />
          <p class="text-sm font-semibold mt-2">Farouk Faisal</p>
          <p class="text-xs">PTA I</p>
        </div>
      </div>
      <!-- Last Level: 5 Personnel -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/sqy.jpg" />
          <p class="text-sm font-semibold mt-2">Stephen Yecyec</p>
          <p class="text-xs">PTA I</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/jab.jpg" />
          <p class="text-sm font-semibold mt-2">Joverth Butcon, Jr.</p>
          <p class="text-xs">PTA II</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/vtd.jpg" />
          <p class="text-sm font-semibold mt-2">Vaneza dela Torre</p>
          <p class="text-xs">PTA I</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/joa.jpg" />
          <p class="text-sm font-semibold mt-2">Jovan Agbu</p>
          <p class="text-xs">PTA II, B2MEIC</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <ProfilePicture profile="/images/rha.jpg" />
          <p class="text-sm font-semibold mt-2">Roger Abucejo, Jr.</p>
          <p class="text-xs">Support Staff</p>
        </div>
      </div>
    </div>
  </div>
</template>
