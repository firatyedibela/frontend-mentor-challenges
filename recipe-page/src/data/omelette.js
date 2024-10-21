import omeletteImg from '../assets/images/image-omelette.jpeg';

const omelette = {
  name: 'Simple Omelette',
  img: omeletteImg,
  title: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  preparationMinutes: 5,
  cookingMinutes: 5,
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    {
      task: 'Beat the eggs',
      taskDescription:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      task: 'Heat the pan',
      taskDescription:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      task: 'Cook the omelette',
      taskDescription:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      task: 'Add fillings (optional)',
      taskDescription:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      task: 'Fold and serve',
      taskDescription:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      task: 'Enjoy',
      taskDescription: 'Serve hot, with additional salt and pepper if needed',
    },
  ],
  nutrition: [
    { name: 'Calories', amount: 277, unit: 'kcal' },
    { name: 'Carbs', amount: 0, unit: 'g' },
    { name: 'Protein', amount: 20, unit: 'g' },
    { name: 'Fat', amount: 22, unit: 'g ' },
  ],
};

export default omelette;
