import TimeCounter from "./TimeCounter";

import dayjs from "dayjs";

export default function () {
  return <TimeCounter emergencyStart={dayjs()} />;
}
