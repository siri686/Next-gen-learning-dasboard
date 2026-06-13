import { ActivityTile } from "@/components/activity-tile";
import { CourseCard } from "@/components/course-card";
import { HeroTile } from "@/components/hero-tile";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import type { Course } from "@/lib/supabase/types";

interface BentoGridProps {
  courses: Course[];
}

export function BentoGrid({ courses }: BentoGridProps) {
  return (
    <section
      aria-label="Student dashboard content"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      <MotionWrapper delay={0}>
        <HeroTile />
      </MotionWrapper>

      <MotionWrapper delay={0.08}>
        <ActivityTile />
      </MotionWrapper>

      {courses.map((course, index) => (
        <MotionWrapper key={course.id} delay={0.16 + index * 0.08}>
          <CourseCard course={course} />
        </MotionWrapper>
      ))}
    </section>
  );
}
