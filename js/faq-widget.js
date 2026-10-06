// FAQ Widget Flotante - Pucusoft

(function () {
  'use strict';

  const countryWhatsApp = {
    PEN: { phone: '5930987321055' },
    USD: { phone: '51917955859' }
  };

  function detectarPais() {
    const currencySelect = document.getElementById('currency');
    if (currencySelect && countryWhatsApp[currencySelect.value]) {
      return countryWhatsApp[currencySelect.value];
    }

    return navigator.language.substring(0, 2) === 'es'
      ? countryWhatsApp.PEN
      : null;
  }

  function abrirWhatsApp(paisInfo) {
    if (!paisInfo) {
      return;
    }

    const message = encodeURIComponent('Hola Pucusoft, quiero consultar por un proyecto');
    window.open(`https://wa.me/${paisInfo.phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  function inicializarWidget(widget) {
    const accordionEl = widget.querySelector('#faqAccordion');
    if (accordionEl && typeof bootstrap !== 'undefined') {
      bootstrap.Accordion.getOrCreateInstance(accordionEl);
    }

    const closeBtn = widget.querySelector('#closeFaq');
    if (!closeBtn) {
      console.error('El widget FAQ no contiene el botón de cierre.');
      return;
    }

    closeBtn.addEventListener('click', function () {
      widget.classList.add('is-hidden');
      widget.setAttribute('aria-hidden', 'true');

      window.setTimeout(function () {
        abrirWhatsApp(detectarPais());
      }, 300);
    });
  }

  async function cargarWidget() {
    const container = document.getElementById('faq-widget-container');
    if (!container) {
      console.error('No se encontró el contenedor del widget FAQ.');
      return;
    }

    try {
      const response = await fetch('faq-widget.html');
      if (!response.ok) {
        throw new Error(`No se pudo cargar faq-widget.html (${response.status}).`);
      }

      container.innerHTML = await response.text();
      const widget = container.querySelector('#faq-whatsapp-widget');
      if (!widget) {
        throw new Error('faq-widget.html no contiene #faq-whatsapp-widget.');
      }

      inicializarWidget(widget);
    } catch (error) {
      console.error('Error al cargar el widget FAQ:', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarWidget, { once: true });
  } else {
    cargarWidget();
  }
})();
