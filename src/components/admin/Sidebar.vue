
<template>

    <aside class="fixed top-0 left-0 z-40 w-72 h-screen pt-16 transition-transform -translate-x-full bg-gray-50 border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidenav" id="drawer-navigation">
        <div class="overflow-y-auto py-5 px-3 h-full bg-gray-50 dark:bg-gray-800">

            <ul class="space-y-2">
                <template v-for="item in navItems">

                    <template v-if="item.children">
                        <li>

                            <button type="button" class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" @click="openNav(item)">
                                <span v-html="item.icon"></span>
                                <span class="flex-1 ml-3 text-left whitespace-nowrap"> {{ item.name }} </span>
                                <svg aria-hidden="true" :class="{'rotate-180': item.open}" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>

                            <ul v-if="item.open" class="space-y-1 my-2">
                                <template v-for="child in item.children">
                                    <li>
                                        <a :href="child.link" class="flex items-center px-2 py-1.5 pl-11 w-full text-base font-medium text-gray-500 rounded group hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" :class="{'bg-gray-100 dark:bg-gray-700': currentRoute === child.link}">
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap"> {{ child.name }} </span>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                            
                        </li>
                    </template>

                    <template v-else>
                        <li>
                            <template v-if="item.active">
                                <a :href="item.link" class="flex items-center p-2 text-base font-medium text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" :class="{'bg-gray-100 dark:bg-gray-700': currentRoute === item.link}">
                                    <span v-html="item.icon"></span>
                                    <span class="ml-3"> {{ item.name }} </span>
                                </a>
                            </template>
                            <template v-else>
                                <button class="w-full flex items-center p-2 text-base font-medium cursor-not-allowed text-gray-400 rounded dark:text-gray-500 group">
                                    <span v-html="item.icon"></span>
                                    <span class="ml-3"> {{ item.name }} </span>
                                </button>
                            </template>
                        </li>
                    </template>

                </template>
            </ul>
            
        </div>
    </aside>

</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                openedItem: null,
                currentRoute: null,
                navItems: [
                    {
                        name: 'Overview',
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z" /></svg>`,
                        link: '/',
                        active: false,
                    },
                    {
                        name: 'Manage Posts',
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" /></svg>`,
                        open: true,
                        children: [
                            {
                                name: 'Create Post',
                                link: '/admin/editor/post',
                                active: true,
                            },
                            {
                                name: 'View Posts',
                                link: '/admin/posts',
                                active: true,
                            }

                        ]
                    },
                    {
                        name: 'Members',
                        icon: `<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" /></svg>`,
                        link: '/admin/users',
                        active: true,
                    },
                    {
                        name: 'Tags',
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" /></svg>`,
                        link: '/admin/tags',
                        active: false,
                    }
                ],
            }
        },

        methods: {
            openNav(item) {
                if (this.openedItem && this.openedItem !== item) {
                    this.openedItem.open = false;
                }
                item.open = !item.open;
                this.openedItem = item;
            },
        },

        mounted() {
            this.currentRoute = window.location.pathname;

            if (this.currentRoute === '/nanodegree' || this.currentRoute === '/projects' || this.currentRoute === '/blogs' || this.currentRoute === '/inora') {
                this.navItems[4].open = true;
            }

            if (this.currentRoute === '/socials' || this.currentRoute === '/teams' || this.currentRoute === '/news' || this.currentRoute === '/reports' || this.currentRoute === '/testimonials' || this.currentRoute === '/stories') {
                this.navItems[3].open = true;
            }
        },

    };
</script>