import { CardShell } from "@/components/ui/card-shell";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getCourseIcon } from "@/lib/course-icons";
import type { Course } from "@/lib/supabase/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = getCourseIcon(course.icon_name);

  return (
    <CardShell className="min-h-[180px]">
      <section className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
            Active
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-base font-medium leading-6 text-white">
              {course.title}
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-white/65">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <ProgressBar value={course.progress} />
          </div>
        </div>
      </section>
    </CardShell>
  );
}
