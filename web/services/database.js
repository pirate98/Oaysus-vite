import { PrismaClient } from "@prisma/client";
import { Session } from "@shopify/shopify-api/dist/auth/session/index.js";

const prisma = new PrismaClient();

export const storeCallback = async (session) => {
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

export const loadCallback = async (shop) => {
  console.log({ shop });
  return prisma.storeSession
    .findUnique({
      where: {
        id: shop,
      },
    })
    .then((data) => {
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

export const deleteCallback = async (id) => {
  return prisma.storeSession
    .delete({
      where: {
        id,
      },
    })
    .then((data) => true)
    .catch((error) => false);
};

export const deleteSessionsCallback = async (arr) => {
  Promise.all(arr.map((id) => deleteCallback(id)))
    .then((_) => true)
    .catch((error) => false);
};

export const findSessionsByShopCallback = async (shop) => {
  console.log("findSessionsByShop", shop);

  return prisma.storeSession.findMany({
    where: {
      shop,
    },
  });
};
