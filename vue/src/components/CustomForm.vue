<script setup>
function handleSubmit(event) {
  console.log(event);
  alert('Форма оброблена JavaScript, сторінка не перезавантажилась')
}
</script>

<template>
  <div class="block">
    <h2>preventDefault() приклад</h2>

    <form @submit.prevent="handleSubmit">
      <input placeholder="Ваше імʼя" />
      <button>Search</button>
      <button type="submit">Відправити</button>
    </form>
  </div>
</template>

<style scoped>
.block {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
