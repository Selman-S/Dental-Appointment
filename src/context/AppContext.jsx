import React, { useEffect } from 'react';

import { useState } from 'react';
import { createContext } from 'react';


export const AppContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);


  useEffect(() => {


  }, []);

  return (
    <AppContext.Provider value={{ open,setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;