/*
  Warnings:

  - The primary key for the `Park` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `endedAt` on the `Park` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `id` on the `Park` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `startedAt` on the `Park` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to drop the column `opened` on the `Parking` table. All the data in the column will be lost.
  - You are about to alter the column `hourlyRate` on the `Parking` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - Made the column `location` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_City" ("country", "id", "location", "name", "slug") SELECT "country", "id", "location", "name", "slug" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE TABLE "new_Park" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spotId" INTEGER NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME,
    "price" REAL NOT NULL,
    "paid" BOOLEAN NOT NULL,
    CONSTRAINT "Park_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Park" ("endedAt", "id", "paid", "price", "spotId", "startedAt") SELECT "endedAt", "id", "paid", "price", "spotId", "startedAt" FROM "Park";
DROP TABLE "Park";
ALTER TABLE "new_Park" RENAME TO "Park";
CREATE TABLE "new_Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfPlaces" INTEGER NOT NULL,
    "hourlyRate" REAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces") SELECT "cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
