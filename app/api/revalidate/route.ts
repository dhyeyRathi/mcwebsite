import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

/**
 * Sanity webhook handler for on-demand ISR revalidation.
 *
 * Configure a Sanity webhook to POST to /api/revalidate with:
 * - Header: `x-sanity-secret` = your SANITY_REVALIDATE_SECRET
 * - Body: { _type: "product" | "testimonial" | "siteSettings", slug?: { current: string } }
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-sanity-secret");

  if (process.env.SANITY_REVALIDATE_SECRET && secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const type = body?._type;
    const slug = body?.slug?.current;

    // In Next.js 16, revalidateTag takes a second argument (e.g. "max" or cacheLife profile)
    switch (type) {
      case "product":
        revalidateTag("product", "max");
        revalidatePath("/");
        revalidatePath("/products");
        if (slug) {
          revalidatePath(`/products/${slug}`);
        }
        break;
      case "testimonial":
        revalidateTag("testimonial", "max");
        revalidatePath("/");
        break;
      case "team":
        revalidateTag("team", "max");
        revalidatePath("/about");
        break;
      case "metadata":
        revalidateTag("metadata", "max");
        revalidatePath("/", "layout");
        break;
      case "siteSettings":
        revalidateTag("settings", "max");
        revalidatePath("/", "layout");
        break;
      default:
        // Revalidate all common tags & pages if type is unspecified
        revalidateTag("product", "max");
        revalidateTag("testimonial", "max");
        revalidateTag("settings", "max");
        revalidatePath("/");
        revalidatePath("/products");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type,
      slug,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
