"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import PageTransition from "@/components/PageTransition";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkle } from "@/components/SparkleDecoration";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Quality First",
    description:
      "We source only the finest ingredients — from premium Belgian chocolate to organic flour and free-range eggs.",
  },
  {
    title: "Made with Love",
    description:
      "Every item is handcrafted by our passionate bakers who pour their hearts into every creation.",
  },
  {
    title: "Fresh Daily",
    description:
      "We bake everything fresh each morning. No preservatives, no shortcuts — just pure, honest baking.",
  },
  {
    title: "Community",
    description:
      "We're more than a bakery — we're a gathering place for neighbors, families, and friends.",
  },
];

const team = [
  { name: "Chef Maria", role: "Head Baker", image: "/images/chiffon-cake.jpg" },
  { name: "Chef David", role: "Pastry Artist", image: "/images/macarons.jpg" },
  { name: "Chef Sarah", role: "Bread Specialist", image: "/images/bread.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <ProductModal />

      <PageTransition>
        <main className="pt-20">
          <section className="relative bg-bakery-peach py-16 sm:py-24 overflow-hidden">
            <Sparkle className="absolute top-10 right-[15%]" size={24} color="#2D6A4F" />
            <Sparkle className="absolute bottom-10 left-[10%]" size={18} color="#C1553B" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-4">
                  About Oma Bakery
                </h1>
                <p className="text-bakery-dark/50 text-lg max-w-2xl mx-auto">
                  A family bakery where tradition meets creativity, bringing joy
                  one slice at a time since 2020.
                </p>
              </ScrollReveal>
            </div>
          </section>

          <WaveDivider fillColor="#FFF8F0" bgColor="#FDDCC8" />

          <section className="py-16 sm:py-24 bg-bakery-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <ScrollReveal direction="left">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/bakery-display.jpg"
                      alt="Oma Bakery story"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bakery-teal/20 to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right">
                  <h2 className="font-heading text-3xl sm:text-4xl text-bakery-teal mb-6">Our Story</h2>
                  <div className="space-y-4 text-bakery-dark/60 leading-relaxed">
                    <p>
                      Oma Bakery was born from a simple idea: that the best baked
                      goods come from recipes passed down through generations,
                      made with the finest ingredients and an abundance of love.
                    </p>
                    <p>
                      Founded in 2020 by a family of passionate bakers, we
                      started as a small kitchen operation, delivering cakes and
                      bread to our neighbors. Word spread quickly about our
                      incredible flavors and attention to detail.
                    </p>
                    <p>
                      Today, Oma Bakery has grown into a beloved local
                      institution, but our values remain the same. Every cake is
                      still hand-decorated, every loaf is still kneaded by hand,
                      and every customer is still treated like family.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-bakery-peach">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl text-bakery-teal mb-4">Our Values</h2>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, i) => (
                  <ScrollReveal key={value.title} delay={i * 0.1}>
                    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-6 shadow-md h-full">
                      <div className="w-12 h-12 rounded-2xl bg-bakery-teal/10 flex items-center justify-center mb-4">
                        <Sparkle size={24} color="#2D6A4F" />
                      </div>
                      <h3 className="font-heading text-xl text-bakery-teal mb-2">{value.title}</h3>
                      <p className="text-bakery-dark/50 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-bakery-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl text-bakery-teal mb-4">Meet Our Bakers</h2>
                <p className="text-bakery-dark/50 text-lg">The talented people behind your favorite treats</p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {team.map((member, i) => (
                  <ScrollReveal key={member.name} delay={i * 0.15}>
                    <motion.div whileHover={{ y: -5 }} className="text-center group">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="128px"
                        />
                      </div>
                      <h3 className="font-heading text-lg text-bakery-teal">{member.name}</h3>
                      <p className="text-bakery-dark/50 text-sm">{member.role}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <WaveDivider fillColor="#2D6A4F" bgColor="#FFF8F0" />
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}
