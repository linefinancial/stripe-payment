import logo from './logo.svg';
import './App.css';

function App() {

  const onStripePaymentSuccessClick = () => {
    let message = {
      name: 'payment-success',
      timestamp: new Date()
    }
    // eslint-disable-next-line no-restricted-globals
    window.ReactNativeWebView.postMessage(JSON.stringify(message), '*');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Stripe Payment
        </p>
        <button onClick={onStripePaymentSuccessClick}>Send Stripe Payment Success</button>
      </header>
    </div>
  );
}

export default App;
