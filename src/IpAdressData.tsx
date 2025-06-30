import { Strong, Text } from "@radix-ui/themes";
import { IPData } from "./helpers";

export default function IPAdressData({ data }: IPData) {
  console.log(data, 'data');
   if (!data || Object.keys(data).length === 0) return null;
  return (
    <div className="md:flex items-center *:text-center">
      <div className="*:block">
        <Text>IP ADDRESS</Text>
        <Strong>{data.ip}</Strong>
      </div>
      <div className="*:block">
        <Text>LOCATION</Text>
        <Strong>{data.location?.city}</Strong>
      </div>
      <div className="*:block">
        <Text>TIMEZONE</Text>
        <Strong>UTC {data.location?.timezone}</Strong>
      </div>
      <div className="*:block">
        <Text>ISP</Text>
        <Strong>{data.isp}</Strong>
      </div>
    </div>
  );
}
