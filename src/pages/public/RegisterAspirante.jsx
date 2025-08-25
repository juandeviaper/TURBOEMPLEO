



import React, { useRef, useState } from "react";

function RegisterAspirante() {
  const fileInputRef = useRef();
  const [form, setForm] = useState({
    nombreCompleto: "",
    usuario: "",
    password: "",
    email: "",
    telefono: "",
    departamento: "",
    ciudad: "",
    ocupacion: "",
    nacimiento_dia: "",
    nacimiento_mes: "",
    nacimiento_anio: "",
    tipoId: "CC",
    numeroId: "",
    foto: null,
  idiomas: [],
    cargo: "",
    descripcion: "",
    curriculum: null,
  });


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((f) => ({ ...f, [name]: files[0] }));
    } else if (name === "idiomas") {
      // Para selección múltiple de idiomas
      const selected = Array.from(e.target.selectedOptions, option => option.value);
      setForm((f) => ({ ...f, idiomas: selected }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Registro enviado!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] mb-12 w-full">
      <h2 className="text-2xl font-bold text-[#5e17eb] mb-4 text-center">Crea tu cuenta</h2>
      <form className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8 border-t-4 border-[#5e17eb]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
              <input name="nombreCompleto" value={form.nombreCompleto} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de Usuario</label>
              <input name="usuario" value={form.usuario} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha de nacimiento</label>
              <div className="flex gap-2">
                <input name="nacimiento_dia" value={form.nacimiento_dia} onChange={handleChange} type="number" min="1" max="31" placeholder="Día" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
                <input name="nacimiento_mes" value={form.nacimiento_mes} onChange={handleChange} type="number" min="1" max="12" placeholder="Mes" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
                <input name="nacimiento_anio" value={form.nacimiento_anio} onChange={handleChange} type="number" min="1900" max="2100" placeholder="Año" className="w-1/3 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Departamento</label>
              <input name="departamento" value={form.departamento} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ciudad</label>
              <input name="ciudad" value={form.ciudad} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
          </div>
          {/* Columna derecha */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
              <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ocupación deseada</label>
              <input name="ocupacion" value={form.ocupacion} onChange={handleChange} type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e17eb]" required />
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Idiomas</label>
              <div className="flex flex-wrap gap-3 mt-1">
                {['Español (Nativo)', 'Inglés', 'Francés', 'Alemán', 'Portugués', 'Otro'].map((idioma) => (
                  <label key={idioma} className="flex items-center gap-1 text-sm text-gray-700 bg-[#f6f3ff] px-2 py-1 rounded">
                    <input
                      type="checkbox"
                      name="idiomas"
                      value={idioma}
                      checked={form.idiomas.includes(idioma)}
                      onChange={e => {
                        if (e.target.checked) {
                          setForm(f => ({ ...f, idiomas: [...f.idiomas, idioma] }));
                        } else {
                          setForm(f => ({ ...f, idiomas: f.idiomas.filter(i => i !== idioma) }));
                        }
                      }}
                      className="accent-[#5e17eb]"
                    />
                    {idioma}
                  </label>
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-1 block">Selecciona todos los idiomas que dominas.</span>
            </div>
          </div>
        </div>
        {/* Input de currículum centrado */}
        <div className="flex flex-col items-center justify-center mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Sube tu currículum en PDF</label>
          <div className="relative w-full max-w-xs flex flex-col items-center">
            <button
              type="button"
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="w-full px-6 py-4 rounded-xl border-2 border-dashed border-[#5e17eb] bg-[#f6f3ff] text-[#5e17eb] font-semibold text-center shadow focus:outline-none focus:ring-2 focus:ring-[#5e17eb] transition hover:bg-[#ede7fa]"
            >
              {form.curriculum ? `Archivo seleccionado: ${form.curriculum.name}` : "Haz clic para seleccionar tu currículum (PDF)"}
            </button>
            <input
              name="curriculum"
              type="file"
              accept="application/pdf"
              ref={fileInputRef}
              onChange={handleChange}
              className="hidden"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-[#5e17eb] text-white font-bold py-3 rounded-lg shadow hover:bg-[#A67AFF] transition text-lg mt-6">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterAspirante;
