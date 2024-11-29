import { useState, useCallback } from 'react';
import { format, fromUnixTime, getUnixTime, addMinutes } from 'date-fns';
import { toast } from 'react-hot-toast';

export const useTimestampConverter = () => {
  const [unixTimestamp, setUnixTimestamp] = useState(
    Math.floor(Date.now() / 1000).toString()
  );
  const [dateTime, setDateTime] = useState(
    format(new Date(), "yyyy-MM-dd'T'HH:mm")
  );
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const getOffsetMinutes = useCallback((timeZone: string) => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'short',
    });
    const parts = formatter.formatToParts(now);
    const timeZoneOffset = parts.find((part) => part.type === 'timeZoneName')?.value;
    return timeZoneOffset ? parseInt(timeZoneOffset.replace('GMT', '')) * 60 : 0;
  }, []);

  const updateUnixTimestamp = useCallback(
    (value: string) => {
      setUnixTimestamp(value);
      try {
        const date = fromUnixTime(parseInt(value, 10));
        const offsetMinutes = getOffsetMinutes(timezone);
        const zonedDate = addMinutes(date, -offsetMinutes);
        setDateTime(format(zonedDate, "yyyy-MM-dd'T'HH:mm"));
      } catch (error) {
        // Invalid input, ignore
      }
    },
    [timezone, getOffsetMinutes]
  );

  const updateDateTime = useCallback(
    (value: string) => {
      setDateTime(value);
      try {
        const offsetMinutes = getOffsetMinutes(timezone);
        const date = addMinutes(new Date(value), offsetMinutes);
        setUnixTimestamp(getUnixTime(date).toString());
      } catch (error) {
        // Invalid input, ignore
      }
    },
    [timezone, getOffsetMinutes]
  );

  const updateTimezone = useCallback(
    (value: string) => {
      setTimezone(value);
      try {
        const date = fromUnixTime(parseInt(unixTimestamp, 10));
        const offsetMinutes = getOffsetMinutes(value);
        const zonedDate = addMinutes(date, -offsetMinutes);
        setDateTime(format(zonedDate, "yyyy-MM-dd'T'HH:mm"));
      } catch (error) {
        // Invalid input, ignore
      }
    },
    [unixTimestamp, getOffsetMinutes]
  );

  const copyToClipboard = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        toast.success('Copied to clipboard!');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    },
    []
  );

  return {
    unixTimestamp,
    dateTime,
    timezone,
    setUnixTimestamp: updateUnixTimestamp,
    setDateTime: updateDateTime,
    setTimezone: updateTimezone,
    copyToClipboard,
  };
};
