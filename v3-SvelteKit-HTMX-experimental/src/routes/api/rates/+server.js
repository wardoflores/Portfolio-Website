// src/routes/api/rates/+server.js
export async function GET() {
  // Fetch rates from an external API
  const res = await fetch('https://api.exchangerate-api.com/v4/latest/PHP');
  const data = await res.json();
  // You might want to select or format the rates according to your needs
  return new Response(JSON.stringify(data.rates));
}

