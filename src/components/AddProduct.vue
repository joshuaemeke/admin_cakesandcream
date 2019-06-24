<template>
<div class="order">
    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 d-lg-none" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h3 class="d-none d-lg-inline-block">New product</h3>
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
        
        <!-- Logs View -->
        <div class="row">
          <div class="col-lg-12">
            <div class="ibox">
              <div class="ibox-title">
                <h3>Add new</h3>

                <div class="ibox-tools">
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content">
                <div class="animated fadeIn">
    <div class="card">
      <div class="card-header">Products</div>
      <div class="card-body table-responsive">
        <div id="message" v-if="message">{{message}}</div>
        <div id="errormessage" v-else-if="errormessage">{{errormessage}}</div>

        <!-- Form Start here -->
        <form @submit.prevent="submit()" enctype="multipart/form-data">
          <table class="table">
            <tr>
              <td>
                <p>Image Upload</p>
              </td>
              <td>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
              </td>
            </tr>
            <tr>
              <td>
                <p>Name</p>
              </td>
              <td>
                <b-input type="text" name="name" v-model="form_data.name"></b-input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Size</p>
              </td>
              <td>
                <b-button
                  class="btn btn-primary"
                  @click.prevent="addSize"
                  type="button"
                  variant="primary"
                >Add New Size</b-button>
              </td>
            </tr>
            <tr v-for="(val, index) in form_data.size" :key="val._id">
              <td>
                <b-input type="number" v-model="val.value" name="size"></b-input>
              </td>
              <td>
                <b-button v-on:click="removeSize(index);" variant="danger" type="button">Remove</b-button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Flavor</p>
              </td>
              <td>
                <b-button
                  class="btn"
                  @click.prevent="addFlavor"
                  variant="primary"
                  type="button"
                >Add New Flavor</b-button>
              </td>
              <!-- <td>
                <b-input type="text" name="flavor" placeholder="flavor" v-model="form_data.flavor"></b-input>
              </td>-->
            </tr>
            <tr v-for="(rows, index) in form_data.flavor" :key="rows._id">
              <td>
                <b-input type="text" v-model="rows.name" name="flavor"></b-input>
              </td>
              <td>
                <b-button v-on:click="removeFlavor(index);" variant="danger" type="button">Remove</b-button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Description</p>
              </td>
              <td>
                <b-textarea
                  name="description"
                  placeholder="product description"
                  v-model="form_data.description"
                ></b-textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p>Price(#)</p>
              </td>
              <td>
                <b-input
                  type="text"
                  name="price"
                  placeholder="product price"
                  v-model="form_data.price"
                ></b-input>
              </td>
            </tr>
            <tr>
              <td>
                <p>Category</p>
              </td>
              <td>
                <b-input
                  type="text"
                  name="category"
                  placeholder="product category"
                  v-model="form_data.category"
                ></b-input>
              </td>
            </tr>
            <tr>
              <td>
                <!-- <p>Category</p> -->
              </td>
              <td>
                <b-button type="submit" variant="primary">Submit</b-button>
              </td>
            </tr>
          </table>
        </form>
        <!-- Form Ends here -->
        <!-- Table END -->
      </div>
    </div>
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

<style>
textarea {
  width: 100%;
}
</style>
<script>
import $ from "jquery";
import axios from "axios";
import FileUpload from "vue-upload-component";
export default {
  data() {
    return {
      form_data: {
        name: "",
        size: [],
        description: "",
        flavor: [],
        price: "",
        category: "",
        productThumbnail: []
      },
      productThumbnail: [],
      AuthStr: JSON.parse(localStorage.getItem("jwt")),
      UserStr: JSON.parse(localStorage.getItem("user")),
      message: "",
      errormessage: ""
    };
  },
  name: "Products",
  components: {
    FileUpload
  },
  methods: {
    addSize() {
      console.log("size is here");
      /*this.sizeElemList.push({
      	val : ''
      })*/ this.form_data.size.push(
        {}
      );
    },
    removeSize(val) {
      this.form_data.size.splice(val, 1);
    },
    addFlavor() {
      console.log("flavor is here");
      /*this.sizeElemList.push({
      	val : ''
      })*/ this.form_data.flavor.push(
        {}
      );
    },
    removeFlavor(rows) {
      this.form_data.flavor.splice(rows, 1);
    },
    handleFileUpload() {
      this.form_data.productThumbnail = this.$refs.file.files[0];
      console.log(this.form_data.productThumbnail);
    },

    submit(file, component) {
      // var file_data = $('input[type="file"]')[0].files;
      // // this.form_data.append("productThumbnail", this.$refs.myFiles.files[0]);
      let data = new FormData();

      data.append("productThumbnail", this.$refs.file.files[0]);
      axios
        .post(
          "http://damp-forest-94671.herokuapp.com/products/new-product",
          this.form_data,
          {
            headers: {
              Authorization: this.AuthStr
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.message = response.data.message;
        })
        .catch(error => {
          this.errormessage = error.response.data.message;
          console.log(error.response.data.message);
        });
    }
  }
};
</script>
<style>
textarea {
  width: 100%;
}
div#message {
  background-color: #4dbd74;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  font-size: 13px;
  font-weight: bold;
  font-family: sans-serif;
}
div#errormessage {
  background-color: #ff9494;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  font-size: 13px;
  font-weight: bold;
  font-family: sans-serif;
}
</style>

