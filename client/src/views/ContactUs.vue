<template>
  <div class="wrapper">
    <Nav /> <!-- Sidebar -->
    <div class="pageContent"> <!-- Page Content -->
        <TopBar />
        <section>
            <div class="content">
                <h2 class="heading">Contact Me</h2>
                <p class="lead contactExtra">Let us know if we are missing a Category/Subcategory. Also if we can serve you somehow.</p>
                <form id="contact-form" method="post" action="https://formspree.io/gus.kemenyfy@gmail.com" class="contact-form">
                  <div class="controls">
                    <div class="name">
                      <div>
                        <div class="form-group">
                          <label for="name">Your First Name *</label>
                          <input type="text" name="name" placeholder="Enter Your First Name" required="required" class="form-control">
                        </div>
                      </div>
                      <div>
                        <div class="form-group">
                          <label for="surname">Your Last Name *</label>
                          <input type="text" name="surname" placeholder="Enter Your Last Name" required="required" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="surname">Your Email *</label>
                      <input type="email" name="email" placeholder="Enter Your Email" required="required" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="surname">Your Message *</label>
                      <textarea rows="4" name="message" placeholder="Enter your message" required="required" class="form-control"></textarea>
                    </div>
                    <div class="text-center">
                      <input type="submit" name="name" value="Send message" class="btn btn-primary btn-block">
                    </div>
                  </div>
                </form>
            </div>
        </section>
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
.form-control {
    width: 100%;
}

.row {
  display: flex;
  flex-direction: column;
 }

.content {
    text-align: center;
    color: white;
}

.name {
    flex-direction: row;
}

.heading {
    margin-bottom: 2%;
}

.content {
    display: flex;
    flex-direction: column;
}

p {
  font-size: 1em;
  margin: 0 4% 0 4%;
}

@media (max-width: 768px) {
}
</style>