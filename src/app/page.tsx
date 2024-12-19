"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus } from "lucide-react";
import { RepositoryCard } from "@/components/ReposioryCard";

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    languageColor: "#61dafb",
    size: 7320,
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    languageColor: "#f7df1e",
    size: 5871,
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    languageColor: "#3776ab",
    size: 4521,
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    languageColor: "#ffac45",
    size: 3096,
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    languageColor: "#b07219",
    size: 6210,
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    languageColor: "#e34c26",
    size: 2847,
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    languageColor: "#4F5D95",
    size: 5432,
    updatedAt: "7 days ago",
  },
];

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:bg-gray-200">
      <div className="lg:p-6 bg-white rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-[#212529]">
              Repositories
            </h1>
            <p className="text-sm text-[#868e96]">
              {repositories.length} total repositories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 text-[#495057] hover:text-[#212529]"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh All
            </Button>
            <Button size="sm" className="h-9 px-3">
              <Plus className="h-4 w-4 mr-2" />
              Add Repository
            </Button>
          </div>
        </div>
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search Repositories"
            className="max-w-md h-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="px-6 -mx-6">
          {filteredRepositories.map((repo) => (
            <RepositoryCard key={repo.name} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
