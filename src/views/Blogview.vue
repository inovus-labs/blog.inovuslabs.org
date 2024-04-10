<template>
    <Navbar />

    <div class="blog-view">


        <main class="pt-8 px-5 pb-16 lg:pt-16 lg:pb-24 antialiased">
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


    </div>

    


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


<style lang="scss">
.blog-view {

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

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    
    a {
        color: #0070f3;
        text-decoration: none;
        font-weight: 500;
    }

    ul {
        list-style-type: disc;
        margin-left: 1.5rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    }

    ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    }

    li {
        line-height: 1.6;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    
    figure {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        border: 1px solid #eaeaea;
        
        img {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #eaeaea;
        }

        figcaption {
            font-size: 0.875rem;
            color: #999;
            text-align: center;
            margin: 0.5rem;

            p {
                font-size: 0.875rem;
                color: #999;
                text-align: center;
                margin: 0.5rem;
            }
        }
    }

}
</style>