/**
 * Integración con ntfy.sh para notificaciones push
 * Documentación: https://ntfy.sh
 */

class NtfyNotifications {
    constructor(topic, server = 'https://ntfy.sh') {
        this.topic = topic;
        this.server = server;
    }

    /**
     * Enviar notificación a ntfy.sh
     * @param {string} title - Título de la notificación
     * @param {string} message - Mensaje de la notificación
     * @param {object} options - Opciones adicionales (priority, tags, actions, etc.)
     */
    async send(title, message, options = {}) {
        try {
            const headers = {
                'Content-Type': 'text/plain',
                'Title': title,
                'Priority': options.priority || 'default',
                'Tags': options.tags || 'briefcase'
            };

            // Agregar acciones si están disponibles
            if (options.actions) {
                headers['Actions'] = options.actions;
            }

            // Agregar click action si está disponible
            if (options.click) {
                headers['Click'] = options.click;
            }

            const response = await fetch(`${this.server}/${this.topic}`, {
                method: 'POST',
                headers: headers,
                body: message
            });

            if (response.ok) {
                console.log('✅ Notificación enviada exitosamente');
                return true;
            } else {
                console.error('❌ Error al enviar notificación:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('❌ Error en ntfy.sh:', error);
            return false;
        }
    }

    /**
     * Notificar cuando alguien visita el portafolio
     */
    async notifyVisit() {
        const message = `
📊 Nueva visita al portafolio
🌐 Navegador: ${navigator.userAgent.split(' ').slice(-2).join(' ')}
📱 Plataforma: ${navigator.platform}
⏰ Hora: ${new Date().toLocaleString('es-MX')}
        `.trim();

        await this.send(
            '👀 Nueva Visita',
            message,
            {
                priority: 'default',
                tags: 'eyes,chart_with_upwards_trend',
                click: window.location.href
            }
        );
    }

    /**
     * Notificar cuando alguien descarga el CV
     */
    async notifyDownloadCV() {
        const message = `
📄 ¡Alguien descargó tu CV!
⏰ Hora: ${new Date().toLocaleString('es-MX')}
🌐 Página: ${window.location.href}
        `.trim();

        await this.send(
            '⬇️ Descarga de CV',
            message,
            {
                priority: 'high',
                tags: 'file_folder,arrow_down',
                click: window.location.href
            }
        );
    }

    /**
     * Notificar cuando alguien hace clic en contacto
     * @param {string} method - Método de contacto (email, whatsapp, linkedin)
     */
    async notifyContact(method) {
        const methodEmojis = {
            'email': '📧',
            'whatsapp': '💬',
            'linkedin': '💼'
        };

        const message = `
${methodEmojis[method] || '📞'} Intento de contacto vía ${method}
⏰ Hora: ${new Date().toLocaleString('es-MX')}
🌐 Desde: ${window.location.href}
        `.trim();

        await this.send(
            `${methodEmojis[method]} Nuevo Contacto`,
            message,
            {
                priority: 'high',
                tags: `incoming_envelope,${method}`,
                click: window.location.href
            }
        );
    }

    /**
     * Notificar cuando alguien interactúa con un proyecto
     * @param {string} projectName - Nombre del proyecto
     */
    async notifyProjectView(projectName) {
        const message = `
🎯 Proyecto visualizado: ${projectName}
⏰ Hora: ${new Date().toLocaleString('es-MX')}
        `.trim();

        await this.send(
            '👁️ Proyecto Visualizado',
            message,
            {
                priority: 'low',
                tags: 'art,eyes',
                click: window.location.href
            }
        );
    }

    /**
     * Notificar cuando alguien cambia de sección
     * @param {string} section - Nombre de la sección
     */
    async notifyNavigation(section) {
        const message = `
🧭 Navegación a sección: ${section}
⏰ Hora: ${new Date().toLocaleString('es-MX')}
        `.trim();

        await this.send(
            '📍 Navegación',
            message,
            {
                priority: 'low',
                tags: 'compass',
                click: window.location.href
            }
        );
    }
}

// Exportar para uso global
window.NtfyNotifications = NtfyNotifications;
