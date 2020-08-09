<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('fee_id')->nullable();
            $table->string('type');
            $table->string('reference')->nullable();
            $table->string('transaction_no')->nullable();
            $table->string('trxref')->nullable();
            $table->string('message')->nullable();
            $table->string('amount');
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('class')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trasactions');
    }
}
