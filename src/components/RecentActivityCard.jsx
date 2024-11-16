const RecentActivityCard = () => (
  <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
    <ul className="space-y-2">
      {/* Add list items for recent activities */}
      <li className="text-sm">User John Doe signed up</li>
      <li className="text-sm">New order #1234 received</li>
      <li className="text-sm">Product X is low in stock</li>
    </ul>
  </div>
);

export default RecentActivityCard;
