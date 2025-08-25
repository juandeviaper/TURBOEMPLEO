
import Navbar from './navbar';
import Footer from './footer';


function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex flex-col flex-grow justify-center">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
