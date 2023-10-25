import APIError from '../utils/APIError';
import keyv from './database/connection';
import { Order, OrderStatus } from './database/definitions';

export async function saveNewOrder(o: Order) {
    const rawIds = await keyv.get('ids');
    const idList = Array.isArray(rawIds) ? rawIds as string[] : [];
    idList.push(o.id);
    await keyv.set('ids', idList);

    await keyv.set(o.id, o);
    return o;
}

export async function updateStatus(id: string, status: OrderStatus) {
    const order = await keyv.get(id);
    if(!order) {
        throw new APIError(404, 'Order not found!');
    }

    await keyv.set(id, { ...order, status });
}