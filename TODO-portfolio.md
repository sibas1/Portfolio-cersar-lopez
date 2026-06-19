# Portfolio TODO

## Estado actual: ~25%

### ✅ Lo que ya funciona
- Navegación entre secciones (Home, About, Projects, Contact)
- Modo oscuro/claro con paletas por sección
- Temas con nombre (tech, sunset, forest, cosmic, coral)
- Estructura base Next.js con Tailwind

### ❌ Lo que falta

#### Crítico (sin esto no es portafolio)
- [ ] **Home** — poner título, tagline, foto de perfil
- [ ] **About** — biografía real, skills, experiencia
- [ ] **Projects** — proyectos reales con título, descripción, tecnologías, links, screenshots
- [ ] **Contact** — formulario funcional (nombre, email, mensaje) + integración email

#### Importante
- [ ] Foto de perfil en `public/images/`
- [ ] CV para descargar
- [ ] Links a GitHub, LinkedIn, redes sociales
- [ ] Botones de idioma (Espanol/English) funcionales o eliminarlos
- [ ] Título y metadata personalizados (layout.tsx)
- [ ] Responsive design para mobile
- [ ] Animaciones (fade-in, scroll, transiciones)

#### Medio
- [ ] Componente Skills con badges de tecnologías
- [ ] Componente ProjectCard reutilizable
- [ ] Componente Footer con redes
- [ ] Separar datos en `src/data/` (projects.ts, skills.ts, social.ts)
- [ ] Unificar `themes.ts` y `palettes.ts` (redundantes)
- [ ] Arreglar o eliminar Button.tsx (stub vacío)
- [ ] Página 404 personalizada
- [ ] SEO: Open Graph, description, favicon personalizado

#### Bajo / Polish
- [ ] Limpiar assets default de Vercel en `public/`
- [ ] Integrar o eliminar `paleta-mejorada.scss` (no se usa)
- [ ] Persistir modo oscuro/claro en localStorage
- [ ] Loading state (loading.tsx)
- [ ] Error boundary (error.tsx)
