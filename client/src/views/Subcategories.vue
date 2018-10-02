<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
            <h1>This is a Subcategories page</h1>
        </div>
        <div v-for="sub in subcategoriesData" :key="sub.id">
            {{sub.name}}
        </div>
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
