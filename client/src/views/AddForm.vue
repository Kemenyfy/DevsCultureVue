<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
          <form>
            <div class="form-row">
              <label for="inputState">Category</label>
                <select id="inputState" class="form-control" v-model="selectedCategory" @change="onChange()" required>
                  <option selected value="0">Choose...</option>
                  <option v-for="cat in categoriesData" :key="cat.id" :value="cat.id">{{cat.name}}</option>
                </select>
              <label for="inputState">Subcategory</label>
                <select id="inputState" class="form-control" v-model="selectedSubcategoryId" required>
                  <option selected value="0" required>Choose...</option>
                  <option v-for="sub in subcategoriesData" :key="sub.id" v-on:Click="setSubcategoryId(sub)" :value="sub.id">{{sub.name}}</option>
                </select>
            </div>
            <div class="form-input">
              <label for="resourceName">Resource Name</label>
              <input type="text" class="form-control" name="resourceName" placeholder="..." maxlength="24" v-model="resourceName" required>
            </div>
            <div class="form-input">
              <label for="briefDescription">Resource Brief Description</label>
              <input type="text" class="form-control" name="briefDescription" placeholder="..." maxlength="80" v-model="briefDescription">
            </div>
            <div class="form-input">
              <label for="detailedDescription" required>Resource Description</label>
              <textarea type="text" class="form-control" name="detailedDescription" placeholder="..." maxlength="480" v-model="detailedDescription" required></textarea>
            </div>
            <div class="form-input">
              <label for="link" required>Link to Resources Website</label>
              <input type="text" class="form-control" name="link" placeholder="Include http:// or https://" v-model="link" required>
            </div>
            <span v-on:click.prevent="submitResource" class="submitButton"><router-link to="/thankyou">
              <button class="btn submit" type="submit" value="submit">Submit</button>
            </router-link></span>
          </form>
        </div>
    </div>
  </div>
 
</template>

<script>
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  // name: "modal",
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
      selectedSubcategoryId: 0,
      resourceName: "",
      briefDescription: "",
      detailedDescription: "",
      link: ""
    };
  },
  methods: {
    onChange() {
      console.log(this.value);
      console.log(this.selectedCategory);
      fetch(
        `${process.env.VUE_APP_ROOT_API}/subcategory/${this.selectedCategory}`
      )
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          this.subcategoriesData = data;
        });
    },
    setSubcategoryId: function(sub) {
      this.selectedSubcategoryId = sub.id;
    },
    submitResource: function() {
      console.log(this.resourceName);
      console.log(this.briefDescription);
      console.log(this.detailedDescription);
      console.log(this.link);
      console.log(this.selectedSubcategoryId);
      fetch(`${process.env.VUE_APP_ROOT_API}/subcategory/resource`, {
        method: "POST",
        body: JSON.stringify({
          Name: this.resourceName,
          BriefDescription: this.briefDescription,
          DetailedDescription: this.detailedDescription,
          Link: this.link,
          SubcategoryId: this.selectedSubcategoryId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(ResourceData => {
          console.log(ResourceData);
          this.formSubmit();
        });
    },
    formSubmit: function() {
      this.resourceName = "";
      this.briefDescription = "";
      this.detailedDescription = "";
      this.link = "";
      this.selectedCategory = "";
      this.selectedSubcategory = "";
    },
  },
  mounted: function() {
    fetch(`${process.env.VUE_APP_ROOT_API}/category`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.categoriesData = data;
      });
  }
};
</script>

<style scoped>
form {
  margin: 2% 10%;
}

.form-row {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 0.1%;
}

label {
  margin-top: 2%;
  color: white;
}

.form-control {
  width: 80%;
}

.submitButton {
  margin-top: 1em;
}

.btn {
  background-color: #29b7bd;
  border: #29b7bd;
}

a {
  color: white;
  text-decoration: none;
}

.submit {
  margin: 1em;
  color: white;
  text-align: center;
  padding: 10px 10px;
  background-color: #29b7bd;
  font-weight: bold;
  border-color: #29b7bd;
  border-radius: 0.25rem;
  box-shadow: 0 2px 0 lightgray;
  border: 0;
  outline: none;
}

.submit:hover {
  opacity: 0.8;
}

.submit:active {
  box-shadow: none;
  top: 2px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

@media (max-width: 1024px) {
  .submit {
    background-color: white;
    color: black;
    border: 1px solid white;
    box-shadow: none;
  }

  a {
    color: black;
  }

  .submit:hover {
    opacity: 0.8;
  }

  .submit:active {
    top: 0px;
  }
}

@media (max-width: 768px) {
  .form-row {
    width: 100%;
    margin-bottom: 1rem;
  }

  .form-control {
    width: 100%;
  }
}
</style>
