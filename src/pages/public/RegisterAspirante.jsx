


import React, { useState, useRef } from "react";

function RegisterAspirante() {
  // Falta la función handleNext para el paso 1
  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const [step, setStep] = useState(1);
  const fileInputRef = useRef();

  // Estado para los campos
  const [form, setForm] = useState({
    nombreCompleto: "",
    usuario: "",
    password: "",
    email: "",
    telefono: "",
    departamento: "",
    ciudad: "",
    ocupacion: "",
    nacimiento: { dia: "", mes: "", anio: "" },
        departamento: "", // Keeping the state for compatibility
        ciudad: "",      // Keeping the state for compatibility
    foto: null,
    idiomas: ["Español (Nativo)"],
    cargo: "",
    descripcion: "",
    curriculum: null,
  });

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((f) => ({ ...f, [name]: files[0] }));
    } else if (name.startsWith("nacimiento_")) {
      setForm((f) => ({ ...f, nacimiento: { ...f.nacimiento, [name.split("_")[1]]: value } }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };


  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    alert("¡Registro enviado!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] mb-12 w-full">
      <h2 className="text-2xl font-bold text-[#5e17eb] mb-4 text-center">{step === 1 ? "Crea tu cuenta" : "Información personal y profesional"}</h2>
      {/* Indicador de pasos */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step === 1 ? "bg-[#5e17eb] text-white border-[#5e17eb]" : "bg-white text-[#5e17eb] border-[#5e17eb]"}`}>1</div>
        <span className="w-8 h-1 bg-gray-300 rounded"></span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step === 2 ? "bg-[#5e17eb] text-white border-[#5e17eb]" : "bg-white text-[#5e17eb] border-[#5e17eb]"}`}>2</div>
      </div>

      {/* Paso 1 */}
      {step === 1 && (
        <form className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border-t-4 border-[#5e17eb]" onSubmit={handleNext}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
              <input name="nombreCompleto" value={form.nombreCompleto} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
              <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de Usuario</label>
              <input name="usuario" value={form.usuario} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Departamento</label>
              <input name="departamento" value={form.departamento} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ciudad</label>
              <input name="ciudad" value={form.ciudad} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ocupación deseada</label>
              <input name="ocupacion" value={form.ocupacion} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#5e17eb] text-white font-bold py-3 rounded-lg shadow hover:bg-[#A67AFF] transition text-lg mt-2">Continuar</button>
        </form>
      )}

      {/* Paso 2 */}
      {step === 2 && (
        <form className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border-t-4 border-[#5e17eb]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha de nacimiento</label>
              <div className="flex gap-2">
                <input name="nacimiento_dia" value={form.nacimiento.dia} onChange={handleChange} type="number" min="1" max="31" placeholder="Día" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
                <input name="nacimiento_mes" value={form.nacimiento.mes} onChange={handleChange} type="number" min="1" max="12" placeholder="Mes" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
                <input name="nacimiento_anio" value={form.nacimiento.anio} onChange={handleChange} type="number" min="1900" max="2100" placeholder="Año" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Perfil Profesional</label>
              <input name="cargo" value={form.cargo} onChange={handleChange} type="text" placeholder="Cargo o título deseado" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
              <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción breve de su perfil profesional" className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" rows={3} required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Identificación</label>
              <div className="flex gap-2">
                <select name="tipoId" value={form.tipoId} onChange={handleChange} className="w-1/2 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]">
                  <option value="CC">C.C.</option>
                  <option value="TI">T.I.</option>
                  <option value="CE">C.E.</option>
                  <option value="PAS">Pasaporte</option>
                </select>
                <input name="numeroId" value={form.numeroId} onChange={handleChange} type="text" placeholder="N° documento" className="w-1/2 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Foto</label>
              <input name="foto" type="file" accept="image/*" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] bg-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Idiomas</label>
              <select name="idiomas" value={form.idiomas[0]} onChange={handleIdiomaChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]">
                <option>Español (Nativo)</option>
                <option>Inglés</option>
                <option>Francés</option>
                <option>Alemán</option>
                <option>Portugués</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Currículum (PDF)</label>
              <input name="curriculum" type="file" accept="application/pdf" ref={fileInputRef} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] bg-white" required />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={handleBack} className="bg-gray-200 text-[#5e17eb] font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-300 transition text-lg">Atrás</button>
            <button type="submit" className="bg-[#5e17eb] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#A67AFF] transition text-lg">Registrar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterAspirante;
