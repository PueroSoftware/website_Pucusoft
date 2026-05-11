const REDIRECTS = {
  '/blog': '/blog.html',
  '/blog-desarrollo-medida': '/blog-desarrollo-medida.html',
  '/blog-seo-regional': '/blog-seo-regional.html',
  '/blog-tendencias-2026': '/blog-tendencias-2026.html',
  '/blog-seguridad-web': '/blog-seguridad-web.html',
  '/blog-marketing-pymes': '/blog-marketing-pymes.html',
  '/blog-ecommerce-guia': '/blog-ecommerce-guia.html',
  '/blog-casos-exito': '/blog-casos-exito.html',
  '/terminos': '/terminos.html',
  '/privacidad': '/privacidad.html'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const target = REDIRECTS[url.pathname];
    if (target) {
      const newUrl = new URL(target, url.origin);
      const response = await env.ASSETS.fetch(new Request(newUrl, request));
      return new Response(response.body, response);
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const formData = await request.formData();
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const pais = formData.get('pais') || '';
        const subject = formData.get('subject') || '';
        const message = formData.get('message') || '';

        if (!name || !email) {
          return new Response(JSON.stringify({ ok: false, error: 'Nombre y email requeridos' }), {
            status: 400, headers: { 'content-type': 'application/json' }
          });
        }

        const emailContent = `Nuevo contacto desde pucusoft.pages.dev

Nombre: ${name}
Email: ${email}
País: ${pais}
Asunto: ${subject}
Mensaje: ${message}`;

        await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: 'josephpuero@aol.com' }] }],
            from: { email: 'contacto@pucusoft.pages.dev', name: 'Formulario Web Pucusoft' },
            subject: `Contacto web: ${subject || 'Sin asunto'}`,
            content: [{ type: 'text/plain', value: emailContent }]
          })
        });

        return new Response(JSON.stringify({ ok: true, message: 'Mensaje recibido. Te responderemos pronto.' }), {
          status: 200, headers: { 'content-type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: 'Error al procesar el formulario' }), {
          status: 500, headers: { 'content-type': 'application/json' }
        });
      }
    }

    return env.ASSETS.fetch(request);
  }
}
