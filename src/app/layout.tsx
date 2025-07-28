

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <p>layout.tsx</p>
        {/* This is the layout file */}
        {/* You can add global styles or components here */}
      </body>
    </html>
  );
}
