import React from "react";
import { Strong, Text } from "@radix-ui/themes";
import { IPData } from "./helpers";

const IPAddressData = ({ data }: IPData) => {
  if (!data || Object.keys(data).length === 0) return null;

  const infoItems = [
    {
      label: "IP ADDRESS",
      value: data.ip || "N/A",
    },
    {
      label: "LOCATION",
      value: data.country || "N/A",
    },
    {
      label: "TIMEZONE",
      value: `UTC ${data.timezone || "N/A"}`,
    },
    {
      label: "ISP",
      value: data.isp || "N/A",
    },
  ];

  return (
    <div
      className="
      absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 z-1000
      w-[90%] max-w-4xl 
      [@media(min-width:500px)_and_(max-width:768px)]:w-[70%]
      md:flex items-center
      shadow-md bg-white rounded-xl py-8
      space-y-4 md:space-y-0 md:divide-x-2 divide-dark-gray
      *:text-center
    "
    >
      {infoItems.map(({ label, value }) => (
        <div key={label} className="flex-auto *:block">
          <Text className="text-dark-gray" size="1" weight="bold">
            {label}
          </Text>
          <Strong className="text-very-dark-gray !text-xl">{value}</Strong>
        </div>
      ))}
    </div>
  );
};

export default React.memo(IPAddressData);
