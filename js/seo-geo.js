// LLL Ligero para SEO y Geo-referenciamiento en el Navegador
// Módulo independiente - se carga con <script src="js/seo-geo.js" defer>

(function() {
  'use strict';
  
  const geoConfig = {
    countries: ['EC', 'PE'],
    regions: {
      EC: ['G', 'L', 'E'],
      PE: ['LIM', 'L']
    },
    route: 'Machala-Cañete',
    ciudades: ['Machala', 'Tumbes', 'Lima', 'Cañete']
  };
  
  const seoData = {
    siteName: 'Pucusoft',
    defaultPriceUSD: {
      landing: 240,
      corporate: 400,
      store: 750,
      audit: 20
    },
    geoTarget: ['Perú', 'Ecuador'],
    serviceKeywords: {
      landing: ['landing page', 'diseño web', 'landing Ecuador'],
      corporate: ['web corporativa', 'sistema empresa', 'web Perú'],
      store: ['tienda online', 'ecommerce', 'venta online'],
      audit: ['auditoría seguridad', 'velocidad web', 'protección web']
    }
  };
  
  function usuarioEnRutaGeografica() {
    const userRegion = navigator.language.substring(0, 2);
    return geoConfig.countries.includes(userRegion) || 
           navigator.language.includes('es') && 
           (navigator.language === 'es-EC' || navigator.language === 'es-PE');
  }
  
  function generarDatosEstructurados(tipoServicio) {
    const precio = seoData.defaultPriceUSD[tipoServicio] || 0;
    const keywords = seoData.serviceKeywords[tipoServicio] || [];
    return {
      '@type': 'Service',
      'name': tipoServicio.charAt(0).toUpperCase() + tipoServicio.slice(1),
      'description': `Servicio de ${tipoServicio} en ${geoConfig.countries.join(' y ')}`,
      'price': precio,
      'priceCurrency': 'USD',
      'keywords': keywords
    };
  }
  
  if (usuarioEnRutaGeografica()) {
    document.body.dataset.geoRoute = 'machala-cañete';
    document.body.dataset.geoCountries = 'EC,PE';
    console.log('🌍 Pucusoft: Usuario en ruta geográfica Machala-Cañete');
    console.log('📱 Geo-config:', JSON.stringify(geoConfig));
    console.log('💰 SEO data:', JSON.stringify(seoData));
  }
  
  window.pucusoftSEO = seoData;
  window.pucusoftGeo = geoConfig;
  
})();