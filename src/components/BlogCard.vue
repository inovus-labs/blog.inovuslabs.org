<template>

    <div class="relative rounded-lg overflow-hidden h-max">
        <div class="rounded-lg relative">
            <img :src="post.feature_image" :alt="post.title" class="h-96 w-full object-cover" />
        </div>
        <div class="absolute inset-0 flex flex-col text-left justify-end post-overlay">
            <h1 class="text-white p-5 text-left text-xl font-bold leading-snug post-title">{{ post.title }}</h1>
            <p class="text-xs text-white font-bold px-5 py-3 text-left">READ MORE</p>
        </div>
    </div>

</template>


<script>
export default {
    name: 'BlogCard',
    props: {
        post: {
            type: Object,
        }
    }
}
</script>


<style>
.post-title {
    border-bottom: 1px solid hsla(0, 0%, 100%, .2);
}
</style>