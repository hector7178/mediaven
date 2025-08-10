import React from 'react';

const Page = () => {
    const doctors = [
        {
            id: 1,
            nombre: 'Dr. Juan Pérez',
            contactos: 12,
            asignado: true,
            contacto: {
                telefono: '555-1234',
                email: 'juan.perez@hospital.com',
                direccion: 'Av. Salud 123, Ciudad'
            }
        },
        {
            id: 2,
            nombre: 'Dra. Ana Gómez',
            contactos: 8,
            asignado: false,
            contacto: {
                telefono: '555-5678',
                email: 'ana.gomez@hospital.com',
                direccion: 'Calle Bienestar 456, Ciudad'
            }
        },
        {
            id: 3,
            nombre: 'Dr. Luis Martínez',
            contactos: 5,
            asignado: false,
            contacto: {
                telefono: '555-9012',
                email: 'luis.martinez@hospital.com',
                direccion: 'Boulevard Médico 789, Ciudad'
            }
        },
    ];
   
    const renderContactButton = (doctorId: number, asignado: boolean) => {
        if (!asignado) {
            return (
                <button
                    id={doctorId.toString()}
                    style={{
                        background: '#1890ff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.95rem',
                        boxShadow: '0 1px 4px rgba(24,144,255,0.08)',
                    }}
                >
                    Contactar
                </button>
            );
        }
        return null;
    };
    return (
        <div className='flex flex-col gap-4 '>
            <h2 className='flex text-4xl font-bold'>Doctores</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        style={{
                            padding: '16px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            background: doctor.asignado ? '#e6ffed' : '#fff',
                            border: doctor.asignado ? '2px solid #52c41a' : '1px solid #eee',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <strong style={{ fontSize: '1.1rem' }}>{doctor?.nombre}</strong>
                            <div style={{ color: '#888', fontSize: '0.95rem' }}>
                                Pacientes: {doctor?.contactos}
                            </div>
                            <div style={{ marginTop: '8px', fontSize: '0.95rem', color: '#555' }}>
                                <div>Teléfono: {doctor?.contacto?.telefono}</div>
                                <div>Email: {doctor?.contacto?.email}</div>
                                <div>Dirección: {doctor?.contacto?.direccion}</div>
                            </div>
                        </div>
                        {doctor?.asignado ? (
                            <span
                                style={{
                                    color: '#52c41a',
                                    fontWeight: 'bold',
                                    background: '#f6ffed',
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '0.95rem',
                                    boxShadow: '0 1px 4px rgba(82,196,26,0.08)',
                                }}
                            >
                                Asignado al paciente
                            </span>
                        ) : renderContactButton(doctor.id, doctor.asignado)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
