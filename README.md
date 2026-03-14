# Facundo Castellano — Fitness Coaching Landing Page 🚀

Landing page profesional de alto rendimiento diseñada para la comercialización de asesorías fitness personalizadas. El proyecto prioriza la velocidad de carga, la estética minimalista y la conversión directa de usuarios hacia canales de contacto.

## 🛠️ Stack Técnico

* **Frontend:** React + TypeScript + Vite.
* **Estilos:** Tailwind CSS (Enfoque Mobile-first).
* **Animaciones:** Framer Motion.
* **Internacionalización:** i18next (Soporte completo ES/EN).
* **Iconografía:** Lucide React.

## ✨ Funcionalidades Clave

* **Sistema Multiidioma:** Cambio dinámico de lenguaje (Español/Inglés) con persistencia de estado del usuario.
* **Navegación Fluida:** Implementación de Smooth Scroll optimizado para navegación entre secciones.
* **Arquitectura Escalable:** Estructura de componentes modulares y tipado estricto para mantenimiento simplificado.
* **Diseño Adaptativo:** Optimización total de la interfaz para dispositivos móviles y desktop.

## 📂 Estructura del Proyecto

```text
src/
 ├── assets/             # Recursos estáticos e imágenes (Hero)
 ├── components/
 │    ├── common/        # Átomos UI reutilizables
 │    ├── layout/        # Componentes de estructura (Navbar, Footer)
 │    └── sections/      # Secciones de contenido de la Landing
 ├── locales/            # Archivos de traducción JSON (en/es)
 ├── i18n.ts             # Configuración central de internacionalización
 ├── App.tsx             # Componente raíz
 └── main.tsx            # Punto de entrada del DOM
