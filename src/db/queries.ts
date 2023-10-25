import APIError from '../utils/APIError';
import keyv from './database/connection';
import { DOUGH_DEFINITIONS, Order, SAUCE_DEFINITIONS, TOPPING_DEFINITIONS } from './database/definitions';

export function getDoughDefinition(name: string) {
    const def = DOUGH_DEFINITIONS.find(v => v.name === name);
    return def!;
}

export function getSauceDefinition(name: string) {
    const def = SAUCE_DEFINITIONS.find(v => v.name === name);
    return def!;
}

export function getToppingDefinition(name: string) {
    const def = TOPPING_DEFINITIONS.find(v => v.name === name);
    return def!;
}

export async function getOrderById(id: string) {
    const order = await keyv.get(id);
    if(!order) {
        throw new APIError(404, 'Order not found!');
    }

    return order as Order;
}