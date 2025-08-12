# Landing Page Portfolio - Bian

Una landing page moderna y responsiva para mostrar diseños educativos y material didáctico creado en Canva.

## Características

- ✨ Diseño moderno y limpio con animaciones
- 📱 Completamente responsivo
- 🎨 Colores personalizados (#f8f3d4 y #00843d)
- 🚀 Construido con Next.js 15 y Tailwind CSS 4
- 📊 8 diseños reales cargados desde JSON
- 🔗 Enlaces de contacto apropiados para profesora
- 🖼️ Modal interactivo para ver diseños completos
- ⚡ Optimizado para producción

## Estructura

- **Header**: Logo y enlaces de contacto (Email, Instagram, WhatsApp)
- **Hero**: Sección principal espectacular con animaciones
- **Diseños**: Grid de cards con trabajos educativos reales
- **Modal**: Vista detallada de cada diseño
- **Footer**: Información adicional y enlaces

## Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El despliegue se realizará automáticamente

### Otros proveedores
El proyecto está optimizado para cualquier proveedor que soporte Next.js.

## Personalización

### Diseños
Edita el archivo `src/data/projects.json` para agregar, modificar o eliminar diseños educativos.

### Imágenes
Las imágenes están en `public/imagen/` y se referencian en el JSON.

### Colores
Los colores principales están definidos en:
- Background: `#f8f3d4` (crema suave)
- Accent: `#00843d` (verde educativo)

## Estructura de Archivos

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales y animaciones
├── components/
│   ├── Header.tsx        # Header con navegación
│   ├── Hero.tsx          # Hero con animaciones espectaculares
│   ├── ProjectCard.tsx   # Card individual con imagen real
│   ├── ProjectsSection.tsx # Grid de proyectos
│   ├── ProjectModal.tsx  # Modal para vista detallada
│   └── Footer.tsx        # Footer con información
└── data/
    └── projects.json     # 8 diseños reales con metadata
```

## Tecnologías

- Next.js 15.4.6
- React 19.1.0
- Tailwind CSS 4
- TypeScript 5
- Optimizaciones de imagen automáticas

## Diseños Incluidos

1. **Período de Inicio** - Material didáctico
2. **Post Venta de Pastelitos** - Redes sociales
3. **Día de la Primavera** - Eventos escolares
4. **Post Moda Circular** - Educación ambiental
5. **Felices Fiestas Navideñas** - Eventos especiales
6. **Sticker Baby Shower** - Celebraciones
7. **Tarjeta de Cumpleaños** - Tarjetas personalizadas
8. **Historia del 9 de Julio** - Historia argentina

## Solución de Problemas

Si tienes problemas de despliegue:
1. Verifica que todas las imágenes estén en `public/imagen/`
2. Ejecuta `npm run build` localmente para verificar errores
3. Revisa que las rutas en `projects.json` sean correctas
4. Asegúrate de que el proveedor soporte Next.js 15# landing-bian
