<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AllStaff from "./AllStaff.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <div class="fixed top-0 left-0 w-full z-50 shadow-sm sm:px-4 sm:py-2 md:px-6 md:py-3">
      <PageHeader />
    </div>

    <!-- Main Content -->
    <div class="">
      <AllStaff />
    </div>

    <!-- Footer -->
    <div class="mt-auto pt-4">
      <PageFooter />
    </div>
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
