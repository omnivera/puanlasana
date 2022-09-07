import {ref} from 'vue'
import {authRef} from '../firebase/config'

const hatalogin=ref(null)

const login=async (email,parola)=>{
    hatalogin.value=null;

    try {
        const res=await authRef.signInWithEmailAndPassword(email,parola);
        hatalogin.value=null;
        return res;
    } catch (error) {
        
        hatalogin.value = error.code;

        if ( hatalogin.value == 'auth/invalid-email') {
            hatalogin.value = 'Lütfen geçerli bir e-posta adresi giriniz.';
        } else if ( hatalogin.value == 'auth/wrong-password') {
            hatalogin.value = 'Lütfen şifrenizi doğru giriniz.';
        } else if ( hatalogin.value == 'auth/email-already-in-use') {
            hatalogin.value = 'E-posta adresi kullanılıyor. Lütfen başka e-posta adresi deneyiniz.';
        } else {
            hatalogin.value = 'Giriş Yapılamadı. Lütfen tekrar deneyiniz.';
        }
    }
}

const useLogin=()=>{
    return {hatalogin,login}
}

export default useLogin