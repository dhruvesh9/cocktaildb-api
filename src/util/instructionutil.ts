export class InstructionUtil{
    public static mapInstructionsfromJson(data:any):Map<string,string>{
        let instructionsMap:Map<string,string> = new Map();

        let localeKeys = Object.keys(data).filter(item=>item.startsWith("strInstructions"));
        for(let locale of localeKeys){
            let i = locale.slice("strInstructions".length);
            if(i===""){
                i="EN";
                instructionsMap.set(i,data["strInstructions"]);
            }else{
                instructionsMap.set(i,data["strInstructions"+i]);
            }
        }

        return instructionsMap;
    }
}