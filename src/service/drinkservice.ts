import request, { Response } from "request";
import { DrinkMapper } from "../data-mapper/drinkmapper";
import { Drink } from "../model/drink";
import { DrinkEndpoint } from "../util/drinkendpoints";

export class DrinkService{
    public static getRandomDrink(){
        request.get(DrinkEndpoint.GET_RANDOM_DRINK,(error:any,response:Response)=>{
            let drinks:Drink[] = DrinkMapper.getInstance().mapJsonToDrink(JSON.parse(response.body));
            console.log(JSON.stringify(drinks));
            //console.log(drinks);
        })        
    }
}