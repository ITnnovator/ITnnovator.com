'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/admin-core/components/DataTable';

export default function TestimonialsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/testimonials');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setData(data.filter((i) => i._id !== id));
      } else {
        alert('Failed delete');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Quote', accessor: 'quote', render: (row) => <div className="truncate max-w-xs">{row.quote}</div> },
    { header: 'Rating', accessor: 'rating', render: (row) => '★'.repeat(row.rating) },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Testimonials</h1>
      </div>
      <DataTable
        columns={columns}
        data={data}
        onDelete={handleDelete}
        editUrl="/admin/testimonials"
        createUrl="/admin/testimonials/new"
        title="All Testimonials"
      />
    </div>
  );
}
