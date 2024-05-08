'use client'
import React, { useState, FormEvent } from 'react';

interface ContactFormProps {
  onFormSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact({ onFormSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen " id="contact">
      <h1 className="mb-5 text-3xl font-bold">Contacto</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
      </form>
    </div>
  );
}