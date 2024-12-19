import { Badge } from "@/components/ui/badge";

interface RepositoryCardProps {
  name: string;
  isPublic: boolean;
  language: string;
  languageColor: string;
  size: number;
  updatedAt: string;
}

export function RepositoryCard({
  name,
  isPublic,
  language,
  languageColor,
  size,
  updatedAt,
}: RepositoryCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 border-t rounded-lg md:px-6 hover:bg-[#f8f9fa]  -mx-4 md:-mx-6 gap-2 md:gap-0">
      <div className="flex items-start md:items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[15px] font-medium text-[#212529]">
              {name}
            </span>
            <Badge
              variant={"outline"}
              className="h-5 text-xs font-normal text-blue-400 rounded-full border border-blue-400"
            >
              {isPublic ? "Public" : "Private"}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#868e96]">
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor }}
              />
              {language}
            </div>
            <div>{size.toLocaleString()} KB</div>
            <div className="text-sm text-[#868e96]">Updated {updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
