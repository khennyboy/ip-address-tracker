import { Toaster } from "sonner";
import { IpTrackerForm } from "./IpTrackerForm";
import IPAdressData from "./IpAdressData";
import useHandleApi from "./useHandleApi";

function App() {
  const { GEOAPI, isLoading, data } = useHandleApi();
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "w-[350px]",
        }}
      />
      <header className="bg-[url('/pattern-bg-mobile.png')] py-4 lg:bg-[url('/pattern-bg-desktop.png')] lg:py-8">
        <h1 className="text-center text-white mb-2 font-medium text-xl">
          IP Address Tracker
        </h1>
        <IpTrackerForm GEOAPI={GEOAPI} isLoading={isLoading } />
      </header>
      <main>
        <IPAdressData data={data} />
      </main>
    </>
  );
}

export default App;
