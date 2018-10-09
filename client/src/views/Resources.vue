<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
          <div class="cards">
          <div class="blog-card" v-for="res in resourcesData" :key="res.id">
            <div class="title-content">
              <h3>{{res.name}}</h3>
              <hr />
              <div class="intro">{{res.briefDescription}}</div>
              <div class="card-info">{{res.detailedDescription}}</div><!-- /.card-info -->
            </div><!-- /.title-content -->
            <div class="title-link">
              <a class="goToLink" :href="res.link" target="_">Read More</a>
            </div>
          </div><!-- /.blog-card -->
        </div>
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
      resourcesData: []
    };
  },
  mounted: function() {
    console.log(this.$route.params.subcategoryId);
    fetch(
      `https://devsculture.herokuapp.com/api/subcategory/resource/${
        this.$route.params.subcategoryId
      }`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.resourcesData = data;
        setTimeout(this.toggleExpander, 0);
      });
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic);

// Color Variables
$h-color: #9cc9e3;
$yellow: #d0bb57;
$txt-color: #dce3e7;
$txt-color2: white;

.mainBody {
  position: relative;
  text-align: center;
  color: white;
}

.cards {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-card:hover {
  opacity: .9;
}

.blog-card {
  position: relative;
  background-image: url("../assets/BlogCard2.jpeg");
  display: inline-block;
  margin: 1em;;
  width: 15em;
  height: 360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid white;
}

.title-content {
  position: relative;
  text-align: center;
  margin: 15px 0 0 0;
  width: 100%;
  height: 90%;
}

.title-link {
  height: 10%;
  margin: 5px;
}

h3 {
  font-size: 16px;
  font-weight: 500;
  color: $h-color;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
}

hr {
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: $yellow;
}

.intro {
  width: 90%;
  margin: 0 auto;
  color: $txt-color2;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-weight: 400;
  font-style: italic;
  line-height: 18px;
}

.card-info {
  width: 100%;
  height: 48%;
  margin: 1em auto;
  padding: 0 20px;
  color: $txt-color2;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s cubic-bezier(0.33, 0.66, 0.66, 1);
  overflow: scroll;
}

.card-info:hover {
  opacity: 1;
  // bottom: 120px;
}

a {
  bottom: 1px;
  text-decoration: none;
  color: white;
  color: $txt-color;
  font-family: "Roboto", sans-serif;
  display: inline-block;
}

</style>
