import { Search, Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-gradient">OneCalc</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 transition-colors group-focus-within:text-primary" />
              <Input
                type="text"
                placeholder="Search calculators..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 pr-4 py-3 w-80 glass border-2 border-transparent focus:border-primary/30 focus:shadow-glow transition-all duration-300 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};