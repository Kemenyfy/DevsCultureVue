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
              <div class="intro">Here goes a Brief Descrition of the resource.</div>
              <div class="card-info">{{res.detailedDescription}}</div><!-- /.card-info -->
              <a class="comments" :href="res.link" target="_">Read More</a>
            </div><!-- /.title-content -->
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
      `https://localhost:5001/api/subcategory/resource/${
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

// variables
$h-color: #9cc9e3;
$yellow: #d0bb57;
$txt-color: #dce3e7;

.mainBody {
  text-align: center;
  color: white;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.blog-card {
  width: 28%;
  height: 360px;
  border-radius: 10px;
  margin: 15px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg);
}

.title-content {
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
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
  width: 170px;
  margin: 0 auto;
  color: $txt-color;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
}

.card-info {
  width: 100%;
  margin: 1em auto;
  padding: 0 20px;
  color: $txt-color;
  font-family: "Droid Serif", serif;
  line-height: 24px;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.card-info:hover {
  opacity: 1;
  // bottom: 120px;
}

a {
  position: absolute;
  text-decoration: none;
  color: white;
  color: $txt-color;
  font-family: "Roboto", sans-serif;
  display: inline-block;
}

</style>
