import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';

function App() {
//  let handleButton=()=>{
//   console.log("Button was clicked");
//  }

  return (
    <>
      {/* <h1>Material UI</h1>
      <Button variant='contained' onClick={handleButton}>Click here</Button>

      <Button variant='contained' onClick={handleButton} disabled>Can not click</Button>
      
      <Button variant='contained' onClick={handleButton} size="small" color='error'>Error</Button>

      <Button variant='contained' onClick={handleButton} size="large" color='success'>Success</Button>
      
      <Button variant='contained' onClick={handleButton} size="small" color='error' startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Above Delete button task is irreversible.</Alert> */}

      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp />
    </>
  )
}

export default App;
