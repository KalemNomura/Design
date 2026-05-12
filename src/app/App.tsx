import { Search, Sparkles, Heart, Brain, Compass, TrendingUp, SlidersHorizontal, BookOpen, Newspaper, Clock } from 'lucide-react';
import { useState } from 'react';
import { FilterMenu } from './components/FilterMenu';
import { AccountMenu } from './components/AccountMenu';
import { ThemeToggle } from './components/ThemeToggle';
import { BookDetail } from './components/BookDetail';
import { BlogPost } from './components/BlogPost';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<{
    id: number;
    image: string;
    title: string;
    author: string;
    reason?: string;
  } | null>(null);

  const [selectedBlogPost, setSelectedBlogPost] = useState<{
    id: number;
    category: string;
    title: string;
    date: string;
  } | null>(null);
  const recommendations = [
    {
      id: 1,
      image: "https://imgs.search.brave.com/vqaJJeKI2gkUCvUZRxqWH38cZvkyUCjn-hZIudVg9DI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRhemluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvSGFycnktUG90/dGVyLUJvb2stQ292/ZXJzLUNoYW1iZXIt/b2YtU2VjcmV0cy11/cy0xLTY4MngxMDI0/LnBuZw",
      title: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      reason: "Basado en tus últimas lecturas"
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71IgyinqsuL._SL1500_.jpg",
      title: "An Illustrated History of Notable Shadowhunters and Denizens of Downworld",
      author: "Cassandra Clare",
      reason: "Misma autora que leíste recientemente"
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/81A0i6tTgIL._SL1500_.jpg",
      title: "Beneath the Tree: Conversations on the Way of Life",
      author: "Michael Dubé",
      reason: "Popular en tu género favorito"
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/91rH07apKfL._SL1500_.jpg",
      title: "Better in Black: Ten Stories of Shadowhunter Romance",
      author: "Cassandra Clare",
      reason: "Porque te gustó 'The Red Scrolls of Magic'"
    }
  ];

  const latestBooks = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81LSCmmTvqL._SL1500_.jpg",
      title: "A Parade of Horribles (Dungeon Crawler Carl)",
      author: "Matt Dinniman",
      addedDate: "Hace 2 días"
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81+J7uZmxxL._SL1500_.jpg",
      title: "Chain of Thorns (The Last Hours Book 3)",
      author: "Cassandra Clare",
      addedDate: "Hace 5 días"
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/815n9guVf+L._SL1500_.jpg",
      title: "Chain of Iron (The Last Hours Book 2)",
      author: "Cassandra Clare",
      addedDate: "Hace 1 semana"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      category: "Reseñas",
      title: "Los mejores libros de filosofía del mes",
      date: "10 Mayo 2026"
    },
    {
      id: 2,
      category: "Entrevistas",
      title: "Conversación con autoras contemporáneas",
      date: "8 Mayo 2026"
    },
    {
      id: 3,
      category: "Listas",
      title: "5 libros imprescindibles para el verano",
      date: "5 Mayo 2026"
    }
  ];

  const categories = [
    { icon: Sparkles, label: "Nuevos", color: "text-foreground" },
    { icon: Heart, label: "Favoritos", color: "text-foreground" },
    { icon: Brain, label: "Filosofía", color: "text-foreground" },
    { icon: TrendingUp, label: "Populares", color: "text-foreground" }
  ];

  if (selectedBook) {
    return <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />;
  }

  if (selectedBlogPost) {
    return <BlogPost post={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6" />
              <h1 className="tracking-tight">Lectura</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <AccountMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-16">
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar libros, autores, géneros..."
                className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              />
            </div>
            <FilterMenu />
          </div>
        </div>

        {/* Recommendations */}
        <section className="mb-20">
          <h2 className="mb-8 text-muted-foreground">Para ti</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {recommendations.map((book) => (
              <div
                key={book.id}
                className="group cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="mb-4 overflow-hidden rounded-lg bg-muted/20 aspect-[3/4] transition-transform duration-300 group-hover:scale-[1.02] relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 bg-accent-vibrant text-accent-vibrant-foreground rounded-full">
                      {book.reason}
                    </span>
                  </div>
                </div>
                <h3 className="mb-1 truncate">{book.title}</h3>
                <p className="text-muted-foreground truncate">{book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <h2 className="mb-8 text-muted-foreground">Explorar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="flex items-center gap-3 p-5 bg-muted/20 border border-border/30 rounded-xl hover:bg-muted/40 transition-colors text-left"
                >
                  <Icon className={`w-5 h-5 ${category.color}`} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Latest Books */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-accent-vibrant" />
            <h2 className="text-muted-foreground">Últimos añadidos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBooks.map((book) => (
              <div
                key={book.id}
                className="group cursor-pointer flex gap-4 p-4 bg-muted/20 border border-border/30 rounded-xl hover:bg-muted/40 transition-colors"
                onClick={() => setSelectedBook(book)}
              >
                <div className="w-20 h-28 overflow-hidden rounded-lg bg-muted/20 flex-shrink-0">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{book.title}</h3>
                  <p className="text-muted-foreground mb-2 truncate">{book.author}</p>
                  <span className="text-xs text-accent-vibrant">{book.addedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Newspaper className="w-5 h-5 text-accent-vibrant" />
            <h2 className="text-muted-foreground">Blog</h2>
          </div>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer p-6 bg-muted/20 border border-border/30 rounded-xl hover:bg-muted/40 transition-colors"
                onClick={() => setSelectedBlogPost(post)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block text-xs px-3 py-1 bg-accent-vibrant text-accent-vibrant-foreground rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="mb-2">{post.title}</h3>
                    <p className="text-muted-foreground">{post.date}</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}