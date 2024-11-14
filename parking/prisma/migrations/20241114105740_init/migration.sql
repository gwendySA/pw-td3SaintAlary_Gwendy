/*
  Warnings:

  - Made the column `location` on table `Parking` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened") SELECT "cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
CREATE UNIQUE INDEX "Parking_name_key" ON "Parking"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
