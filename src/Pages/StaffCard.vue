<script setup>
import ProfileImage from '@/components/ProfileImage.vue';


</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
      <div class="text-center grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-2 max-md:grid-cols-3 max-md:gap-2 max-lg:grid-cols-4 max-lg:gap-2 max-xl:grid-cols-5 max-xl:gap-4">

        <div class="text-center justify-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/mpm.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Mariel Makinano</p>
              <p class="text-xs">Provincial Director</p>
            </div>
          </div>

          <div class="text-center justify-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/mgms.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Mary Grace Sabuero</p>
              <p class="text-xs">SRS II</p>
            </div>
          </div>

          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/melr.jpg" />
            </div>
              <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Mildred Eileen Ronsable</p>
              <p class="text-xs">SRS II</p>
            </div>
        </div>

          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/rjit.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Rey Jeeve Tambole</p>
              <p class="text-xs">SRS I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/faf.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Farouk Faisal</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/sqy.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Stephen Yecyec</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/jab.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Joverth Butcon, Jr.</p>
              <p class="text-xs">PTA II</p>
            </div>
          </div>
          <div class="text-center mb-4 sm:mb-2">
            <div class="flex flex-col items-center justify-center">
              <ProfileImage profile="/images/vtd.jpg" />
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-xs mt-1">Vaneza dela Torre</p>
              <p class="text-xs">PTA I</p>
            </div>
          </div>
            <div class="text-center mb-4 sm:mb-2">
              <div class="flex flex-col items-center justify-center">
                <ProfileImage profile="/images/joa.jpg" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="text-xs mt-1">Jovan Agbu</p>
                <p class="text-xs">PTA II, B2MEIC</p>
              </div>
            </div>
            <div class="text-center mb-4 sm:mb-2">
              <div class="flex flex-col items-center justify-center">
                <ProfileImage profile="/images/rha.jpg" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="text-xs mt-1">Roger Abucejo, Jr.</p>
                <p class="text-xs">Support Staff</p>
              </div>
            </div>
        </div>
    </div>
</template>


