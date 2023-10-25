import z from 'zod';
import { DoughOptionValidator, SauceOptionValidator, ToppingOptionValidator } from './IngredientsValidator';

const PizzaOrderValidator = z.object({
    dough: DoughOptionValidator,
    sauce: SauceOptionValidator,
    toppings: z.array(ToppingOptionValidator)
        .max(5, 'Max 5 toppings allowed!')
        .refine(v => new Set(v).size === v.length, 'Repeated toppings!')
});

type PizzaOrderRequestPayload = z.infer<typeof PizzaOrderValidator>;

export {
    PizzaOrderValidator,
    PizzaOrderRequestPayload
};