<template>
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
                        <h3>All Products</h3>
                        <div class="ibox-tools">
                                <a href="#" data-toggle="modal" data-target="#newProductModal">
                                        <i class="fa fa-link text-primary"></i>
                                        <span class="d-none d-sm-inline">New</span> Product
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
                                                <th scope="col">ProductThumbnail</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Flavor</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th scope="row">1</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1541702107-8723bc4a26ca.jpg" alt="product-image" class="img-fluid img-thumbnail" width="20%">
                                                    </td>
                                                <td>Georgous 40</td>
                                                <td>
                                                    <ul>
                                                        <li>13</li>
                                                        <li>15</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li>Chocolate</li>
                                                        <li>Butter Cream</li>
                                                    </ul>
                                                </td>
                                                <td>&#8358;45,800</td>

                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Product
                                                        </a>
                                                    </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">2</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1542007920-992d2c424d09.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                    </td>
                                                <td>Cascading Flower</td>
                                                <td>
                                                        <ul>
                                                                <li>13</li>
                                                                <li>15</li>
                                                            </ul>
                                                </td>
                                                <td>
                                                        <li>Chocolate</li>
                                                        <li>Butter Cream</li>
                                                </td>
                                                <td>&#8358;20,000</td>
                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Product
                                                        </a>
                                                    </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">3</th>
                                                <td style="width: 30%">
                                                        <img src="img/photo-1542210435-59f90e156f10.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                    </td>
                                                <td>Golden Chocolate</td>
                                                <td>
                                                        <ul>
                                                                <li>13</li>
                                                                <li>15</li>
                                                            </ul>
                                                </td>
                                                <td>
                                                        <ul>
                                                                <li>Chocolate</li>
                                                                <li>Butter Cream</li>
                                                            </ul>
                                                </td>
                                                <td>&#8358;25,900</td>
                                                <td>
                                                        <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">Edit</span> Product
                                                        </a>
                                                    </td>
                                              </tr>
                                              <tr>
                                                    <th scope="row">4</th>
                                                    <td style="width: 30%">
                                                            <img src="img/photo-1543287920-26349b5b1376.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                        </td>
                                                    <td>Elegant Roses</td>
                                                    <td>
                                                            <ul>
                                                                    <li>13</li>
                                                                    <li>15</li>
                                                                </ul>
                                                    </td>
                                                    <td>
                                                            <ul>
                                                                    <li>Chocolate</li>
                                                                    <li>Butter Cream</li>
                                                                </ul>
                                                    </td>
                                                    <td>&#8358;126,000</td>
                                                    <td>
                                                            <a href="#" data-toggle="modal" data-target="#myModal">
                                                                <i class="fa fa-link text-primary"></i>
                                                                <span class="d-none d-sm-inline">Edit</span> Product
                                                            </a>
                                                        </td>
                                                  </tr>
                                                  <tr>
                                                        <th scope="row">5</th>
                                                        <td style="width: 30%">
                                                                <img src="img/photo-1543864097-5c12da7f95ac.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                            </td>
                                                        <td>Golden Stensil</td>
                                                        <td>
                                                                <ul>
                                                                        <li>13</li>
                                                                        <li>15</li>
                                                                    </ul>
                                                        </td>
                                                        <td>
                                                                <ul>
                                                                        <li>Chocolate</li>
                                                                        <li>Butter Cream</li>
                                                                    </ul>
                                                        </td>
                                                        <td>&#8358;19,500</td>
                                                        <td>
                                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                                    <i class="fa fa-link text-primary"></i>
                                                                    <span class="d-none d-sm-inline">Edit</span> Product
                                                                </a>
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <th scope="row">6</th>
                                                            <td style="width: 30%">
                                                                    <img src="img/photo-1544587210-11e5605f9c86.jpg" alt="product-image" class="img-thumbnail" width="20%">
                                                                </td>
                                                            <td>Classic Gold leaf</td>
                                                            <td>
                                                                    <ul>
                                                                            <li>13</li>
                                                                            <li>15</li>
                                                                        </ul>
                                                            </td>
                                                            <td>
                                                                    <ul>
                                                                            <li>Chocolate</li>
                                                                            <li>Butter Cream</li>
                                                                        </ul>
                                                            </td>
                                                            <td>&#8358;65,000</td>
                                                            <td>
                                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                                        <i class="fa fa-link text-primary"></i>
                                                                        <span class="d-none d-sm-inline">Edit</span> Product
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
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Products",
  components: {
    Footer
  }
};
</script>
