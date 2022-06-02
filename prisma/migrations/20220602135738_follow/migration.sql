-- CreateTable
CREATE TABLE "_FollowRelations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FollowRelations_AB_unique" ON "_FollowRelations"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowRelations_B_index" ON "_FollowRelations"("B");

-- AddForeignKey
ALTER TABLE "_FollowRelations" ADD CONSTRAINT "_FollowRelations_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelations" ADD CONSTRAINT "_FollowRelations_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
