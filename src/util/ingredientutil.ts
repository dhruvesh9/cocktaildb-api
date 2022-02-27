import { Ingredient } from "../model/ingredient";

export class IngredientUtil {
    public static mapToIngredient(data: any): Ingredient[] {
        
        let intgredientArr: Ingredient[] = [];
        if (data != null) {
            for (let i = 1; i <= 15; i++) {
                let filteredKeys: string[] = Object.keys(data).filter(x => x === ("strIngredient" + i.toString()) || x === ("strMeasure" + i.toString()));
                
                if(!(data[filteredKeys[0]]==null && data[filteredKeys[0]]==null)){
                    let ingredient = new Ingredient(data[filteredKeys[0]], data[filteredKeys[1]]);
                    intgredientArr.push(ingredient);
                }
            }
        }
        //console.log(intgredientArr)
        return intgredientArr;
    }
}