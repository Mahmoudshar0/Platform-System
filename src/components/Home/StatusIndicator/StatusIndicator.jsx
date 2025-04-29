import { data } from '../data/data';
import './StatusIndicator.css';

function StatusIndicator({ status }) {
  const statusDetails = data.statusTypes[status] || data.statusTypes.processing;
  const { icon, text, className } = statusDetails;

  return (
    <div className={`status-indicator ${className}`}>
      <span className="status-icon">{icon}</span>
      <span className="status-text">{text}</span>
    </div>
  );
}

export default StatusIndicator;