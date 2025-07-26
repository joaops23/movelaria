import Cookies from "@/lib/cookies"

export async function POST(req: Request): Promise<Response> {
    const session = await (new Cookies().getCookie('access_token'));

    
    return Response.json({data: {access_token: session}}, {status: 200});
}