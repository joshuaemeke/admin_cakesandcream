<template>
  <div class="customer">
    <Customers />
  </div>
</template>

<script>
// @ is an alias to /src
import Customers from "@/components/Customers.vue";

export default {
  name: "customer",
  components: {
    Customers
  }
};
</script>
