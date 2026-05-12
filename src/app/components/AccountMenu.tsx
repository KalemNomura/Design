import { User, Settings, LogOut, BookMarked } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';

export function AccountMenu() {
  const [open, setOpen] = useState(false);

  const user = {
    name: "Silvia García",
    email: "silvia.garcia@email.com",
    avatar: "SG"
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted/30 transition-colors">
          <div className="w-9 h-9 rounded-full bg-accent-vibrant text-accent-vibrant-foreground flex items-center justify-center">
            <span>{user.avatar}</span>
          </div>
          <span className="hidden md:block">{user.name}</span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-background border border-border rounded-xl shadow-lg p-4 w-72 z-50"
          sideOffset={8}
          align="end"
        >
          <div className="space-y-4">
            {/* User Info */}
            <div className="flex items-center gap-3 pb-4 border-b border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent-vibrant text-accent-vibrant-foreground flex items-center justify-center">
                <span className="text-lg">{user.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="truncate">{user.name}</h3>
                <p className="text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/30 transition-colors text-left">
                <BookMarked className="w-4 h-4" />
                <span>Mi biblioteca</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/30 transition-colors text-left">
                <Settings className="w-4 h-4" />
                <span>Configuración</span>
              </button>
            </div>

            {/* Logout */}
            <div className="pt-2 border-t border-border/50">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors text-left">
                <LogOut className="w-4 h-4" />
                <span>Cerrar sesión</span>
              </button>
            </div>
          </div>

          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
