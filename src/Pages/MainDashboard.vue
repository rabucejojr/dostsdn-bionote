<script setup>
import PageHeader from "@/components/PageHeader.vue";
import AllStaff from "./AllStaff.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen h-screen">
    <!-- Header -->
    <PageHeader class="flex-[2]" />
    <!-- Main Content -->
    <AllStaff class="flex-[8]" />
    <!-- Footer -->
    <PageFooter class="flex-[2]" />
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
