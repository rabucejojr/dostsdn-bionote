<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProfilePicture from '@/components/ProfilePicture.vue';

const route = useRoute();
const personnel = ref(null);


onMounted(async () => {
  const personnelId = parseInt(route.params.id, 10);
  try {
    const response = await axios.get('/infos.json');
    const staffData = response.data;
    personnel.value = staffData.find((staff) => staff.id === personnelId);
  } catch (error) {
    console.error('Error fetching staff data:', error);
  }
});

</script>

<template>
  <div class="p-6 bg-gray-200">
    <router-link to="/" class="text-blue-500 underline inline-block">
      <button>Back</button>
    </router-link>
    <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="w-full max-w-md md:max-w-lg bg-gray-200 rounded-2xl shadow-2xl p-8 relative">
      <!-- Background Shapes -->

    <div class="absolute top-4 left-4 w-16 h-16 bg-blue-700 opacity-20 rounded-full md:w-20 md:h-20 lg:w-24 lg:h-24"></div>
    <div class="absolute bottom-5 right-5 w-24 h-24 bg-indigo-700 opacity-20 rounded-full md:w-32 md:h-32 lg:w-36 lg:h-36"></div>
    <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-green-500 opacity-25 rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20"></div>
    <div class="absolute bottom-1/4 right-1/3 w-20 h-20 bg-pink-500 opacity-30 rounded-full md:w-24 md:h-24 lg:w-28 lg:h-28"></div>
    <div class="absolute top-8 right-8 w-20 h-20 bg-yellow-500 opacity-20 rounded-full md:w-28 md:h-28 lg:w-32 lg:h-32"></div>
      <!-- Content -->
      <div v-if="personnel" class="relative z-10">
        <ProfilePicture :profile="personnel.profile" class="mb-2 mx-auto rounded-full justify-items-center" />
          <h2 class="text-center text-xl font-bold text-gray-800">{{ personnel.name }}</h2>
            <p class="text-center text-gray-600">{{ personnel.designation }}</p>
            <p class="text-center text-gray-600">
              <a href="mailto:{{ personnel.email }}">{{ personnel.email }}</a>
            </p>
            <p class="text-center text-gray-600">
              <a href="tel:{{ personnel.phone }}" class="text-blue-600 hover:underline">
                {{ personnel.phone }}
              </a>
            </p>
            <p class="text-center text-gray-600">{{ personnel.location }}</p>
            <p class="text-center text-gray-600">{{ personnel.description }}</p>
      </div>

      <p v-else class="text-red-500 text-center text-lg font-semibold">
        Personnel not found!
      </p>
    </div>
  </div>
  </div>
</template>
