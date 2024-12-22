<script setup>
import ProfileCard from '@/components/ProfileCard.vue';

import { ref } from 'vue';

const numbers = ref(Array.from({ length: 10 }, (_, i) => i + 1));
</script>

<template>
    <div class="pt-40 sm:pt-32 md:pt-40 flex flex-col items-center justify-center min-h-screen">
      <!-- Top Level: Mariel Makinano -->
      <div class="text-center mb-4">
        <div class="flex flex-col items-center">
          <ProfileCard
            :to="`/${numbers[0]}`"
            profile="/images/mpm.jpg"
            name="Mariel Makinano"
            position="Provincial Director"
          />
        </div>
      </div>
      <div class="w-full max-w-4xl px-4">
        <!-- Middle Level: 4 Personnel -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center flex flex-col items-center">
              <ProfileCard
                :to="`/${numbers[1]}`"
                profile="/images/mgms.jpg"
                name="Mary Grace Sabuero"
                position="SRS II"
              />
            </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[2]}`"
                profile="/images/melr.jpg"
                name="Mildred Eileen Ronsable"
                position="SRS II"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[3]}`"
                profile="/images/rjit.jpg"
                name="Rey Jeeve Tambole"
                position="SRS I"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[4]}`"
                profile="/images/faf.jpg"
                name="Farouk Faisal"
                position="PTA I"
              />
          </div>
        </div>
        <!-- Last Level: 5 Personnel -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[5]}`"
                profile="/images/sqy.jpg"
                name="Stephen Yecyec"
                position="PTA I"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[6]}`"
                profile="/images/jab.jpg"
                name="Joverth Butcon, Jr."
                position="PTA II"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[7]}`"
                profile="/images/vtd.jpg"
                name="Vaneza dela Torre"
                position="PTA I"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[8]}`"
                profile="/images/joa.jpg"
                name="Jovan Agbu"
                position="PTA II"
              />
          </div>
          <div class="text-center flex flex-col items-center">
            <ProfileCard
                :to="`/${numbers[9]}`"
                profile="/images/rha.jpg"
                name="Roger Abucejo, Jr."
                position="Support Staff"
              />
          </div>
        </div>
    </div>
  </div>
</template>
