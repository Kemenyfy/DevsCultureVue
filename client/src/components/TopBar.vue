<template>
    <div class="topButtons">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button>
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

.btn {
    margin: 1em;
}

</style>