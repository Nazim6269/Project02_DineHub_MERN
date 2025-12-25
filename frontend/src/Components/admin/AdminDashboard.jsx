import AdminStatCart from "./AdminStatCart";
import AdminTable from "./AdminTable";

const AdminDashboard = () => {
  return (
    <div className="text-text-primary p-4 sm:p-6 lg:p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AdminStatCart title="Total Sales" value="$12,430" />
        <AdminStatCart title="Orders" value="320" />
        <AdminStatCart title="Products" value="85" />
        <AdminStatCart title="Users" value="1,240" />
      </div>

      {/* Recent Orders Table */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-(--color-accent-cyan)">
        Recent Orders
      </h2>
      <div className="bg-background-card rounded-xl shadow-lg overflow-auto">
        <AdminTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
