// Conversor de Moneda PEN/USD
// Módulo independiente - se carga con <script src="js/currency.js" defer>

(function() {
  'use strict';
  
  const exchangeRates = {
    PEN: 3.7,
    USD: 1
  };

  const basePrices = {
    landing: 240,
    corporate: 400,
    store: 750
  };

  function updatePrices() {
    const currency = document.getElementById('currency').value;
    const rate = exchangeRates[currency];
    const symbol = currency === 'PEN' ? 'S/' : '$';

    const exchangeRateEl = document.getElementById('exchange-rate');
    if (currency === 'USD') {
      exchangeRateEl.textContent = 'Tipo de cambio: 1 $ = ' + exchangeRates.PEN + ' S/ (aproximado)';
    } else {
      exchangeRateEl.textContent = '';
    }

    const priceElements = document.querySelectorAll('#precios .pricing-header h4');
    priceElements.forEach((el, index) => {
      let basePrice;
      if (index === 0) basePrice = basePrices.landing;
      else if (index === 1) basePrice = basePrices.corporate;
      else if (index === 2) basePrice = basePrices.store;
      else if (index === 3) basePrice = 20; // Auditoría $20/hora

      const convertedPrice = Math.round(basePrice * rate);
      el.innerHTML = '<sup>' + symbol + '</sup>' + convertedPrice + '<span></span>';
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    updatePrices();
  });
})();