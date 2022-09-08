import {ref} from 'vue'
import {authRef} from '../firebase/config'

const hata=ref(null)

const signup=async (email,parola,kullaniciAd)=>{
    hata.value=null;

    try {
        const res=await authRef.createUserWithEmailAndPassword(email,parola);
        if(!res){
            throw new Error('Üye Olma İşlemi Gerçekleşmedi')
        }
        await res.user.updateProfile({
            displayName:kullaniciAd
        })
        hata.value=null;
        
        return res;
    } catch (error) {
        hata.value=error.code
        if (hata.value == 'auth/invalid-email') {
            hata.value = 'Lütfen geçerli bir e-posta adresi giriniz.'
          } else if (hata.value == 'auth/weak-password') {
            hata.value = 'Lütfen daha güçlü bir şifre giriniz.'
          } else if (hata.value == 'auth/email-already-in-use') {
            hata.value = 'E-posta adresi kullanılıyor. Lütfen başka e-posta adresi deneyiniz.'
          }
    }
}

const useSignup=()=>{
    return {hata,signup}
}

export default useSignup