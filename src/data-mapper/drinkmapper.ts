import { Drink } from "../model/drink";
import { Ingredient } from "../model/ingredient";
import { DrinkTypeUtil } from "../util/drinktype";
import { IngredientUtil } from "../util/ingredientutil";
import { InstructionUtil } from "../util/instructionutil";

export class DrinkMapper {
    private static instance: DrinkMapper;

    private constructor() {
    }

    public static getInstance(): DrinkMapper {
        if (!DrinkMapper.instance) {
            DrinkMapper.instance = new DrinkMapper();
        }

        return DrinkMapper.instance;
    }

    public mapJsonToDrink(data: any): Drink[] {

        let drinks: Drink[] = [];

        if (data != null) {
            for (let item of data["drinks"]) {
                
                let drink: Drink = new Drink(parseInt(item.idDrink), item.strDrink, item.strCategory, DrinkTypeUtil.getType(item.strAlcoholic), item.strGlass, InstructionUtil.mapInstructionsfromJson(item), item.strDrinkThumb, IngredientUtil.mapToIngredient(item));
                drinks.push(drink);
            }
        }

        return drinks;
    }
}