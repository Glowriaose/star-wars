import {useQuery} from '@tanstack/react-query';
import axios from 'axios';


export const useFilmData = ()=>{
    const film = useQuery({
     
     queryKey: ['films'],
        queryFn:( async() =>{
        try{
         const res = await axios.get('https://swapi.dev/api/films')
         return res.data
        }
    catch(error) {
   
    };
     })
     
   })
   return film
     }
  