import Decimal from 'decimal.js';
import { v4 as uuidv4 } from 'uuid';
import { saveNewOrder } from '../db/commands';
import { OrderStatus } from '../db/database/definitions';
import { getDoughDefinition, getOrderById, getSauceDefinition, getToppingDefinition } from '../db/queries';
import { PizzaOrderRequestPayload } from '../schemas/OrderValidator';

export async function handleNewOrderPlaced(payload: PizzaOrderRequestPayload) {
    const dough = getDoughDefinition(payload.dough);
    const sauce = getSauceDefinition(payload.sauce);
    const toppings = payload.toppings.map(v => getToppingDefinition(v));
    const order = await saveNewOrder({ 
        id: uuidv4(), 
        dough,
        sauce,
        toppings,
        price: Decimal.add(dough.price, sauce.price).add(toppings.reduce((acc, v) => acc.add(v.price), new Decimal(0))).toNumber(),
        status: OrderStatus.AWAITING_PAYMENT,
    });

    return {
        id: order.id,
        price: order.price,
    };
}

export async function handleGetOrderStatus(id: string) {
    const order = await getOrderById(id);

    return {
        id,
        status: order.status
    };
}