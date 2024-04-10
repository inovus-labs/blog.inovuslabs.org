<template>
    <Navbar />



    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between mx-auto">
            <div class="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                
                <template v-if="post">

                    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ post.title }}</h1>

                    <template v-if="post.custom_excerpt">
                        <p class="text-[#999] font-normal mt-6 text-xl">{{ post.custom_excerpt }}</p>
                    </template>
                    
                    <template v-if="post.feature_image">
                        <img :src="post.feature_image" :alt="post.title" class="mt-8 w-full h-96 object-cover" />
                    </template>
                    
                    <div class="mt-8" v-html="post.html"></div>
                    
                </template>

            </div>
        </div>
    </main>

    


<Footer />
</template>



<script>
import Navbar from '@/components/reusable/Navbar.vue';
import Footer from '@/components/reusable/Footer.vue';

import { getPostBySlug } from '@/API/index.js';

export default {
    name: 'Blogview',
    data() {
        return {
            post: null,
            tag: null,
            user: null
        }
    },
    components: {
        Navbar,
        Footer
    },

    async mounted() {
        await this.getPostData();
        document.title = this.post.title;
    },

    methods: {
        async getPostData() {
            console.log(this.$route.params.slug);
            await getPostBySlug(this.$route.params.slug).then((data) => {
                this.post = data.post;
                this.tag = data.tag;
                this.user = data.user;
            })
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
}
</script>


<style>
p {
    line-height: 1.6;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
}

h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

a {
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
}
</style>