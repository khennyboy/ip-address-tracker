import { Toaster } from "sonner";
import { IpTrackerForm } from "./IpTrackerForm";
import IPAdressData from "./IpAdressData";
import useHandleApi from "./useHandleApi";
import { Heading } from "@radix-ui/themes";
import MapView from "./Mapaview";
import "./index2.css";

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
      <header className=" bg-cover bg-[url('/pattern-bg-mobile.png')] py-[1rem_2rem] lg:bg-[url('/pattern-bg-desktop.png')] ">
        <Heading className="text-center text-white">Ip Address Tracker</Heading>
        <IpTrackerForm GEOAPI={GEOAPI} isLoading={isLoading} />
      </header>
      <main>
        <IPAdressData data={data} />
        <MapView data={data} />
      </main>
    </>
  );
}

export default App;
