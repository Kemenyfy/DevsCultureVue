<template>
  <div class="wrapper">
    <Nav />
    <div class="pageContent">
        <div class="mainBody">
            <TopBar />
            <Categories />
        </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TopBar from "@/components/TopBar.vue"
import Categories from "@/components/Categories.vue"

export default {
  name: "app",
  components: {
    Nav,
    TopBar,
    Categories,
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

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
