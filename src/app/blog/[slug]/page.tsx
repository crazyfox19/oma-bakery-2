"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import PageTransition from "@/components/PageTransition";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { articles } from "@/components/CakeJournal";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <CartDrawer />
        <ProductModal />
        <PageTransition>
          <main className="pt-20 min-h-screen bg-bakery-cream">
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
              <h1 className="font-heading text-4xl text-bakery-teal mb-4">
                Article Not Found
              </h1>
              <p className="text-bakery-dark/50 mb-8">
                The article you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link href="/blog" className="text-bakery-teal font-semibold hover:underline">
                Back to Blog
              </Link>
            </div>
          </main>
          <Footer />
        </PageTransition>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CartDrawer />
      <ProductModal />

      <PageTransition>
        <main className="pt-20">
          <section className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="max-w-3xl mx-auto">
                <span className="bg-bakery-coral text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
          </section>

          <section className="bg-bakery-cream py-12 sm:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <ScrollReveal>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-bakery-teal text-sm font-semibold mb-8 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bakery-teal leading-tight mb-4">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 text-bakery-dark/40 text-sm mb-8 pb-8 border-b border-bakery-peach">
                  <span>{article.date}</span>
                  <span>&middot;</span>
                  <span>By {article.author}</span>
                </div>

                <div className="prose prose-lg max-w-none">
                  {article.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-bakery-dark/70 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          <WaveDivider fillColor="#2D6A4F" bgColor="#FFF8F0" />
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}
