import { Link } from "react-router-dom";

export default function Form() {
    return (
        <>
            {/* FORM HEADER */}
            <section className="flex flex-col justify-center items-center gap-2">
                <img src="/icon.svg" alt="Logo" className="w-20" />
                <h1 className="font-bold text-3xl">Entre na sua conta</h1>
                <p className="text-sm">Ainda não está cadastrado? <Link to="/register" className="text-blue-700">Registre-se</Link></p>
            </section>

            {/* FORM */}
            <form action="" className="flex flex-col items-center gap-3">
                <input type="email" className="border border-gray-300 w-1/3 rounded-md py-1 px-3" placeholder="Email" />
                <input type="password" className="border border-gray-300 w-1/3 rounded-md py-1 px-3" placeholder="Password" />
                <div className="flex gap-2 w-1/3 mt-2 justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Lembrar</label>
                    </div>
                    <Link to={"/forgotpassword"} className="text-blue-700 hover:text-blue-800 hover:underline transition">Esqueceu sua senha?</Link>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 transition text-white w-1/3 rounded py-1 mt-1 font-medium">Login</button>
            </form>
        </>
    )
}