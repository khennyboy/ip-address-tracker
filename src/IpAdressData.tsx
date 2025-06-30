import { Strong, Text } from "@radix-ui/themes";

export default function IPAdressData({ data }) {
  if (!data) return null;

  return (
    <div className="md:flex items-center *:text-center">
      <div className="*:block">
        <Text>IP ADDRESS</Text>
        <Strong>{datas.ip}</Strong>
      </div>
      <div className="*:block">
        <Text>LOCATION</Text>
        <Strong>{datas.location?.city}</Strong>
      </div>
      <div className="*:block">
        <Text>TIMEZONE</Text>
        <Strong>UTC {datas.location?.timezone}</Strong>
      </div>
      <div className="*:block">
        <Text>ISP</Text>
        <Strong>{datas.isp}</Strong>
      </div>
    </div>
  );
}
