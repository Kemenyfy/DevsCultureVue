<template>
  <div class="nav">
    <nav id="sidebar">
      <div class="sidebar-header">
        <img src="../assets/logo.png" class="logo"> 
      </div>
      <ul class="list-unstyled components">
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link></li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Categories</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li><router-link to="/subcategories/1">Programming Languages</router-link></li>
            <li><router-link :to="{name:'subcategories', params:{categoryId:2}}">Front-End Techs</router-link></li>
            <li><router-link to="/subcategories/3">Back-End Techs</router-link></li>
            <li><router-link to="/subcategories/4">Design</router-link></li>
            <li><router-link to="/subcategories/5">Hosting</router-link></li>
            <li><router-link to="/subcategories/6">Browsers</router-link></li>
            <li><router-link to="/subcategories/7">Collaboration</router-link></li>
            <li><router-link to="/subcategories/8">News</router-link></li>
            <li><router-link to="/subcategories/9">Coding Schools</router-link></li>
            <li><router-link to="/subcategories/10">Books</router-link></li>
            <li><router-link to="/subcategories/11">Podcasts</router-link></li>
            <li><router-link to="/subcategories/12">Meetups</router-link></li>
          </ul>
        </li>
        <!-- <li><a href="#">Blogs</a></li> -->
        <li><router-link to="/contactUs">Contact Us</router-link></li>
        <!-- <li><a href="#">Sponsors</a></li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  },
}
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css";
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

.categories {
  width: 80%;
  height: auto;
}

.logo {
  width: 12em;
  height: auto;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.wrapper {
  display: flex;
  align-items: stretch;
  perspective: 1500px;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  background: #1d1e19;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.945, 0.02, 0.27, 0.665);
  transform-origin: center left;
}

#sidebar.active {
  margin-left: -250px;
  transform: rotateY(100deg);
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #1d1e19;
}

#sidebar ul.components {
  padding: 20px 0;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #49c7d0;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #49c7d0;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.btn-info {
  color: #fff;
  margin: 10px 10px 10px 0px;
  background-color: #49c7d0;
  border-color: #49c7d0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
    transform: rotateY(100deg);
  }

  #sidebar.active {
    margin-left: 0;
    transform: none;
  }
}
</style>
