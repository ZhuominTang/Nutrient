export interface Food{
    description: string
    fdcId: number
    foodNutrients: Array<FoodNutrient>
}

interface FoodNutrient{
    id: number,
    amount:number,
    nutrient:Nutrient
}

interface Nutrient{
    id: number,
    number : string
    name : string,
    rank: number,
    unitName : string
}