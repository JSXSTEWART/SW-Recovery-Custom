import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Lightbulb, FileText, Briefcase, Scale, CheckCircle2, ArrowRight, Building2, Stethoscope, Truck, Factory } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Debt Recovery',
    description:
      'Professional, ethical debt recovery strategies to maximize your returns while protecting your brand.',
    icon: ShieldCheck,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-100 dark:border-blue-900/30 hover:border-blue-500 dark:hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20',
    gradient: 'from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent',
    link: '/services/debt-recovery'
  },
  {
    title: 'Revenue Cycle Management',
    description:
      'Streamline your cash flow with end-to-end management solutions tailored to your industry.',
    icon: TrendingUp,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-500 dark:hover:border-emerald-400',
    shadowColor: 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20',
    gradient: 'from-emerald-50/50 to-transparent dark:from-emerald-900/10 dark:to-transparent',
    link: '/services/revenue-cycle-management'
  },
  {
    title: 'Accounts Receivable',
    description:
      'Proactive accounts receivable management to reduce days sales outstanding and improve liquidity.',
    icon: FileText,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-100 dark:border-purple-900/30 hover:border-purple-500 dark:hover:border-purple-400',
    shadowColor: 'hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20',
    gradient: 'from-purple-50/50 to-transparent dark:from-purple-900/10 dark:to-transparent',
    link: '/services/accounts-receivable-management'
  },
  {
    title: 'Consulting Services',
    description:
      'Expert consulting to optimize internal processes, compliance, and overall financial performance.',
    icon: Lightbulb,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-100 dark:border-amber-900/30 hover:border-amber-500 dark:hover:border-amber-400',
    shadowColor: 'hover:shadow-amber-500/20 dark:hover:shadow-amber-400/20',
    gradient: 'from-amber-50/50 to-transparent dark:from-amber-900/10 dark:to-transparent',
    link: '/services/consulting-services'
  },
  {
    title: 'Business Process Outsourcing',
    description:
      'Cost-effective BPO solutions allowing your team to focus on core business objectives.',
    icon: Briefcase,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-100 dark:border-indigo-900/30 hover:border-indigo-500 dark:hover:border-indigo-400',
    shadowColor: 'hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20',
    gradient: 'from-indigo-50/50 to-transparent dark:from-indigo-900/10 dark:to-transparent',
    link: '/services/business-process-outsourcing'
  },
  {
    title: 'Legal Collections',
    description:
      'Comprehensive legal collection strategies through our network of experienced attorneys.',
    icon: Scale,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    borderColor: 'border-rose-100 dark:border-rose-900/30 hover:border-rose-500 dark:hover:border-rose-400',
    shadowColor: 'hover:shadow-rose-500/20 dark:hover:shadow-rose-400/20',
    gradient: 'from-rose-50/50 to-transparent dark:from-rose-900/10 dark:to-transparent',
    link: '/services/legal-collections'
  },
];

const industries = [
  { name: 'Medical & Healthcare', icon: Stethoscope, link: '/industries/medical-and-healthcare-collections' },
  { name: 'Commercial Collections', icon: Factory, link: '/industries/commercial-collections' },
  { name: 'Government & Municipality', icon: Building2, link: '/industries/government-and-municipality-collections' },
  { name: 'Logistics Management', icon: Truck, link: '/industries/logistics-management-collections' },
  { name: 'Automotive Finance', icon: Briefcase, link: '/industries/automotive-finance-collections' },
  { name: 'Insurance & Subrogation', icon: ShieldCheck, link: '/industries/insurance-and-subrogation-collections' },
  { name: 'Property Management', icon: Building2, link: '/industries/property-management-collections' },
  { name: 'Utility Collections', icon: Lightbulb, link: '/industries/utility-collections' },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 xl:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://www.swrecovery.com/wp-content/uploads/2023/08/hero-image-1.jpg" 
            alt="Finance background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-900/50 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-800/50 border border-blue-700 backdrop-blur-sm text-blue-200 text-sm font-semibold tracking-wide uppercase">
              Leading Debt Collection Agency Nationwide
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-heading">
              Converting Problems To Profits Since 2004
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-xl leading-relaxed">
              SWRS is a trusted on-shore inbound and outbound debt collection service provider specializing in accounts receivable management solutions for all businesses. Our professional debt collectors work on contingency. We don't get paid unless you do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-blue-900 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-blue-800/50 border border-blue-700 backdrop-blur-sm px-8 py-4 font-bold text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/20 rounded-3xl transform -rotate-3"></div>
                <img 
                  src="https://www.swrecovery.com/wp-content/uploads/2023/08/male-and-female-talking-at-conf-table.jpg" 
                  alt="Team meeting" 
                  className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                      20+
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">Years of</p>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                ABOUT SOUTHWEST RECOVERY SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-heading">
                Nationally Recognized Leader in Financial BPO
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                <p>
                  Southwest Recovery Services, LLC is headquartered in Dallas, Texas with additional locations throughout Texas as well as Georgia, Missouri, Florida, Oklahoma, and Ohio. Our advisors are standing by and ready to help keep you from unnecessary financial shortfalls.
                </p>
                <p>
                  We make it easy for your business to reach some of its financial goals and exceed projections. We offer a wide range of services that can be customized for your exact needs and can propel your business forwards.
                </p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  'State-of-the-art new age technologies',
                  'Increase productivity while decreasing costs',
                  'First and Third-Party Recovery Campaigns',
                  'Ethical, professional and diplomatic service'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-200 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/about" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline text-lg mt-4 group">
                Read Our Full Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 lg:py-32 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              SERVICES WE PROVIDE
            </div>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-heading">
              Building A Better Business Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Southwest Recovery Services heavily invests in the most state-of-the-art new age technologies that increase productivity while decreasing costs.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.link}
                    className={`group relative overflow-hidden flex flex-col h-full rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:focus:ring-offset-gray-900 ${service.borderColor} ${service.shadowColor}`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${service.gradient}`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.bgColor} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Icon className={`h-8 w-8 ${service.color}`} />
                      </div>

                      <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100 font-heading">
                        {service.title}
                      </h3>

                      <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div className={`mt-auto flex items-center font-semibold ${service.color}`}>
                        Learn more
                        <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <Link 
                      key={industry.name} 
                      to={industry.link}
                      className={`bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg group ${index === 0 ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-heading">{industry.name}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                INDUSTRIES WE SERVE
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-heading">
                Expertise Across Nearly Every Industry
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                <p>
                  Southwest Recovery Services has spent 20 years building our expertise across nearly every industry and business sector. Whether your business is a multimillion-dollar industry leader or not much bigger than a startup, it's important that every business excel on their core competencies.
                </p>
                <p>
                  Let Southwest Recovery Services handle your back and front office BPO so you can focus on growing your business.
                </p>
              </div>
              
              <Link to="/industries" className="inline-flex items-center bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg group">
                View All Industries
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center relative z-10 max-w-4xl"
        >
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
            Ready to improve your cash flow and recover outstanding debts?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed">
            We currently maintain twelve strategically located offices across six states and are ready to serve your business needs today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-blue-900 transition-all hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              Contact Us Today
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center justify-center rounded-xl bg-blue-800/50 border border-blue-700 backdrop-blur-sm px-8 py-4 font-bold text-white transition-all hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 text-lg"
            >
              Find an Expert Near You
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
