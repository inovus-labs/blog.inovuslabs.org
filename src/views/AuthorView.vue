<template>
    <Navbar/>

    <div class="p-8 mx-auto max-w-screen-xl mt-9 lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
        <template v-for="author in users" :key="author">
            <AuthorCard
               :author="author"
            />
        </template>
    </div>
    </div>

</template>

<script>
import Navbar from '@/components/reusable/Navbar.vue'
import AuthorCard from '@/components/AuthorCard.vue'
import Footer from '@/components/reusable/Footer.vue'
import { getAuthors } from '@/API/index.js';

export default{
    name: 'AuthorView',
    components: {
        Navbar,
        Footer,
        AuthorCard
    },
    data(){
        return {
            users: [],
        }
    },
    async mounted() {
        await getAuthors().then((data) => {
            this.users = data.users;
        })
    }
    
}

</script>