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
  Readme.txt           ← Este archivo
  _worker.js           ← Worker Cloudflare para formularios
  
/js (módulos JS)
  seo-geo.js           ← Script LLL geo/SEO Machala-Cañete (window.pucusoftSEO / window.pucusoftGeo)
  currency.js          ← Convertidor PEN/USD (exchangeRates, basePrices, updatePrices/)

/assets/
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