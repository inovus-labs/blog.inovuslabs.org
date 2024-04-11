<template>
  <DashboardLayout>
    <div class="trix-component">

      <div class="p-8 flex gap-10 w-full">

        <TrixComponent :id="id" @dataFromTrix="getDataFromTrix"></TrixComponent>
        <div v-html="textA" class="border border-gray-300 p-4 w-1/2"></div>

      </div>

    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import TrixComponent from "@/components/admin/TrixComponent.vue";
export default {
  components: {
    DashboardLayout,
    TrixComponent
  },
  data() {
    return {
      textA: "",
      id: "A"
    };
  },
  methods: {
    getDataFromTrix: function (data) {
      this.textA = data;
    }
  }
};
</script>


<style>
.trix-component {
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

  blockquote {
    border-left: 4px solid #eaeaea;
    padding-left: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
}
</style>