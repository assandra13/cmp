"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-bold mb-4">Brick Property</h3>
            <p className="text-gray-300 mb-6">Brick Property adalah perusahaan properti terkemuka yang berfokus pada kualitas, inovasi, dan kepuasan pelanggan.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#testimoni" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Kontak
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Jual Properti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Beli Properti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Sewa Properti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Konsultasi Properti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Investasi Properti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Manajemen Properti
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">Jl. Sudirman No. 123, Jakarta Pusat, 10220</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@brickproperty.id</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Brick Property. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
