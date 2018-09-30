<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <div class="mainBody">
            <TopBar />
            <Categories />
        </div>
    </div>
  </div>
<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Categories from "@/components/Categories.vue"
import TopBar from "@/components/TopBar.vue"

export default {
  name: "app",
  components: {
    Nav,
    TopBar,
    Categories
  }
};

$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});

</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
/* @import "./css/custom.css";
@import "./css/mediaqueries.css"; */

html {
  width: 100%;
  height: auto;
}

body {
  width: 100%;
  height: auto;
  background-color: #000;
}

.wrapper {
  width: 100%;
  height: auto;
  display: flex;
}

.pageContent {
  width: 100%;
  height: auto;
}

.mainBody {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
