import supabase from "../../../lib/supabase"
import { PayloadLoginInterface, ResponseLoginInterface } from "@/Interface/Login/PayloadLoginInterface";
import Cookies from "@/lib/cookies";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

export async function POST(req: Request) {
    
    let dataRes: ResponseLoginInterface = {data: {success: true}};
    let status;

    // Armazena o token nos cookies de sessão do usuário
    await new Cookies().deleteCookie("access_token");

    return Response.json({dataRes}, {
        status : status || 200
    })
}