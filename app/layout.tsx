import "./globals.css";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
