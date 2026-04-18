-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NavItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "labelZh" TEXT NOT NULL,
    "labelEn" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "hasDropdown" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_NavItem" ("createdAt", "href", "id", "labelEn", "labelZh", "order", "updatedAt") SELECT "createdAt", "href", "id", "labelEn", "labelZh", "order", "updatedAt" FROM "NavItem";
DROP TABLE "NavItem";
ALTER TABLE "new_NavItem" RENAME TO "NavItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
