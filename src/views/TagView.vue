<template>
    <Navbar />
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <div class="w-full flex items-center justify-center py-4 px-2 md:py-8 flex-wrap">
            <!-- Tags -->
            <div class="mt-24">
                <template v-for="tag in tags" :key="tag">
                    <button type="button"
                        class="border border-secondary rounded-full text-base font-medium px-5 py-2.5  text-center me-3 mb-3"
                        :class="selectedTags === tag ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-secondary hover:text-white'"
                        @click="selectTag(tag)">
                        {{ tag }}
                    </button>
                </template>

                <!-- horizontal line -->
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-1 my-8 bg-primary border-0 rounded dark:bg-gray-700">
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path
                                d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                <!-- Blog card -->

                <div class="py-8 mx-auto max-w-screen-xl mt-8 text-center lg:py-12 lg:px-6">
                    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">

                        <template v-for="post in filteredPosts" :key="post">
                            <div class="relative mx-2 rounded-lg overflow-hidden h-max"
                                v-if="post.slug === 'what-is-the-cyber-world-and-what-are-its-advantages-and-disadvantages'">
                                <div class="rounded-lg relative">
                                    <img :src="post.feature_image" :alt="post.title"
                                        class="object-fit-cover h-96 w-full" />
                                    <!-- <img src="/assets/create-a-realistic-painting-or-digital-artwork-that-captures-the-emotional-depth-of-the-laughter-ma-118286241.png" alt="img"> -->
                                </div>
                                <div
                                    class="absolute inset-0 bg-primary pl-2 pr-2 bg-opacity-40 flex flex-col items-center text-left justify-end pb-4">
                                    <h1 class="text-white text-left text-lg font-bold">{{ post.title }}</h1>
                                    <hr class="h-px bg-white relative border-0 dark:bg-gray-700">
                                    <p class="text-white left-0 text-left">Read More</p>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <Footer />

</template>
<script>
import Navbar from '@/components/reusable/Navbar.vue'
import Footer from '@/components/reusable/Footer.vue'
import { getPosts } from '@/API/index.js';


export default {
    name: 'TagView',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            posts: [],
            "tags": ["Movie", "Enterprenurship", "Psychology", "Science & Technology", "Web Development", "Internet of Things", "Tribal", "Free Thinking", "Current Affairs", "Design Facts", "Basic Electronics", "Environment & Society"]
        }
    },
    async mounted() {
        this.posts = await getPosts();

    },


    computed: {
        filteredPosts() {
            return this.updatePosts();
        }
    },
    methods: {

        async getPosts() {
            let response = await getPosts();
            this.projects = response.posts;
            this.tags = ["All Categories", ...response.tags];
        },

        selectTag(tag) {
            if (tag === "All Categories") {
                this.selectedTags = "All Categories";
            } else {

                if (this.selectedTags === "All Categories") {
                    this.selectedTags = [];
                }

                if (this.selectedTags === tag) {
                    this.selectedTags = "All Categories";
                } else {
                    this.selectedTags = tag;
                }

            }
        },

        updatePosts() {
            if (this.selectedTags === "All Categories") {
                return this.posts;
            } else {
                return this.posts.filter(project => {
                    return posts.tags.some(tag => this.selectedTags.includes(tag));
                });
            }
        }

    }

}
</script>