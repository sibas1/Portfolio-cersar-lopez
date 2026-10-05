# Portfolio TODO

## Estado actual: ~25%

### ✅ Lo que ya funciona
- Navegación entre secciones (Home, About, Projects, Contact)
- Modo oscuro/claro con paletas por sección
- Temas con nombre (tech, sunset, forest, cosmic, coral)
- Estructura base Next.js con Tailwind
- Sistema de idiomas ES/EN (`LanguageContext` + `src/data/`)
- Metadata y título en `layout.tsx`

### ✅ Limpieza hecha
- Eliminado `src/config/themes.ts` (duplicaba `palettes.ts`, sin uso)
- Eliminado `src/components/Button/Button.tsx` (stub roto, sin uso)
- Eliminado `src/styles/paleta-mejorada.scss` (huérfano, sin sass)
- Eliminados los 5 SVG de boilerplate de Vercel en `public/`
- `globals.css`: fuera el `prefers-color-scheme` que pisaba el toggle, y
  fuera el `font-family: Arial` que anulaba la fuente Geist
- `tailwind.config.ts`: fuera los colores `custom.*` hardcodeados

### ❌ Lo que falta

#### Crítico (sin esto no es portafolio)
- [ ] **`Section.tsx` acepta `children`** — hoy solo renderiza `<h2>` + `<p>`,
      no hay forma de meter tarjetas, imágenes, skills o formulario
- [ ] **Home** — poner título, tagline, foto de perfil
- [ ] **About** — biografía real, skills, experiencia
- [ ] **Projects** — proyectos reales con título, descripción, tecnologías, links, screenshots
- [ ] **Contact** — formulario funcional (nombre, email, mensaje) + integración email

#### Importante
- [ ] Foto de perfil en `public/images/`
- [ ] CV para descargar
- [ ] Links a GitHub, LinkedIn, redes sociales
- [ ] Responsive design para mobile
- [ ] Animaciones (fade-in, scroll, transiciones)

#### Medio
- [ ] Componente Skills con badges de tecnologías
- [ ] Componente ProjectCard reutilizable
- [ ] Componente Footer con redes
- [ ] Separar datos en `src/data/` (projects.ts, skills.ts, social.ts)
- [ ] Página 404 personalizada
- [ ] SEO: Open Graph, description, favicon personalizado

#### Bajo / Polish
- [ ] Persistir modo oscuro/claro en localStorage
- [ ] Loading state (loading.tsx)
- [ ] Error boundary (error.tsx)
