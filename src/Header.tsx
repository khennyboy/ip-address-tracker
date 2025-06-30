import { IpTrackerForm } from "./Form";
export default function Header() {
  return (
    <header className="bg-[url('\pattern-bg-mobile.png')] py-8 lg:bg-[url('\pattern-bg-desktop.png')] lg:py-14">
      <h1 className="text-center text-white mb-4 font-medium text-xl">
        IP Address Tracker
      </h1>
      <IpTrackerForm />
    </header>
  );
}
