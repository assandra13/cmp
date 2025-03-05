"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filters = [
    { id: "semua", label: "Semua" },
    { id: "rumah", label: "Rumah" },
    { id: "apartemen", label: "Apartemen" },
    { id: "tanah", label: "Tanah" },
    { id: "komersial", label: "Komersial" },
  ];

  const galleryItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=800",
      title: "Rumah Modern Minimalis",
      category: "rumah",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=800",
      title: "Apartemen Mewah",
      category: "apartemen",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=800",
      title: "Tanah Strategis",
      category: "tanah",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=800",
      title: "Ruko 3 Lantai",
      category: "komersial",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=800",
      title: "Rumah Klasik",
      category: "rumah",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=800",
      title: "Apartemen Studio",
      category: "apartemen",
    },
  ];

  const filteredItems = activeFilter === "semua" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="section-padding bg-white">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Galeri Properti</h2>
          <p className="section-subtitle">Jelajahi koleksi properti unggulan kami yang tersebar di berbagai lokasi strategis.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.id ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <p className="text-white/80 capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
