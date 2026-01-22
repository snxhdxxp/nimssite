import "@/App.css";
import { HeroSection } from "./components/HeroSection";
import { AdmirationGrid } from "./components/AdmirationGrid";
import { MemoryGallery } from "./components/MemoryGallery";
import { QuoteCarousel } from "./components/QuoteCarousel";
import { ComplimentGenerator } from "./components/ComplimentGenerator";

function App() {
  return (
    <div className="App font-body">
      <HeroSection />
      <AdmirationGrid />
      <MemoryGallery />
      <QuoteCarousel />
      <ComplimentGenerator />
      
      {/* Footer */}
      <footer data-testid="footer" className="py-12 bg-text text-white text-center">
        <p className="font-accent text-2xl mb-2">Made with love ❤️</p>
        <p className="font-body text-sm text-white/70">
          For the most amazing person in my world
        </p>
      </footer>
    </div>
  );
}

export default App;
