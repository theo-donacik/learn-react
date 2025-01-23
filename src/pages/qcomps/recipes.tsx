interface Recipie {
  id: string,
  name: string,
  ingredients: Set<String>
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

function IngredientItemList({ingredients} : {ingredients: Array<String>}) {
  return (
    ingredients.map(name => {
      return (
        <li>
          {name}
        </li>
      )
    })
  )
}

function Recipie({id, name, ingredients} : Recipie) {
  return (
    <div>
      <h2>{name}</h2>  
      <ul id={id}>
       <IngredientItemList ingredients={Array.from(ingredients.values())} />
      </ul>
    </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipie => {
          return (
            <Recipie id={recipie.id} name={recipie.name} ingredients={recipie.ingredients} />
          )
        })
      }
    </div>
  );
}
