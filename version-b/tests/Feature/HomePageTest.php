<?php

namespace Tests\Feature;

use Tests\TestCase;

class HomePageTest extends TestCase
{
    public function test_home_page_returns_200(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_home_page_contains_header(): void
    {
        $response = $this->get('/');
        $response->assertSee('ADIPA');
        $response->assertSee('Iniciar Sesion');
    }

    public function test_home_page_contains_hero_section(): void
    {
        $response = $this->get('/');
        $response->assertSee('Cursos de Psicologia con hasta 35% OFF');
        $response->assertSee('Accede a descuentos especiales de Black Sale');
    }

    public function test_home_page_displays_courses(): void
    {
        $response = $this->get('/');
        $courses = config('courses.courses');

        foreach ($courses as $course) {
            $response->assertSee($course['title']);
        }
    }

    public function test_home_page_displays_course_prices(): void
    {
        $response = $this->get('/');
        $courses = config('courses.courses');

        foreach ($courses as $course) {
            $response->assertSee(number_format($course['discountPrice'], 0, ',', '.'));
        }
    }

    public function test_home_page_displays_course_modalities(): void
    {
        $response = $this->get('/');
        $response->assertSee('En Vivo');
        $response->assertSee('Online');
        $response->assertSee('Presencial');
    }

    public function test_home_page_displays_category_filters(): void
    {
        $response = $this->get('/');
        $response->assertSee('Psicologia Clinica y Salud Mental');
        $response->assertSee('Neurociencias');
        $response->assertSee('Psicologia Infantil');
        $response->assertSee('Terapia de Pareja');
    }

    public function test_home_page_contains_contact_form(): void
    {
        $response = $this->get('/');
        $response->assertSee('Nombre');
        $response->assertSee('Email');
        $response->assertSee('Mensaje');
    }

    public function test_home_page_contains_footer(): void
    {
        $response = $this->get('/');
        $response->assertSee('Todos los derechos reservados');
    }

    public function test_home_page_has_minimum_8_courses(): void
    {
        $courses = config('courses.courses');
        $this->assertGreaterThanOrEqual(8, count($courses));
    }

    public function test_home_page_has_minimum_3_categories(): void
    {
        $categories = config('courses.categories');
        $this->assertGreaterThanOrEqual(3, count($categories));
    }
}
