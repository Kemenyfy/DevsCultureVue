<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
      <TopBar />
      <section class="row p-4 m-0">         
        <div class="card">
          <img class="card-img-top" alt="Subcategory Image">
          <div class="card-body">
          <!-- <h4 class="card-title">{{ movie.title }}</h4> -->
          <!-- <p class="card-text">Released Date: {{ movie.release_date }}</p> -->
          <a href="#!" class="btn btn-primary">Subcategory Details</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "app",
  components: {
    Nav,
    TopBar
  },
  data: function() {
    return {
      subcategoriesData: []
    };
  },
  mounted: function() {
    fetch("https://localhost:5001/api/subcategory")
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
        this.subcategoriesData = data;
      });
  }
};
</script>
