<?php
require_once "db_connect.php";

// Son JSON dizisini hazırlıyoruz
$response = [];

/* --- personal_info bölümü --- */

$personalInfo = null;
$personalInfoSql = "SELECT header, name, description, img_path FROM personal_info LIMIT 1";
$personalInfoResult = $conn->query($personalInfoSql);

if ($personalInfoResult->num_rows > 0) {
    $personalInfo = $personalInfoResult->fetch_assoc();
}


/* --- tech bölümü --- */

// Tüm teknoloji başlıklarını çek
$techHeadersSql = "SELECT * FROM tech_headers";
$techHeadersResult = $conn->query($techHeadersSql);

$tech = [];

if ($techHeadersResult->num_rows > 0) {
    while ($header = $techHeadersResult->fetch_assoc()) {
        $headerId = $header['id'];

        // Her header'a bağlı contentleri çek
        $techContentsSql = "SELECT id ,icon, text FROM tech_contents WHERE header_id = $headerId";
        $techContentsResult = $conn->query($techContentsSql);

        $contents = [];
        if ($techContentsResult->num_rows > 0) {
            while ($content = $techContentsResult->fetch_assoc()) {
                $contents[] = [
                    "id" => $content['id'],
                    "icon" => $content['icon'],
                    "text" => $content['text']
                ];
            }
        }

        $tech[] = [
            "id" => $headerId,
            "header" => $header['header'],
            "content" => $contents
        ];
    }
}

/* --- experience bölümü --- */

$experience = [];

/* 1. İş Deneyimi Bölümü */

// İş deneyimi başlığı çek
$jobExperienceHeaderSql = "SELECT * FROM job_experience_headers";
$jobExperienceHeaderResult = $conn->query($jobExperienceHeaderSql);

if ($jobExperienceHeaderResult->num_rows > 0) {
    while ($jobHeader = $jobExperienceHeaderResult->fetch_assoc()) {
        $headerId = $jobHeader['id'];

        $jobExperiencesSql = "SELECT * FROM job_experiences WHERE header_id = $headerId ORDER BY id DESC";
        $jobExperiencesResult = $conn->query($jobExperiencesSql);

        $contents = [];
        if ($jobExperiencesResult->num_rows > 0) {
            while ($job = $jobExperiencesResult->fetch_assoc()) {
                $contents[] = [
                    "id" => $job['id'],
                    "date" => $job['date'],
                    "company" => $job['company'],
                    "mission" => $job['mission'],
                    "explanation" => $job['explanation']
                ];
            }
        }

        $experience[] = [
            "type" => 0, // İş deneyimi için 0
            "header" => $jobHeader['header'],
            "icon" => $jobHeader['icon'],
            "contents" => $contents
        ];
    }
}

/* 2. Eğitim Bölümü */

// Eğitim başlığı çek
$educationHeaderSql = "SELECT * FROM education_headers";
$educationHeaderResult = $conn->query($educationHeaderSql);

if ($educationHeaderResult->num_rows > 0) {
    while ($eduHeader = $educationHeaderResult->fetch_assoc()) {
        $headerId = $eduHeader['id'];

        $educationsSql = "SELECT * FROM educations WHERE header_id = $headerId ORDER BY id DESC";
        $educationsResult = $conn->query($educationsSql);

        $contents = [];
        if ($educationsResult->num_rows > 0) {
            while ($edu = $educationsResult->fetch_assoc()) {
                $contents[] = [
                    "id" => $edu['id'],
                    "date" => $edu['date'],
                    "university" => $edu['university'],
                    "department" => $edu['department'],
                    "class" => (int) $edu['class'],
                    "note" => (float) $edu['note']
                ];
            }
        }

        $experience[] = [
            "type" => 1, // Eğitim için 1
            "header" => $eduHeader['header'],
            "icon" => $eduHeader['icon'],
            "contents" => $contents
        ];
    }
}

/* --- projects bölümü --- */

$projects = [];
$projectsSql = "SELECT id, img, header, date, explanation, link FROM projects ORDER BY date DESC";
$projectsResult = $conn->query($projectsSql);

if ($projectsResult->num_rows > 0) {
    while ($project = $projectsResult->fetch_assoc()) {
        $projects[] = [
            "id" => $project['id'],
            "img" => $project['img'],
            "header" => $project['header'],
            "date" => $project['date'],
            "explanation" => $project['explanation'],
            "link" => $project['link']
        ];
    }
}

/* --- blogs bölümü --- */

$blogs = [];
$blogsSql = "SELECT id, img, header, date, explanation, link FROM blogs";
$blogsResult = $conn->query($blogsSql);

if ($blogsResult->num_rows > 0) {
    while ($blog = $blogsResult->fetch_assoc()) {
        $blogs[] = [
            "id" => $blog['id'],
            "img" => $blog['img'],
            "header" => $blog['header'],
            "date" => $blog['date'],
            "explanation" => $blog['explanation'],
            "link" => $blog['link']
        ];
    }
}

/* --- JSON Cevabı --- */

$response = [
    "personal_info" => $personalInfo,
    "tech" => $tech,
    "experience" => $experience,
    "projects" => $projects,
    "blogs" => $blogs
];


// JSON çıktısı
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

$conn->close();
?>
