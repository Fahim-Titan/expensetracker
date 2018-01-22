using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FinanceTracker.Migrations
{
    public partial class CategoryTableUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_CategoriesId",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "ParentID",
                table: "Categories");

            migrationBuilder.RenameColumn(
                name: "CategoriesId",
                table: "Categories",
                newName: "CategoryID");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_CategoriesId",
                table: "Categories",
                newName: "IX_Categories_CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Categories_CategoryID",
                table: "Categories",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_CategoryID",
                table: "Categories");

            migrationBuilder.RenameColumn(
                name: "CategoryID",
                table: "Categories",
                newName: "CategoriesId");

            migrationBuilder.RenameIndex(
                name: "IX_Categories_CategoryID",
                table: "Categories",
                newName: "IX_Categories_CategoriesId");

            migrationBuilder.AddColumn<int>(
                name: "ParentID",
                table: "Categories",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Categories_CategoriesId",
                table: "Categories",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
