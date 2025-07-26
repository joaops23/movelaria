import LoginControllerInterface from "@/Controllers/modules/Login/LoginInterface";
import { PayloadLoginInterface, ResponseLoginInterface } from "@/Interface/Login/PayloadLoginInterface";
import LoginController from "@/Controllers/modules/Login/Login";
import { AuthInterface } from "@/Interface/FormDataInterface";

export async function POST(req: Request): Promise<Response> {
    const body: PayloadLoginInterface = await req.json();
    const ctr: LoginControllerInterface = new LoginController();

    const auth: AuthInterface|undefined = await ctr.sigIn(body.email, body.password);

    let dataRes: ResponseLoginInterface = {data: {
        success: true,
        user: {
            userId: auth?.userId
        }
    }};
    let status;

    if(!auth?.access_token){
        dataRes.data.success = false;
        dataRes.data.message = "Não foi possível autenticar o usuário"
        status = 401;
    }

    return Response.json(dataRes, {
        status : status || 200
    })
}