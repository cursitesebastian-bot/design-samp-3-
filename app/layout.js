import "./style.css";

export const metadata = {
  title: "normal to behave and be app",
  description: "A simple Next.js page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
