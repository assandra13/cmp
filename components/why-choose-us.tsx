"use client";

import { motion } from "framer-motion";
import { Home, Shield, Clock, Award, Users, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Properti Berkualitas",
      description: "Semua properti kami melewati proses seleksi ketat untuk memastikan kualitas terbaik.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Transaksi Aman",
      description: "Proses transaksi yang transparan dan aman dengan perlindungan hukum yang jelas.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Proses Cepat",
      description: "Kami mempercepat proses administrasi agar Anda bisa segera menempati properti impian.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Berpengalaman",
      description: "Lebih dari 10 tahun pengalaman dalam industri properti di Indonesia.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Tim Profesional",
      description: "Tim kami terdiri dari para profesional berpengalaman di bidang properti.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Layanan 24/7",
      description: "Dukungan pelanggan 24/7 untuk membantu Anda dengan segala pertanyaan.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <p className="section-subtitle">Brick Property menawarkan berbagai keunggulan yang membedakan kami dari kompetitor lain di industri properti.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {features.map((feature, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" variants={itemVariants}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
