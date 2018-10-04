<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
          <form>
            <div class="form-row">
              <label for="inputState">Category</label>
                <select id="inputState" class="form-control" v-model="selectedCategory" @change="onChange()">
                  <option selected value="0">Choose...</option>
                  <option v-for="cat in categoriesData" :key="cat.id" :value="cat.id">{{cat.name}}</option>
                </select>
              <label for="inputState">Subcategory</label>
                <select id="inputState" class="form-control">
                  <option selected >Choose...</option>
                  <option v-for="sub in subcategoriesData" :key="sub.id">{{sub.name}}</option>
                </select>
            </div>
            <div class="form-group">
              <label for="inputAddress">Resource Name</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="What's your resource name?">
            </div>
            <div class="form-group">
              <label for="inputAddress2">Resource Brief Description</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Give me a short description of it.">
            </div>
            <div class="form-group">
              <label for="inputAddress2">Resource Detailed Description</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Give me a detailed description of it.">
            </div>
            <div class="form-group">
              <label for="inputAddress2">Link to Resources Website</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Give me a Link to your resources website.">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
  </div>
 
</template>

<script>
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  components: {
    Nav,
    TopBar
  },
  data: function() {
    return {
      categoriesData: [], 
      subcategoriesData:[],
      selectedCategory:0
    };
  },
   methods: {
        onChange() {
            console.log(this.value)
            console.log(this.selectedCategory)
            fetch(`https://localhost:5001/api/subcategory/${this.selectedCategory}`)
              .then(resp => resp.json())
              .then(data => {
                console.log(data);
                this.subcategoriesData = data;
                // setTimeout(this.toggleDescription, 0);
              })
        }
      
    },
  mounted: function() {
    fetch("https://localhost:5001/api/category")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.categoriesData = data;
      })
    
  }
};
</script>
