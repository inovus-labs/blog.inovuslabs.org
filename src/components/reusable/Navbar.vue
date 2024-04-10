<template>



  <nav class="bg-white border-b">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" class="flex items-center">
        <img src="/assets/logo.svg" class="lg:h-12 h-10 mr-3" alt="Inovus Labs Logo" />
      </a>


      <button data-collapse-toggle="mega-menu-full" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>


      <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <template v-for="item in navbar">
            
            <a :href="item.link"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
              {{ item.name }}
            </a>
            
          </template>
        </ul>
      </div>


      <template v-if="!isMobile">
        <div class="flex items-center md:order-2 gap-2">
          <button
            class="text-white bg-[#5EACFF] font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 hover:bg-opacity-90 cursor-not-allowed"
            disabled>Subscribe</button>
        </div>
      </template>

    </div>


    <template v-for="item in navbar">
      <template v-if="item.dropdown">

        <div
          class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">

          <template v-for="column in item.dropdown">
            <ul>
              <li v-for="subitem in column">

                <div :class="isMobile && subitem.disabled ? 'hidden' : ''">
                  <div :class="isMobile ? 'border-b border-gray-100 dark:border-gray-700' : ''">

                    <template v-if="subitem.disabled">
                      <p
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 opacity-50 cursor-not-allowed">
                      <div class="font-semibold" :class="{ 'text-primary dark:text-blue-400': subitem.featured }">
                        {{ subitem.name }}
                      </div>
                      <span v-if="!isMobile" class="text-sm text-gray-500 dark:text-gray-400">{{ subitem.description
                        }}</span>
                      </p>
                    </template>

                    <template v-else>
                      <a :href="subitem.link" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold" :class="{ 'text-primary dark:text-blue-400': subitem.featured }">
                          {{ subitem.name }}
                        </div>
                        <span v-if="!isMobile" class="text-sm text-gray-500 dark:text-gray-400">{{ subitem.description
                          }}</span>
                      </a>
                    </template>

                  </div>
                </div>

              </li>
            </ul>
          </template>

        </div>

      </template>
    </template>


  </nav>




</template>


<script>
export default {
  name: 'Navbar',
  props: {
    maintainance: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      deviceWidth: null,
      isMobile: false,
      openDropdown: null,
      navbar: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Tags',
          link: '/tags'
        },
        {
          name: 'Authors',
          link: '/authors'
        }
      ]
    }
  },
  methods: {
    checkDeviceWidth() {
      this.deviceWidth = window.innerWidth;
      if (this.deviceWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    toggleDropdown(name) {
      if (this.openDropdown) {
        const dropdown = document.getElementById(`${this.openDropdown.toLowerCase()}-menu-dropdown`);
        dropdown.classList.add('hidden');
      }
      if (this.openDropdown === name) {
        this.openDropdown = null;
      } else {
        this.openDropdown = name;
        const dropdown = document.getElementById(`${name.toLowerCase()}-menu-dropdown`);
        dropdown.classList.remove('hidden');
      }
    }
  },
  mounted() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

}
</script>


<style>
.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>