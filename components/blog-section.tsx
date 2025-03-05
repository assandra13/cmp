"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Tips Membeli Rumah Pertama untuk Pasangan Muda",
      excerpt: "Panduan lengkap untuk pasangan muda yang ingin membeli rumah pertama mereka dengan budget terbatas.",
      image: "/placeholder.svg?height=400&width=600",
      date: "12 Mei 2023",
      author: "Ahmad Fauzi",
      category: "Tips & Trik",
    },
    {
      id: 2,
      title: "Investasi Properti: Strategi Jangka Panjang",
      excerpt: "Pelajari bagaimana investasi properti dapat menjadi strategi keuangan jangka panjang yang menguntungkan.",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 Juni 2023",
      author: "Siti Nurhaliza",
      category: "Investasi",
    },
    {
      id: 3,
      title: "Tren Desain Interior 2023 untuk Hunian Modern",
      excerpt: "Temukan tren desain interior terbaru yang dapat Anda terapkan untuk mempercantik hunian Anda.",
      image: "/placeholder.svg?height=400&width=600",
      date: "20 Juli 2023",
      author: "Budi Santoso",
      category: "Desain",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-muted">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Blog & Artikel</h2>
          <p className="section-subtitle">Temukan informasi dan tips terbaru seputar properti di blog kami.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">{post.category}</div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="btn-outline">
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}
