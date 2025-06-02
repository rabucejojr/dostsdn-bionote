<script setup>
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiChat1Line } from "@remixicon/vue";

const socialLinks = [
  {
    href: "https://www.facebook.com/dostsdn",
    icon: RiFacebookLine,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/dost.sdn",
    icon: RiInstagramLine,
    label: "Instagram",
  },
  {
    href: "mailto:dost.sdn@caraga.dost.gov.ph",
    icon: RiMailLine,
    label: "Email",
  },
  {
    href: "tel:+639123805464",
    icon: RiChat1Line,
    label: "Phone",
  },
];
</script>

<template>
  <div class="p-1 border-gray-300">
    <div class="flex flex-wrap justify-center gap-4 md:gap-6 m-4 md:m-6">
      <a
        v-for="link in socialLinks"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-800 text-2xl md:text-3xl hover:text-blue-500 transition-colors flex items-center gap-2"
        :aria-label="link.label"
      >
        <component :is="link.icon" />
        <span class="text-sm md:text-base">{{ link.label }}</span>
      </a>
    </div>
  </div>
</template>
