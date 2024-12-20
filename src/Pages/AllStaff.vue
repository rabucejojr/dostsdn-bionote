<script setup>
import ProfilePicture from '@/components/ProfilePicture.vue';
import { useRoute } from 'vue-router';
import StaffCard from '@/components/StaffCard.vue';

const route = useRoute();
const personnelId = parseInt(route.params.id, 10);
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Top Level: Mariel Makinano -->
    <div class="text-center mb-4">
      <div class="flex flex-col items-center">
        <router-link to="/" class="flex flex-col items-center group">
          <StaffCard :personnel-id="personnelId"/>
        </router-link>
      </div>
    </div>

    <div class="w-full max-w-4xl px-4">
      <!-- <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center flex flex-col items-center">
        <router-link to="/" class="flex flex-col items-center group">
          <StaffCard :personnel-id="personnelId"/>
        </router-link>
          </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[2]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/melr.jpg" />
          <p class="text-sm font-semibold mt-2">Mildred Eileen Ronsable</p>
          <p class="text-xs">SRS II</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[3]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/rjit.jpg" />
          <p class="text-sm font-semibold mt-2">Rey Jeeve Tambole</p>
          <p class="text-xs">SRS I</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[4]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/faf.jpg" />
          <p class="text-sm font-semibold mt-2">Farouk Faisal</p>
          <p class="text-xs">PTA I</p>
          </router-link>
        </div>
      </div> -->

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[5]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/sqy.jpg" />
          <p class="text-sm font-semibold mt-2">Stephen Yecyec</p>
          <p class="text-xs">PTA I</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[6]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/jab.jpg" />
          <p class="text-sm font-semibold mt-2">Joverth Butcon, Jr.</p>
          <p class="text-xs">PTA II</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[7]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/vtd.jpg" />
          <p class="text-sm font-semibold mt-2">Vaneza dela Torre</p>
          <p class="text-xs">PTA I</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[8]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/joa.jpg" />
          <p class="text-sm font-semibold mt-2">Jovan Agbu</p>
          <p class="text-xs">PTA II, B2MEIC</p>
          </router-link>
        </div>
        <div class="text-center flex flex-col items-center">
          <router-link :to="`/${numbers[9]}`" class="flex flex-col items-center group">
          <ProfilePicture profile="/images/rha.jpg" />
          <p class="text-sm font-semibold mt-2">Roger Abucejo, Jr.</p>
          <p class="text-xs">Support Staff</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
