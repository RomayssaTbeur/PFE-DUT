<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFinalTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('final_tables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('equipe_locale');
            $table->unsignedBigInteger('equipe_visiteur');
            $table->string('step');
            $table->timestamps();
            $table->foreign('equipe_locale')->references('id')->on('equipes')->onDelete('cascade');
            $table->foreign('equipe_visiteur')->references('id')->on('equipes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('final_tables');
    }
}
