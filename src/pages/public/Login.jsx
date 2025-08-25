

import { useState } from "react";


function Login() {
	const [showPassword, setShowPassword] = useState(false);
			return (
				<div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa] w-full min-h-[calc(100vh-64px)]">
					<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center gap-6 border-t-4 border-[#5e17eb]">
					<h2 className="text-3xl font-extrabold text-[#5e17eb] mb-2 flex items-center gap-2">
						<span className="text-4xl">🔑</span> Iniciar sesión
					</h2>
					<form className="w-full flex flex-col gap-4">
						<div>
							<label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Correo electrónico</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
								placeholder="tucorreo@email.com"
								autoComplete="username"
								required
							/>
						</div>
						<div className="relative">
							<label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
								placeholder="••••••••"
								autoComplete="current-password"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword((v) => !v)}
								className="absolute right-3 top-8 text-[#5e17eb] text-sm focus:outline-none"
								tabIndex={-1}
							>
								{showPassword ? "Ocultar" : "Mostrar"}
							</button>
						</div>
						<button
							type="submit"
							className="w-full bg-[#5e17eb] text-white font-bold py-3 rounded-lg shadow hover:bg-[#A67AFF] transition text-lg mt-2"
						>
							Ingresar
						</button>
					</form>
					<div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 text-sm mt-2">
						<a href="#" className="text-[#5e17eb] hover:underline">¿Olvidaste tu contraseña?</a>
						<a href="/register" className="text-[#5e17eb] hover:underline">¿No tienes cuenta? Regístrate</a>
					</div>
				</div>
			</div>
		);
}

export default Login;
