export default function StatCard({ title, subtitle, description }) {
    return (
      <div className="stat-card">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-600">{subtitle}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
  }