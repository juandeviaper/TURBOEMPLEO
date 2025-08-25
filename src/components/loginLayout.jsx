import Footer from './footer';

function LoginLayout({ children }) {
  return (
    <div className="w-full">
      {children}
      <Footer />
    </div>
  );
}

export default LoginLayout;
