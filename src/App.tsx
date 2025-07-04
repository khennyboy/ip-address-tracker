import { Toaster } from "sonner";
import { IpTrackerForm } from "./IpTrackerForm";
import IPAdressData from "./IpAdressData";
import useHandleApi from "./useHandleApi";
import { Heading } from "@radix-ui/themes";
import MapView from "./Mapaview";


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
      <header className="relative bg-cover bg-[url('/pattern-bg-mobile.png')] pt-3 pb-44 md:pb-20 lg:bg-[url('/pattern-bg-desktop.png')]">
        <Heading className="text-center text-white !mb-4" weight="medium">
          Ip Address Tracker
        </Heading>
        <IpTrackerForm GEOAPI={GEOAPI} isLoading={isLoading} />
        <IPAdressData data={data} />
      </header>
      <main>
        <MapView data={data} />
      </main>
    </>
  );
}

export default App;
