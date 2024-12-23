<script setup>
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiChat1Line } from '@remixicon/vue'

const socialLinks = [
  {
    href: 'https://www.facebook.com/dostsdn',
    icon: RiFacebookLine,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/dostsdn',
    icon: RiInstagramLine,
    label: 'Instagram',
  },
  {
    href: 'mailto:dost.sdn@caraga.dost.gov.ph',
    icon: RiMailLine,
    label: 'Email',
  },
  {
    href: 'tel:+1234567890',
    icon: RiChat1Line,
    label: 'Phone',
  },
]
</script>

<template>
  <footer class="bg-gray-800 text-white py-3 max-h-[100px] min-h-[100px]">
    <div class="container mx-auto text-center">
      <p class="text-sm mb-2">Connect with us</p>
      <div class="flex justify-center gap-6">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-2xl hover:text-blue-500 transition-colors"
          :aria-label="link.label"
        >
          <component :is="link.icon" />
        </a>
      </div>
      <p class="text-xs mt-2">
        &copy; {{ new Date().getFullYear() }} DOST Caraga, PSTO-SDN. All rights reserved.
      </p>
    </div>
  </footer>
</template>
