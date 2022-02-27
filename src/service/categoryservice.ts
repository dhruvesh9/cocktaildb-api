import request from "request";
import { CategoryEndpoint } from "../util/endpoints";

export class CategoryService{
    public static getCategory(queryParam?:string){
        if(queryParam==null){
            queryParam = "list";
        }
        request.get(CategoryEndpoint.CATEGORY_BASE_URL+queryParam,(error,response)=>{
            if(error!=null){
                console.error(error);
                return;
            }
            console.log(response.body);
        });
    }
}