import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { getDocs, collection, addDoc } from 'firebase/firestore';
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
                return {data:users}

            }catch(err){
                return {error:err}
            }
        }
      }),
      addUser:builder.mutation({
        async queryFn(user){
            try{
                await addDoc(collection(db,"usuarios"),user)
                console.log('User added')
            }catch(err){
                console.log(err.message)
            }
        }
      })
    }),
  });
  
  export const { useGetUsersQuery, useAddUserMutation } = pokeApi;