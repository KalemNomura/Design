import { Eye, Type, Contrast, ZoomIn, ZoomOut } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { useState, useEffect } from 'react';

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-muted/30 transition-colors"
          aria-label="Opciones de accesibilidad"
        >
          <Eye className="w-5 h-5" />
          <span className="hidden md:block">Accesibilidad</span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-background border border-border rounded-xl shadow-lg p-6 w-80 z-50"
          sideOffset={8}
          align="end"
        >
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-accent-vibrant" />
                Accesibilidad
              </h3>
            </div>

            {/* Font Size Control */}
            <div>
              <label className="text-muted-foreground mb-3 flex items-center gap-2">
                <Type className="w-4 h-4" />
                Tamaño de texto
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 12}
                  className="p-2 bg-muted/30 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Disminuir tamaño de fuente"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-sm text-muted-foreground">{fontSize}px</span>
                </div>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 24}
                  className="p-2 bg-muted/30 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Aumentar tamaño de fuente"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={resetFontSize}
                className="w-full mt-2 py-2 px-3 text-sm bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors"
              >
                Restablecer
              </button>
            </div>

            {/* High Contrast */}
            <div>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Contrast className="w-4 h-4" />
                  Alto contraste
                </span>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    highContrast ? 'bg-accent-vibrant' : 'bg-muted/50'
                  }`}
                  aria-label="Activar alto contraste"
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </label>
            </div>

            {/* Info */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                Estas opciones te ayudan a personalizar tu experiencia de lectura.
              </p>
            </div>
          </div>

          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
