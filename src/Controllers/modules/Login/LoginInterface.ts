import { AuthInterface } from "@/Interface/FormDataInterface";

export default interface LoginControllerInterface {
    sigIn(email: string, password: string): Promise<AuthInterface|undefined>
}