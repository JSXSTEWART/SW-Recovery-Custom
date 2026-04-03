import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './ui/Logo';

const navItems = [
  {
    name: 'About',
    link: '/about',
    dropdown: [
      { title: 'Overview', link: '/about' },
      { title: 'Team', link: '/about/team' },
      { title: 'History', link: '/about/history' },
      { title: 'Why Choose Us', link: '/about/learn-more' },
      { title: 'Careers', link: '/about/careers' },
    ],
  },
  {
    name: 'Services',
    link: '/services',
    dropdown: [
      { title: 'Debt Recovery', link: '/services/debt-recovery' },
      { title: 'Legal Collections', link: '/services/legal-collections' },
      { title: 'Revenue Cycle Management', link: '/services/revenue-cycle-management' },
      { title: 'Accounts Receivable Management', link: '/services/accounts-receivable-management' },
      { title: 'Consulting Services', link: '/services/consulting-services' },
      { title: 'Business Process Outsourcing', link: '/services/business-process-outsourcing' },
    ],
  },
  {
    name: 'Industries',
    link: '/industries',
    dropdown: [
      { title: 'Automotive Finance', link: '/industries/automotive-finance-collections' },
      { title: 'Commercial Collections', link: '/industries/commercial-collections' },
      { title: 'Consumer Collections', link: '/industries/consumer-collections' },
      { title: 'Government & Municipality', link: '/industries/government-and-municipality-collections' },
      { title: 'Insurance & Subrogation', link: '/industries/insurance-and-subrogation-collections' },
      { title: 'Medical & Healthcare', link: '/industries/medical-and-healthcare-collections' },
      { title: 'Logistics Management', link: '/industries/logistics-management-collections' },
      { title: 'Oil and Gas', link: '/industries/oil-and-gas-collections' },
      { title: 'Property Management', link: '/industries/property-management-collections' },
      { title: 'Utility Collections', link: '/industries/utility-collections' },
      { title: 'EMS Collections', link: '/industries/ems-debt-collections' },
      { title: 'Mental Health Care', link: '/industries/mental-health-care-collection-agency' },
    ],
  },
  {
    name: 'Locations',
    link: '/locations',
    dropdown: [
      { title: 'Addison', link: '/locations/addison-collection-agency' },
      { title: 'Austin', link: '/locations/austin-collection-agency' },
      { title: 'Columbus', link: '/locations/columbus-collection-agency' },
      { title: 'Dallas', link: '/locations/dallas-collection-agency' },
      { title: 'Denver', link: '/locations/denver-collection-agency' },
      { title: 'Houston', link: '/locations/houston-collection-agency' },
      { title: 'Midland', link: '/locations/midland-collection-agency' },
      { title: 'Oklahoma City', link: '/locations/oklahoma-city-collection-agency' },
      { title: 'San Antonio', link: '/locations/san-antonio-collection-agency' },
      { title: 'Atlanta', link: '/locations/atlanta-collection-agency' },
      { title: 'St. Louis', link: '/locations/st-louis-collection-agency' },
      { title: 'Tampa', link: '/locations/tampa-collection-agency' },
    ],
  },
  {
    name: 'Resources',
    link: '/resources',
    dropdown: [
      { title: 'Collection Process', link: '/resources/collection-process' },
      { title: 'Client Training Videos', link: '/resources/client-training-videos' },
      { title: 'Blog', link: '/resources/blog' },
    ],
  },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const dropdownRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const allLinks = navItems.flatMap((item) => {
    const links = [{ title: item.name, link: item.link }];
    if (item.dropdown) {
      item.dropdown.forEach((sub) => {
        links.push({ title: sub.title, link: sub.link });
      });
    }
    return links;
  });

  const searchResults = searchQuery
    ? allLinks.filter((link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDesktopDropdown = (name: string) => {
    setActiveDesktopDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-xs py-2 border-b border-gray-200 dark:border-gray-700 relative z-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-300 font-medium">
            <span>Customer Service: <a href="tel:866-837-3065" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">866-837-3065</a></span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span>Make a Payment: <a href="tel:866-558-3328" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">866-558-3328</a></span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-medium">
            <a href="https://portal.swrecovery.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Client Portal</a>
            <span className="text-gray-400">|</span>
            <Link to="/sms-opt-in-out" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Consumer Support</Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-white shadow-md dark:bg-gray-900">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="mr-8 flex-shrink-0" aria-label="Go to homepage">
            <Logo />
          </Link>

          <nav
            className="hidden items-center space-x-6 xl:flex"
            ref={dropdownRef}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDesktopDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDesktopDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300"
                      onClick={() => toggleDesktopDropdown(item.name)}
                      aria-expanded={activeDesktopDropdown === item.name}
                      aria-haspopup="menu"
                      aria-label={`${item.name} menu`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    {activeDesktopDropdown === item.name && (
                      <div className="absolute left-0 top-full z-50 w-64 rounded-b-lg border-t-2 border-blue-600 bg-white py-2 shadow-lg dark:bg-gray-800">
                        <Link
                          to={item.link}
                          className="block px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
                          onClick={() => setActiveDesktopDropdown(null)}
                        >
                          All {item.name}
                        </Link>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            onClick={() => setActiveDesktopDropdown(null)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="py-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden items-center space-x-4 xl:flex">
          <div className="relative" ref={searchRef}>
            <button
              type="button"
              aria-label="Search"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-4 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  autoFocus
                />
                
                {searchQuery && (
                  <div className="mt-4 max-h-64 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <ul className="space-y-1">
                        {searchResults.map((result, idx) => (
                          <li key={idx}>
                            <Link
                              to={result.link}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                            >
                              {result.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No results found.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="whitespace-nowrap rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full bg-gray-200 p-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <button
          type="button"
          className="xl:hidden p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-2.5 shadow-inner relative z-20">
        <div className="container mx-auto px-4 flex justify-center">
          <Link
            to="/contact"
            className="flex items-center text-sm font-bold tracking-wide text-white hover:text-blue-100 transition-colors"
          >
            Get Started Today <span className="ml-2 text-xs">▶</span>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t dark:border-gray-800 xl:hidden z-10">
          <nav
            className="max-h-[calc(100vh-130px)] overflow-y-auto p-4 space-y-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left font-medium text-gray-700 dark:text-gray-300"
                    onClick={() => toggleMobileDropdown(item.name)}
                    aria-expanded={activeMobileDropdown === item.name}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>

                  {activeMobileDropdown === item.name && (
                    <div className="mt-1 mb-2 space-y-1 rounded-lg bg-gray-50 p-2 dark:bg-gray-800/50">
                      <Link
                        to={item.link}
                        className="block rounded-md px-4 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveMobileDropdown(null);
                        }}
                      >
                        All {item.name}
                      </Link>

                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.link}
                          className="block rounded-md px-4 py-3 text-base text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.link}
                  className="block py-2 font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-3 flex flex-col gap-3">
            <Link
              to="/contact"
              className="block w-full rounded-md bg-blue-600 px-5 py-2.5 text-center font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
