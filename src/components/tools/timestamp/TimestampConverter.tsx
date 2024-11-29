import React from 'react';
import { UnixInput } from './components/UnixInput';
import { DateTimeInput } from './components/DateTimeInput';
import { TimezoneSelector } from './components/TimezoneSelector';
import { useTimestampConverter } from './hooks/useTimestampConverter';
import { motion } from 'framer-motion';

export const TimestampConverter: React.FC = () => {
  const {
    unixTimestamp,
    dateTime,
    timezone,
    setUnixTimestamp,
    setDateTime,
    setTimezone,
    copyToClipboard,
  } = useTimestampConverter();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Timestamp Converter
          </h1>
          <p className="text-gray-400">
            Convert between Unix timestamps and human-readable dates
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <UnixInput
            value={unixTimestamp}
            onChange={setUnixTimestamp}
            onCopy={copyToClipboard}
          />
          <DateTimeInput
            value={dateTime}
            onChange={setDateTime}
            onCopy={copyToClipboard}
          />
        </div>

        <TimezoneSelector
          value={timezone}
          onChange={setTimezone}
        />
      </motion.div>
    </div>
  );
};