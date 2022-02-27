import { DrinkType } from "../util/drinktype";
import { Ingredient } from "./ingredient";


export class Drink {
    constructor(private drinkId: number,
        private drinkName: string,
        private drinkCategory: string,
        private drinkType: DrinkType,
        private glassType: string,
        private instruction: Map<string, String>,
        private thumbnailUrl: string,
        private ingredients: Ingredient[]) {
        this.drinkId = drinkId;
        this.drinkName = drinkName;
        this.drinkCategory = drinkCategory;
        this.drinkType = drinkType;
        this.glassType = glassType;
        this.instruction = instruction;
        this.thumbnailUrl = thumbnailUrl;
        this.ingredients = ingredients;
    }

    public getId() {
        return this.drinkId;
    }

    public getName() {
        return this.drinkName;
    }

    public getCategory() {
        return this.drinkCategory;
    }

    public getType() {
        return this.drinkType;
    }

    public getGlassType() {
        return this.glassType;
    }

    public getInstructions() {
        return this.instruction;
    }

    public getThumbnailUrl() {
        return this.thumbnailUrl;
    }

    public getIngredients() {
        return this.ingredients;
    }
}
