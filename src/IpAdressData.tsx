import React from "react";
import { Strong, Text } from "@radix-ui/themes";
import { IPData } from "./helpers";

function IPAddressData({ data }: IPData) {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div className="md:flex items-center *:text-center">
      <div className="*:block">
        <Text>IP ADDRESS</Text>
        <Strong>{data.ip || "N/A"}</Strong>
      </div>
      <div className="*:block">
        <Text>LOCATION</Text>
        <Strong>{data.location?.city || "N/A"}</Strong>
      </div>
      <div className="*:block">
        <Text>TIMEZONE</Text>
        <Strong>UTC {data.location?.timezone || "N/A"}</Strong>
      </div>
      <div className="*:block">
        <Text>ISP</Text>
        <Strong>{data.isp || "N/A"}</Strong>
      </div>
    </div>
  );
}

export default React.memo(IPAddressData);
