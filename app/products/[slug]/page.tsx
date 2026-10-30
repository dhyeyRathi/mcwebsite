import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductBySlugAction,
  getProductsAction,
  getSiteSettingsAction,
  SanityProductItem,
} from "@/app/actions/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import JsonLd, { getProductSchema, getBreadcrumbSchema } from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

// ─── Static Params ───────────────────────────────────────────
export async function generateStaticParams() {
  const products = await getProductsAction();
  return products.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlugAction(slug);

  if (!product) {
    return {
      title: "Product Not Found - Manav Canvassers",
    };
  }

  const title =
    product.seo?.metaTitle ||
    `${product.title} - Cattle Feed Ingredient | Manav Canvassers`;
  const description =
    product.seo?.metaDescription ||
    `${product.description} Source ${product.title} from Manav Canvassers, Vadodara's trusted cattle-feed brokerage partner.`;

  const ogTitle = product.seo?.ogTitle || title;
  const ogDescription = product.seo?.ogDescription || description;
  const ogImage = product.seo?.ogImageUrl || product.imageUrl;

  const twitterTitle = product.seo?.twitterTitle || ogTitle;
  const twitterDescription = product.seo?.twitterDescription || ogDescription;
  const twitterImage = product.seo?.twitterImageUrl || ogImage;
  const twitterCard = product.seo?.twitterCard || "summary_large_image";

  const canonical =
    product.seo?.canonicalUrl ||
    `https://manavcanvassers.com/products/${product.slug}`;

  const shouldIndex = !product.seo?.noIndex;
  const shouldFollow = !product.seo?.noFollow;

  return {
    title,
    description,
    keywords:
      product.seo?.keywords && product.seo.keywords.length > 0
        ? product.seo.keywords
        : product.tags,
    robots: {
      index: shouldIndex,
      follow: shouldFollow,
      googleBot: {
        index: shouldIndex,
        follow: shouldFollow,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://manavcanvassers.com/products/${product.slug}`,
      siteName: "Manav Canvassers",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: product.alt || product.title }]
        : [],
      type: "website",
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage ? [twitterImage] : [],
    },
    alternates: {
      canonical,
    },
  };
}

// ─── Page Component ──────────────────────────────────────────
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const [product, siteSettings] = await Promise.all([
    getProductBySlugAction(slug),
    getSiteSettingsAction(),
  ]);

  if (!product) {
    notFound();
  }

  const whatsappNumber = siteSettings.whatsappNumber.replace(/\D/g, "") || "919642174768";

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in sourcing ${product.title} from Manav Canvassers. Please share current rates and availability.`
  );

  const breadcrumbs = [
    { name: "Home", url: "https://manavcanvassers.com" },
    { name: "Products", url: "https://manavcanvassers.com/products" },
    { name: product.title, url: `https://manavcanvassers.com/products/${product.slug}` },
  ];

  const productSchema = getProductSchema({
    title: product.title,
    slug: product.slug,
    description: product.description,
    category: product.category,
    image: product.imageUrl,
    specifications: product.specifications,
  });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  const imageSrc =
    product.imageUrl && product.imageUrl.trim().length > 0
      ? product.imageUrl
      : "/assets/company/grains_display.jpg";

  return (
    <div className="w-full font-sans antialiased selection:bg-secondary-container selection:text-on-secondary-container bg-background min-h-screen flex flex-col">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Header siteSettings={siteSettings} />

      <main className="flex-grow pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500">
            <Link href="/" className="hover:text-[#0B251B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#0B251B] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{product.title}</span>
          </nav>
        </div>

        {/* Product Details Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Image */}
            <div className="lg:col-span-5 relative bg-stone-100 min-h-[350px] lg:min-h-[480px]">
              <Image
                src={imageSrc}
                alt={product.alt || product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#0B251B]/95 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded backdrop-blur-sm shadow-sm">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="bg-[#C8A96B] text-[#121E19] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                    Featured Commodity
                  </span>
                )}
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#735B25] text-xs font-bold uppercase tracking-[0.14em] mb-2">
                  <span className="w-5 h-[2px] bg-[#735B25]" />
                  COMMODITY SPECIFICATIONS & SOURCING
                </div>

                <h1 className="text-[#0B251B] font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  {product.title}
                </h1>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full border border-stone-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Specifications Table */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-[#0B251B] font-serif text-lg font-bold mb-3 flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-xl text-[#735B25]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        analytics
                      </span>
                      Key Parameters & Specifications
                    </h2>
                    <div className="border border-stone-200 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-stone-100">
                          {product.specifications.map((spec, i) => (
                            <tr
                              key={spec.key || i}
                              className={i % 2 === 0 ? "bg-stone-50/70" : "bg-white"}
                            >
                              <td className="px-4 py-2.5 font-semibold text-stone-700 w-1/2">
                                {spec.key}
                              </td>
                              <td className="px-4 py-2.5 text-stone-900 font-bold w-1/2">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Inquiry & CTAs */}
              <div className="pt-6 border-t border-stone-100">
                <p className="text-xs text-stone-500 mb-3 font-medium">
                  Connect with our sourcing desk for live APMC rates, bag sizes, and logistics quotes:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.574-1.463A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.25 0-4.336-.661-6.094-1.797l-.437-.262-2.715.868.869-2.715-.262-.437A9.697 9.697 0 012.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12s-4.374 9.75-9.75 9.75z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B251B] hover:bg-[#173B2C] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                  >
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      mail
                    </span>
                    Contact Sourcing Desk
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call to action - View all products */}
        <section className="py-10 text-center mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-stone-600 text-sm mb-4">
              Explore our complete range of cattle-feed ingredients and agricultural commodities.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0B251B] text-white hover:bg-[#173B2C] font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm text-sm"
            >
              View Full Product Catalog
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer siteSettings={siteSettings} />
      <WhatsAppFAB whatsappNumber={siteSettings.whatsappNumber} />
    </div>
  );
}
