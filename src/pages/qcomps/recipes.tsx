interface Recipie {
  id: string,
  name: string,
  ingredients: Set<string>
}

export const recipes : Recipie[] = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientItemList({ingredients} : {ingredients: Array<string>}) {
  return (
    <ul>
      {ingredients.map(name => {
        return (
          <li key={name}>
            {name}
          </li>
        )
      })}
    </ul>
  )
}

function Recipie({recipie} : {recipie: Recipie}) {
  return (
    <div>
      <h2>{recipie.name}</h2>  
      <IngredientItemList ingredients={Array.from(recipie.ingredients.values())} />
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipie => {
          return (
            <Recipie key={recipie.id} recipie={recipie} />
          )
        })
      }
    </div>
  );
}
