import './globals.css'

export const metadata = {
  title: 'Lumière - Photographes & Créatifs',
  description: 'Le réseau des créatifs en France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}