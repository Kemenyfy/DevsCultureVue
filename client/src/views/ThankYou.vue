<template>
    <div class="wrapper">
        <Nav /> <!-- Sidebar -->
        <div class="pageContent"> <!-- Page Content -->
            <TopBar />
            <div class="mainBody">
                <div class="box">
                    <h4 class="heading">Thank You!</h4>
                    <p class="content">DevsCulture is built by developers, for developers.</p>
                    <p class="content">The community appreciates your help.</p>
                    <button class="button" type="button"><router-link to="/">Take me Home</router-link></button>
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
  }
};
</script>

<style scoped>
.mainBody {
  text-align: center;
}

.heading {
  font-size: 2.5em;
  margin-bottom: 1em;
}

p,
.heading {
  color: white;
}

.box {
  padding: 3em;
}

.button {
  margin: 2%;
  background-color: white;
  text-align: center;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 0.25rem;
}

.button:hover {
    opacity: 0.8;
}

a {
  color: black;
  text-decoration: none;
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}
</style>
