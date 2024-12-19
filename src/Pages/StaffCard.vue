<script setup>
import ProfileImage from '@/components/ProfileImage.vue';


</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
      <div class="text-center grid grid-cols-5">

        <div class="flex justify-center space-x-6 mb-4">
          <div class="text-center">
            <ProfileImage profile="/images/mpm.jpg" />
            <div class="flex flex-col items-center justify-center">
            <p class="text-xs mt-1">Mariel Makinano</p>
            <p class="text-xs">Provincial Director</p>
          </div>
          </div>
        </div>

          <div class="text-center justify-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/mgms.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Mary Grace Sabuero</p>
              <p class="text-xs">SRS II</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/melr.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Mildred Eileen Ronsable</p>
              <p class="text-xs">SRS II</p>
            </div>
        </div>

          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/rjit.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Rey Jeeve Tambole</p>
              <p class="text-xs">SRS I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/faf.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Farouk Faisal</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/sqy.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Stephen Yecyec</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/jab.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Joverth Butcon, Jr.</p>
              <p class="text-xs">PTA II</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <ProfileImage profile="/images/vtd.jpg" />
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Vaneza dela Torre</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
            <div class="text-center mb-4 sm:mb-2">
              <ProfileImage profile="/images/joa.jpg" />
              <div class="flex flex-col items-center justify-center">
                <p class="text-xs mt-1">Jovan Agbu</p>
                <p class="text-xs">PTA II, B2MEIC</p>
              </div>
            </div>
            <div class="text-center mb-4 sm:mb-2">
              <ProfileImage profile="/images/rha.jpg" />
              <div class="flex flex-col items-center justify-center">
                <p class="text-xs mt-1">Roger Abucejo, Jr.</p>
                <p class="text-xs">Support Staff</p>
              </div>
            </div>
        </div>
    </div>
</template>


