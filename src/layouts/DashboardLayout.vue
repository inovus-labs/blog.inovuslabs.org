
<template>
    <section class="min-h-screen bg-white dark:bg-gray-900">

        <Navbar />

        <Sidebar />

        <main class="p-4 md:ml-72 h-auto pt-24">

            <slot />

        </main>

    </section>
</template>

<script>
    import Navbar from '@/components/admin/Navbar.vue';
    import Sidebar from '@/components/admin/Sidebar.vue';

    export default {
        name: 'DashboardLayout',
        components: { 
            Navbar,
            Sidebar
        },
    }
</script>

<style>
    ::-webkit-scrollbar {
        display: none;
    }
</style>