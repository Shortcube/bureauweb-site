export async function POST(request) {
  const payload = await request.json().catch(() => ({}))
  console.log('Démo soumission reçue (sans persistance):', payload)
  return Response.json({ ok: true })
}
