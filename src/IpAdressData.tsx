import React from "react";
import { Strong, Text } from "@radix-ui/themes";
import { IPData } from "./helpers";

function IPAddressData({ data }: IPData) {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="md:flex shadow-md w-[90%] [@media(min-width:500px)_and_(max-width:768px)]:w-[70%] max-w-4xl bg-white py-8 absolute rounded-xl items-center *:text-center bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-1000 space-y-4 md:space-y-0 divide-dark-gray divide-x-2">
      <div className="*:block flex-auto">
        <Text className="text-dark-gray" size="1" weight="bold">
          IP ADDRESS
        </Text>
        <Strong className="text-very-dark-gray !text-xl">
          {data.ip || "N/A"}
        </Strong>
      </div>
      <div className="*:block flex-auto">
        <Text className="text-dark-gray" size="1" weight="bold">
          LOCATION
        </Text>
        <Strong className="text-very-dark-gray !text-xl">
          {data.location?.city || "N/A"}
        </Strong>
      </div>
      <div className="*:block flex-auto">
        <Text className="text-dark-gray" size="1" weight="bold">
          TIMEZONE
        </Text>
        <Strong className="text-very-dark-gray !text-xl">
          UTC {data.location?.timezone || "N/A"}
        </Strong>
      </div>
      <div className="*:block flex-auto">
        <Text className="text-dark-gray" size="1" weight="bold">
          ISP
        </Text>
        <Strong className="text-very-dark-gray !text-xl">
          {data.isp || "N/A"}
        </Strong>
      </div>
    </div>
  );
}

export default React.memo(IPAddressData);
