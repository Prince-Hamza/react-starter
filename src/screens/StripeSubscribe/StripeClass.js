

export class StripeInfo {

    constructor(stripe) {
        this.stripe = stripe
    }

    createProduct = async () => {
        const product = await this.stripe.products.create({
            name: 'Vegetable Box',
            statement_descriptor: 'Venetable Box'
        })
        return product
    }

    createPlan = async () => {
        const plan = await this.stripe.plans.create({
            currency: 'usd',
            interval: 'month',
            product: 'pro_xxxxx',
            nickname: 'monthly heathly plan',
            amount: 20,
            usage_type: 'licensed',
        })
        return plan
    }

    createPaymentMethod = async (elements, CardNumberElement) => {
        // "card-element"
        const card = elements.getElement(CardNumberElement);
        const payload = await this.stripe.createPaymentMethod({
            type: 'card',
            card: card,
            billing_details: {
                name: 'shippingName',
                phone: 'phone',
                address: 'address',
            },
        })
        return payload.paymentMethod.id
    }

    createCustomer = async (paymentMethodID) => {
        const customer = await this.stripe.customers.create({
            name: 'shippingName',
            address: 'address',
            invoice_settings: {
                default_payment_method: paymentMethodID,
            },
            shipping: 'shipping',
        })
        return customer
    }

    createSubscription = async (customerID, planId, coupon) => {
        const subscription = await this.stripe.subscriptions.create({
            customer: customerID,
            tax_percent: 8,
            items: [{ plan: planId, quantity: 1 }],
            coupon: coupon ? coupon : 'coupon'
        })
        return subscription
    }
}

