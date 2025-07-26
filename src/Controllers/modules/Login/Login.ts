import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import supabase from "@/lib/supabase";
import { AuthInterface } from "@/Interface/FormDataInterface";
import LoginControllerInterface from "./LoginInterface";
import Cookies from "@/lib/cookies";

export default class LoginController implements LoginControllerInterface{
    async sigIn(email: string, password: string): Promise<AuthInterface|undefined> {

        try{
            const auth: AuthTokenResponsePassword = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            // Armazena o token nos cookies de sessão do usuário
            await new Cookies().setCookie('access_token', String(auth.data.session?.access_token), auth.data.session?.expires_in);

            return {
                access_token: auth.data.session?.access_token,
                expires: auth.data.session?.expires_in,
                userId: auth.data.user?.id
            }
        } catch(err) {
            console.error(err);
        }

    }
}