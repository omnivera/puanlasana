import {ref} from 'vue'

import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
const getProfile=async (uid)=>{

    
    const user = "sd"

  

    return {user}
}


export default getProfile