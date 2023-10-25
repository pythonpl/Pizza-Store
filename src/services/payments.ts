import { updateStatus } from '../db/commands';
import { OrderStatus } from '../db/database/definitions';
import { getOrderById } from '../db/queries';
import { PaymentRequestPayload } from '../schemas/PaymentValidator';
import APIError from '../utils/APIError';

export async function handlePayment(payload: PaymentRequestPayload) {
    const order = await getOrderById(payload.orderId);

    if(order.status !== OrderStatus.AWAITING_PAYMENT) {
        throw new APIError(409, 'Invalid status!');
    }

    if(order.price !== payload.amount) {
        throw new APIError(400, 'Invalid amount!');
    }
    
    await updateStatus(order.id, OrderStatus.PREPARATION);
}