import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {    

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    
    setTimeout(() => {

      try {      
      
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
      
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
        
      } catch (error) {
  
        setLoading(false);
        setError(true);
        
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }; 
  
  return {
    item, 
    saveItem,
    loading,
    error,
  };  
}

export { useLocalStorage };

// localStorage.removeItem('TODOs_V1');

// const defaultTodos = [ /*Renderizar Arrays*/
//   { text: 'Curso de React.jsx', completed: false },
//   { text: 'Curso de Intro a React.jsx', completed: false },
//   { text: 'Frontend con React.jsx', completed: false },
//   { text: 'Curso de React.jsx con TypeScript', completed: false },
//   { text: 'Usar estados derivados', completed: false },
// ];

// localStorage.setItem('TODOs_V1', JSON.stringify(defaultTodos));