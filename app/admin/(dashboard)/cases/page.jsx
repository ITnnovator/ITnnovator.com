'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/admin-core/components/DataTable';

export default function CasesPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await fetch('/api/admin/cases');
      const data = await res.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const res = await fetch(`/api/admin/cases/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setCases(cases.filter((c) => c._id !== id));
      } else {
        alert('Failed to delete case');
      }
    } catch (error) {
      console.error('Error deleting case:', error);
    }
  };

  const columns = [
    { header: 'Image', accessor: 'topImg', render: (row) => <img src={row.topImg} alt="" className="w-16 h-12 object-cover rounded" /> },
    { header: 'Title', accessor: 'title' },
    { header: 'Slug', accessor: 'slug' },
    { header: 'Categories', accessor: 'categories', render: (row) => row.categories?.join(', ') || '-' },
  ];

  if (loading) {
    return <div className="p-8 text-center">Loading case studies...</div>;
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Case Studies</h1>
          <p className="text-gray-500">Manage your portfolio projects</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={cases}
        onDelete={handleDelete}
        editUrl="/admin/cases"
        createUrl="/admin/cases/new"
        title="All Case Studies"
      />
    </div>
  );
}
