export class DrinkType {
    private static alcoholicInstance: DrinkType;
    private static nonAlcoholicInstance: DrinkType;

    private constructor(private drinkCode: number, private drinkDesc: string) {

    }

    public static getAlcoholicInstance(): DrinkType {
        if (!DrinkType.alcoholicInstance) {
            DrinkType.alcoholicInstance = new DrinkType(Type.ALCOHOLIC, Type[Type.ALCOHOLIC]);
        }

        return DrinkType.alcoholicInstance;
    }

    public static getNonAlcoholicInstance(): DrinkType {
        if (!DrinkType.nonAlcoholicInstance) {
            DrinkType.nonAlcoholicInstance = new DrinkType(Type.NON_ALCOHOLIC, Type[Type.NON_ALCOHOLIC]);
        }

        return DrinkType.nonAlcoholicInstance;
    }
}

enum Type {
    ALCOHOLIC, NON_ALCOHOLIC
}

export class DrinkTypeUtil {
    static getType(drinkType: string): DrinkType {
        let item: DrinkType;
        if (drinkType === "Alcoholic") {
            item = DrinkType.getAlcoholicInstance();
        } else {
            item = DrinkType.getNonAlcoholicInstance();
        }

        return item;
    }
}
