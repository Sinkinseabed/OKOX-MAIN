export const metadata = {
  title: "$OKOX | The OKX Mascot",
  description: "Backed by OKX Alpha Traders. From meme to movement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&family=Irish+Grover&display=swap"
          rel="stylesheet"
        />
          <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Irish+Grover&display=swap" rel="stylesheet" />
          
          <link href="https://fonts.googleapis.com/css2?family=Acme&family=Edu+NSW+ACT+Cursive:wght@400..700&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Irish+Grover&display=swap" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css2?family=Acme&family=Edu+NSW+ACT+Cursive:wght@400..700&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Irish+Grover&display=swap" rel="stylesheet" />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
