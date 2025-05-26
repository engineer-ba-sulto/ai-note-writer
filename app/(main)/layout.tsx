import Footer from "../_components/footer";
import Header from "../_components/header";

export default async function GeneratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
