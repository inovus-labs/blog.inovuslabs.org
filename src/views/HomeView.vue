<template>
  <Navbar />

  <div class="py-8 mx-auto max-w-screen-xl mt-8 text-center lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">

      <template v-for="post in posts" :key="post">
        <a :href="blogPath(post.slug)">
        <div class="relative mx-2 rounded-lg overflow-hidden h-max">
          <div class="rounded-lg relative">
            <img :src="post.feature_image" :alt="post.title" class="object-fit-cover h-96 w-full" />
            <!-- <img :src="getImageUrl(post.feature_image);" :alt="post.title" class="object-fit-cover h-96 w-full" />
            <img :src="getImageUrl(post.feature_image);"/> -->
          </div>
          <div class="absolute inset-0 bg-primary pl-2 pr-2 bg-opacity-40 flex flex-col items-center text-left justify-end pb-4">
            <h1 class="text-white text-left text-lg font-bold">{{ post.title }}</h1>
            <hr class="h-px bg-white relative border-0 dark:bg-gray-700">
            <p class="text-white left-0 text-left">Read More</p>
          </div>  
        </div>
       </a>
      </template>

      <!-- <div>
        <h1>{{ posts.title }}</h1>
      </div> -->

    </div>
  </div>

  <Footer />

</template>
<script>
import Navbar from '@/components/reusable/Navbar.vue';
import Footer from '@/components/reusable/Footer.vue';
import { getPosts } from '@/API/index.js';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    await getPosts().then((data) => {
      this.posts = data.posts;
    })
  },
  methods: {
    blogPath(slug) {
            return "/" + slug
        },
  }
}

</script>
