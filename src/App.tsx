import { Toaster } from "sonner";
import Header from "./Header";

function App() {
 
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "w-[350px]",
        }}
      />
      <Header />
    </div>
  );
}

export default App;
