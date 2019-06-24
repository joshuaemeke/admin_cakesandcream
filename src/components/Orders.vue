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
                    <!-- <tr>
                                        <th scope="row">1</th>
                                        <td>RH9bS9F9K0-VI</td>
                                         <td><span class="badge badge-danger"></span></td>
                                        <td>Benny</td>
                                        <td>&#8358;102,500</td>
                                        <td>16th May 2019</td>
                                        <td>
                                                <a href="#" data-toggle="modal" data-target="#myModal2">
                                                        <i class="fa fa-link text-primary"></i>
                                                        <span class="d-none d-sm-inline">View</span> Order
                                                    </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>A7K7KChp8J-SL</td>
                                        <td><span class="badge badge-primary"></span></td>
                                        <td>Ope</td>
                                        <td>&#8358;40,000</td>
                                        <td>14th May 2019</td>
                                        <td>
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                        <i class="fa fa-link text-primary"></i>
                                                        <span class="d-none d-sm-inline">View</span> Order
                                                    </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>rx8xNRgBoe-BG	</td>
                                        <td><span class="badge badge-primary"></span></td>
                                        <td>Adeola</td>
                                        <td>&#8358;65,500</td>
                                        <td>5th May 2019</td>
                                        <td>
                                                <a href="#" data-toggle="modal" data-target="#myModal">
                                                        <i class="fa fa-link text-primary"></i>
                                                        <span class="d-none d-sm-inline">View</span> Order
                                                    </a>
                                        </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">4</th>
                                            <td>2KyqSdGOMf-OP</td>
                                             <td><span class="badge badge-warning"></span></td>
                                            <td>olabisi</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal3">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">5</th>
                                            <td>2XuqKm1cW2-OP</td>
                                                <td><span class="badge badge-primary"></span></span></td>
                                            <td>Ikechukwu</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">6</th>
                                            <td>LmYDfgbuE6-SL</td>
                                                <td><span class="badge badge-primary"></span></span></td>
                                            <td>Adeleke</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">7</th>
                                            <td>TNDEEOolUC-BG</td>
                                                <td><span class="badge badge-primary"></span></td>
                                            <td>Christian</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">8</th>
                                            <td>aYRoBK8IFW-VI</td>
                                                <td><span class="badge badge-primary"></span></td>
                                            <td>Ade</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">9</th>
                                            <td>rx8xNRgBoe-BGI</td>
                                                <td><span class="badge badge-primary"></span></td>
                                            <td>Quadri</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <th scope="row">10</th>
                                            <td> A7K7KChp8J-SL</td>
                                                <td><span class="badge badge-primary"></span></td>
                                            <td>Benny</td>
                                            <td>&#8358;102,500</td>
                                            <td>16th May 2019</td>
                                            <td>
                                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">View</span> Order
                                                        </a>
                                            </td>
                    </tr>-->
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
export default {
  name: "Orders",
  components: {
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
