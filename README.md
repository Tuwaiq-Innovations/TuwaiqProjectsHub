# TuwaiqProjectsHub
 هو مستودع مخصص لجمع وعرض المشاريع المميزة التي تم تطويرها ضمن برامج ومبادرات طويق. يهدف هذا المستودع إلى توثيق المشاريع، دعم التعاون بين المطورين، وتعزيز بيئة الابتكار التقني في المملكة
<!-- # توثيق هيكل البيانات

هذا الملف يشرح هيكل ملف JSON المستخدم لتخزين تفاصيل المشاريع الفردية والجماعية.

## الحقول

| الحقل                 | النوع          | الوصف                                         |
|-----------------------|---------------|---------------------------------------------|
| `individualProjects`  | List                    | تحتوي على المشاريع الفردية التي يتم تنفيذها بواسطة مطور واحد. |
| `groupProjects`       | List                    | تحتوي على المشاريع الجماعية التي يتم تنفيذها بواسطة فريق عمل. |
| `id`                  | Integer                   | معرف فريد للمشروع.                          |
| `name`                | String                     | اسم المشروع.                                |
| `description`         | String                     | وصف مختصر للمشروع.                          |
| `detailedDescription` | String                     | وصف تفصيلي للمشروع.                         |
| `category`            | String                     | فئة المشروع (مثل: React، Flutter).          |
| `primaryTechnology`   | String                     | التكنولوجيا الأساسية المستخدمة في المشروع.  |
| `technologies`        |  List of Strings     | قائمة بالتقنيات المستخدمة في المشروع.        |
| `githubTeam`          | قائمة نصوص     | قائمة بأسماء مستخدمي GitHub لأعضاء الفريق.  |
| `githubRepo`          | نص             | رابط مستودع المشروع على GitHub.             |
| `demoLink`            | String                     | رابط العرض التوضيحي للمشروع (اختياري).      |
| `status`              | String                     | حالة المشروع (مثل: مكتمل، قيد العمل).        |
| `createdAt`           | تاريخ (نص)     | تاريخ إنشاء المشروع (بتنسيق: YYYY-MM-DD).   |
| `tags`                | قائمة نصوص     | وسوم أو تصنيفات لوصف المشروع.               |
| `screenshots`         | قائمة نصوص     | روابط الصور أو لقطات الشاشة المتعلقة بالمشروع. |

## مثال
فيما يلي مثال على كيفية تنظيم ملف JSON:

```json
{
  "individualProjects": [
    {
      "id": 1,
      "name": "تطبيق إدارة المهام",
      "description": "تطبيق بسيط لإدارة المهام اليومية.",
      "detailedDescription": "هذا التطبيق يتيح للمستخدمين إضافة المهام اليومية وتعديلها وحذفها من خلال واجهة سهلة الاستخدام.",
      "category": "Flutter",
      "primaryTechnology": "Flutter",
      "technologies": ["Flutter", "Dart"],
      "githubUser": "exampleUser",
      "githubRepo": "https://github.com/exampleUser/task-manager",
      "demoLink": "https://example-demo.com",
      "status": "مكتمل",
      "createdAt": "2024-11-29",
      "tags": ["إنتاجية", "تطبيق جوال"],
      "screenshots": [
        "https://example-demo.com/screenshot1.png",
        "https://example-demo.com/screenshot2.png"
      ]
    }
  ],
  "groupProjects": [
    {
      "id": 1,
      "name": "تطبيق تعاون الفرق",
      "description": "تطبيق ويب لإدارة المشاريع الجماعية.",
      "detailedDescription": "هذا التطبيق يساعد الفرق على التعاون من خلال توفير أدوات لتتبع المشاريع ومشاركة الملفات والتواصل.",
      "category": "React",
      "primaryTechnology": "React",
      "technologies": ["React", "Node.js", "MongoDB"],
      "githubTeam": ["exampleUser1", "exampleUser2", "exampleUser3"],
      "githubRepo": "https://github.com/exampleTeam/collaboration-app",
      "demoLink": "https://example-demo.com",
      "status": "قيد العمل",
      "createdAt": "2024-11-29",
      "tags": ["تعاون", "تطبيق ويب"],
      "screenshots": [
        "https://example-demo.com/screenshot1.png",
        "https://example-demo.com/screenshot2.png"
      ]
    }
  ]
} -->

