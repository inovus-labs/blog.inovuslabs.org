<template>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg w-96" :src="author.profile_image" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">{{ author.name }}</h5>
        </a>
        <p class="mb-3 font-normal text-left text-light dark:text-gray-400">{{ author.domain }}</p>
        <a href="#" class="inline-flex px-2 py-1 text-sm font-thin text-left text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            No of blogs: {{ author.status }}
        </a>    
    </div>
</div>

</template>
<script>
export default{
    name: 'AuthorCard',
    props: {
        author:{
            type: Object,

        }
    }
}
</script>