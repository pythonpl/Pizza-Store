import { z } from 'zod';

const PaymentRequestValidator = z.object({
    orderId: z.string(),
    amount: z.number()
});

type PaymentRequestPayload = z.infer<typeof PaymentRequestValidator>;

export {
    PaymentRequestValidator,
    PaymentRequestPayload,
};