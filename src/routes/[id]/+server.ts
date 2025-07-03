import prisma from "$lib/server/db/prisma";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
  const url = await prisma.url.findUnique({ where: { shortUrl: params.id } });

  if (!url) {
    throw error(404, "URL not found");
  }

  throw redirect(302, url.longUrl);
};
