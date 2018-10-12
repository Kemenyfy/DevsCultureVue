<template>
    <div class="wrapper">
        <Nav /> <!-- Sidebar -->
        <div class="pageContent"> <!-- Page Content -->
            <TopBar />
            <div class="mainBody">
                <div class="box">
                    <h4 class="heading">Our Mission</h4>
                    <p class="content">DevsCulture is a catalyst for developers to feel, see, and claim their power.</p>
                    <button class="button" type="button"><router-link to="/home">Take me Home</router-link></button>
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
};
</script>

<style scoped>


@media (max-width: 1024px) {
  .submit {
    background-color: white;
    color: black;
    border: 1px solid white;
    box-shadow: none;
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
