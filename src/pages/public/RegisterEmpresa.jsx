// ...existing code...
import React, { useState } from "react";


function RegisterEmpresa() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nombreEmpresa: "",
    nit: "",
    email: "",
    telefono: "",
    departamento: "",
    ciudad: "",
    sector: "",
    contacto: "",
    password: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Registro de empresa enviado!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] mb-12 w-full">
      <h2 className="text-2xl font-bold text-[#A67AFF] mb-4 text-center">{step === 1 ? "Crea tu empresa" : "Información adicional de la empresa"}</h2>
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step === 1 ? "bg-[#A67AFF] text-white border-[#A67AFF]" : "bg-white text-[#A67AFF] border-[#A67AFF]"}`}>1</div>
        <span className="w-8 h-1 bg-gray-300 rounded"></span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step === 2 ? "bg-[#A67AFF] text-white border-[#A67AFF]" : "bg-white text-[#A67AFF] border-[#A67AFF]"}`}>2</div>
      </div>
      {step === 1 && (
        <form className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border-t-4 border-[#A67AFF]" onSubmit={handleNext}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de la empresa</label>
              <input name="nombreEmpresa" value={form.nombreEmpresa} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">NIT</label>
              <input name="nit" value={form.nit} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Correo de contacto</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
              <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Departamento</label>
              <input name="departamento" value={form.departamento} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ciudad</label>
              <input name="ciudad" value={form.ciudad} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Sector</label>
              <input name="sector" value={form.sector} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Persona de contacto</label>
              <input name="contacto" value={form.contacto} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#A67AFF] text-white font-bold py-3 rounded-lg shadow hover:bg-[#5e17eb] transition text-lg mt-2">Continuar</button>
        </form>
      )}
      {step === 2 && (
        <form className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border-t-4 border-[#A67AFF]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción de la empresa</label>
              <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Describe brevemente a tu empresa, misión, visión, etc." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A67AFF]" rows={4} required />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={handleBack} className="bg-gray-200 text-[#A67AFF] font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-300 transition text-lg">Atrás</button>
            <button type="submit" className="bg-[#A67AFF] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#5e17eb] transition text-lg">Registrar empresa</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterEmpresa;
