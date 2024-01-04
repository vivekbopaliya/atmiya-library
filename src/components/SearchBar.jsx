import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

const SearchBar = () => {
  return (
    <main className=" pb-5   flex justify-center items-center max-w-5xl container ">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search for book or so..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <span>Calculator</span>
            </CommandItem>
            <CommandItem>
              <span>Books</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </main>
  );
};

export default SearchBar;
