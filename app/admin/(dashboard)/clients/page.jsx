'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/admin-core/components/DataTable';

export default function ClientsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/clients');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    try {
      const res = await fetch(`/api/admin/clients/${id}`, { method: 'DELETE' });
      if (res.ok) setData(data.filter((i) => i._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { header: 'Logo', accessor: 'logo', render: (row) => <img src={row.logo} className="h-10 object-contain" /> },
    { header: 'Name', accessor: 'name' },
    { header: 'Order', accessor: 'order' },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Client Logos</h1>
      <DataTable
        columns={columns}
        data={data}
        onDelete={handleDelete}
        editUrl="/admin/clients"
        createUrl="/admin/clients/new"
        title="All Clients"
      />
    </div>
  );
}
