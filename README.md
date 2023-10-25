
    GET /options

  Returns available options
   
    POST /order
        {
	        dough: string,
	        sauce: string,
	        toppings: string[]
        }
Creates new order

    GET /order/status?id=
Returns status of an order

    POST /payment
	    {
		    orderId: string,
		    amount: number
	    }
Creates payment for order