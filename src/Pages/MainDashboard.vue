<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen h-screen">
    <!-- Header -->
    <PageHeader />
    <!-- Main Content -->
    <router-view />
    <!-- Footer -->
    <PageFooter />
  </div>
</template>
