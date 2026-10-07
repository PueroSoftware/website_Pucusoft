// FAQ Widget Flotante - Pucusoft

(function () {
  'use strict';

  function inicializarWidget(widget) {
    const shell = widget.closest('.faq-widget-shell');
    const openBtn = shell && shell.querySelector('#openFaq');
    const accordionEl = widget.querySelector('#faqAccordion');
    if (
      accordionEl
      && typeof bootstrap !== 'undefined'
      && bootstrap.Accordion
      && typeof bootstrap.Accordion.getOrCreateInstance === 'function'
    ) {
      bootstrap.Accordion.getOrCreateInstance(accordionEl);
    }

    const closeBtn = widget.querySelector('#closeFaq');
    if (!shell || !openBtn || !closeBtn) {
      console.error('El widget FAQ no contiene sus controles de apertura y cierre.');
      return;
    }

    function cambiarEstado(abierto) {
      shell.classList.toggle('is-open', abierto);
      widget.classList.toggle('is-hidden', !abierto);
      widget.setAttribute('aria-hidden', String(!abierto));
      openBtn.setAttribute('aria-expanded', String(abierto));
    }

    cambiarEstado(false);

    openBtn.addEventListener('click', function () {
      cambiarEstado(true);
    });

    closeBtn.addEventListener('click', function () {
      cambiarEstado(false);
      openBtn.focus();
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
