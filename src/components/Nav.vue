<template>
    <div id="wrapper">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="block m-t-xs font-bold text-white">Cakes and Cream</span>
                            </a>
                            <ul class="dropdown-menu user-sidebar-menu m-t-xs">  
                                <li class="dropdown-divider"></li>                         
                                <li><a class="dropdown-item" href="login.html">Logout</a></li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            ON
                        </div>
                    </li>
                    <li class="active">
                        <a href="Dashboard.html"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
                    </li>
                    <router-link tag="li" class="" to="/"><a><i class="fa fa-edit"></i> <span class="nav-label">Orders</span></a>
                     </router-link>
                    <router-link tag="li" class="" to="/products"><a><i class="fa fa-edit"></i> <span class="nav-label">Products</span></a>
                     </router-link>
                     <router-link tag="li" class="" to="/categories"><a><i class="fa fa-edit"></i> <span class="nav-label">Product Categories</span></a>
                     </router-link>
                    <li class="">
                            <a href="content.html"><i class="fa fa-cubes"></i> <span class="nav-label">Site Content</span></a>
                    </li>
                    <router-link tag="li" class="" to="/customers"><a><i class="fa fa-cubes"></i> <span class="nav-label">Customers</span></a>
                     </router-link>
                    <li>
                        <a href="#"><i class="fa fa-cog"></i> <span class="nav-label">My Settings</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse">
                            <router-link tag="li" class="" to="/all-users"><a>All users</a>
                     </router-link>
                            <li><a href="Settings.html#Settlement">Add new user</a></li>
                            <li><a href="Settings.html#Password">Change Password</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
