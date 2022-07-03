
import { useEffect, useState } from 'react';
import { fetchAllowedGateway } from '../actions/paymentGateway';
import FlutterWave from '../gateways/FlutterWave';
import Paystack from '../gateways/Paystack';
import styles from '../styles/Home.module.css';


const mockPaymentEndpoint = [
    {
        identifier: 'FLUTTER_WAVE',
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    },
    {
        identifier: 'PAY_STACK',
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    }
]

const allPayments = {
    FLUTTER_WAVE: FlutterWave,
    PAYSTACK: Paystack,
}

const displayPayment = (key, publicKey) =>{
    const Component = allPayments[key];
    return <Component publicKey={publicKey} />
}


const PaymentButtons = () => {
    const [allGateways, setAllGateways] = useState([]);


    useEffect(() => {
        fetchAllowedGateway().then((gateway) => {
            if(gateway.success){
                setAllGateways(gateway.data);
            }
        });
    }, [])

    return (
        <div className={styles['gateway-button']}>
                    {allGateways.map(pay => {
                        const { identifier, publicKey} = pay;
                        return displayPayment(identifier, publicKey);
                    })}
        </div>
    )
}


export default PaymentButtons;
