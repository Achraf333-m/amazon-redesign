import { db } from '@/firebase'
import { Prod } from '@/types'
import { DocumentData, collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
 

function useCart(uid:string | undefined) {
    const [cart, setCart] = useState<Prod[] | DocumentData[]>([])

    useEffect(() => {
        if (!uid) return
        return onSnapshot(
            collection(db, 'customers', uid,'cart'),
            (snapshot) => {
                setCart(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
            }
        )
    }, [db, uid])

  return cart
    
  
}

export default useCart