
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import InvestorGrid from './components/InvestorGrid';
import InvestorPage from './components/InvestorPage';

const App = () => {

  return (
    <Routes>
      <Route path='investor/:id' element={ <InvestorPage />} />
      <Route path='/' element={ <InvestorGrid/>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
