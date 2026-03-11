<script setup>
const items = ['Apple', 'Banana', 'Orange']

function listClick() {
  alert('Клік по списку')
}

function deleteItem(event, item) {
  alert(`Видалення ${item}`)
}
</script>

<template>
  <div class="block">
    <h2>stopPropagation() приклад</h2>

    <ul @click="listClick">
      <li v-for="item in items" :key="item">
        {{ item }}
        <button @click.stop="deleteItem($event, item)">
          Видалити
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 10px;
  border: 1px solid #ddd;
}

li {
  margin: 10px 0;
}
</style>
