 <template>
  <header class="border-b bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-900 w-full">
    <div class="container mx-auto">
      <nav class="p-4 flex items-center justify-between">
        <div class="text-lg font-medium">
           <Link :href="route('listing.index')">Listings</Link>
        </div>
        <div class="text-xl text-indigo-800 dark:text-indigo-300">
        <Link :href="route('listing.index')">Larazillow</Link></div>
        <div class="btn-primary">
          <Link :href="route('listing.create')">new listing</Link>
        </div>
      </nav>
    </div>
  </header>
<main class="container p-4 mx-auto">
  <slot>Default</slot>

</main>  
</template>

<script setup>
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3';
const page = usePage()
</script>

<style scoped>
  .success {
    background-color: green;
    color: white;
  }
</style>