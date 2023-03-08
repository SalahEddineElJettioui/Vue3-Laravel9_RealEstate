<template>
<div>
    <span class="font-bold">{{ listing.beds }} </span>  beds 
    &nbsp;<span class="text-gray-300">|</span> 
    &nbsp;<span class="font-bold">{{ listing.baths }} </span>  baths
    &nbsp;<span class="text-gray-300">|</span>
    &nbsp;<span class="font-bold">{{ listing.area }} </span>  m²
</div>
</template>

<script setup>
defineProps({
    listing: Object,
})
</script>