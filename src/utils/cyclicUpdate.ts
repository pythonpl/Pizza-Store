import { updateStatus } from '../db/commands';
import keyv from '../db/database/connection';
import { OrderStatus } from '../db/database/definitions';
import { getOrderById } from '../db/queries';


function nextStatus(o: OrderStatus) {
   switch(o) {
    case OrderStatus.AWAITING_PAYMENT: return OrderStatus.PREPARATION;
    case OrderStatus.PREPARATION: return OrderStatus.BAKING;
    case OrderStatus.BAKING: return OrderStatus.DELIVERING;
    case OrderStatus.DELIVERING: return OrderStatus.DELIVERED;
    case OrderStatus.DELIVERED: return OrderStatus.DELIVERED;
    default: return OrderStatus.DELIVERED;
   }
}

export async function cyclicStatusUpdate() {
    const rawIds = await keyv.get('ids');

    const idList = Array.isArray(rawIds) ? rawIds as string[] : [];
    const orders = await Promise.all(idList.map(id => getOrderById(id)));
    const toUpdate = orders.filter(v => v.status !== OrderStatus.AWAITING_PAYMENT).filter(v => v.status !== OrderStatus.DELIVERED);

    await Promise.all(toUpdate.map(o => updateStatus(o.id, nextStatus(o.status))));
}