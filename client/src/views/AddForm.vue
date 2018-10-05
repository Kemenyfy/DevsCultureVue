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
                <select id="inputState" class="form-control" v-model="selectedSubcategory">
                  <option selected>Choose...</option>
                  <option v-for="sub in subcategoriesData" :key="sub.id">{{sub.name}}</option>
                </select>
            </div>
            <div class="form-group">
              <label for="resourceName">Resource Name</label>
              <input type="text" class="form-control" name="resourceName" placeholder="What's your resource name?" v-model="resourceName">
            </div>
            <div class="form-group">
              <label for="briefDescription">Resource Brief Description</label>
              <input type="text" class="form-control" name="briefDescription" placeholder="Give me a short description of it." v-model="briefDescription">
            </div>
            <div class="form-group">
              <label for="detailedDescription">Resource Detailed Description</label>
              <input type="text" class="form-control" name="detailedDescription" placeholder="Give me a detailed description of it." v-model="detailedDescription">
            </div>
            <div class="form-group">
              <label for="link">Link to Resources Website</label>
              <input type="text" class="form-control" name="link" placeholder="Give me a Link to your resources website." v-model="link">
            </div>
            <button class="btn btn-primary" type="submit" v-on:click="submitResource">Submit</button>
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
      subcategoriesData: [],
      selectedCategory: 0,
      selectedSubcategory: 0,
      resourceName: '',
      briefDescription: '',
      detailedDescription: '',
      link: ''
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
        },
        submitResource: function() {
          console.log(this.resourceName)
          console.log(this.briefDescription)
          console.log(this.detailedDescription)
          console.log(this.link)
          console.log(this.selectedSubcategory)
            fetch("https://localhost:5001/api/subcategory/resource", {
              method: "POST",
              body: JSON.stringify({
                name: this.resourceName,
                briefDescription: this.briefDescription,
                detailedDescription: this.detailedDescription,
                link: this.link,
                subcategoryId: this.selectedSubcategory
              }),
              headers: {
                "Content-Type": "application/json"
              }
      })
        .then(resp => resp.json())
        .then(ResourceData => {
          console.log(ResourceData);
        });
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
