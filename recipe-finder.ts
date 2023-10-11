interface Recipe {
    title: string;
    ingredients: string[];
    instructions: string;
  }
  
  // Mock recipes data
  const recipes: Recipe[] = [
    {
      title: 'Pasta Carbonara',
      ingredients: ['pasta', 'eggs', 'bacon', 'parmesan', 'garlic'],
      instructions: '...'
    },
    // Add more recipes...
  ];
  
  // Function to fetch recipes (mocked for simplicity)
  function fetchRecipes(): Recipe[] {
    return recipes;
  }
  
  // Function to display a recipe
  function displayRecipe(recipe: Recipe) {
    console.log('Recipe Title:', recipe.title);
    console.log('Ingredients:', recipe.ingredients.join(', '));
    console.log('Instructions:', recipe.instructions);
    console.log('---------------------');
  }
  
  // Main function to run the application
  function main() {
    const recipes = fetchRecipes(); // Fetch recipes
    recipes.forEach(displayRecipe); // Display each recipe
  }
  
  main(); // Run the application
  