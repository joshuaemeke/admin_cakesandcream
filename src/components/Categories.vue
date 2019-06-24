<template>
  <div class="category">
    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 d-lg-none" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h3 class="d-none d-lg-inline-block">Dashboard</h3>
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
          <div class="col-lg-12">
            <div class="ibox">
              <div class="ibox-title">
                <h3>Categories</h3>
                <div class="ibox-tools">
                  <a href="#" data-toggle="modal" data-target="#newCategoryModal">
                    <i class="fa fa-link text-primary"></i>
                    <span class="d-none d-sm-inline">New</span> Category
                  </a>
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content pb-0" style="padding-top: 20px">
                <div class="ibox-content">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Thumbnail</th>
                        <th scope="col">Category name</th>
                        <th scope="col">Product Count</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(products, index) in product" :key="products._id">
                        <th scope="row">{{index}}</th>
                        <td style="width: 30%">
                          <img
                            class="img-fluid"
                            v-for="(images,key,index) in products"
                            :key="index"
                            :src="images.url"
                            width="20%"
                          >
                        </td>
                        <td>{{products.name}}</td>
                        <td>{{product.length}}
                        </td>

                        <td>
                          {{products.description}}
                        </td>
                        
                        <td>
                          <router-link :to="{path: 'Edit-Product/'+products._id }">
                            <i class="fa fa-link text-primary"></i>
                            <span class="d-none d-sm-inline">Edit</span> Category
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
import axios from "axios";
import Footer from "@/components/Footer.vue";
export default {
  name: "Categories",
  components: {
    Footer
  },
  data() {
    return {
      product: [],
      counts:'',
      AuthStr: JSON.parse(localStorage.getItem("jwt")),
      UserStr: JSON.parse(localStorage.getItem("user")),
      message: ""
    };
  },
  mounted() {
    axios
      .get("https://damp-forest-94671.herokuapp.com/products/categories", {
        headers: { Authorization: this.AuthStr }
      })
      .then(response => {
        localStorage.getItem("user", JSON.stringify(this.UserStr));
        localStorage.getItem("jwt", JSON.stringify(this.AuthStr));
        console.log(JSON.stringify(this.AuthStr));
        this.product = response.data;
        this.counts = this.product.length;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
