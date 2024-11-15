/*
  Warnings:

  - You are about to drop the column `vehicleNumberPlate` on the `Park` table. All the data in the column will be lost.
  - Added the required column `paid` to the `Park` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Park` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Park" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "spotId" INTEGER NOT NULL,
    "startedAt" TEXT NOT NULL,
    "endedAt" TEXT,
    "price" REAL NOT NULL,
    "paid" BOOLEAN NOT NULL,
    CONSTRAINT "Park_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Park" ("endedAt", "id", "spotId", "startedAt") SELECT "endedAt", "id", "spotId", "startedAt" FROM "Park";
DROP TABLE "Park";
ALTER TABLE "new_Park" RENAME TO "Park";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
