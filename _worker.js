export default {
  async fetch(request, env) {
    const url = new URL(request.url);

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
