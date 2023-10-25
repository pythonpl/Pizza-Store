interface ItemDefinition {
    name: string;
    price: number;
}

enum OrderStatus {
    AWAITING_PAYMENT = 'AWAITING_PAYMENT',
    PREPARATION = 'PREPARATION',
    BAKING = 'BAKING',
    DELIVERING = 'DELIVERING',
    DELIVERED = 'DELIVERED',
}

interface Order {
    id: string;
    dough: ItemDefinition;
    sauce: ItemDefinition;
    toppings: ItemDefinition[];
    price: number;
    status: OrderStatus;
}

const DOUGH_DEFINITIONS: ItemDefinition[] = [
    {
        name: 'PLAIN',
        price: 5
    },
    {
        name: 'VEGAN',
        price: 5,
    },
    {
        name: 'WHOLE_WHEAT',
        price: 5,
    },
];

const SAUCE_DEFINITIONS: ItemDefinition[] = [
    {
        name: 'TOMATO',
        price: 2,
    },
    {
        name: 'BOLOGNESE',
        price: 2,
    },
    {
        name: 'BBQ',
        price: 2,
    },
    {
        name: 'CREAM',
        price: 2,
    },
];

const TOPPING_DEFINITIONS: ItemDefinition[] = [
    {
        name: 'SALAMI',
        price: 2.99,
    },
    {
        name: 'TUNA',
        price: 2.99,
    },
    {
        name: 'HAM',
        price: 2.99,
    },
    {
        name: 'GROUND_BEEF',
        price: 3.99,
    },
    {
        name: 'MUSHROOMS',
        price: 1.49,
    },
    {
        name: 'GARLIC',
        price: 0.99,
    },
    {
        name: 'CORN',
        price: 1.99,
    },
    {
        name: 'OLIVES',
        price: 1.99,
    },
    {
        name: 'ONION',
        price: 0.99,
    },
    {
        name: 'FETA',
        price: 1.99,
    },
    {
        name: 'PINEAPPLE',
        price: 1.49,
    },
    {
        name: 'JALAPENO',
        price: 1.99,
    },
    {
        name: 'FRESH_BASIL',
        price: 0.49,
    },
];

export {
    ItemDefinition,
    OrderStatus,
    Order,
    DOUGH_DEFINITIONS,
    SAUCE_DEFINITIONS,
    TOPPING_DEFINITIONS
};