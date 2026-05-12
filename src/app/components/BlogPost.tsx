import { ArrowLeft, Heart, Share2, MessageCircle, User, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

interface BlogPostProps {
  post: {
    id: number;
    category: string;
    title: string;
    date: string;
  };
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Carmen Ruiz",
      date: "Hace 3 días",
      content: "Me encantó este artículo. La selección de libros es excelente y muy acertada. Especialmente 'La insoportable levedad del ser' que llevo años queriendo leer.",
      likes: 12
    },
    {
      id: 2,
      author: "Laura Martín",
      date: "Hace 5 días",
      content: "Gracias por compartir estas recomendaciones. Ya he añadido tres de estos títulos a mi lista de pendientes. ¿Habrá una segunda parte?",
      likes: 8
    },
    {
      id: 3,
      author: "Ana García",
      date: "Hace 1 semana",
      content: "Perfecto para encontrar mi próxima lectura. Me gusta cómo explicas el contexto de cada libro sin revelar demasiado.",
      likes: 15
    }
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Tú",
        date: "Ahora mismo",
        content: newComment,
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const articleContent = {
    author: "María López",
    readTime: "8 min lectura",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
    introduction: "La filosofía nos invita a cuestionar lo evidente, a mirar más allá de las apariencias y a buscar el significado profundo de nuestra existencia. Este mes, hemos seleccionado cinco obras que destacan por su capacidad de transformar nuestra manera de pensar y ver el mundo.",
    sections: [
      {
        title: "1. El silencio de las palabras - Elena Ferrante",
        content: "Una exploración magistral sobre la comunicación humana y los silencios que a veces dicen más que mil palabras. Ferrante nos sumerge en una reflexión profunda sobre cómo nos relacionamos con los demás y con nosotros mismos."
      },
      {
        title: "2. Anatomía de la soledad - Olivia Laing",
        content: "Este ensayo combina autobiografía con crítica cultural para explorar la soledad en la era digital. Laing entreteje historias personales con análisis de artistas que han explorado este tema universal, creando una obra profundamente conmovedora."
      },
      {
        title: "3. La insoportable levedad del ser - Milan Kundera",
        content: "Un clásico contemporáneo que explora las grandes preguntas existenciales: el peso de nuestras decisiones, la naturaleza del amor, y la búsqueda de significado en un mundo aparentemente absurdo. La prosa de Kundera es tan filosófica como poética."
      },
      {
        title: "4. Los años - Annie Ernaux",
        content: "Ernaux ofrece una memoria colectiva que trasciende lo personal para capturar toda una época. A través de fotografías, recuerdos y reflexiones, construye un retrato íntimo de varias generaciones y sus transformaciones."
      },
      {
        title: "5. Cartas a un joven poeta - Rainer Maria Rilke",
        content: "Aunque no es una obra filosófica en sentido estricto, estas cartas contienen una sabiduría atemporal sobre la creatividad, la soledad necesaria para crear, y el coraje de vivir una vida auténtica. Cada carta es una joya de introspección."
      }
    ],
    conclusion: "Estas cinco obras nos recuerdan que la filosofía no es solo un ejercicio intelectual, sino una forma de vida. Cada una ofrece herramientas para pensar mejor, vivir con más conciencia y encontrar belleza en la complejidad de la existencia humana."
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-accent-vibrant transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al blog</span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block text-xs px-3 py-1 bg-accent-vibrant text-accent-vibrant-foreground rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{articleContent.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{articleContent.readTime}</span>
          </div>

          {/* Cover Image */}
          <div className="mb-8 overflow-hidden rounded-xl bg-muted/20 aspect-[21/9]">
            <img
              src={articleContent.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pb-8 border-b border-border/50">
            <button className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors">
              <Heart className="w-4 h-4" />
              <span>Me gusta</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Compartir</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length}</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <p className="text-lg leading-relaxed mb-8 text-foreground/90">
            {articleContent.introduction}
          </p>

          {articleContent.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="mb-4 text-foreground">{section.title}</h2>
              <p className="leading-relaxed text-foreground/90">{section.content}</p>
            </div>
          ))}

          <div className="mt-12 p-6 bg-muted/20 border border-border/30 rounded-xl">
            <p className="leading-relaxed text-foreground/90 italic">
              {articleContent.conclusion}
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <section className="border-t border-border/50 pt-12">
          <h2 className="mb-8 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-accent-vibrant" />
            Comentarios ({comments.length})
          </h2>

          {/* Add Comment */}
          <div className="mb-8 p-6 bg-muted/20 border border-border/30 rounded-xl">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Comparte tu opinión sobre este artículo..."
              className="w-full p-4 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all resize-none"
              rows={4}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="px-6 py-2 bg-accent-vibrant text-accent-vibrant-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Publicar comentario
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-6 bg-muted/20 border border-border/30 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-vibrant text-accent-vibrant-foreground flex items-center justify-center flex-shrink-0">
                    <span>{comment.author.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-foreground">{comment.author}</h4>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      {comment.content}
                    </p>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-accent-vibrant transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
