<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $courses = config('courses.courses');
        $categories = config('courses.categories');

        return view('home', compact('courses', 'categories'));
    }
}
