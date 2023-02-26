import React,{useState,createContext} from 'react';
import Home from './pages/Home';
import useAxios from './hooks/useAxios';

export const AppContext = createContext();

function App() {
  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  const [dark, setDark] = useState(0);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    dark,
    setDark
  }

  return (
    <AppContext.Provider value={value}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
