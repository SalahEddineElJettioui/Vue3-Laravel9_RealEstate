<template>
  <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
    <Box class="md:col-span-7 flex items-center w-full">
      <div class="w-full text-center font-medium text-gray-500">No images</div>
    </Box>
    <div class="md:col-span-5 flex flex-col gap-4">
      <Box>
        <template #header>
          Basic info
        </template>
        <Price :price="listing.price" class="text-2xl font-bold" />
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress :listing="listing" class="text-gray-500" />
      </Box>

      <Box>
        <template #header>
          Monthly payment
        </template>
        Make an offer
        <div>
          <label class="label">Interest rate ({{ InterstRate }}%)</label>
          <input v-model.number="InterstRate" type="range" min="0.1" max="30" step="0.1" class="bg-gray-200 w-full h-4 rounded-lg appearance-none cursor-pointer">

          <label class="label">Duration ({{ Duration }} years)</label>
          <input v-model.number="Duration" class="bg-gray-200 w-full h-4 rounded-lg appearance-none cursor-pointer" type="range">

          <div class="text-gray-600 mt-2">
              <div class="text-gray-400">Your Monthly payment</div>
                <Price :price="MonthlyPayment" class="text-3xl" />
              
          </div>
          <div class="mt-2 text-gray-500">
            <div class="flex justify-between">
              <div>Total paid</div>
              <div>
                <Price :price="TotalPaid" class="font-medium" />
              </div>
            </div>
            <div class="flex justify-between">
              <div>Principal paid</div>
              <div>
                <Price :price="listing.price" class="font-medium" />
              </div>
            </div>
            <div class="flex justify-between">
              <div>Interest paid</div>
              <div>
                <Price :price="TotalInterst" class="font-medium" />
              </div>
            </div>
          </div>

        </div>
      </Box>
    </div>
  </div>
</template>

<script setup>
import ListingAddress from '@/Components/ListingAddress.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import Box from '@/Components/UI/Box.vue'
import MainLayout from '@/Layouts/MainLayout.vue'
import {ref} from 'vue'
import  { useMonthlyPayment }  from '@/Composable/useMonthlyPayment'


const InterstRate = ref(2.5)
const Duration = ref(2.5)

const props = defineProps({
  listing: Object,
})

const { MonthlyPayment, TotalPaid, TotalInterst } = useMonthlyPayment(
  props.listing.price, InterstRate, Duration,
  )
</script>

<script>
export default{
  layout: MainLayout
}
</script>