<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
      <TopBar />
      <section class="row p-4 m-0">         
        <div class="card" v-for="sub in subcategoriesData" :key="sub.id">
          <img class="card-img-top" :src="`${sub.imageURL}`" alt="Subcategory Image">
          <div class="card-body">
          <a href="#!" class="btn btn-primary">{{sub.name}}</a>
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
    console.log(this.$route.params.categoryId);
    fetch(
      `https://localhost:5001/api/subcategory/${this.$route.params.categoryId}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.subcategoriesData = data;
      });
  }
};
</script>

<style scoped>
.card {
    margin: 1em;
    border-radius: 1em;
    max-width: 18em;
    align-items: center;
}
.row {
    justify-content: space-around;
}

.card-img-top {
  border-radius: 1em;
  padding: 10px;
}

.btn {
  font-size: 1.5em;
  background-color: black;
}

</style>
