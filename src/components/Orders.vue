<template>
  <div class="order">
    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 d-lg-none" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h3 class="d-none d-lg-inline-block">Orders</h3>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
              <a class="dropdown-toggle user-profile" data-toggle="dropdown" href="#">
                <i class="fa fa-user-circle"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <span class="block font-bold">Admin 1</span>
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="login.html">Settings</a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="login.html">Log out</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="wrapper wrapper-content">
        <div class="row">
          <div class="col-12">
            <div class="ibox mb-2">
              <div class="ibox-content">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="form-group mb-lg-0">
                      <label class="control-label" for="product_name">Start Date</label>
                      <input
                        type="date"
                        id="startDate"
                        name="product_name"
                        value
                        data-bind="value:startDate"
                        placeholder="Start Date"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="form-group mb-0">
                      <label class="control-label" for="product_name">End Date</label>
                      <input
                        type="date"
                        id="endDate"
                        name="product_name"
                        value
                        data-bind="value:endDate"
                        placeholder="End date"
                        class="form-control"
                      >
                    </div>
                  </div>

                  <div class="col-sm-2">
                    <div class="form-group mb-0">
                      <label class="control-label" for="product_name">&nbsp;</label>
                      <button
                        class="btn btn-success btn-block py-2"
                        data-bind="click:filterDate"
                      >Filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Logs View -->
        <div class="row">
          <div class="col-lg-12">
            <div class="ibox">
              <div class="ibox-title">
                <h3>All Order</h3>

                <div class="ibox-tools">
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content">
                <table class="table sortable table-striped" id="example">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Order ID</th>
                      <th scope="col">Status</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount(&#8358;)</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order,index) in orders" :key="order.order_id">
                      <td>{{index }}</td>
              <td>{{ order.order_id }}</td>
              <td><span class="badge badge-warning"></span></td>
              <td>{{ order.customer_name }}</td>
              <td>&#8358;{{ order.grandTotal }}</td>
              <td>{{ new Date(order.createdAt).toDateString()}}</td>
              
              <!-- <b-button type="button" variant="primary" @click="primaryModal = true" class="mr-1">Show</b-button> -->
              <td>
                <!-- <b-button @click="remove(order._id)" class="mr-1">Cancel</b-button> -->
                <router-link :to="{path: 'ViewOrder/'+ order._id }"><i class="fa fa-link text-primary"></i> View Order</router-link>
              </td>
            </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "Orders",
  components: {
    Footer
  },
   data() {
    return {
      orders: [],
      AuthStr: JSON.parse(localStorage.getItem("jwt")),
      UserStr: JSON.parse(localStorage.getItem("user")),
      message: ""
    };
  },
 mounted() {
    axios
      .get("http://damp-forest-94671.herokuapp.com/orders", {
        headers: { Authorization: this.AuthStr }
      })
      .then(response => {
        localStorage.getItem("user", JSON.stringify(this.UserStr));
        localStorage.getItem("jwt", JSON.stringify(this.AuthStr));
        console.log(JSON.stringify(this.AuthStr));
        this.orders = response.data.order;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
