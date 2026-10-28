import "./globals.css";

export const metadata = {
  title: "Way Finder | Discover Pakistan",
  description:
    "Discover Pakistan, explore tourist destinations and plan your next journey with Way Finder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}