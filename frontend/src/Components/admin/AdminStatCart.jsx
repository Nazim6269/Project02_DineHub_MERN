const AdminStatCart = ({ title, value }) => {
  return (
    <div className="bg-background-card rounded-xl shadow-lg p-4 sm:p-6 flex flex-col">
      <p className="text-text-secondary text-sm sm:text-base">{title}</p>
      <h2 className="text-xl sm:text-2xl font-bold mt-2 text-text-primary">
        {value}
      </h2>
    </div>
  );
};

export default AdminStatCart;
