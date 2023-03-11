<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Listing v-for="listing in listings" :key="listing.id" :listing="listing">
      </Listing> 
    </div>

</template>

<script setup>
import Listing from './Index/Component/Listing.vue'
defineProps({
  listings: Array,
})
</script>
<script>
import MainLayout from '@/Layouts/MainLayout.vue';
export default{
    layout: MainLayout,
}
</script>
