// Heroicons
import { ClockIcon } from "@heroicons/react/24/outline";
import { GraduationCap, Tag, MousePointerClick } from "lucide-react";

const features = [
  {
    name: "Expert Instructors",
    description: "Learn from professionals with real-world experience.",
    icon: GraduationCap,
  },
  {
    name: "Lifetime Access",
    description: "Revisit your courses anytime, from any device",
    icon: ClockIcon,
  },
  {
    name: "Interactive Content",
    description: "Hands-on projects and quizzes to enhance your learning.",
    icon: MousePointerClick,
  },
  {
    name: "Affordable Pricing",
    description: "Quality education at an affordable price.",
    icon: Tag,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-violet-700">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our platform is dedicated to helping you unlock your full potential.
            With expertly crafted courses across various domains, we offer a
            flexible and engaging learning experience that fits your schedule.
            Whether you're a beginner or an experienced professional, we have
            something for everyone.
          </p>
        </div>
        <div className="mx-auto mt-24 max-w-4xl">
          <dl className="grid max-w-none grid-cols-2 gap-x-2 gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
