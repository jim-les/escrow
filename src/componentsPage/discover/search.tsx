import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
  };
  const onClear = () => {
    setValue("");
  };
  return (
    <form
      className="relative w-full lg:w-[400px] flex items-center"
      onSubmit={onSubmit}
    >
      <Input
        value={value}
        placeholder="search"
        className="rounded-r-none text-green-500 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:offset-0"
        onClick={onClear}
        onChange={(e)=>setValue(e.target.value)}
      />
      {value && (
        <X
          className="absolute top-25 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button type="submit" size="sm" className="rounded-1 none bg-background" variant="search">
        <SearchIcon className="text-muted-foregroun h-5 w-5" />
      </Button>
    </form>
  );
};
