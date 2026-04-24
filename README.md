# Darwin Tangarife — Portafolio Personal

Portafolio web profesional de Darwin Andrés Tangarife Avendaño, desarrollador backend con experiencia en Java, Spring Boot y microservicios.

## 🛠 Tecnologías

- **Next.js 15** — Framework React con App Router
- **TypeScript** — Tipado estático
- **TailwindCSS** — Utilidades CSS (configuración base)
- **CSS Custom Properties** — Variables de tema global
- **Lucide React** — Íconos SVG
- **Google Fonts** — Tipografía: Sora + JetBrains Mono

## Cómo ejecutar

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev
# → http://localhost:3000

# 3. Build para producción
npm run build
npm start
```

## Estructura del proyecto (Atomic Design)

```
components/
  atoms/          # Componentes mínimos reutilizables
    ProgressBar     # Barra de progreso animada (idiomas y lenguajes)
    SectionTitle    # Encabezado de sección con gradiente
    Tag             # Chip/badge para tecnologías y fechas
    IconButton      # Botón circular para redes sociales
  molecules/      # Composición de átomos
    SkillCard       # Card de conocimiento con ícono
    EducationCard   # Card de educación (institución + descripción)
    PortfolioCard   # Card de proyecto con botón "Saber más"
  organisms/      # Secciones completas de la página
    LeftSidebar     # Panel izquierdo fijo con datos personales
    RightSidebar    # Panel derecho con íconos sociales
    HeroSection     # Sección de perfil con diálogo de contacto
    KnowledgeSection# Grid de conocimientos técnicos
    ExperienceSection# Línea de tiempo de experiencia laboral
    EducationSection# Historial educativo y cursos
    PortfolioSection# Scroll horizontal de proyectos con diálogos
    Footer          # Pie de página con links y copyright
app/
  page.tsx        # Composición principal de la página
  layout.tsx      # Metadata y fuentes globales
  globals.css     # Variables CSS, animaciones y estilos base
```

## Diseño

- Tema oscuro con paleta (azul cian `#00d4ff` + violeta `#7c3aed`)
- Animaciones CSS (`fadeInUp`, `float`, `scaleIn`) con stagger delays
- Barras de progreso animadas al cargar la página
- Diálogos interactivos en sección de perfil y proyectos
- Scroll horizontal en la sección de portafolio
- Sidebar izquierdo y derecho fijos (`position: sticky`)
- Diseño responsivo con breakpoints


## Notas

- Los datos del portafolio están en cada componente organismo.
- Las imágenes de proyectos se ubican en `/public/` (ej. `project-quind.jpg`).
- Para agregar proyectos, editar el array `projects` en `PortfolioSection.tsx`.
