<script setup>
import ProfileCard from "@/components/ProfileCard.vue";
import { ref, computed } from "vue";

const staffData = ref([
  {
    id: 1,
    profile: "/images/mpm.jpg",
    name: "Mariel Makinano",
    position: "Provincial Director",
    level: "top",
  },
  {
    id: 2,
    profile: "/images/mgms.jpg",
    name: "Mary Grace Sabuero",
    position: "Science Research Specialist II",
    level: "middle",
  },
  {
    id: 3,
    profile: "/images/melr.jpg",
    name: "Mildred Eileen Ronsable",
    position: "Science Research Specialist II",
    level: "middle",
  },
  {
    id: 4,
    profile: "/images/rjit.jpg",
    name: "Rey Jeeve Tambole",
    position: "Science Research Specialist I",
    level: "middle",
  },
  {
    id: 5,
    profile: "/images/jab.jpg",
    name: "Joverth Butcon, Jr.",
    position: "Project Technical Assistant II",
    level: "middle",
  },
  {
    id: 6,
    profile: "/images/joa.jpg",
    name: "Jovan Agbu",
    position: "Project Technical Assistant II",
    level: "bottom",
  },
  {
    id: 7,
    profile: "/images/sqy.jpg",
    name: "Stephen Yecyec",
    position: "Project Technical Assistant I",
    level: "bottom",
  },
  {
    id: 8,
    profile: "/images/jdc.jpg",
    name: "Julius Cagampang",
    position: "Project Technical Assistant I",
    level: "bottom",
  },
  {
    id: 9,
    profile: "/images/vtd.jpg",
    name: "Vaneza dela Torre",
    position: "Project Technical Assistant I",
    level: "bottom",
  },
  {
    id: 10,
    profile: "/images/rha.jpg",
    name: "Roger Abucejo, Jr.",
    position: "Administrative Support Staff",
    level: "bottom",
  },
]);

const topStaff = computed(() => staffData.value.filter((staff) => staff.level === "top"));
const middleStaff = computed(() =>
  staffData.value.filter((staff) => staff.level === "middle")
);
const bottomStaff = computed(() =>
  staffData.value.filter((staff) => staff.level === "bottom")
);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center py-2 lg:py-0 h-fit lg:h-[calc(100vh-105px-100px)]"
  >
    <!-- Top Level -->
    <div
      v-for="staff in topStaff"
      :key="staff.id"
      class="text-center flex flex-col items-center"
    >
      <ProfileCard
        :to="`/${staff.id}`"
        :profile="staff.profile"
        :name="staff.name"
        :position="staff.position"
      />
    </div>

    <div class="w-full max-w-4xl px-1">
      <!-- Middle Level -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
        <div
          v-for="staff in middleStaff"
          :key="staff.id"
          class="text-center flex flex-col items-center"
        >
          <ProfileCard
            :to="`/${staff.id}`"
            :profile="staff.profile"
            :name="staff.name"
            :position="staff.position"
          />
        </div>
      </div>

      <!-- Bottom Level -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1 mt-1"
      >
        <div
          v-for="staff in bottomStaff"
          :key="staff.id"
          class="text-center flex flex-col items-center"
        >
          <ProfileCard
            :to="`/${staff.id}`"
            :profile="staff.profile"
            :name="staff.name"
            :position="staff.position"
          />
        </div>
      </div>
    </div>
  </div>
</template>
