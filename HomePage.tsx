import React from 'react';
import { Moon, Star, Cloud, Sparkles, BookOpen, BrainCircuit, BarChart3, Crown, Users } from 'lucide-react';

const Header = () => (
  <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4 sticky top-0 z-50">
    <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <a href="/" className="text-2xl font-bold flex items-center mb-4 sm:mb-0">
        <Moon className="mr-2" />
        Oniria
      </a>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        <a href="/journal" className="hover:text-purple-300 transition-colors px-2 py-1">Journal</a>
        <a href="/interpretation" className="hover:text-purple-300 transition-colors px-2 py-1">Interprétation</a>
        <a href="/statistiques" className="hover:text-purple-300 transition-colors px-2 py-1">Statistiques</a>
        <a href="/premium" className="hover:text-purple-300 transition-colors px-2 py-1">Premium</a>
        <a href="/communaute" className="hover:text-purple-300 transition-colors px-2 py-1">Communauté</a>
        <a href="/connexion" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 transition-colors mt-2 sm:mt-0">Connexion</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-70"></div>
    </div>
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-pulse">Bienvenue dans Oniria</h1>
      <p className="text-lg sm:text-xl mb-8">Explorez l'univers infini de vos rêves</p>
      <a href="/inscription" className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-500 transition-colors text-base sm:text-lg inline-block">
        Commencez votre voyage onirique
      </a>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-900 to-transparent"></div>
  </section>
);

const Feature = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl mb-4 text-purple-300">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-purple-100">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Feature
        icon={<BookOpen className="mx-auto" />}
        title="Journal de Rêves"
        description="Capturez l'essence de vos voyages nocturnes dans notre journal intuitif et magique."
      />
      <Feature
        icon={<BrainCircuit className="mx-auto" />}
        title="Interprétation IA"
        description="Notre oracle numérique dévoile les mystères cachés dans vos rêves les plus profonds."
      />
      <Feature
        icon={<BarChart3 className="mx-auto" />}
        title="Cartographie Onirique"
        description="Visualisez la constellation de vos rêves et découvrez les motifs de votre inconscient."
      />
    </div>
  </section>
);

const PremiumSection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Éveillez-vous à Oniria Premium</h2>
      <p className="mb-8">Plongez dans une expérience onirique sans limites. Libérez tout le potentiel de vos rêves avec notre offre Premium.</p>
      <ul className="text-left max-w-md mx-auto mb-8 space-y-4">
        <li className="flex items-center"><Star className="mr-2 text-yellow-400 flex-shrink-0" /> <span>Univers onirique sans publicité</span></li>
        <li className="flex items-center"><Star className="mr-2 text-yellow-400 flex-shrink-0" /> <span>Oracle IA illimité pour des interprétations profondes</span></li>
        <li className="flex items-center"><Star className="mr-2 text-yellow-400 flex-shrink-0" /> <span>Techniques de rêve lucide avancées</span></li>
        <li className="flex items-center"><Star className="mr-2 text-yellow-400 flex-shrink-0" /> <span>Bibliothèque de rêves infinie</span></li>
        <li className="flex items-center"><Star className="mr-2 text-yellow-400 flex-shrink-0" /> <span>Guide onirique personnel</span></li>
      </ul>
      <a href="/premium" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-base sm:text-lg inline-block">
        Transcendez vos rêves
      </a>
    </div>
  </section>
);

const CommunitySection = () => (
  <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Rejoignez la Constellation Oniria</h2>
      <p className="mb-8">Connectez-vous avec des milliers d'explorateurs oniriques. Partagez vos voyages nocturnes, échangez des secrets de rêve lucide, et participez à des discussions fascinantes sur les mystères du sommeil.</p>
      <a href="/communaute" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base sm:text-lg inline-block">
        Entrez dans la Constellation
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-indigo-900 text-purple-200 py-8 px-4">
    <div className="container mx-auto text-center">
      <p className="mb-4">© 2023 Oniria. Tous les rêves sont réservés.</p>
      <div className="space-x-4">
        <a href="/apropos" className="hover:text-white transition-colors">Notre Histoire</a>
        <a href="/confidentialite" className="hover:text-white transition-colors">Sécurité Onirique</a>
        <a href="/contact" className="hover:text-white transition-colors">Contactez-nous</a>
      </div>
    </div>
  </footer>
);

const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 animate-float"><Cloud className="text-purple-300 opacity-30" size={48} /></div>
    <div className="absolute top-3/4 right-1/4 animate-float-delay"><Star className="text-yellow-300 opacity-30" size={32} /></div>
    <div className="absolute top-1/2 left-3/4 animate-float"><Sparkles className="text-blue-300 opacity-30" size={40} /></div>
  </div>
);

const HomePage = () => (
  <div className="min-h-screen flex flex-col relative overflow-hidden">
    <FloatingElements />
    <Header />
    <main className="flex-grow">
      <Hero />
      <Features />
      <PremiumSection />
      <CommunitySection />
    </main>
    <Footer />
  </div>
);

export default HomePage;
