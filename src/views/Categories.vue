<template>
  <div class="category">
    <Categories />
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from "@/components/Categories.vue";

export default {
  name: "category",
  components: {
    Categories
  }
};
</script>
