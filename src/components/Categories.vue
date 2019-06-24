<template>
  <div class="category">
    <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 d-lg-none" href="#"><i class="fa fa-bars"></i> </a>
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
                                              <tr>
                                                <th scope="row">1</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1544587210-11e5605f9c86.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                    </td>
                                                <td>Birthdays</td>
                                                <td>10</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim odio...</td>
                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Category
                                                        </a>
                                                    </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">2</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1544587210-11e5605f9c86.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                    </td>
                                                <td>Weddings</td>
                                                <td>12</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim odio...</td>
                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Category
                                                        </a>
                                                    </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">3</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1544587210-11e5605f9c86.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                    </td>
                                                <td>Occations</td>
                                                <td>6</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, enim odio...</td>
                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Category
                                                        </a>
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
import Footer from "@/components/Footer.vue";
export default {
  name: "Categories",
  components: {
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
