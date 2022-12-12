import { Button, Typography } from "@mui/material"
import { useState } from "react";
import { ModernToaster } from "react-modern-toaster";
import './index.scss';

function App() {
  const [state, setState] = useState({
    title: '',
    message: ''
  })

  const showToast = () => {
    console.log('im lciked')
    setState({
      title: "Did you Know?",
      message: 'Here is something that you might like to know.'
    })
  }

  return (
    <div className="App">
     
      <ModernToaster
        type="info"
        position="top-right"
        title={state.title}
        message={state.message}
      />
      <Typography variant="h4">Thar Groups Welcomes you.</Typography>
      <br />
      <Typography variant="body1">Start your project after clear this Message</Typography>
      <Button onClick={() => showToast()}></Button>
    </div>
  )
}

export default App
