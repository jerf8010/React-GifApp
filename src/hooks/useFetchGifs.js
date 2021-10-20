import { useState, useEffect } from 'react';
import {getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
                .then( imgs => {
                    
        
                    setState({
                        data: imgs,
                        loading: false
                    })
    

                  
                        
                });
    }, [ category ]);  // Ejecuta lainstruccion cuando el componente se renderiza por primera vez
                        // Si la categoria cambia vuelve a ejecutar este efecto
    return state; 
}