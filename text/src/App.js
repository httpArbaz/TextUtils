import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {

    if(mode === 'light') {
      SetMode ('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Has Enable","success ");
      document.title ="TextUtils - Dark Mode"
      setInterval(() => {
        document.title ="Install Text Utils Now"
      }, 2000);
      setInterval(() => {
        document.title ="TextUtils Is Amazing!"
      }, 1500);
    } else {
      SetMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Enable","success ");
      document.title ="TextUtils - Light Mode"
    }
  }
  return (
<>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading ="Enter The Text To Analyze Below" mode={mode}/>
</div>
</>
)
}

export default App;
