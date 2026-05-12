import { SlidersHorizontal } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';

export function FilterMenu() {
  const [open, setOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const genres = ['Filosofía', 'Ensayo', 'Ficción', 'Poesía', 'Biografía'];
  const authors = ['María López', 'Ana García', 'Carmen Ruiz', 'Laura Martín'];
  const tags = ['Clásico', 'Moderno', 'Minimalista', 'Contemporáneo', 'Bestseller'];

  const toggleSelection = (item: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-2 px-5 py-4 bg-accent-vibrant text-accent-vibrant-foreground rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
          <SlidersHorizontal className="w-5 h-5" />
          Filtros
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-background border border-border rounded-xl shadow-lg p-6 w-80 z-50"
          sideOffset={8}
          align="end"
        >
          <div className="space-y-6">
            {/* Genre Filter */}
            <div>
              <h3 className="mb-3 text-foreground">Género</h3>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleSelection(genre, selectedGenres, setSelectedGenres)}
                    className={`px-3 py-1.5 rounded-lg border transition-colors ${
                      selectedGenres.includes(genre)
                        ? 'bg-accent-vibrant text-accent-vibrant-foreground border-accent-vibrant'
                        : 'bg-muted/20 text-foreground border-border/50 hover:bg-muted/40'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Filter */}
            <div>
              <h3 className="mb-3 text-foreground">Autora</h3>
              <div className="flex flex-wrap gap-2">
                {authors.map((author) => (
                  <button
                    key={author}
                    onClick={() => toggleSelection(author, selectedAuthors, setSelectedAuthors)}
                    className={`px-3 py-1.5 rounded-lg border transition-colors ${
                      selectedAuthors.includes(author)
                        ? 'bg-accent-vibrant text-accent-vibrant-foreground border-accent-vibrant'
                        : 'bg-muted/20 text-foreground border-border/50 hover:bg-muted/40'
                    }`}
                  >
                    {author}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <h3 className="mb-3 text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleSelection(tag, selectedTags, setSelectedTags)}
                    className={`px-3 py-1.5 rounded-lg border transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-accent-vibrant text-accent-vibrant-foreground border-accent-vibrant'
                        : 'bg-muted/20 text-foreground border-border/50 hover:bg-muted/40'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedGenres([]);
                  setSelectedAuthors([]);
                  setSelectedTags([]);
                }}
                className="flex-1 px-4 py-2 bg-muted/20 text-foreground rounded-lg hover:bg-muted/40 transition-colors"
              >
                Limpiar
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2 bg-accent-vibrant text-accent-vibrant-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Aplicar
              </button>
            </div>
          </div>

          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
