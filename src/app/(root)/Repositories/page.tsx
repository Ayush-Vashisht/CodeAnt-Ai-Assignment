"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus } from "lucide-react";
import { RepositoryCard } from "@/components/ReposioryCard";
import { repositories } from "@/lib/utils";


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
