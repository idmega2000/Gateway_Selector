import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


const FlutterWave = ({publicKey}) => {

    // paystack

    // flutterwave
    const config = {
        public_key: publicKey,
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        },
        customizations: {
            title: 'My store',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
            console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => { },
    };

    return (
        <FlutterWaveButton {...fwConfig} />
    )
}


export default FlutterWave;
