const categoriesList = document.getElementById(`categories`);

const categoriesItems = categoriesList.querySelectorAll(`li.item`);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryTitle = category.querySelector(`h2`).textContent;
  const categoryElements = category.querySelectorAll(`li`);
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
