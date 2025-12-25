const AdminTable = () => {
  const orders = [
    { id: "#101", customer: "John Doe", status: "Pending", total: "$120" },
    { id: "#102", customer: "Jane Smith", status: "Shipped", total: "$220" },
    { id: "#103", customer: "Bob Johnson", status: "Delivered", total: "$340" },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-400";
      case "Shipped":
        return "bg-blue-500/10 text-blue-400";
      case "Delivered":
        return "bg-green-500/10 text-green-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  return (
    <div className="bg-background-card rounded-xl shadow-lg overflow-x-auto border border-white/20">
      <table className="w-full text-left text-text-secondary min-w-[600px]">
        {/* Table Head */}
        <thead className="bg-background-dark text-[var(--color-text-muted)] text-sm uppercase">
          <tr>
            <th className="p-4">Order ID</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Status</th>
            <th className="p-4">Total</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {orders.map((order, i) => (
            <tr
              key={i}
              className="border-t border-white/20 hover:bg-background-dark transition"
            >
              <td className="p-4 font-medium text-text-primary">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusClasses(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4 font-semibold text-text-primary">
                {order.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
