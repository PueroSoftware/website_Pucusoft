// FAQ Widget Flotante - Pucusoft
// Módulo independiente, usa Bootstrap classes - se carga con <script src="js/faq-widget.js" defer>

(function() {
  'use strict';
  
  // Configuración de WhatsApp por país (según moneda seleccionada)
  const countryWhatsApp = {
    'PEN': { // Soles = Ecuador
      phone: '5930987321055',
      name: 'Ecuador'
    },
    'USD': { // Dólares = Perú
      phone: '51917955859',
      name: 'Perú'
    }
  };

  // Función para detectar país basado en el selector de moneda activo
  function detectarPais() {
    const currencySelect = document.getElementById('currency');
    if (currencySelect) {
      const selectedValue = currencySelect.value;
      return countryWhatsApp[selectedValue];
    }
    // Fallback: detectar por idioma del navegador
    const lang = navigator.language.substring(0, 2);
    if (lang === 'es') {
      return countryWhatsApp['PEN';
    }
    return null;
  }

  // Función para abrir WhatsApp con número detectado
  function abrirWhatsApp(paisInfo) {
    if (paisInfo) {
      const whatsappUrl = `https://wa.me/${paisInfo.phone}?text=Hola%20Pucusoft,%20quiero%20consultar%20por%20un%20proyecto`;
      window.open(whatsappUrl, '_blank');
    }
  }

  // Verificar si el widget ya está injectado (idempotente)
  if (document.getElementById('faq-whatsapp-widget')) {
    return;
  }

  // Plantilla HTML del widget usando Bootstrap 5 classes
  const faqWidgetHTML = `
    <!-- Widget Preguntas Frecuentes Flotante a la Izquierda -->
    <div id="faq-whatsapp-widget" class="faq-widget position-fixed bottom-0 start-0 m-4 z-index-1050 min-w-80 max-w-sm w-full sm:w-64 md:w-80 bg-white overflow-hidden rounded-xl border border-slate-200 shadow-2xl backdrop-blur-lg transition-all duration-300 opacity-100 transform translate-y-0" aria-hidden="true" style="opacity: 0; transform: translateY(10px);">
      <!-- HEADER -->
      <div class="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-900 text-white">
        <div class="flex items-center gap-2">
          <div class="h-10 w-10 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.84L3 20l1.16-3.49A7.64 7.64 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-sm">¿Dudas frecuentes?</h3>
            <p class="text-xs text-slate-300">Respuestas rápidas</p>
          </div>
        </div>
        <button id="closeFaq" class="rounded-full p-1 text-slate-300 hover:bg-white/10 transition" aria-label="Cerrar widget">
          <i class="bi bi-x"></i>
        </button>
      </div>

      <!-- FAQ CONTENT -->
      <div class="p-3 max-h-[420px] overflow-y-auto space-y-1">
        <!-- ITEM 1 -->
        <div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
          <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition hover:bg-slate-50" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="false" aria-controls="faqOne">
            <span>¿Cuánto cuestan los paquetes?</span>
            <span class="faq-icon text-lg">+</span>
          </button>
          <div id="faqOne" class="accordion-collapse collapse" aria-labelledby="faqOneHeading" data-bs-parent="#faqAccordion">
            <div class="accordion-body p-4 text-sm text-slate-500">Los precios base son en USD ($240, $400 y $750). Puedes cambiar la moneda a soles mediante el selector de moneda.</div>
          </div>
        </div>

        <!-- ITEM 2 -->
        <div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
          <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition hover:bg-slate-50" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
            <span>¿Entrega la auditoría en cuánto tiempo?</span>
            <span class="faq-icon text-lg">+</span>
          </button>
          <div id="faqTwo" class="accordion-collapse collapse" aria-labelledby="faqTwoHeading" data-bs-parent="#faqAccordion">
            <div class="accordion-body p-4 text-sm text-slate-500">El diagnóstico Express o Avanzado tiene entrega entre 3 a 5 días hábiles.</div>
          </div>
        </div>

        <!-- ITEM 3 -->
        <div class="faq-item rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">
          <button class="faq-question w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-700 transition hover:bg-slate-50" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
            <span>¿Trabajan con clientes de otros países?</span>
            <span class="faq-icon text-lg">+</span>
          </button>
          <div id="faqThree" class="accordion-collapse collapse" aria-labelledby="faqThreeHeading" data-bs-parent="#faqAccordion">
            <div class="accordion-body p-4 text-sm text-slate-500">Sí. Trabajamos de forma remota con clientes de Ecuador, Perú y otros países.</div>
          </div>
        </div>
      </div>

      <!-- WHATSAPP FOOTER -->
      <div class="border-t border-slate-200 bg-slate-50 p-3">
        <a href="https://wa.me/${ Object.values(countryWhatsApp)[0].phone }" target="_blank" class="group flex items-center justify-center rounded-xl bg-[#25D366] px-4 py-2 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30">
          <svg class="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118 .571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  `;

  // Inyectar el widget en el DOM
  const widgetEl = document.createElement('div');
  widgetEl.innerHTML = faqWidgetHTML.trim();
  const widgetContainer = widgetEl.firstElementChild;
  
  // Añadir al body (al inicio para que aparezca con alto z-index)
  document.body.insertBefore(widgetContainer, document.body.firstChild);

  // Inicializar Bootstrap accordion (Bootstrap 5 ya está cargado en el sitio)
  const accordionEl = document.getElementById('faqAccordion');
  if (accordionEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Accordion(accordionEl);
  }

  // Configurar cierre del widget + WhatsApp automático al cerrar
  const widget = document.getElementById('faq-whatsapp-widget');
  if (!widget) return;

  // Botón de cerrar (X)
  const closeBtn = widget.querySelector('#closeFaq');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      widget.classList.remove('opacity-100', 'translate-y-0');
      widget.classList.add('opacity-0', 'translate-y-10');
      
      // Pequeño delay para asegurar que cierre antes de abrir WhatsApp
      setTimeout(function() {
        const paisInfo = detectarPais();
        if (paisInfo) {
          abrirWhatsApp(paisInfo);
        }
      }, 300);
    });
  }
})();