<template>
    <div class="topButtons">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button>
        <router-link class="addForm" to="/addForm">Add a Resource</router-link>
    </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    msg: String
  }
};
</script>

<style scoped>

.topButtons {
    display: flex;
    justify-content: space-between;
}

.btn {
    margin: 1em;
    width: 2.5em;
    height: 2.5em;
}

.addForm {
    position: relative;
    margin: 1em 6% 1em 1em;
    color: white;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    background-color: #f73f11;
    font-weight: bold;
    border-color: #f73f11;
    border-radius: 0.25rem;
    box-shadow: 0 5px 0 darkred;
}

.addForm:hover {
    opacity: .8;
}

.addForm:active {
  box-shadow: none;
  top: 5px;
}

</style>