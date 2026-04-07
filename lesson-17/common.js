function getRecipe() {
  return "Pasta with cheese";
}

function cookRecipe(recipe) {
  return new Promise((resolve) => {
    console.log(`Cooking: ${recipe}`);
    setTimeout(() => {
      resolve("Dish is ready 🍝");
    }, 3000);
  });
}

async function runCooking() {
  const recipe = getRecipe();
  const result = await cookRecipe(recipe);

  console.log(result);
}

runCooking();

function loadImage(name) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000;

    setTimeout(() => {
      console.log(`Loaded: ${name}`);
      resolve(name);
    }, delay);
  });
}

async function loadAllImages() {
  await Promise.all([
    loadImage("img1"),
    loadImage("img2"),
    loadImage("img3"),
  ]);

  console.log("✅ All images loaded");
}

//loadAllImages();

function getText() {
  return "Hello world";
}

function translateText(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const translated = "Привет мир";
      console.log(`Translated: ${translated}`);
      resolve(translated);
    }, 2000);
  });
}

async function runTranslation() {
  const text = getText();
  const result = await translateText(text);

  console.log("Final result:", result);
}

//runTranslation();