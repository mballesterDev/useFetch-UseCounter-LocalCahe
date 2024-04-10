import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';


const localCache = {};
function useFetch(url) {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error:null,
    });

    useEffect(() => {
     getFetch();
    
      
    }, [url])


    const setLoadingState = () => { //creamos está funcion para simular la carga de datos
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error:null,
        })
    }
    
    const getFetch = async () => {

      if (localCache[url]) {
          setState({
              data: localCache[url],
              isLoading: false,
              hasError: false,
              error: null,
        
          })
          return
      }
      
      setLoadingState();


      const res = await fetch(url);

      await new Promise((resolve) => setTimeout(resolve, 1000));
       
        if(!res.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: 'No se pudo cargar la info ya que !res.ok',
            })
            return;
        }
        const data = await res.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })

        console.log(data);
      
      
        localCache[url] = data; //almacenamiento el cahcé(data)  de la url específica

    }




  return { //también podria enviuar todo desstructurado, pero como quiero solo 3 específicos me srive asi
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    
  }
}


export default useFetch;