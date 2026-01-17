import { PrimeReactProvider } from 'primereact/api';
import HomePage from './views/HomePage'


function App() {

  return (
    <PrimeReactProvider>
      <HomePage/>
    </PrimeReactProvider>
  )
}

export default App
