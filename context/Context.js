import { createContext, useState } from "react";
export const Message_Data = createContext(null);

function Context({ children }) {  
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [quizData, setQuizData] = useState({});
    const [user, setUser] = useState({});    return (
      <Message_Data.Provider value={{quizData, setQuizData, isAuthenticated, setIsAuthenticated, loading, setLoading, refresh, setRefresh, user, setUser}}>
        {children}
      </Message_Data.Provider>
    );
  }

  export default Context