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
       
        
        <!-- Settings View -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        
                        <div class="ibox-content px-0 pt-0 border-top-0">

                            <div class="panel blank-panel">
                                <div class="panel-heading pt-0 px-0">
                                    <div class="panel-options">
                                        <ul class="nav nav-tabs">
                                            <li><a class="nav-link active" href="#my-details" data-toggle="tab">My Users</a></li>
                                            <li><a class="nav-link" href="#my-users" data-toggle="tab">User roles</a></li>
                                            <li><a class="nav-link" href="#branches" data-toggle="tab">My Branches</a></li>
                                            <li>
                                                <a class="nav-link" href="#api-settings" data-toggle="tab">
                                                    <label class="fa fa-cog"></label> API Settings
                                                </a>
                                            </li>
                                            <li><a class="nav-link" href="#password" data-toggle="tab">Password</a></li>
                                            <li><a class="nav-link" href="#customers" data-toggle="tab">Customers</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="panel-body px-4" style="min-height: 200px;">

                                    <div class="tab-content">
                                        <div class="tab-pane active" id="my-details">
                                            <h2>My Users
                                                    <a href="#" data-toggle="modal" data-target="#newUser" class="pull-right new-button">
                                                            <i class="fa fa-link text-primary"></i>
                                                            <span class="d-none d-sm-inline">New</span> user
                                                        </a>
                                            </h2>
                                            <table class="table table-striped">
                                                    <thead>
                                                      <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Firstname</th>
                                                            <th scope="col">Lastname</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Substore</th>
                                                            <th scope="col">Action</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark1234</td>
                                                        <td><span class="badge badge-primary"></span></td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>mark@cakesandcreamng.com</td>
                                                        <td>OPEBI</td>
                                                        <td>
                                                                <a href="#">
                                                                        <i class="fa fa-link text-primary"></i>
                                                                        <span class="d-none d-sm-inline">View</span> User
                                                                    </a>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob1234</td>
                                                        <td><span class="badge badge-primary"></span></td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>jacob@cakesandcreamng.com</td>
                                                        <td>SURULERE</td>
                                                        <td>
                                                                <a href="#">
                                                                        <i class="fa fa-link text-primary"></i>
                                                                        <span class="d-none d-sm-inline">View</span> User
                                                                    </a>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry1234</td>
                                                        <td><span class="badge badge-primary"></span></td>
                                                        <td>Larry</td>
                                                        <td>Ononuju</td>
                                                        <td>larry@cakesandcreamng.com</td>
                                                        <td>BERGER</td>
                                                        <td>
                                                                <a href="#">
                                                                        <i class="fa fa-link text-primary"></i>
                                                                        <span class="d-none d-sm-inline">View</span> User
                                                                    </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                        </div>
                                        <div class="tab-pane" id="my-users">
                                            <h2>Add New Users roles</h2>
                                            <form>
                                                <div class="form-group">
                                                  <label for="roleName">role name</label>
                                                  <input type="text" class="form-control" id="roleName"  placeholder="Enter role">
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                              </form>    
                                        </div>
                                        <div class="tab-pane" id="api-settings">
                                            <h2>API Settings</h2>
                                            <div class="row">
                                                <div class="col-12">
                                                    <form action="">
                                                        <div class="form-row">
                                                            <div class="form-group col-md-6">
                                                                <label for="apikey">One Pipe API Key</label>
                                                                <input type="text" id="apikey" class="form-control" placeholder="Key">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                    <label for="apiSecret">One Pipe API secret</label>
                                                                    <input type="text" id="apiSecret" class="form-control" placeholder="Secret">
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                                                <label class="form-check-label" for="gridCheck">
                                                                    Enable API Key
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Save</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="password">
                                            <h2>Password</h2>
                                            <div class="row">
                                                <div class="col-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label>
                                                            <strong>Current password</strong>
                                                            <span class="text-danger">*</span>
                                                        </label>
                                                        <input type="password" placeholder="Enter min of 8 characters" class="form-control">
                                                        <small>Support requests from your customers will go to this email.</small>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label>
                                                            <strong>New password</strong>
                                                            <span class="text-danger">*</span>
                                                        </label>
                                                        <input type="password" placeholder="Enter min of 8 characters" class="form-control">
                                                        <small>Support requests from your customers will go to this email.</small>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label>
                                                            <strong>Confirm New password</strong>
                                                            <span class="text-danger">*</span>
                                                        </label>
                                                        <input type="password" placeholder="Enter min of 8 characters" class="form-control">
                                                        <small>Support requests from your customers will go to this email.</small>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-primary">Save</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="tab-pane" id="customers">
                                                <h2>Customers</h2>
                                                <div class="row">
                                                        <table class="table toggle-arrow-tiny mb-0" data-paging="true"  data-paging-position="left">
                                                                <thead>
                                                                <tr>
                                                                    <th>Customer Name</th>
                                                                    <th data-breakpoints="xs">Status</th>
                                                                    <th data-breakpoints="xs" >Firstname</th>
                                                                    <th data-breakpoints="xs">Lastname</th>
                                                                    <th data-breakpoints="all">Email</th>
                                                                    <th data-breakpoints="all">No Of orders</th>
                                                                    <th data-breakpoints="all">Address</th>
                                                                    <th data-sortable="false" width="100">Action</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>Account Number Lookup</td>
                                                                    <td><span class="badge badge-danger"></span></td>
                                                                    <td>04343701</td>
                                                                    <td>
                                                                        <a href="#">
                                                                            <i class="fa fa-link text-primary"></i>
                                                                            <span class="d-none d-sm-inline">View</span>Customer
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Alpha project</td>
                                                                    <td><span class="badge badge-primary"></span></td>
                                                                    <td>0500 780909</td>
                                                                    <td>Nec Euismod In Company</td>
                                                                    <td><span class="pie">6,9</span></td>
                                                                    <td>40%</td>
                                                                    <td>Jul 16, 2013</td>
                                                                    <td>
                                                                        <a href="#">
                                                                            <i class="fa fa-link text-primary"></i>
                                                                            <span class="d-none d-sm-inline">View</span>Customer
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Betha project</td>
                                                                    <td><span class="badge badge-primary"></span></td>
                                                                    <td>0800 1111</td>
                                                                    <td>Erat Volutpat</td>
                                                                    <td><span class="pie">3,1</span></td>
                                                                    <td>75%</td>
                                                                    <td>Jul 18, 2013</td>
                                                                    <td>
                                                                        <a href="#">
                                                                            <i class="fa fa-link text-primary"></i>
                                                                            <span class="d-none d-sm-inline">View</span>Customer
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Gamma project</td>
                                                                    <td><span class="badge badge-danger"></span></td>
                                                                    <td>(016977) 0648</td>
                                                                    <td>Tellus Ltd</td>
                                                                    <td><span class="pie">4,9</span></td>
                                                                    <td>18%</td>
                                                                    <td>Jul 22, 2013</td>
                                                                    <td>
                                                                        <a href="#">
                                                                            <i class="fa fa-link text-primary"></i>
                                                                            <span class="d-none d-sm-inline">View</span>Customer
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                    
                                                </div>
                                        </div>
                                        <div class="tab-pane" id="branches">
                                                <h2>My Branches
                                                        <a href="#" data-toggle="modal" data-target="#newbranch" class="pull-right new-button"> Add new branch </a>
                                                </h2>
                                                <div class="row">
                                                        <table class="table table-striped">
                                                                <thead>
                                                                  <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Branch Name</th>
                                                                        <th scope="col">Status</th>
                                                                        <th scope="col">Address</th>
                                                                        <th scope="col">Action</th>
                                                                  </tr>
                                                                </thead>
                                                                <tbody>
                                                                  <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>OPEBI</td>
                                                                    <td><span class="badge badge-primary"></span></td>
                                                                    <td>65 Opebi roundabout, Ikeja Lagos</td>
                                                                    <td>
                                                                            <a href="#">
                                                                                    <i class="fa fa-link text-primary"></i>
                                                                                    <span class="d-none d-sm-inline">View</span>Branch
                                                                                </a>
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>SURULERE</td>
                                                                    <td><span class="badge badge-primary"></span></td>
                                                                    <td>10 Ogunlana Dr, Surulere, Lagos</td>
                                                                    <td>
                                                                            <a href="#">
                                                                                    <i class="fa fa-link text-primary"></i>
                                                                                    <span class="d-none d-sm-inline">View</span>Branch
                                                                                </a>
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>BERGER</td>
                                                                    <td><span class="badge badge-primary"></span></td>
                                                                    <td>103 Ogunnusi Road,Beside UBA, Ojodu Berger</td>
                                                                    <td>
                                                                            <a href="#">
                                                                                    <i class="fa fa-link text-primary"></i>
                                                                                    <span class="d-none d-sm-inline">View</span>Branch
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
  name: "alluser",
  components: {
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
