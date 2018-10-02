<template>
  <div class="categoriesContainer">
    <ul class="list">
      <li v-for="cat in categoriesData" :key="cat.id" v-bind:style="{ 'background': `url(${cat.imageURL})`, 'background-size': `cover`, 'background-position': `left` }" >
        <router-link :to="{name:'subcategories', params:{categoryId:cat.id}}">  
        <p class="text">{{cat.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data: function() {
    return {
      categoriesData: []
    };
  },
  mounted: function() {
    fetch("https://localhost:5001/api/category")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.categoriesData = data;
      });
  }
};
</script>

<style scoped>
p {
  height: 3em;
  margin: 0;
  padding: 10px 10px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 85vh;
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