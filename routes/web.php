<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;
use Illuminate\Auth\Events\Login;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'index']);
Route::get('/hello', [IndexController::class, 'show']);

Route::resource('listing', ListingController::class);


Route::get('login', [AuthController::class, 'create'])->name('Login');
Route::post('login', [AuthController::class, 'store'])->name('login.store');
Route::delete('logout', [AuthController::class, 'destroy'])->name('logout');
