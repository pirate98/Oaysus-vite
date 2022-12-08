import { PrismaClient } from "@prisma/client";
import { SessionInterface } from "@shopify/shopify-api";
import { Session } from "@shopify/shopify-api/dist/auth/session";

const prisma = new PrismaClient();

export const storeCallback = async (session: SessionInterface) => {
  const { id, shop } = session;

  return prisma.storeSession
    .upsert({
      where: { id },
      create: { id, payload: session, shop },
      update: { payload: session },
    })
    .then((_) => true)
    .catch((error) => {
      console.log({ error });
      return false;
    });
};

export const loadCallback = async (shop: string): Promise<SessionInterface> => {
  return prisma.storeSession
    .findUnique({
      where: {
        id: shop,
      },
    })
    .then((data?: SessionInterface) => {
      if (!data) return;

      const { isActive, id, shop, state, isOnline, ...rest } = data;

      const session = new Session(id, shop, state, isOnline);

      for (const each in rest) {
        session[each] = rest[each];
      }

      console.log({ session });

      return session;
    })
    .catch((error) => {
      console.log({ error });
      return;
    });
};

export const deleteSessionsCallback = async (id: string): Promise<boolean> => {
  return prisma.storeSession
    .delete({
      where: {
        id,
      },
    })
    .then((data) => true)
    .catch((error) => false);
};
