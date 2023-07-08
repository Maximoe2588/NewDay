import './App.css';



function Notifications({ inbox }) {
  if (inbox.length > 0) {
    return <p>You have {inbox.length} notifications today!</p>;
  }
  return null;
}



function App() {
  
      const notifications = ["You received a package", "The weather is sunny","New Message"];
      return <Notifications inbox ={notifications} />;
    }


export default App;

