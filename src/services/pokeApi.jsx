import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { getDocs, collection } from 'firebase/firestore';
import db from '../firebase';

export const pokeApi = createApi({
    reducerPath: "poke",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
      getUsers: builder.query({
        async queryFn(){
            try{
                let users = []
                const ref = await getDocs(collection(db,'usuarios'))
                const usuarios = await ref.docs.map(doc=>{
                    users.push({
                        id:doc.id,
                        ...doc.data(),
                    })
                }) /*en comparacion a la práctica original (sin rtk query), modifique el fetch para no manjear datos undefined que marcarian error*/
                console.log(users)
                return {data:users}

            }catch(err){
                return {error:err}
            }
        }
      }),
    }),
  });
  
  export const { useGetUsersQuery } = pokeApi;