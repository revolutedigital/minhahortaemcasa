import type { APIRoute } from 'astro';

export const prerender = false;

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY || '';
const BREVO_LIST_ID = import.meta.env.BREVO_LIST_ID || '2'; // Default list ID

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, source, lead_magnet } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // If no API key, just log and return success (for development)
    if (!BREVO_API_KEY) {
      console.log('New subscriber:', { email, name, source, lead_magnet });
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed successfully (dev mode)' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create or update contact in Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name || '',
          SOURCE: source || 'website',
          LEAD_MAGNET: lead_magnet || '',
        },
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();

      // If contact already exists, that's okay
      if (errorData.code === 'duplicate_parameter') {
        return new Response(
          JSON.stringify({ success: true, message: 'Already subscribed' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      console.error('Brevo API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to subscribe' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
