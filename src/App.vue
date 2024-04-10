
<template>
  <RouterView />
</template>


<script>
  import { RouterView } from 'vue-router'
</script>


<style lang="scss">
  @import "@/scss/main.scss";


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
  