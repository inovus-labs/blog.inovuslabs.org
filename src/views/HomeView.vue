<template>
  <Navbar />

  <div class="py-8 mx-auto max-w-screen-xl mt-8 text-center lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">

      <template v-for="post in posts" :key="post">
        <div class="relative rounded-lg overflow-hidden h-80">
          <div class="rounded-lg absolute">
            <!-- <img :src="post.feature_image" :alt="post.title" /> -->
            <img src="/assets/create-a-realistic-painting-or-digital-artwork-that-captures-the-emotional-depth-of-the-laughter-ma-118286241.png" alt="img">
          </div>
          <div class="bg-black bg-opacity-10 flex flex-col items-center justify-end pb-4 relative">
            <h1 class="text-white text-xl font-bold">{{ post.title }}</h1>
            <p class="text-gray-100 text-sm">{{ post.slug }}</p>
          </div>
        </div>
      </template>

    </div>
  </div>

</template>
<script>
import Navbar from '@/components/Navbar.vue';
import { getPosts } from '@/API/index.js';

export default {
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    this.posts = await getPosts();
  }
}

</script>
