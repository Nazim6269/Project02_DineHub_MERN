import { useState } from "react";

const AdminCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", slug: "electronics" },
    { id: 2, name: "Fashion", slug: "fashion" },
  ]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-text-primary">
          Categories
        </h1>
        <button className="bg-(--color-accent-cyan) hover:bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg shadow transition">
          + Add Category
        </button>
      </div>

      {/* Table */}
      <div className="bg-background-card rounded-xl shadow-lg overflow-x-auto border border-white/20">
        <table className="w-full min-w-[500px] text-left text-text-secondary">
          <thead className="bg-background-dark text-[var(--color-text-muted)] text-sm uppercase">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr
                key={cat.id}
                className="border-t border-white/20 hover:bg-background-dark transition"
              >
                <td className="p-4 font-medium text-text-primary">
                  {cat.name}
                </td>
                <td className="p-4">{cat.slug}</td>
                <td className="p-4 text-right flex flex-wrap gap-2 justify-end">
                  <button className="text-(--color-accent-cyan) hover:underline">
                    Edit
                  </button>
                  <button className="text-red-400 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategories;
