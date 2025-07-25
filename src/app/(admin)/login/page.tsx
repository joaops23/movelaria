"use client"
import * as React from 'react';
import { FormDataLogin } from "@/Interface/FormDataInterface";
import { useAuth } from '@/context/authContext';
export default function login() {
    const [loadingSubmit, setLoadingSubmit] = React.useState(false);
    const [formData, setFormData] = React.useState<FormDataLogin>({
        email: '',
        password: '',
    });
    const {auth, logIn, logOut} = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        setLoadingSubmit(true);
        await logIn({"email": formData.email, "password": formData.password})
        setLoadingSubmit(false);
    }
    return(
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Bem vindo novamente!</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm/6 font-medium text-gray-900">Email</label>
                    <div className="mt-2">
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label className="block text-sm/6 font-medium text-gray-900">Senha</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    {loadingSubmit &&
                        <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>Entrando...</button>
                    }

                    {loadingSubmit == false &&
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                    }
                </div>
                </form>
            </div>
            </div>

    );
}