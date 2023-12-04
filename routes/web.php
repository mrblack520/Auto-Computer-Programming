<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\LoginController;
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

 Route::get('/test', function () {
    // return view('welcome');
    return "test";
}); 

Route::get('/', [AppController::class, 'index'])->name('index');
// Route::get('/home', [AppController::class, 'home'])->name('home');

Route::post('login', [LoginController::class, 'authenticate'])->name('PostLogin');

Route::post('logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');

Route::get('/dashboard', [AppController::class, 'dashboard'])->name('dashboard')->middleware('auth');

Route::get('/profile/show', [AppController::class, 'dashboard'])->name('profile.show');

Route::get('/register', [AppController::class, 'index'])->name('register');

Route::get('/terms/show', [AppController::class, 'show'])->name('terms.show]');

Route::post('/register', [AppController::class, 'index'])->name('register');
// laravel to api
Route::post('/chat', [AppController::class, 'PostToApi'])->name('chat.post')->middleware('auth');