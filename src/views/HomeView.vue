<template>
  <Navbar />

  <div class="bg-layer">

    <div class="mx-auto max-w-screen-xl py-8 text-center">
      <div class="grid gap-8 mx-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">

        <template v-for="post in posts" :key="post">
          <a :href="post.slug">

            <BlogCard :post="post" />

          </a>
        </template>

      </div>
    </div>
  </div>

  <Footer />
</template>


<script>
import Navbar from '@/components/reusable/Navbar.vue';
import Footer from '@/components/reusable/Footer.vue';
import BlogCard from '@/components/BlogCard.vue';

import { getPosts } from '@/API/index.js';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    BlogCard
  },

  data() {
    return {
      posts: []
    }
  },

  async mounted() {
    await this.getPostData();
  },

  methods: {
    async getPostData() {
      await getPosts().then((data) => {
        this.posts = data.posts.sort((a, b) => {
          return new Date(b.published_at) - new Date(a.published_at);
        });
      })
    }
  }

}
</script>

<style>
.post-overlay {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);
}

.bg-layer {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.35) 100%), url('/public/assets/leaves.png');
}
</style>