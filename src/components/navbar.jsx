

import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo/claro/logotipo.png';

function Navbar() {
	return (
		<nav className="bg-white px-6 py-3 flex justify-between items-center shadow-sm border-b border-gray-100">
							<Link to="/" className="flex items-center">
								<img src={logo} alt="TurboEmpleo Logo" className="w-85 h-auto" />
							</Link>
			<div className="flex gap-2 items-center">
				<Link to="/login" className="bg-[#5e17eb] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#A67AFF] transition">Iniciar sesión</Link>
				<Link to="/register" className="text-[#5e17eb] font-semibold px-4 py-2 rounded-lg hover:underline">Registrarse</Link>
			</div>
		</nav>
	);
}

export default Navbar;
