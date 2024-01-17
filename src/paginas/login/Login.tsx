import React from 'react';


function Login() {
    return (
        <>
            <div className="h-96 mb-96">

                <h1 className='text-xl'>Login</h1>
                <form>
                    <label className='m-5' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Digite seu email'/>
                    <label className='m-5' htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder='Digite sua senha'/>
                    <button className='w-5/6 bg-[#1E40AF] text-zinc-50 rounded-lg' type="button"> Enviar </button>

                </form>

            </div>
        </>
    );
}

export default Login;