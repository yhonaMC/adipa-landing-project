@extends('layouts.app')

@section('content')
    @include('sections.hero')
    @include('sections.courses', ['courses' => $courses, 'categories' => $categories])
    @include('sections.contact')
@endsection
