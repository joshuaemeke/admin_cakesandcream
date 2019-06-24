<template>
  <div class="order">
    <Orders />
  </div>
</template>

<script>
// @ is an alias to /src
import Orders from "@/components/Orders.vue";

export default {
  name: "order",
  components: {
    Orders
  }
};
</script>
