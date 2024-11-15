/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[spotId]` on the table `Park` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Park_spotId_key" ON "Park"("spotId");
