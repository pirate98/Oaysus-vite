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

      return getSessionFromPayload(data.payload);
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

  const sessions = await prisma.storeSession.findMany({
    where: {
      shop,
    },
  });

  return sessions.map((data) => getSessionFromPayload(data.payload));
};

function getSessionFromPayload(payload) {
  const { isActive, id, shop, state, isOnline, ...rest } = payload;

  const session = new Session(id, shop, state, isOnline);

  for (const each in rest) {
    session[each] = payload[each];
  }

  console.log({ session });

  return session;
}
