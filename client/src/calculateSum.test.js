
const { calculateSum } = require("./calculateSum")

describe("calculateSum", () => {
    it("returns the sum of all selected pizza parts", () => {
        expect(calculateSum({
            size: "small",
            dough: "thin",
            sauce: "tomato",
            ingredients: ["mozzarella", "cheddar", "dorblu", "tomato", "mushrooms", "paprika", "bacon", "pepperoni", "ham"]
        })).toEqual(461)
    })

    it("returns the sum with large size pizza, thick dough and hot sauce", () => {
        expect(calculateSum({
            size: "large",
            dough: "thick",
            sauce: "hot",
            ingredients: []
        })).toEqual(250)
    })
})