import { Typo } from "@/design-system/atoms/typo";

export default function ProjectRecommendationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full max-w-laptop flex-col gap-7xl px-4 py-4xl">
      <div className="flex flex-col items-center gap-md">
        <Typo
          variant="heading"
          size="xs"
          weight="medium"
          translate={{
            token: "projectRecommendation:details.header.title",
          }}
        />
        <Typo
          color="secondary"
          size="xs"
          translate={{
            token: "projectRecommendation:details.header.description",
          }}
        />
      </div>

      {children}
    </div>
  );
}
