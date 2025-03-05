"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "/placeholder.svg?height=200&width=200",
      content: "Saya sangat puas dengan layanan Brick Property. Tim mereka sangat profesional dan membantu saya menemukan properti yang sesuai dengan kebutuhan bisnis saya.",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      image: "/placeholder.svg?height=200&width=200",
      content: "Proses pembelian rumah pertama kami sangat mudah berkat bantuan dari tim Brick Property. Mereka menjelaskan setiap tahap dengan detail dan sabar.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      role: "Dosen",
      image: "/placeholder.svg?height=200&width=200",
      content: "Brick Property membantu saya menemukan apartemen yang strategis dekat dengan kampus. Harga yang ditawarkan juga sangat kompetitif.",
      rating: 4,
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Dokter",
      image: "/placeholder.svg?height=200&width=200",
      content: "Sebagai dokter dengan jadwal padat, saya sangat menghargai efisiensi dan profesionalisme tim Brick Property dalam membantu saya menemukan rumah impian.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimoni" className="section-padding bg-white">
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Testimoni Klien</h2>
          <p className="section-subtitle">Apa kata klien kami tentang layanan Brick Property.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="bg-muted p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0">
                <Image src={testimonials[currentIndex].image || "/placeholder.svg"} alt={testimonials[currentIndex].name} fill className="object-cover" />
              </div>

              <div className="flex-1">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].content}"</p>

                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300" aria-label="Previous testimonial">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300" aria-label="Next testimonial">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
