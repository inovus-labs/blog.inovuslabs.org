<template>
    <Navbar/>

    <div class="p-8 mx-auto max-w-screen-xl mt-9 lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
        <template v-for="author in Authors" :key="author">
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

export default{
    name: 'AuthorView',
    components: {
        Navbar,
        Footer,
        AuthorCard
    },
    data(){
        return {
            Authors: [
            {
                name: "Abhishek V Gopal",
                domain: "Frontend Developer",
                blogCount: "2",
                
            },{
                name: "Badhusha Shaji",
                domain: "Frontend Developer",
                blogCount: "2",
            },{
                name: "Arjun Krishna",
                domain: "Software Developer",
                blogCount: "10",
            },{
                name: "Arjun A Acharry",
                domain: "UI/UX Developer",
                blogCount: "10",
            }
        ]
        }
    }
    
}

</script>