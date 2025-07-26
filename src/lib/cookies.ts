import { cookies } from "next/headers";

export default class Cookies {

    setCookie = async (key: string, value: string, expires: number = 60*15) => {
        const ck = await cookies();

        ck.set(key, value, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: expires
        })
    }

    deleteCookie = async(key: string) => {
        const ck = await cookies();

        ck.delete(key)
    }


    getCookie = async(key: string): Promise<any> => {
        const ck = await cookies();

        return ck.get(key);
    }
}