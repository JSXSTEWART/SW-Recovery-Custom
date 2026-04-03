import { useLocation } from 'react-router-dom';
import { pagesData } from '../data/pages';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function GenericPage() {
  const location = useLocation();
  const slug = location.pathname.substring(1) || 'about';
  
  const pageData = pagesData[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: 'This page is currently under construction.',
    content: ['Please check back later for updates on our ' + slug.replace(/-/g, ' ') + ' services and information.']
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 lg:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            {pageData.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {pageData.description}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6">
                {pageData.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {pageData.features && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">Key Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pageData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {pageData.imageUrl && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full lg:w-1/3"
              >
                <div className="sticky top-24">
                  <img 
                    src={pageData.imageUrl} 
                    alt={pageData.title} 
                    className="rounded-2xl shadow-xl w-full object-cover h-[300px] lg:h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Contact our team of experts today to discuss your debt recovery and revenue cycle management needs.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Request a Free Quote
          </a>
        </motion.div>
      </section>
    </div>
  );
}
