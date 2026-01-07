import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="container py-5 text-center">
      <h1 className="mb-5">Admin Control Panel</h1>
      <div className="row justify-content-center gap-4">
        <Link href="/admin/manage" className="col-md-4 card p-5 shadow-sm text-decoration-none">
          <h3>📦 Manage Inventory</h3>
          <p>View, edit, and delete current products.</p>
        </Link>
        
        <Link href="/admin/add-product" className="col-md-4 card p-5 shadow-sm text-decoration-none">
          <h3>➕ Add Product</h3>
          <p>Upload new items to the database.</p>
        </Link>
      </div>
    </div>
  );
}