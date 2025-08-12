# Landing Page Portfolio - Bian

Una landing page moderna y responsiva para mostrar diseños educativos y material didáctico creado en Canva.

## Características

- ✨ Diseño moderno y limpio
- 📱 Completamente responsivo
- 🎨 Colores personalizados (#f8f3d4 y #00843d)
- 🚀 Construido con Next.js 14 y Tailwind CSS
- 📊 Datos de diseños cargados desde JSON
- 🔗 Enlaces de contacto apropiados para profesora (Email, Instagram, WhatsApp)

## Estructura

- **Header**: Logo y enlaces de contacto
- **Hero**: Sección principal con presentación como profesora
- **Diseños**: Grid de cards con trabajos educativos
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

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Personalización

### Diseños
Edita el archivo `src/data/projects.json` para agregar, modificar o eliminar diseños educativos.

### Colores
Los colores principales están definidos en:
- Background: `#f8f3d4`
- Accent: `#00843d`

### Imágenes
Coloca las imágenes de los diseños (flyers, presentaciones) en la carpeta `public/images/` y actualiza las rutas en el JSON.

## Estructura de Archivos

```
src/
├── app/
│   └── page.tsx          # Página principal
├── components/
│   ├── Header.tsx        # Componente del header
│   ├── Hero.tsx          # Sección hero
│   ├── ProjectCard.tsx   # Card individual de diseño
│   ├── ProjectsSection.tsx # Sección de diseños
│   └── Footer.tsx        # Componente del footer
└── data/
    └── projects.json     # Datos de los diseños educativos
```

## Tecnologías

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript# landing-bian
