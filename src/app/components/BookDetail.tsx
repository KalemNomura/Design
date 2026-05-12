import { ArrowLeft, Star, Clock, BookOpen, Heart, Share2, Eye } from 'lucide-react';
import { AccessibilityMenu } from './AccessibilityMenu';

interface BookDetailProps {
  book: {
    id: number;
    image: string;
    title: string;
    author: string;
    reason?: string;
  };
  onBack: () => void;
}

export function BookDetail({ book, onBack }: BookDetailProps) {
  const bookDetails = {
    rating: 4.5,
    totalRatings: 2847,
    pages: 320,
    publishYear: 2023,
    genre: 'Ficción contemporánea',
    language: 'Español',
    synopsis: 'Una exploración profunda de las relaciones humanas y la soledad en el mundo moderno. A través de una prosa delicada y evocadora, la autora nos sumerge en la vida de personajes que buscan conexión y significado en un mundo cada vez más fragmentado. Con una sensibilidad única, esta obra examina los silencios que habitan entre las palabras y las verdades que se esconden en lo no dicho.',
    extendedSynopsis: 'La narrativa se desarrolla en múltiples líneas temporales, entrelazando las vidas de cinco personajes cuyas historias convergen de formas inesperadas. Cada capítulo ofrece una perspectiva diferente sobre temas universales como el amor, la pérdida, la identidad y la búsqueda de pertenencia. La autora utiliza un estilo lírico que combina momentos de introspección profunda con escenas de una intimidad desgarradora.',
    tags: ['Bestseller', 'Ficción', 'Contemporáneo', 'Premio Nacional'],
    chapters: [
      { number: 1, title: 'El gran secreto', pages: 24 },
      { number: 2, title: 'Secretisimo', pages: 32 },
      { number: 3, title: 'Muy muy Secreto', pages: 28 },
      { number: 4, title: 'El peso de las palabras', pages: 35 },
      { number: 5, title: 'Ecos del pasado', pages: 30 }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:text-accent-vibrant transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </button>
            <AccessibilityMenu />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Book Cover & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6 overflow-hidden rounded-xl bg-muted/20 aspect-[3/4] shadow-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full py-3 px-4 bg-accent-vibrant text-accent-vibrant-foreground rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Comenzar a leer
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 bg-muted/30 border border-border/50 rounded-xl hover:bg-muted/50 transition-colors flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Guardar
                  </button>
                  <button className="py-3 px-4 bg-muted/30 border border-border/50 rounded-xl hover:bg-muted/50 transition-colors flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Compartir
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 bg-muted/20 border border-border/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valoración</span>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-accent-vibrant text-accent-vibrant" />
                    <span>{bookDetails.rating}</span>
                    <span className="text-muted-foreground">({bookDetails.totalRatings})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Páginas</span>
                  <span>{bookDetails.pages}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Publicación</span>
                  <span>{bookDetails.publishYear}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Idioma</span>
                  <span>{bookDetails.language}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Book Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Author */}
            <div>
              <h1 className="mb-2">{book.title}</h1>
              <p className="text-muted-foreground mb-4">por {book.author}</p>
              <div className="flex flex-wrap gap-2">
                {bookDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-accent-vibrant/10 text-accent-vibrant border border-accent-vibrant/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h2 className="mb-4 text-muted-foreground">Sinopsis</h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>{bookDetails.synopsis}</p>
                <p>{bookDetails.extendedSynopsis}</p>
              </div>
            </div>

            {/* Genre */}
            <div>
              <h3 className="mb-2 text-muted-foreground">Género</h3>
              <span className="inline-block px-4 py-2 bg-muted/30 border border-border/50 rounded-lg">
                {bookDetails.genre}
              </span>
            </div>

            {/* Chapters */}
            <div>
              <h2 className="mb-4 text-muted-foreground">Capítulos</h2>
              <div className="space-y-2">
                {bookDetails.chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="group p-4 bg-muted/20 border border-border/30 rounded-lg hover:bg-muted/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground w-8">
                          {chapter.number}
                        </span>
                        <h3>{chapter.title}</h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {chapter.pages} pág.
                        </span>
                        <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
