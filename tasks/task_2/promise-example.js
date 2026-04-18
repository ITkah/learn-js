// Пример базового использования промисов в JavaScript

// Функция, которая возвращает промис (симулирует асинхронную операцию)
function simulateAsyncOperation(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Случайно решаем, успех или ошибка
      const isSuccess = Math.random() > 0.3; // 70% шанс успеха
      if (isSuccess) {
        resolve(`Операция завершена через ${delay}мс`);
      } else {
        reject(new Error(`Ошибка в операции через ${delay}мс`));
      }
    }, delay);
  });
}

// Использование промиса с .then() и .catch()
console.log('Начинаем операцию...');
simulateAsyncOperation(2000)
  .then(result => {
    console.log('Успех:', result);
  })
  .catch(error => {
    console.log('Ошибка:', error.message);
  });

// То же самое с async/await (более современный способ)
async function runAsyncExample() {
  try {
    console.log('Начинаем async операцию...');
    const result = await simulateAsyncOperation(1000);
    console.log('Успех в async:', result);
  } catch (error) {
    console.log('Ошибка в async:', error.message);
  }
}

runAsyncExample();

// Пример с Promise.all для параллельного выполнения
async function runMultipleOperations() {
  const promises = [
    simulateAsyncOperation(500),
    simulateAsyncOperation(1000),
    simulateAsyncOperation(1500)
  ];

  try {
    const results = await Promise.all(promises);
    console.log('Все операции завершены:', results);
  } catch (error) {
    console.log('Одна из операций провалилась:', error.message);
  }
}

runMultipleOperations();