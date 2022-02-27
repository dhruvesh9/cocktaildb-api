export class Ingredient {
    constructor(private name: string, private measure: string) {
    }

    public getName(): string {
        return this.name;
    }

    public getMeasure(): string {
        return this.measure;
    }
}