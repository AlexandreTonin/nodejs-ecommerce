import Header from "../components/Header";
import SmallGreyText from "../components/SmallGreyText";

export default function AccountPage() {
  return (
    <>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-5rem)] text-gray-900 dark:text-white">
        <div className="container mx-auto py-8 grid grid-cols-1 grid-rows-1">
          <div className="w-full min-h-40 border border-gray-800 rounded-lg flex items-center p-8">
            <div className="flex flex-col gap-4">
              <div className="rounded-full h-28 w-28 bg-red-500 bg-[url(/me.jpeg)] bg-contain"></div>
              <div className="flex flex-col items-center">
                <p>Alexandre Tonin</p>
                <SmallGreyText>Cliente</SmallGreyText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
