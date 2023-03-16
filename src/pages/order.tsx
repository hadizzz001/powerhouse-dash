import React , {useEffect} from 'react';
import ReactDOM from 'react-dom'; 
import DisplayTable from '../components/dashboard/display-table';

// if (typeof window !== "undefined") {
//   ReactDOM.render(
//   <DisplayTable />,
//   document.getElementById('root')
//   );
// }

function Home(){
  return (<DisplayTable/>)
}

export default Home;
 
