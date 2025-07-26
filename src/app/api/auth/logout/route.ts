import { ResponseLoginInterface } from "@/Interface/Login/PayloadLoginInterface";
import Cookies from "@/lib/cookies";


export async function GET(req: Request) {
    
    let dataRes: ResponseLoginInterface = {data: {success: true}};

    // Armazena o token nos cookies de sessão do usuário
    await new Cookies().deleteCookie("access_token");

    return Response.json({dataRes}, {
        status : 200
    })
}