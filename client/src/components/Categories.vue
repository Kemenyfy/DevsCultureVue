<template>
  <div class="categoriesContainer">
    <ul class="list">
            <li>
              <div class="text">
                <p>Programming Languages</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Front-End Techs</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Back-End Techs</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Books</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Design</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Browsers</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Hosting</p>  
              </div>
            </li>
            <li>
              <div class="text">
                <p>Coding Classes</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>News</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Podcasts</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Collaboration</p>
              </div>
            </li>
            <li>
              <div class="text">
                <p>Meetups</p>
              </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 83vh;
  padding: 0;
}

.list li {
  list-style: none;
  position: relative;
  width: 28%;
  height: 23%;
  text-align: center;
  margin: 10px;
  min-width: 25%;
}

.list li:nth-child(1) {
  background: url(../assets/ProgrammingLanguages.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(2) {
  background: url(https://picsum.photos/1000/600?image=1061);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(3) {
  background: url(https://picsum.photos/1000/600?image=1062);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(4) {
  background: url(../assets/Books.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(5) {
  background: url(../assets/Design.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(6) {
  background: url(../assets/Browsers.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(7) {
  background: url(../assets/Hosting.jpeg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(8) {
  background: url(../assets/Schools.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(9) {
  background: url(../assets/News.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(10) {
  background: url(../assets/Podcasts.jpg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(11) {
  background: url(../assets/Collaboration.jpeg);
  background-size: cover;
  background-position: left;
}

.list li:nth-child(12) {
  background: url(../assets/Meetups.jpg);
  background-size: cover;
  background-position: left;
}

.list li .text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  color: #fff;
  opacity: 0;
}

.list li:hover .text {
  transition: 0.5s;
  transition-delay: 0.2s;
  opacity: 1;
}

@media (max-width: 1024px) {

  .list {
    margin: 0;
  }

  .list li {
    width: 40%;
    height: 15%;
    margin: 10px;
  }

  .list li .text {
    transition: 0.5s;
    transition-delay: 0.2s;
    opacity: 1;
  }
}

@media (max-width: 768px) {

  .list {
    margin: 0;
  }

  .list li {
    width: 77%;
    height: 40%;
    margin: 20px;
  }

  .list li .text {
    transition: 0.5s;
    transition-delay: 0.2s;
    opacity: 1;
  }
}
</style>