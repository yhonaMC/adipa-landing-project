<?php

namespace Tests\Unit;

use Tests\TestCase;

class CourseDataTest extends TestCase
{
    private array $courses;
    private array $categories;

    protected function setUp(): void
    {
        parent::setUp();
        $this->courses = config('courses.courses');
        $this->categories = config('courses.categories');
    }

    public function test_courses_have_required_fields(): void
    {
        $requiredFields = [
            'id', 'title', 'type', 'instructor', 'category',
            'startDate', 'originalPrice', 'discountPrice',
            'modality', 'image', 'rating', 'status',
        ];

        foreach ($this->courses as $course) {
            foreach ($requiredFields as $field) {
                $this->assertArrayHasKey($field, $course, "Course '{$course['id']}' missing field: {$field}");
            }
        }
    }

    public function test_courses_have_valid_modality(): void
    {
        $validModalities = ['En Vivo', 'Online', 'Presencial'];

        foreach ($this->courses as $course) {
            $this->assertContains(
                $course['modality'],
                $validModalities,
                "Course '{$course['id']}' has invalid modality: {$course['modality']}"
            );
        }
    }

    public function test_courses_have_valid_prices(): void
    {
        foreach ($this->courses as $course) {
            $this->assertGreaterThan(0, $course['originalPrice'], "Course '{$course['id']}' has invalid original price");
            $this->assertGreaterThan(0, $course['discountPrice'], "Course '{$course['id']}' has invalid discount price");
            $this->assertLessThanOrEqual($course['originalPrice'], $course['discountPrice'], "Course '{$course['id']}' discount price exceeds original");
        }
    }

    public function test_courses_have_valid_rating(): void
    {
        foreach ($this->courses as $course) {
            $this->assertGreaterThanOrEqual(0, $course['rating']);
            $this->assertLessThanOrEqual(5.0, $course['rating']);
        }
    }

    public function test_courses_belong_to_valid_categories(): void
    {
        $categoryIds = array_column($this->categories, 'id');

        foreach ($this->courses as $course) {
            $this->assertContains(
                $course['category'],
                $categoryIds,
                "Course '{$course['id']}' has unknown category: {$course['category']}"
            );
        }
    }

    public function test_courses_have_valid_date_format(): void
    {
        foreach ($this->courses as $course) {
            $this->assertMatchesRegularExpression(
                '/^\d{2}\/\d{2}\/\d{4}$/',
                $course['startDate'],
                "Course '{$course['id']}' has invalid date format: {$course['startDate']}"
            );
        }
    }

    public function test_each_category_has_at_least_one_course(): void
    {
        foreach ($this->categories as $category) {
            $coursesInCategory = array_filter($this->courses, fn($c) => $c['category'] === $category['id']);
            $this->assertNotEmpty($coursesInCategory, "Category '{$category['name']}' has no courses");
        }
    }

    public function test_courses_have_valid_type(): void
    {
        $validTypes = ['Curso', 'Diplomado', 'Acreditacion'];

        foreach ($this->courses as $course) {
            $this->assertContains(
                $course['type'],
                $validTypes,
                "Course '{$course['id']}' has invalid type: {$course['type']}"
            );
        }
    }
}
