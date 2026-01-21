'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/admin-core/components/DataTable';
import Link from 'next/link';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setServices(services.filter((s) => s._id !== id));
      } else {
        alert('Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const columns = [
    { header: 'Icon', accessor: 'icon', render: (row) => <img src={row.icon} alt="" className="w-8 h-8 object-contain" /> },
    { header: 'Title', accessor: 'title' },
    { header: 'Slug', accessor: 'slug' },
    { header: 'Description', accessor: 'description', render: (row) => <div className="truncate max-w-xs">{row.description}</div> },
  ];

  if (loading) {
    return <div className="p-8 text-center">Loading services...</div>;
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500">Manage your service offerings</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={services}
        onDelete={handleDelete}
        editUrl="/admin/services"
        createUrl="/admin/services/new"
        title="All Services"
      />
    </div>
  );
}
