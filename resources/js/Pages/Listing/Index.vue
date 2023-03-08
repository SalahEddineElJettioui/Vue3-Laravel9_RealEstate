<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Box v-for="listing in listings" :key="listing.id">
      <div>
    <Link :href="route('listing.show',{listing: listing.id})">
      <Price :price="listing.price" class="text-2xl font-bold" />
      <ListingSpace :listing="listing" class="text-lg"/>
      <ListingAddress :listing="listing" class="text-gray-500"/>
    </Link>
       </div>
       <div>
    <Link :href="route('listing.edit',{listing: listing.id})">Edit</Link>
       </div>
       <Link :href="route('listing.destroy',{listing: listing.id})" method="delete" as="button">Delete</Link>
      </Box> 
    </div>

</template>

<script setup>
import Box from '@/Components/UI/Box.vue';
import {Link} from '@inertiajs/vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
defineProps({
  listings: Array,
})
</script>
<script>
import MainLayout from '@/Layouts/MainLayout.vue';
import ListingSpace from '@/Components/ListingSpace.vue';
import Price from '@/Components/Price.vue';
export default{
    layout: MainLayout,
    components: { ListingSpace, Price }
}
</script>
