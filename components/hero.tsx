"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Data untuk slideshow (gambar dan teks)
const slides = [
  {
    image: "/background1.webp?height=1080&width=1920",
    title: "Temukan Properti Impian Anda",
    description: "Brick Property menyediakan layanan properti terbaik dengan harga terjangkau dan kualitas terpercaya di seluruh Indonesia.",
  },
  {
    image: "/background2.webp?height=1080&width=1920",
    title: "Properti Modern dan Nyaman",
    description: "Dapatkan properti dengan desain modern dan fasilitas lengkap untuk kenyamanan hidup Anda.",
  },
  {
    image: "/background3.webp?height=1080&width=1920",
    title: "Investasi Properti Menguntungkan",
    description: "Mulai investasi properti Anda sekarang dan raih keuntungan maksimal di masa depan.",
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideIndex}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${currentSlide.image}')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 hero-gradient" />

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentSlideIndex}`}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {currentSlide.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`description-${currentSlideIndex}`}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {currentSlide.description}
          </motion.p>
        </AnimatePresence>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          <Link href="#kontak" className="btn-primary">
            Hubungi Kami
          </Link>
          <Link href="#tentang" className="btn-secondary">
            Pelajari Lebih Lanjut
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll ke bawah</span>
          <motion.div className="w-6 h-10 border-2 border-white rounded-full flex justify-center" animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <motion.div className="w-1 h-2 bg-white rounded-full mt-2" animate={{ y: [0, 4, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
