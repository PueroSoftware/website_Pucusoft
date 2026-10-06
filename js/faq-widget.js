// FAQ Widget Flotante - Pucusoft
// Módulo de interacciones - se carga con <script src="js/faq-widget.js" defer>
// El HTML del widget ya está embedido en index.html

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
      return countryWhatsApp['PEN'];
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

  // Inicializar accordion Bootstrap cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
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
        // Animación de salida
        widget.classList.remove('opacity-100', 'translate-y-full');
        widget.classList.add('opacity-0', 'translate-y-full');
        
        // Pequeño delay para asegurar que cierre antes de abrir WhatsApp
        setTimeout(function() {
          const paisInfo = detectarPais();
          if (paisInfo) {
            abrirWhatsApp(paisInfo);
          }
        }, 300);
      });
    }
  });
  
  // También escuchar el evento 'load' por si el DOMContentLoaded se pierde
  window.addEventListener('load', function() {
    // Re-inicializar accordion por si acaso
    const accordionEl = document.getElementById('faqAccordion');
    if (accordionEl && typeof bootstrap !== 'undefined') {
      // Bootstrap accordion es idempotente, solo aseguramos que esté activo
    }
    
    // Configurar cierre del widget + WhatsApp automático al cerrar (segunda oportunidad)
    const widget = document.getElementById('faq-whatsapp-widget');
    if (!widget) return;
    
    const closeBtn = widget.querySelector('#closeFaq');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        widget.classList.remove('opacity-100', 'translate-y-full');
        widget.classList.add('opacity-0', 'translate-y-full');
        
        setTimeout(function() {
          const paisInfo = detectarPais();
          if (paisInfo) {
            abrirWhatsApp(paisInfo);
          }
        }, 300);
      });
    }
  });
})();