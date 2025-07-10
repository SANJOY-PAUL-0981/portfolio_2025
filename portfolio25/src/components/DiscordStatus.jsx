import { useEffect, useState } from 'react';

const DiscordStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("https://lanyard.cnrad.dev/api/740822701530153010")
      .then(res => res.json())
      .then(data => {
        setStatus(data.data.discord_status);
      });
  }, []);

  const statusColor = {
    online: "green",
    idle: "yellow",
    dnd: "red",
    offline: "gray"
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-3 h-3 rounded-full`}
        style={{ backgroundColor: statusColor[status] }}
      />
      <p className="text-white text-sm capitalize">
        {status || 'Loading...'}
      </p>
    </div>
  );
};

export default DiscordStatus;
