# Mini E-commerce — Rutas públicas y protegidas

Proyecto de práctica de **enrutamiento en React** con `react-router-dom`.
Implementa rutas básicas, ruta dinámica, query params, rutas anidadas con un
layout fijo y una ruta protegida con redirección post-login.

## Tecnologías

- React 19
- Vite
- React Router DOM v7

## Funcionalidades

- **Rutas básicas** con `BrowserRouter`, `Routes` y `Route` (Inicio, Nosotros, Contacto).
- **Navegación declarativa** con `<Link>` / `<NavLink>` en el header fijo.
- **Navegación programática** con `useNavigate` (botones "Ver detalle", "Volver", "Salir").
- **Ruta dinámica** `/producto/:id` que lee el parámetro con `useParams`.
- **Query params** en `/contacto?tipo=...` con `useSearchParams` (filtro reflejado en la URL).
- **Rutas anidadas** con un `Layout` y `<Outlet>`.
- **Ruta protegida** `/perfil`: si no hay sesión, redirige a `/login` con `useLocation` + `Navigate`,
  y al loguearse vuelve a la ruta original (redirección post-login).

## Cómo ejecutarlo

```bash
# 1. Clonar el repositorio
git clone RI_Modulo2Unidad3_GinoSarubbi-181751
cd ginosarubbi-modulo2unidad3

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Después abrí en el navegador la URL que muestra la consola (por defecto
`http://localhost:5173`).

## Estructura del proyecto

```
src/
├── main.jsx                 # Monta la app, envuelve con BrowserRouter y AuthProvider
├── App.jsx                  # Definición de todas las rutas (Routes / Route)
├── Layout.jsx               # Layout con header fijo + <Outlet>
├── components/
│   ├── Header.jsx           # Navegación con NavLink + botón login/logout
│   └── RutaProtegida.jsx    # Guardián de rutas (Navigate + useLocation)
└── pages/
    ├── Inicio/              # useNavigate (navegación programática)
    ├── Nosotros/
    ├── Contacto/            # useSearchParams (query params)
    ├── Producto/            # useParams (ruta dinámica)
    ├── Login/               # redirección post-login
    └── Perfil/              # página protegida
```


## Autor

- **Estudiante:** Gino Sarubbi
- **Curso:** React — Centro de e-Learning UTN BA
- **Unidad:** Módulo 2 - Unidad 3 (Enrutamiento)

## Bibliografía y fuentes

- React Router. *Tutorial*. https://reactrouter.com/en/main/start/tutorial
- React Router API Reference. *useNavigate*. https://reactrouter.com/en/main/hooks/use-navigate
- MDN Web Docs. *URLSearchParams*. https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
- Banks, A. y Porcello, E. *Learning React: Modern Patterns for Developing React Apps*. 2ª ed. O'Reilly Media; 2020.
