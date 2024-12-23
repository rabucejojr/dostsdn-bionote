<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import ProfilePicture from "@/components/ProfilePicture.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { RiArrowLeftLine } from "@remixicon/vue";
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

const route = useRoute();
const personnel = ref(null);
const isLoading = ref(true);

const fetchPersonnelData = async (personnelId) => {
  try {
    isLoading.value = true;
    const response = await axios.get("/infos.json");
    const staffData = response.data;
    personnel.value = staffData.find((staff) => staff.id === personnelId);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.error("Error fetching staff data:", error);
  }
};

onMounted(() => {
  const personnelId = parseInt(route.params.id, 10);
  fetchPersonnelData(personnelId);
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 shadow-sm sm:px-4 sm:py-2 md:px-6 md:py-3">
    <PageHeader />
  </div>
  <div class="flex flex-col pt-32">
    <div class="absolute top-28 md:top-70 left-4 items-start">
      <router-link to="/" class="underline inline-block">
        <button><RiArrowLeftLine /></button>
      </router-link>
    </div>
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="w-full max-w-md md:max-w-lg bg-gray-200 rounded-2xl shadow-2xl p-8 relative"
      >
        <!-- Background Shapes -->
        <div
          class="absolute top-4 left-4 w-16 h-16 bg-blue-700 opacity-20 rounded-full md:w-20 md:h-20 lg:w-24 lg:h-24"
        ></div>
        <div
          class="absolute bottom-5 right-5 w-24 h-24 bg-indigo-700 opacity-20 rounded-full md:w-32 md:h-32 lg:w-36 lg:h-36"
        ></div>
        <div
          class="absolute top-1/4 left-1/4 w-12 h-12 bg-green-500 opacity-25 rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/3 w-20 h-20 bg-pink-500 opacity-30 rounded-full md:w-24 md:h-24 lg:w-28 lg:h-28"
        ></div>
        <div
          class="absolute top-8 right-8 w-20 h-20 bg-yellow-500 opacity-20 rounded-full md:w-28 md:h-28 lg:w-32 lg:h-32"
        ></div>
        <!-- Content -->
        <div v-if="isLoading" class="flex justify-center items-center h-full">
          <LoadingIndicator />
        </div>
        <div v-else class="relative z-10">
          <ProfilePicture
            :profile="personnel.profile"
            class="mb-2 mx-auto rounded-full justify-items-center"
          />
          <h2 class="text-center text-xl font-bold text-gray-800">
            {{ personnel.name }}
          </h2>
          <p class="text-center text-gray-600">{{ personnel.designation }}</p>
          <p class="text-center text-gray-600">
            <a :href="`mailto:${personnel.email}`">{{ personnel.email }}</a>
          </p>
          <p class="text-center text-gray-600">
            <a :href="`tel:${personnel.phone}`" class="text-blue-600 hover:underline">
              {{ personnel.phone }}
            </a>
          </p>
          <p class="text-center text-gray-600">{{ personnel.location }}</p>
          <p class="text-center text-gray-600">{{ personnel.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-auto pt-4">
    <PageFooter />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&family=Lato&family=Parkinsans&display=swap");
* {
  font-family: "Lato", serif;
  font-weight: 400;
  font-style: normal;
  /* background-color; */
}
</style>
