-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "housename" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "number_of_bedrooms" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "subcounty" TEXT NOT NULL,
    "ward" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "num_of_units" INTEGER NOT NULL,
    "floors" INTEGER NOT NULL,
    "structure" TEXT NOT NULL,
    "longitude" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,
    "images" TEXT[],
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HouseUnit" (
    "id" TEXT NOT NULL,
    "house_id" TEXT,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "rent_amount" INTEGER NOT NULL,
    "occupied" BOOLEAN NOT NULL,
    "tenant_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HouseUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "roles" TEXT[],
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "House_id_key" ON "House"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HouseUnit_id_key" ON "HouseUnit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HouseUnit_tenant_id_key" ON "HouseUnit"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_id_key" ON "Tenant"("id");

-- AddForeignKey
ALTER TABLE "HouseUnit" ADD CONSTRAINT "HouseUnit_house_id_fkey" FOREIGN KEY ("house_id") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseUnit" ADD CONSTRAINT "HouseUnit_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
