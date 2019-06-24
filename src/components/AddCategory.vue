<template>
  <div class="order">
    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 d-lg-none" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h3 class="d-none d-lg-inline-block">New category</h3>
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
                <h3>Add new category</h3>

                <div class="ibox-tools">
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                </div>
              </div>
              <div class="ibox-content">
                <div class="animated fadeIn">
                  <div class="card">
                    <div class="card-header">Categories</div>
                    <div class="card-body">
                      <div id="message" v-if="message">{{message}}</div>
                      <form @submit="submit">
                        <div class="form-group">
                          <label>Name</label>
                          <b-input type="text" name="name" v-model="form_data.name"></b-input>
                        </div>
                        <div class="form-group">
                          <label>Description</label>
                          <b-input type="text" name="description" v-model="form_data.description"></b-input>
                        </div>
                        <b-button type="submit">Submit</b-button>
                      </form>
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
        name: "my test",
        description: ""
      },
      AuthStr: JSON.parse(localStorage.getItem("jwt")),
      UserStr: JSON.parse(localStorage.getItem("user")),
      message: ""
    };
  },
  name: "Categories",
  methods: {
    submit() {
      /* console.log(this.name); */
      console.log(this.form_data);
      /* form_data = {
          name: this.name,
          description: this.description
        } */
      //console.log(JSON.stringify(data))
      axios
        .post(
          "https://damp-forest-94671.herokuapp.com/products/new-category",
          this.form_data,
          {
            headers: { Authorization: this.AuthStr }
          }
        )
        .then(response => {
          localStorage.getItem("user", JSON.stringify(this.UserStr));
          localStorage.getItem("jwt", JSON.stringify(this.AuthStr));
          console.log(JSON.stringify(this.AuthStr));
          this.responseData = response.data;
          this.message = "Successfully added new category";
        })
        .catch(error => {
          this.message = "Category already exists";
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
</style>


