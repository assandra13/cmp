"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Tentang Kami</h2>
          <p className="section-subtitle">Brick Property adalah perusahaan properti terkemuka yang berfokus pada kualitas, inovasi, dan kepuasan pelanggan.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Image src="/placeholder.svg?height=600&width=800" alt="Tentang Brick Property" width={800} height={600} className="rounded-lg shadow-lg" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold mb-4">Sejarah Kami</h3>
            <p className="text-gray-700 mb-6">
              Didirikan pada tahun 2010, Brick Property telah berkembang menjadi salah satu perusahaan properti terpercaya di Indonesia. Dengan pengalaman lebih dari satu dekade, kami telah membantu ribuan keluarga menemukan rumah impian
              mereka.
            </p>

            <h3 className="text-2xl font-bold mb-4">Visi & Misi</h3>
            <p className="text-gray-700 mb-6">
              Visi kami adalah menjadi perusahaan properti terdepan yang memberikan solusi hunian berkualitas dan terjangkau bagi masyarakat Indonesia. Misi kami adalah memberikan layanan terbaik dengan integritas tinggi dan inovasi
              berkelanjutan.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">500+</h4>
                <p className="text-sm text-gray-600">Properti Terjual</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">1000+</h4>
                <p className="text-sm text-gray-600">Klien Puas</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">20+</h4>
                <p className="text-sm text-gray-600">Kota di Indonesia</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">50+</h4>
                <p className="text-sm text-gray-600">Tim Profesional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
