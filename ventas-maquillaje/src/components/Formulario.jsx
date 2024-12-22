import React, { useState } from "react";

const FormularioRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje(
            `¡Gracias, ${nombre}!, por registrar tus comentarios ¡Te contactaremos pronto!.`
        );
    };

    return(
        <div>
            <h2>Formulario de estudiante</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* NOmbre */}
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa tu nombre"
                    />
                </label>
                {/* correo */}
                <label>
                    Correo:
                    <input 
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresa tu correo"
                    />
                </label>
                {/* Comentarios */}
                <label>
                    Comentarios:
                    <input 
                        type="text"
                        value={comentarios}
                        onChange={(e) => setComentarios(e.target.value)}
                        placeholder="Agrega tu comentario"
                    />
                </label>
                {/* btn Enviar */}
                <button type="submit">Enviar</button>
            </form>
            {/* mensaje */}
            {mensaje && (
                <div style={{
                    marginTop: '20px',
                    color: 'green',
                    whiteSpace: 'pre-line'
                }}>
                    {mensaje}
                </div>
            )}
        </div>
    );
};

export default FormularioRegistro;