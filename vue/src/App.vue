<script setup>
import CustomForm from "./components/CustomForm.vue";
import CustomList from "./components/CustomList.vue";
import CustomKeyboard from "./components/CustomKeyboard.vue";

</script>

<template>
  <div class="block">
    <CustomForm/>
    <CustomList/>
    <CustomKeyboard/>
  </div>
</template>

<style scoped>
.block {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
