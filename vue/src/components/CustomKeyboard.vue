<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const key = ref('')
const code = ref('')
const ctrl = ref(false)
const shift = ref(false)
const alt = ref(false)
const message = ref('')

function handleKeydown(event) {
  key.value = event.key
  code.value = event.code
  ctrl.value = event.ctrlKey
  shift.value = event.shiftKey
  alt.value = event.altKey

  // приклад гарячої клавіші
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault()
    message.value = 'Ctrl + S перехоплено'
  }
}

function test(event) {
  console.log(event);
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="keyboard-demo">
    <h2>Відслідковування клавіатури</h2>
    <input @keydown.enter="test" placeholder="Спробуй друкувати тут" />



    <p><strong>Клавіша:</strong> {{ key }}</p>
    <p><strong>Code:</strong> {{ code }}</p>

    <p><strong>Ctrl:</strong> {{ ctrl }}</p>
    <p><strong>Shift:</strong> {{ shift }}</p>
    <p><strong>Alt:</strong> {{ alt }}</p>

    <p v-if="message">{{ message }}</p>

    <input placeholder="Спробуй друкувати тут" />
  </div>
</template>

<style scoped>
.keyboard-demo {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 400px;
}

input {
  margin-top: 10px;
  padding: 8px;
  width: 100%;
}
</style>
