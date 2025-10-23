export const metadata = {
  title: 'CryptoArb WebBot',
  description: 'Crypto Arbitrage Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          fontFamily: 'sans-serif',
          backgroundColor: '#f9fafb',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}

