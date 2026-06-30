import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { formatXAF } from '../lib/utils';

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
}

export default function CartSheet({ open, onClose, cart, onUpdateQuantity, onClearCart }: CartSheetProps) {
  if (!open) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const service = Math.round(subtotal * 0.1);
  const total = subtotal + service;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-lg font-bold">Votre Commande</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
              <p className="mt-4 text-sm text-muted-foreground">Votre panier est vide</p>
              <p className="text-xs text-muted-foreground mt-1">
                Ajoutez des plats depuis notre carte.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.menuItem.id} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <img
                    src={item.menuItem.imageUrl}
                    alt={item.menuItem.name}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {item.menuItem.name}
                    </h4>
                    <p className="text-sm text-primary font-semibold">
                      {formatXAF(item.menuItem.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                      className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                      className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer totals */}
        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Sous-total</span>
              <span>{formatXAF(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service (10%)</span>
              <span>{formatXAF(service)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-primary">{formatXAF(total)}</span>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                onClick={onClearCart}
                className="flex-1 py-3 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors cursor-pointer"
              >
                Vider
              </button>
              <button className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer">
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
