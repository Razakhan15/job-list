<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cmp_id');
            $table->foreign('cmp_id')->references('id')->on('company_details')->onDelete('cascade')->onUpdate('cascade');
            $table->string("profile");
            $table->string("skills");
            $table->string("type");
            $table->string("period");
            $table->string("city")->nullable();
            $table->integer("no_openings");
            $table->text("description");
            $table->text("preference")->nullable();
            $table->integer("salary");
            $table->string("perks")->nullable();
            $table->string("assessment1")->nullable();
            $table->string("assessment2")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
