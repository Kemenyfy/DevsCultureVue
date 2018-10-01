<template>
    <div class="topButtons">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button>
        <button class="addForm">Add a Resource</button>
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
    margin: 1em 6% 1em 1em;
    color: white;
    background-color: #f73f11;
    font-weight: bold;
    border-color: #f73f11;
    border-radius: 0.25rem;
}

</style>