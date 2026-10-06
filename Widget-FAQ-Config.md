# Widget Preguntas Frecuentes Pucusoft - Configuración Manual

## Posición en la web
- Ubicación: Esquina inferior izquierda fija
- Clase CSS principal: `position-fixed bottom-0 start-0 m-4 z-1050`
- Anchura: `w-80 max-w-sm` (móvil) / `md:w-80` (desktop)

## Preguntas Frecuentes (3 items)

### 1. ¿Incluye dominio .com?
**Respuesta:** Sí, dominio .com pagado por 3 años en todos los paquetes.

**Código HTML asociado:**
```html
<div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
  <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0 type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="false" aria-controls="faqOne">
    <span>¿Cuánto cuestan los paquetes?</span>
    <span class="faq-icon text-lg align-middle">+</span>
  </button>
  <div id="faqOne" class="accordion-collapse collapse" aria-labelledby="faqOneHeading" data-bs-parent="#faqAccordion">
    <div class="accordion-body p-4 text-sm text-slate-500">Los precios base son en USD ($240, $400 y $750). Puedes cambiar la moneda a soles mediante el selector de moneda.</div>
  </div>
</div>
```

### 2. ¿Precios en dólares o soles?
**Respuesta:** Los precios base son en USD ($240, $400, $750). Puedes cambiar a Soles (S/) con el selector de moneda arriba a la derecha.

**Código HTML asociado:**
```html
<div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
  <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0 type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
    <span>¿Entrega la auditoría en cuánto tiempo?</span>
    <span class="faq-icon text-lg align-middle">+</span>
  </button>
  <div id="faqTwo" class="accordion-collapse collapse" aria-labelledby="faqTwoHeading" data-bs-parent="#faqAccordion">
    <div class="accordion-body p-4 text-sm text-slate-500">El diagnóstico Express o Avanzado tiene entrega entre 3 a 5 días hábiles.</div>
  </div>
</div>
```

### 3. ¿Entrega la auditoría en cuánto tiempo?
**Respuesta:** El diagnóstico Express o Avanzado tiene entrega entre 3 a 5 días hábiles.

**Código HTML asociado:**
```html
<div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
  <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0 type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
    <span>¿Trabajan con clientes de otros países?</span>
    <span class="faq-icon text-lg align-middle">+</span>
  </button>
  <div id="faqThree" class="accordion-collapse collapse" aria-labelledby="faqThreeHeading" data-bs-parent="#faqAccordion">
    <div class="accordion-body p-4 text-sm text-slate-500">Sí. Trabajamos de forma remota con clientes de Ecuador, Perú y otros países.</div>
  </div>
</div>
```

## Configuración de WhatsApp automático

### Cierre del widget → WhatsApp

Al hacer clic en el botón "X" (cerrar widget), el sistema abre WhatsApp según la moneda visible:

| Moneda seleccionada | Número WhatsApp | País |
|-------------------|-----------------|------|
| **PEN (Soles)** | +593 0987321055 | Ecuador |
| **USD (Dólares)** | +51 917 955 859 | Perú |

**Secuencia manual al cerrar:**
1. Usuario hace clic en el "×" del widget
2. Widget se oculta con animación Bootstrap (opacity-out + translate-y)
3. Esperar 300ms (delay)
4. Número de WhatsApp aparece según moneda activa en el selector
5. Se abre `https://wa.me/[número]?text=Hola%20Pucusoft,%20quiero%20consultar%20por%20un%20proyecto`

### Configuración manual del número de WhatsApp

Si necesitas actualizar los números manualmente (sin código JavaScript):

**Para Ecuador (PEN):**
```
https://wa.me/5930987321055?text=Hola%20Pucusoft,%20quiero%20consultar%20por%20un%20proyecto
```

**Para Perú (USD):**
```
https://wa.me/51917955859?text=Hola%20Pucusoft,%20quiero%20consultar%20por%20un%20proyecto
```

### Botón de contacto fijo (siempre visible)

El sitio también tiene un botón flotante de WhatsApp lateral derecho independiente del widget FAQ:

- **Posición:** Bottom-right, margen 20px
- **Clase CSS:** `whatsapp-float position-fixed bottom-20 right-2 z-9999`
- **Número siempre mostrado:** +593 0987321055 (Ecuador) - este es el número por defecto
- **Hover effect:** `hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30`

## Precios y conversión monetaria

### Precios base (USD - mostrados por defecto)

| Servicio | Precio USD | Observación |
|----------|-----------|-------------|
| Landing Page | $240 | Incluye dominio .com 3 años + hosting básico |
| Web Corporativa | $400 | Todo lo anterior + backups básicos (sin mantenimiento trimestral) |
| Tienda Online | $750 | Todo lo anterior + carrito y pasarelas de pago |
| Auditoría | $20/hora | Diagnóstico Express o Avanzado (3-5 días hábiles) |

### Conversión a Soles (PEN)

Factor de conversión: **1 USD = 3.7 S/**

| Servicio | Precio S/ (calculado) |
|----------|----------------------|
| Landing Page | S/ 888 ($240 × 3.7) |
| Web Corporativa | S/ 1480 ($400 × 3.7) |
| Tienda Online | S/ 2625 ($750 × 3.7) |
| Auditoría/h | S/ 74 ($20 × 3.7) |

**Selector de moneda:** El usuario cambia PEN/USD desde el menú arriba a la derecha. El código JavaScript `currency.js` se encarga de:
- Mostrar el símbolo correcto ($ o S/)
- Aplicar la conversión 3.7× automáticamente
- Actualizar el número de WhatsApp según la moneda seleccionada

## Estructura CSS clases Bootstrap (para referencia manual)

### Widget contenedor
```html
<div class="faq-widget position-fixed bottom-0 start-0 m-4 z-index-1050 min-w-80 max-w-sm w-full sm:w-64 md:w-80 rounded-xl border border-slate-200 shadow-sm shadow-slate-500/10 transition-all duration-300 ease-out opacity-100 transform translate-y-full">
```

### Header del widget
```html
<div class="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-900 text-white">
  <!-- Logo/ícono a la izquierda -->
  <!-- Título "¿Dudas frecuentes?" al centro -->
  <!-- Botón X cerrar a la derecha -->
  <button class="p-1 text-slate-300 hover:text-white transition align-middle" aria-label="Cerrar preguntas frecuentes">
    <i class="bi bi-x"></i>
  </button>
</div>
```

### Pregunta del accordion
```html
<button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0 type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="false" aria-controls="faqOne">
  <span>Texto de la pregunta</span>
  <span class="faq-icon text-lg align-middle">+</span>
</button>
```

### Respuesta del accordion (colapsable)
```html
<div id="faqOne" class="accordion-collapse collapse" aria-labelledby="faqOneHeading" data-bs-parent="#faqAccordion">
  <div class="accordion-body p-4 text-sm text-slate-500">Texto de la respuesta...</div>
</div>
```

## Cómo actualizar manualmente

1. Editar las preguntas y respuestas en `faq-widget.html`.
2. Editar los estilos del componente en `assets/css/faq-widget.css`.
3. Editar el comportamiento del acordeón y WhatsApp en `js/faq-widget.js`.
4. `index.html` solo contiene el contenedor y las referencias a los tres ficheros del widget.

## Solución de problemas visuales comunes

| Síntoma | Causa probable | Solución |
|---------|---------------|----------|
| Widget se ve "plano"/sin estilo | La hoja propia no está cargando | Verificar la referencia a `assets/css/faq-widget.css` en `index.html` |
| Widget muy grande/agrandado | Clases `w-full sm:w-64 md:w-80` muy anchas | Cambiar a `w-64 max-w-sm` o `max-w-md` |
| Acordeón no abre/ cierra | `data-bs-toggle="collapse"` no funcionando | Asegurar que Bootstrap bundle JS esté cargando (línea 895) |
| WhatsApp no abre al cerrar | `detectarPais()` fallando | Verificar que el selector `#currency` esté presente en el formulario |
| Widget no aparece | No se pudo cargar el componente HTML | Servir el sitio mediante HTTP y verificar que `faq-widget.html` esté publicado |

## Respaldo rápido

El widget requiere servirse mediante HTTP/HTTPS porque `faq-widget.js` carga `faq-widget.html` con `fetch`.