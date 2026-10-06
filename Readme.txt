# Pucusoft - Landing Page de Servicios Digitales

## Sitio web institucional para Pucusoft - Agencia de desarrollo de software

**Live Demo:** https://pucusoft.pages.dev

---

## 📌 Descripción general

Pucusoft es una agencia de desarrollo de software especializada en aplicaciones multiplataforma (Flutter, Kotlin, Compose Multiplatform, React/Vue) con sistemas de gestión en PostgreSQL. El sitio presenta 4 servicios principales orientados a negocios en Ecuador y Perú, con posicionamiento geográfico en la ruta Machala-Cañete.

---

## 🚀 Servicios y Precios (en USD, selector de moneda PEN/USD disponible)

| Servicio | Precio USD | Incluye |
|----------|-----------|---------|
| **Landing Page** | $240 | Dominio .com pagado 3 años, hosting Cloud básico, SSL, seguridad básica |
| **Web Corporativa** | $400 | Todo lo anterior + copias de seguridad básicas (sin mantenimiento técnico trimestral ni cambios de contenido) |
| **Tienda Online** | $750 | Todo lo anterior + carrito de compras, pasarelas de pago, catálogo de productos |
| **Auditoría Integral** | $20/hora | Diagnóstico Express (1-2 días) o Avanzado (3-5 días hábiles). Incluye seguridad y velocidad web |

*Los precios se pueden cambiar de USD a Soles (S/) con el selector de moneda arriba a la derecha. Conversión actual: 1 USD = 3.7 S/*

---

## ⭐ Widget FAQ Flotante (modularizado)

El widget de Preguntas Frecuentes está en la esquina inferior izquierda y presenta:

- **Acordeón Bootstrap** con 3 preguntas:
  - ¿Incluye dominio .com?
  - ¿Precios en dólares o soles?
  - ¿Entrega la auditoría en cuánto tiempo?
- **Burbuja flotante**: el widget inicia minimizado y muestra el panel al pulsar el botón FAQ.
- **Cierre inteligente**: Al hacer clic en el botón "X", el widget se oculta y se abre automáticamente WhatsApp según la moneda seleccionada:
  - **PEN (Soles)** → +593 0987321055 (Ecuador)
  - **USD (Dólares)** → +51 917 955 859 (Perú)
- **Diseño responsive**: Se adapta a móvil y escritorio usando clases Bootstrap nativas
- **Animaciones suaves**: Transiciones Bootstrap, hover effects, efecto pulse en el botón de WhatsApp

---

## 🌍 Posicionamiento Geo-referenciado

- **Ruta objetivo:** Machala (Ecuador) - Cañeta (Perú)
- **Meta tags geo:** `geo.region EC-G`, `geo.region PE-LIM`, `geo.placename Guayaquil`, `geo.placename Lima`, `ICBM` coordinates
- **Keywords geográficas:**landing page Ecuador, tienda online Perú, auditoría seguridad web, ruta Machala-Cañete
- **Schema.org Service:** 4 servicios con `areaServed` (Ecuador, Perú), `price` USD y keywords por servicio

---

## 🛠 Tecnologías utilizadas

- **Frontend:** HTML5, CSS3 (Bootstrap 5.3 CDN), JavaScript Vanilla
- **Estilo:** Clases Bootstrap nativas (sin Tailwind - mantener ligereza)
- **Deploy:** Cloudflare Pages
- **Hosting:** Recursos estáticos (CDN de Bootstrap, Google Fonts, etc.)
- **SEO:** Schema.org, meta tags geo, hreflang `es-EC` / `es-PE`, Open Graph, Twitter Cards

---

## 📁 Estructura de ficheros clave

```
/ (root)
  index.html           ← Landing page principal (1340 líneas)
  faq-widget.html      ← Marcado HTML independiente del widget FAQ
  Readme.txt           ← Este archivo
  _worker.js           ← Worker Cloudflare para formularios
  
/js (módulos JS)
  faq-widget.js        ← Widget FAQ flotante + interacciones (acordeón, close→WhatsApp)
  seo-geo.js           ← Script LLL geo/SEO Machala-Cañete (window.pucusoftSEO / window.pucusoftGeo)
  currency.js          ← Convertidor PEN/USD (exchangeRates, basePrices, updatePrices/)

/assets/
  css/faq-widget.css   ← Estilos aislados del widget FAQ
  img/                 ← Recursos imágenes
  css/                 ← Estilos custom (hero-sb7, etc.)
  js/                  ← main.js + vendor (AOS, GLightbox)
```

---

## 📦 Cómo actualizar/desplegar

Los cambios se suben al repositorio main y Cloudflare Pages redeploy automáticamente:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

*El redeploy en Cloudflare Pages tarda típicamente 1-2 minutos.*

---

## 📬 Contacto

- **WhatsApp Ecuador:** +593 0987321055
- **WhatsApp Perú:** +51 917 955 859
- **Email:** pucusoft@outlook.com

---

*Sitio desarrollado por Jose Antonio Puero Cuero - Agencia Pucusoft*