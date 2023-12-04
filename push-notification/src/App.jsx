import './App.css'
import addNotification from 'react-push-notification';
import logo from './images/logo.jpg';

function App() {

  const handleNotify = () => {
      addNotification({
      title: "sGate Tech Solutions Pvt. Ltd.",
      message: "Notification Message",
      duration: 10000,
      icon: logo,
      native: true,
      onClick: ()=>window.location = "https://www.sgate.in/"
    });
  }

  return (
    <>
      <button style={{ margin: "200px" }} onClick={handleNotify}>Click to notify</button>
    </>
  )
}

export default App
