
import './App.css';
import { InvestorAPI } from './api/api';
import { useEffect, useState } from 'react';
import { InvestorDisplay } from './models/types';
import InvestorGrid from './components/InvestorGrid';

const App = () => {
  const [data, setData] = useState<InvestorDisplay[]>();

  useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    const data = await InvestorAPI.getInvestors();
    setData(data.map( d => {return {
      firm_id: d.firm_id, 
      firm_name: d.firm_name,
      date_added: new Date(d.date_added).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      firm_type: d.firm_type,
      address: `${d.address}, ${d.city}, ${d.country}, ${d.postal_code}`
    } as InvestorDisplay}))
  }

  return (
    <>
      {data && <InvestorGrid data={data} />}
    </>
  );
}

export default App;
