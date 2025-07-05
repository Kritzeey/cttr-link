import prisma from "$lib/server/db/prisma.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const url = await prisma.url.findUnique({ where: { shortUrl: params.slug } });

  if (!url) {
    return {
      message: "URL is not available",
      shortUrl: params.slug,
    };
  }

  return redirect(302, url.longUrl);
};
