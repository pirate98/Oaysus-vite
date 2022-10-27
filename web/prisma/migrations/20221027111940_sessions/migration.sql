-- CreateTable
CREATE TABLE "store_session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "payload" JSONB NOT NULL,

    CONSTRAINT "store_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upsell" (
    "id" SERIAL NOT NULL,
    "storeId" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "views" INTEGER NOT NULL,
    "conversion" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    "triggers" JSONB NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "Upsell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Upsell" ADD CONSTRAINT "Upsell_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
