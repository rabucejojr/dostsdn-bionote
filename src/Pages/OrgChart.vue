<template>
  <div class="flex flex-col items-center space-y-6">
    <!-- Parent Node -->
    <div class="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md">
      {{ organization.name }}
    </div>

    <!-- Child Nodes -->
    <div class="flex space-x-4">
      <div
        v-for="(child, index) in organization.children"
        :key="index"
        class="flex flex-col items-center space-y-4"
      >
        <div class="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-md">
          {{ child.name }}
        </div>

        <!-- Subchildren -->
        <div
          v-if="child.children"
          class="flex space-x-4"
        >
          <div
            v-for="(subchild, subIndex) in child.children"
            :key="subIndex"
            class="bg-yellow-500 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            {{ subchild.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const organization = {
  name: "CEO",
  children: [
    {
      name: "Manager 1",
      children: [
        { name: "Team Lead 1" },
        { name: "Team Lead 2" },
      ],
    },
    {
      name: "Manager 2",
      children: [
        { name: "Team Lead 3" },
        { name: "Team Lead 4" },
      ],
    },
  ],
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
