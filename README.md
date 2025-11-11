# erickgaytan53.github.io

Mi portafolio profesional como desarrollador

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Sección de proyectos con carousel interactivo
- 📱 Integración con ntfy.sh para notificaciones push
- 💼 CV descargable
- 📧 Enlaces de contacto directo
- 🎯 Skeleton loaders para mejor UX

## 🔔 Notificaciones Push con ntfy.sh

Este portafolio incluye integración con ntfy.sh para recibir notificaciones en tiempo real cuando alguien interactúa con tu sitio web.

### Notificaciones implementadas:

- 👀 Visitas al portafolio
- 📄 Descargas de CV
- 📧 Intentos de contacto (Email, WhatsApp, LinkedIn)

### Configuración:

Lee la [guía completa de configuración](NTFY_SETUP.md) para configurar las notificaciones en 5 minutos.

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- ntfy.sh (Notificaciones Push)

## 📦 Estructura del Proyecto

```
proyect.cv/
├── index.html              # Página principal
├── README.md              # Este archivo
├── NTFY_SETUP.md         # Guía de configuración de notificaciones
├── .gitignore            # Archivos ignorados por Git
├── assets/
│   ├── css/
│   │   └── style.css     # Estilos principales
│   ├── js/
│   │   └── notifications.js  # Sistema de notificaciones ntfy.sh
│   └── images/           # Imágenes del portafolio
│       ├── portafolio-crm-erp/
│       └── portafolio-financiero/
```

## 🚀 Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/Erickgaytan53/erickgaytan53.github.io.git
cd erickgaytan53.github.io
```

2. Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (npx)
npx http-server

# Opción 3: VS Code Live Server
# Instala la extensión "Live Server" y haz clic derecho > "Open with Live Server"
```

3. Configura las notificaciones ntfy.sh (opcional):
   - Lee [NTFY_SETUP.md](NTFY_SETUP.md)
   - Cambia el topic en `index.html` línea ~493
   - Descarga la app ntfy en tu teléfono

## ⚙️ Personalización

### Cambiar información personal:

Edita el archivo `index.html` para actualizar:

- Nombre y título
- Descripción del perfil
- Enlaces de redes sociales
- Proyectos y experiencia
- Información de contacto

### Cambiar estilos:

Edita `assets/css/style.css` para personalizar:

- Colores (variables CSS en `:root`)
- Fuentes
- Espaciados
- Animaciones

### Configurar notificaciones:

Edita `assets/js/notifications.js` para:

- Cambiar mensajes de notificación
- Ajustar prioridades
- Personalizar emojis
- Agregar nuevas notificaciones

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📧 Contacto

- **GitHub**: [@Erickgaytan53](https://github.com/Erickgaytan53)
- **LinkedIn**: [erickgaytan53](https://linkedin.com/in/erickgaytan53)
- **Email**: tu-email@ejemplo.com

---

**Última actualización**: 11 de noviembre de 2025
