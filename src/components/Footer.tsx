import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://chepele.com/wp-content/uploads/2025/08/cropped-chepele-white-1.png"
              alt="Chepele"
              className="h-10 w-auto invert dark:invert-0"
            />
            <div>
              <p className="text-sm font-medium text-foreground">Chepele "Man with the Pot"</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Behind IUC, Logbessou, Douala — Cameroun
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/a-propos" className="hover:text-foreground transition-colors">A Propos</Link>
            <Link to="/menu" className="hover:text-foreground transition-colors">Menu</Link>
            <Link to="/evenements" className="hover:text-foreground transition-colors">Evenements</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/galerie" className="hover:text-foreground transition-colors">Galerie</Link>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              +237 671 669 006
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              &copy; {new Date().getFullYear()} Chepele. Tous droits reserves.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
