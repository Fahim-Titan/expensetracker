using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FinanceTracker.Migrations
{
    public partial class Asset_property_added_in_transaction_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AssetId",
                table: "Transactions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_AssetId",
                table: "Transactions",
                column: "AssetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Assets_AssetId",
                table: "Transactions",
                column: "AssetId",
                principalTable: "Assets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Assets_AssetId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_AssetId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "AssetId",
                table: "Transactions");
        }
    }
}
