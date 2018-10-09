<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <div class="mainBody"><section id="page3" class="section-gray">
        <div class="content">
          <div class="container clearfix">
            <div class="row services">
              <div class="col-md-12">
                <h2 class="heading">My work is</h2>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-keyboard"></i>
                      </div>
                      <h4 class="heading">Pixel-Perfect</h4>
                      <p>My code is readable and maintainable and I am proud of the results.</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-palette"></i>
                      </div>
                      <h4 class="heading">Tailored to you</h4>
                      <p>I work hard to find the best solution for my users. </p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-heart"></i>
                      </div>
                      <h4 class="heading">Built with Love</h4>
                      <p>I put a lot of passion in my work; I love what I do. </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-fighter-jet"></i>
                      </div>
                      <h4 class="heading">Fast</h4>
                      <p>Fast load times and lag free interaction.</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-mobile-alt"></i>
                      </div>
                      <h4 class="heading">Responsive</h4>
                      <p>My layouts will work on any device, big or small.</p>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="box">
                      <div class="icon">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </div>
                      <h4 class="heading">Dynamic</h4>
                      <p>I enjoy making pages come to life.</p>
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
