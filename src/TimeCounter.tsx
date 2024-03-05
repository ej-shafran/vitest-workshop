import React, { useState } from "react";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";
import { useEffect, type FC } from "react";

dayjs.extend(duration);

function formatDiff(emergencyStart: dayjs.Dayjs) {
  const diff = dayjs().diff(emergencyStart);
  const duration = dayjs.duration(diff);
  const hours = duration.as("hours");
  return (
    (hours >= 1 ? hours.toFixed() + ":" : "") +
    duration.format("mm:ss")
  );
}

interface TimeCounterProps {
  emergencyStart: dayjs.Dayjs;
}

const TimeCounter: FC<TimeCounterProps> = (props) => {
  const { emergencyStart } = props;

  const [text, setText] = useState(() => formatDiff(emergencyStart));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(formatDiff(emergencyStart));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [emergencyStart]);

  return (
    <div data-testid="time-counter" className="counter">
      {text}
    </div>
  );
};

export default TimeCounter;
