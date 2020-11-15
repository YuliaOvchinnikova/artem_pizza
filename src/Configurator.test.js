// import { fireEvent, render } from "@testing-library/react";
const { fireEvent, render } = require("@testing-library/react");
const { Configurator } = require("./Configurator");

describe("Configurator", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Configurator />);  
        expect(getByText("Choose pizza size:")).toBeInTheDocument();
    });

    describe("with large size selected", () => {
        it("shows correct sum", () => {
            const { getByText } = render(<Configurator />);
        
            fireEvent.click(getByText("35 sm"));
            
            expect(getByText("Your order: 250 RUB")).toBeInTheDocument();
        });
    });

    describe("with thick dough selected", () => {
        it("shows correct sum", () => {
            const { getByText } = render(<Configurator />);
        
            fireEvent.click(getByText("thick"));
            
            expect(getByText("Your order: 200 RUB")).toBeInTheDocument();
        });
    });

    describe("with hot sauce selected", () => {
        it("shows correct sum", () => {
            const { getByText } = render(<Configurator />);
        
            fireEvent.click(getByText("hot sauce"));
            
            expect(getByText("Your order: 200 RUB")).toBeInTheDocument();
        });
    });
    
    describe("with all toppings checked", () => {
        it("shows maximum sum", () => {
            const { getByText } = render(<Configurator />);
        
            fireEvent.click(getByText("mozzarella"));
            fireEvent.click(getByText("cheddar"));
            fireEvent.click(getByText("dorblu"));
        
            fireEvent.click(getByText("tomato"));
            fireEvent.click(getByText("mushrooms"));
            fireEvent.click(getByText("paprika"));

            fireEvent.click(getByText("bacon"));
            fireEvent.click(getByText("pepperoni"));
            fireEvent.click(getByText("ham"));
        
            expect(getByText("Your order: 461 RUB")).toBeInTheDocument();
        });
    });

    describe("on pizza submit", () => {
        it("passes constructed pizza", () => {
            const onPizzaSubmit = jest.fn();
            const { getByText } = render(
                <Configurator onPizzaSubmit={onPizzaSubmit} />
            );
        
            fireEvent.click(getByText("35 sm"));
            fireEvent.click(getByText("thin"));
            fireEvent.click(getByText("hot sauce"));

            fireEvent.click(getByText("cheddar"));
            fireEvent.click(getByText("dorblu"));
        
            fireEvent.click(getByText("tomato"));
            fireEvent.click(getByText("mushrooms"));
            fireEvent.click(getByText("paprika"));

            fireEvent.click(getByText("bacon"));

            fireEvent.click(getByText("Your order: 424 RUB"));
           
        
            expect(onPizzaSubmit).toBeCalledWith({
                dough: "thin",
                ingredients: ["cheddar", "dorblu", "tomato", "mushrooms", "paprika", "bacon"],
                sauce: "hot",
                size: "large",
            });
        });
    });
});
