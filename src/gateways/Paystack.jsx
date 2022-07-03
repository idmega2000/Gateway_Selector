import { PaystackButton } from 'react-paystack';




const Paystack = ({publicKey}) => {

  // paystack
  const componentProps = {
    email: 'idmega2000@gmail.com',
    amount: 2000,
    metadata: {
      name: 'hello',
      phone: 2348098947484
    },
    publicKey,
    text: "Pay With PayStack",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

  return (
    <PaystackButton {...componentProps} />
  )
}


export default Paystack;
