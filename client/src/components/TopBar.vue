<template>
    <div class="topButtons">
        <button type="button" id="sidebarCollapse" class="button"><i class="fas fa-align-left"></i></button>
        <router-link class="addForm" to="/addForm">Add a Resource</router-link>
    </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    msg: String
  },
  mounted: function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  }
};
</script>

<style scoped>
.topButtons {
  display: flex;
  justify-content: space-between;
}

.button {
  position: relative;
  margin: 1em;
  width: 2.5em;
  height: 2.5em;
  color: white;
  text-align: center;
  padding: 10px 10px;
  background-color: #29b7bd;
  border-color: #29b7bd;
  border-radius: 0.25rem;
  box-shadow: 0 2px 0 lightgrey;
  outline: none;
}

.button:hover {
  opacity: 0.6;
}

.addForm {
  position: relative;
  margin: 1em 6% 1em 1em;
  color: white;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
  background-color: #29b7bd;
  font-weight: bold;
  border-color: #29b7bd;
  border-radius: 0.25rem;
  box-shadow: 0 2px 0 lightgray;
}

.addForm:hover {
  opacity: 0.6;
}

.addForm:active,
.button:active {
  box-shadow: none;
  top: 2px;
}

@media (max-width: 1024px) {
  .addForm {
    background-color: black;
    font-weight: 500;
    box-shadow: none;
  }

  .button {
    box-shadow: none;
  }

  .addForm:active,
  .button:active {
    top: 0px;
  }
}
</style>