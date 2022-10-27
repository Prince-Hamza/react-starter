import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js';


export default function Stripes() {

    const stripeCheckout = async () => {
        const stripePromise = loadStripe("pk_live_cKzP5F3yEntaHFW92JGWtj9o00h1FWf5qd")
        const stripe = await stripePromise;
        var resp = await stripe.redirectToCheckout({
            lineItems: [{ price: 'sku_HKb1IYKwc9naKH', quantity: 1 }],
            mode: 'payment',
            successUrl: 'https://qhaustralia.com.au/success',
            cancelUrl: 'https://qhaustralia.com.au/canceled',
        })
        console.log(`stripe response :: ${JSON.stringify(resp)}`)
    }

    return (
        <div>
            <button
                style={Styles.Button}
                onClick={() => { stripeCheckout() }}
                id="checkout-button-sku_HKb1IYKwc9naKH"
                role="link"
                type="button"
            >
                Checkout
            </button>
            <div id="error-message"></div>
        </div>
    )
}

const Styles = ({
    Button: {
        backgroundColor: '#6772E5',
        color: '#FFF',
        padding: '8px 12px',
        border: '0',
        borderRadius: '4px',
        fontSize: '1em',
        cursor: 'pointer'
    }
})
