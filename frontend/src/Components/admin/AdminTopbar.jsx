const AdminTopbar = () => {
  return (
    <header className="flex items-center justify-between bg-background-card px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-sm">
      {/* Page Title */}
      <h1 className="text-lg sm:text-xl font-semibold text-text-primary">
        Dashboard
      </h1>

      {/* User Info */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-sm sm:text-base text-text-secondary">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20"
        />
      </div>
    </header>
  );
};

export default AdminTopbar;
