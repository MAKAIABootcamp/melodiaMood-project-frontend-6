    import { FaArrowLeft,  FaSignOutAlt } from 'react-icons/fa';
    import './styles.scss'; 

    const Settings = () => {
    return (
        <div className="settings-container">
        <div className="settings-header">
            <FaArrowLeft className="back-icon" />
            <h1>Configuración</h1>
        </div>

        <div className="settings-content">
            <div className="settings-section">
            <h2>Perfil del Usuario</h2>
            <div className="setting-item">
                <p>Cambiar foto de perfil</p>
            </div>
            <div className="setting-item">
                <p>Editar nombre de usuario</p>
            </div>
            <div className="setting-item">
                <p>Cambiar contraseña</p>
            </div>
            </div>

            <div className="settings-section">
            <h2>Notificaciones</h2>
            <div className="setting-item">
                <p>Configuración de notificaciones</p>
            </div>
            <div className="setting-item">
                <p>Configuración de sonido de notificaciones</p>
            </div>
            </div>

            {/* Agrega otras secciones y configuraciones según sea necesario */}

        </div>

        <button className="logout-button">
            <FaSignOutAlt /> Cerrar Sesión
        </button>
        </div>
    );
    };

    export default Settings;