<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody">
          <section id="page3" class="section-gray">
            <div class="content">
              <div class="container clearfix">
                <div class="row services">
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="box">
                          <h4 class="heading">Our Mission</h4>
                          <p class="content">DevsCulture is a catalyst for developers to feel, see, and claim their power.</p>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="box">
                          <h4 class="heading">Our Essence</h4>
                          <p class="content">At our core, DevsCulture operates on Imagination, Individuality, Inclusivity, & Impact.</p>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="box">
                          <h4 class="heading">Our Promise</h4>
                          <p class="content">We deliver optimistic and diverse resources, experiences, and points of view to our audience of smart, curious, passionate developers.</p>
                      </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="box">
                          <h4 class="heading">Our Vibe</h4>
                          <p class="content">At DevsCulture, we make magic. We dream it, and then do it together every day reinventing what's possible.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>  
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
}

p, .heading {
  color: white;
}

.box {
  padding: 3em;
}

@media (max-width: 768px) {
}
</style>

