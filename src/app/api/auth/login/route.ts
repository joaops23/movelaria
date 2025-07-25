import supabase from "../../../../lib/supabase"
import { PayloadLoginInterface, ResponseLoginInterface } from "@/Interface/Login/PayloadLoginInterface";
import Cookies from "@/lib/cookies";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

export async function POST(req: Request) {
    const body: PayloadLoginInterface = await req.json();
    const auth: AuthTokenResponsePassword = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password
    })
    let dataRes: ResponseLoginInterface = {data: {success: true}};
    let status;

    const access_token = auth.data.session?.access_token;
    const expires = auth.data.session?.expires_in;
    
    if(!access_token){
        console.error(auth.error)
        dataRes.data.success = false;
        dataRes.data.message = "Não foi possível autenticar o usuário"
        status = 401;
    }

    // Armazena o token nos cookies de sessão do usuário
    await new Cookies().setCookie('access_token', String(access_token), expires);

    return Response.json(dataRes, {
        status : status || 200
    })
}