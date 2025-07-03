import prisma from "$lib/server/db/prisma";
import { fail, type Actions } from "@sveltejs/kit";
import { z } from "zod/v4";

const schema = z.object({
  shortUrl: z.string().trim().min(1, "Please fill in this field"),
  longUrl: z.string().trim().min(1, "Please fill in this field"),
});

const normalizeUrl = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `http://${url}`;
};

export const actions: Actions = {
  default: async (event) => {
    try {
      const formData = await event.request.formData();

      const data = Object.fromEntries(formData);

      const validation = schema.safeParse(data);

      if (!validation.success) {
        const errors = z.flattenError(validation.error);
        return fail(400, { success: false, errors });
      }

      const existingUrl = await prisma.url.findUnique({
        where: { shortUrl: validation.data.shortUrl },
      });

      if (existingUrl) {
        return fail(400, {
          success: false,
          errors: {
            fieldErrors: {
              shortUrl: ["URL is not available"],
              longUrl: undefined,
            },
          },
        });
      }

      const shortenedUrl = await prisma.url.create({
        data: {
          shortUrl: validation.data.shortUrl,
          longUrl: normalizeUrl(validation.data.longUrl),
        },
      });

      return { success: true, message: "URL shortened successfully" };
    } catch (error) {
      return fail(500, { success: false, message: "Internal server error" });
    }
  },
};
