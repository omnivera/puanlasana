import {ref} from 'vue'

import {firestoreRef} from '@/firebase/config'

const getYetki=async (email)=>{

    
    const admin=ref('')

    await firestoreRef.collection('uyeler').where('email','==',email).get().then(snap=>{
        snap.forEach(doc=>{
           
            admin.value=doc.data().admin
        })
    })

    return {admin}
}


export default getYetki