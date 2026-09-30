# Pre-Entrega Node.js - Consumo de API REST

Proyecto desarrollado para la Pre-Entrega del curso de Node.js por **Guillermo Ciocca**.

Esta aplicación es una herramienta de línea de comandos (CLI) desarrollada en **Node.js** que consume la API de [FakeStoreAPI](https://fakestoreapi.com/) realizando peticiones HTTP asíncronas mediante `fetch` nativo para consultar, crear y eliminar productos.

---

## 🚀 Requisitos Previos

- **Node.js** v18.0.0 o superior (requerido por el uso de `fetch` nativo y módulos ES).
- **npm** (gestor de paquetes de Node.js).

---

## 🛠️ Instalación y Configuración

1. Clonar o descargar el repositorio en tu máquina local.
2. Navegar hasta la carpeta del proyecto:
   ```bash
   cd PreEntregaTT_NodeJS_GuillermoCiocca
   ```
3. Instalar las dependencias del proyecto (incluye `nodemon` como dependencia de desarrollo):
   ```bash
   npm install
   ```

---

## 📦 Dependencias Instaladas

### Dependencias de Desarrollo (`devDependencies`)
- **`nodemon`**: Herramienta que monitorea cambios en el código fuente y reinicia automáticamente la aplicación durante el desarrollo.

---

## 📖 Modo de Uso

El programa acepta argumentos por la línea de comandos (`process.argv`) para ejecutar las distintas operaciones disponibles: `GET`, `POST` y `DELETE`.

Puedes ejecutar los comandos en modo estándar (`npm start`) o en modo desarrollo (`npm run dev --`).

### 1. Consultar Productos (`GET`)

Permite obtener todos los productos o consultar un producto/categoría específica.

- **Obtener todos los productos:**
  ```bash
  npm start GET products
  ```
- **Obtener un producto específico (por ID):**
  ```bash
  npm start GET products/1
  ```
- **Obtener productos por categoría:**
  ```bash
  npm start GET products/category/jewelery
  ```

---

### 2. Crear un Producto (`POST`)

Permite enviar un nuevo producto a la API. Se requieren 4 argumentos: `products`, el `título`, el `precio` y la `categoría`.

- **Sintaxis:**
  ```bash
  npm start POST products "<Título>" <Precio> "<Categoría>"
  ```
- **Ejemplo:**
  ```bash
  npm start POST products "Remera Deportiva" 2500 "clothing"
  ```

---

### 3. Eliminar un Producto (`DELETE`)

Permite simular la eliminación de un producto especificando su ID.

- **Sintaxis:**
  ```bash
  npm start DELETE products/<id>
  ```
- **Ejemplo:**
  ```bash
  npm start DELETE products/1
  ```

---

### ⚡ Modo Desarrollo con Nodemon

Si estás modificando el código fuente y quieres que se vuelva a ejecutar automáticamente al guardar cambios:

```bash
npm run dev -- GET products/1
```

---

## 📁 Estructura del Proyecto

```text
PreEntregaTT_NodeJS_GuillermoCiocca/
├── .gitignore       # Configuración para ignorar node_modules y otros archivos temporales
├── index.js         # Código fuente principal (funciones asíncronas y switch CLI)
├── package.json     # Configuración del proyecto y scripts (start, dev)
├── package-lock.json# Árbol de dependencias bloqueado
└── README.md        # Documentación y guía de uso del proyecto
```

---

## 👨‍💻 Autor

- **Guillermo Ciocca**
