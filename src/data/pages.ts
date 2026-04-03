export interface PageContent {
  title: string;
  description: string;
  content: string[];
  features?: string[];
  imageUrl?: string;
}

export const pagesData: Record<string, PageContent> = {
  'contact': {
    title: 'Contact Us',
    description: 'Get a Free Quote and Start Recovering Your Money Today',
    content: [
      'Southwest Recovery Services is ready to help you with your debt recovery needs. Contact us today for a free, no-obligation quote.',
      'Our team is available to answer your questions and provide more information about our services. We have locations across the country to serve you better.',
      'Call us at 1-866-927-8881 or fill out the form below to get started.'
    ],
    features: [
      'Free Quote',
      'No-Obligation Consultation',
      'Nationwide Support',
      'Expert Guidance',
      'Fast Response'
    ]
  },
  'about': {
    title: 'About Southwest Recovery Services',
    description: 'Converting Problems To Profits Since 2004',
    content: [
      'Southwest Recovery Services, LLC is headquartered in Dallas, Texas with additional locations throughout Texas as well as Georgia, Missouri, Florida, Oklahoma, and Ohio. Our advisors are standing by and ready to help keep you from unnecessary financial shortfalls.',
      'We make it easy for your business to reach some of its financial goals and exceed projections. We offer a wide range of services that can be customized for your exact needs and can propel your business forwards.',
      'Our team is dedicated to ethical, professional, and diplomatic debt collection. We use state-of-the-art technologies to increase productivity while decreasing costs for our clients. We maintain the highest standards of ethics and professionalism in everything we do.',
      'What we do is simple: we convert your problems into profits. Our standards are designed to protect your brand while maximizing your recovery.'
    ],
    features: [
      'State-of-the-art new age technologies',
      'Increase productivity while decreasing costs',
      'First and Third-Party Recovery Campaigns',
      'Ethical, professional and diplomatic service',
      'Nationwide Presence',
      'Customized Financial Solutions'
    ],
    imageUrl: 'https://www.swrecovery.com/wp-content/uploads/2023/08/male-and-female-talking-at-conf-table.jpg'
  },
  'resources/collection-process': {
    title: 'Our Collection Process',
    description: 'A Strategic and Ethical Approach to Debt Recovery',
    content: [
      'Our collection process is designed to maximize recovery while maintaining professional relationships. We use a multi-step approach that includes skip tracing, diplomatic communication, and legal action when necessary.',
      'We begin by analyzing each account to determine the best strategy. Our team then initiates contact through various channels, always adhering to FDCPA and other regulatory guidelines.',
      'If initial efforts are unsuccessful, we may recommend further action, including litigation through our network of experienced attorneys.'
    ],
    features: [
      'Initial Account Assessment',
      'Advanced Skip Tracing',
      'Diplomatic Communication',
      'Regulatory Compliance (FDCPA)',
      'Legal Action Recommendation',
      'Transparent Reporting'
    ]
  },
  'resources/client-training-videos': {
    title: 'Client Training Videos',
    description: 'Learn How to Maximize Your Recovery Results',
    content: [
      'We provide our clients with access to training videos that explain our process and offer tips for improving their internal credit and collection practices.',
      'These videos cover topics such as how to use our client portal, understanding our reports, and best practices for documenting debt.',
      'Our goal is to empower our clients with the knowledge they need to achieve the best possible outcomes.'
    ],
    features: [
      'Client Portal Tutorials',
      'Reporting Explanation',
      'Documentation Best Practices',
      'Expert Insights',
      'On-Demand Access'
    ]
  },
  'services': {
    title: 'Our Services',
    description: 'Comprehensive Debt Recovery and Revenue Cycle Management Solutions',
    content: [
      'Southwest Recovery Services provides a full suite of accounts receivable management solutions. We invest in the latest technologies to ensure the highest recovery rates for our clients.',
      'Our services include debt recovery, revenue cycle management, receivables management, and consulting services. We work on a contingency basis, meaning we only get paid when you do.'
    ],
    features: [
      'Debt Recovery Services',
      'Revenue Cycle Management',
      'Receivables Management',
      'Consulting Services',
      'Legal Collections'
    ]
  },
  'industries': {
    title: 'Industries We Serve',
    description: 'Industry-Specific Debt Collection Solutions Nationwide',
    content: [
      'Southwest Recovery Services has extensive experience across a wide range of industries. We understand the unique challenges and regulatory requirements of different sectors.',
      'Our specialists are trained to handle industry-specific collections with professionalism and efficiency.'
    ],
    features: [
      'Medical and Healthcare',
      'Commercial Collections',
      'Government and Municipality',
      'Logistics Management',
      'Automotive Finance',
      'Insurance and Subrogation',
      'Property Management',
      'Utility Collections'
    ]
  },
  'locations/addison-collection-agency': {
    title: 'Addison Debt Collection Agency',
    description: 'Southwest Recovery Services - Proudly Serving Addison, Texas',
    content: [
      'Do you spend hours chasing uncollected payments while juggling other priorities? Ignored emails, letters, and calls can strain your business and cash flow. Partnering with an experienced collection agency removes the frustration and helps ensure you get paid on time.',
      'Southwest Recovery Services (SWRS) is a nationally recognized debt collection agency proudly serving Addison, Texas. With our no-recovery, no-fee model, there’s no risk—we only get paid when you do.',
      'With over 20 years of experience, Southwest Recovery Services can work with you to collect money and recover lost revenue streams in nearly every industry and business sector.'
    ],
    features: [
      'No-recovery, no-fee model',
      'Over 20 years of experience',
      'Industry-specific debt recovery',
      'State and federal compliance',
      ' authorized credit bureau reporting',
      'Litigation support when necessary'
    ]
  },
  'locations/austin-collection-agency': {
    title: 'Austin Collection Agency',
    description: 'Your Austin, TX Debt Collection Agency',
    content: [
      'Southwest Recovery Services (SWRS) is the trusted Austin debt collection agency helping Texas businesses recover overdue accounts quickly and ethically. Whether you serve commercial or individual clients, our experienced team increases your cash flow and protects your reputation.',
      'We partner with small and mid-sized businesses in nearly every industry—health care, utilities, real estate, retail, and more. Working on a contingency basis means you pay nothing unless we successfully collect.',
      'In Texas, most debts have a four-year statute of limitations—after that, customers are no longer legally obligated to pay. Engaging a professional, third-party collection agency early increases your recovery rate and preserves your bottom line.'
    ],
    features: [
      'Asset location and recovery',
      'First-party and third-party collections',
      'Early-Out Recovery Program',
      'Pre-legal and legal collection strategies',
      'Litigation support and follow-through'
    ]
  },
  'locations/columbus-collection-agency': {
    title: 'Columbus Debt Collection Agency',
    description: 'Columbus Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is a trusted Columbus debt collection agency helping businesses and contractors recover unpaid balances. For more than 25 years, we’ve supported clients nationwide—including Columbus, Ohio—by securing overdue payments quickly and professionally.',
      'Our contingency model means we don’t get paid until you do. This ensures our agents are motivated to pursue every ethical strategy for your recovery.',
      'Time is critical. After 90–120 days past due, recovery odds decrease dramatically. Our trained agents act quickly, respectfully, and professionally to recover your funds without jeopardizing your customer relationships.'
    ],
    features: [
      'Contingency-based model',
      'Skip tracing and asset location',
      'Credit bureau reporting',
      'Legal action and litigation support',
      'Professional communication standards'
    ]
  },
  'locations/dallas-collection-agency': {
    title: 'Dallas Debt Collection Agency',
    description: 'Dallas Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services provides a wide range of debt collection services in Dallas and the DFW Metroplex. Accounts are matched to agent experience, knowledge, and ability for maximum efficiency and results.',
      'Properly reporting bad debt to the credit reporting agencies is a vital step in establishing an effective collection process. Southwest Recovery Services will report your assigned accounts to all nationwide consumer credit reporting agencies at your request.',
      'Dallas-Fort Worth ranks among the most debt-heavy areas in the nation. If your company is facing challenges collecting unpaid balances in Dallas, Southwest Recovery Services can help.'
    ],
    features: [
      'Daily audits and reporting',
      'Automated credit bureau submission',
      'Experienced Dallas debt collectors',
      'No upfront costs',
      'Proven recovery strategies'
    ]
  },
  'locations/denver-debt-collection-agency': {
    title: 'Denver Debt Collection Agency',
    description: 'Denver Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is a trusted Denver debt collection agency serving Colorado businesses and contractors for over 25 years. We help companies of every size recover unpaid balances quickly and professionally.',
      'We operate on a no-recovery, no-fee basis—our success depends on yours. This motivates our agents to use every compliant strategy available.',
      'Our Denver team is fully trained to comply with federal, Colorado state, and local regulations—protecting your business from legal exposure.'
    ],
    features: [
      'No-recovery, no-fee basis',
      'Negotiation techniques that maintain goodwill',
      'Skip tracing and asset location',
      'Colorado state compliance expertise',
      'Comprehensive accounts receivable management'
    ]
  },
  'locations/houston-collection-agency': {
    title: 'Houston Debt Collection Agency',
    description: 'Your Houston, TX Debt Collection Agency',
    content: [
      'Southwest Recovery Services (SWRS) provides creative, ethical solutions to recover outstanding debts in Houston and beyond. Rather than exhausting valuable resources on collections in-house, trust experienced professionals to focus solely on recovering your debts.',
      'No matter your industry or account complexity, SWRS offers contingency-based collections and personalized strategies for your business.',
      'We prioritize integrity and reputation among almost all else when collecting debt; any agency that uses shady methods to collect damages your reputation.'
    ],
    features: [
      'Ethical & Compliant Practices',
      'Advanced Technology & AI',
      'Nationwide Coverage, Local Expertise',
      'No Collections, No Fees',
      '24/7 availability for support'
    ]
  },
  'locations/midland-collection-agency': {
    title: 'Midland Debt Collection Agency',
    description: 'Midland, TX Debt Collection Agency for Small, Medium, and Large Businesses',
    content: [
      'Southwest Recovery Services (SWRS) is your dedicated Midland debt collection agency, delivering creative solutions to maximize recoveries. For more than 25 years, we’ve partnered with businesses to boost collections and profit potential.',
      'The issue of oil and gas debt is a growing problem in Midland, Texas. We understand that oil and gas concerns can be a highly technical industry to work with, and we adopt a tactical approach when handling these situations.',
      'Our dedicated collections team in Midland is composed of well-trained agents who deal with stubborn customers in a firm but friendly way.'
    ],
    features: [
      'Oil and Gas Industry Expertise',
      'Automated credit reporting',
      'Firm but friendly negotiation',
      'Omnichannel outreach',
      'Advanced security measures'
    ]
  },
  'locations/oklahoma-city-collection-agency': {
    title: 'Oklahoma City Debt Collection Agency',
    description: 'Oklahoma City Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is your third-party Oklahoma City debt collection agency, serving OKC and surrounding communities. We develop creative, compliant solutions that optimize your collections process and protect your reputation.',
      'Managing accounts receivable can be complex and time-consuming. Our specialists bring 25+ years of experience and follow all local, state, and federal regulations while strengthening your cash flow.',
      'We work with businesses and consumers nationwide every day and tailor our approach to your situation.'
    ],
    features: [
      '25+ years of experience',
      'Respectful, brand-safe communication',
      'B2B and B2C expertise',
      'State-of-the-art skip tracing',
      'No minimum monetary debt requirements'
    ]
  },
  'locations/san-antonio-collection-agency': {
    title: 'San Antonio Debt Collection Agency',
    description: 'San Antonio Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is a trusted San Antonio debt collection agency with over two decades of experience. We resolve overdue business debt quickly and ethically.',
      'Texas enforces a four-year statute of limitations on debt collection. Waiting too long to collect puts your right to sue at risk and lowers recovery odds.',
      'As a full-service agency, SWRS protects your reputation while mitigating business risk. Our four-stage process ensures efficiency and professionalism.'
    ],
    features: [
      '24/7 Online Access to track claims',
      'Customized Workflows',
      'FDCPA, FCRA, HIPAA compliance',
      'Verify Contact Information using professional databases',
      'Determining the Cause of Debt'
    ]
  },
  'locations/snellville-collection-agency': {
    title: 'Atlanta Debt Collection Agency',
    description: 'Atlanta Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is the trusted Atlanta debt collection agency helping Georgia businesses recover overdue accounts quickly and professionally.',
      'In Georgia, most written contracts carry a six-year statute of limitations and most oral agreements a four-year limit. Acting early improves recovery rates and reduces risk.',
      'SWRS delivers full-service recovery and receivables support so you can focus on running your business.'
    ],
    features: [
      'Georgia state compliance expertise',
      'Revenue Cycle Management optimization',
      'Transparent Reporting with 24/7 access',
      'Reputation Protection',
      'No-Recovery, No-Fee'
    ]
  },
  'locations/st-louis-collection-agency': {
    title: 'St. Louis Debt Collection Agency',
    description: 'St. Louis Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWRS) is a trusted St. Louis debt collection agency helping Missouri businesses recover money owed by former and current customers.',
      'We’re known nationwide for an ethical, compliant, and compassionate approach that doesn’t sacrifice results. As a contingency-based agency, we don’t get paid unless you do.',
      'Most businesses escalate accounts to collections between 90–120 days past due—but earlier placement (around 30 days) typically improves outcomes.'
    ],
    features: [
      'Missouri requirements compliance',
      'Ethical strategies preserving goodwill',
      'Latest technology and AI tools',
      'Trained and equipped collectors',
      'No upfront charges'
    ]
  },
  'locations/tampa-collection-agency': {
    title: 'Tampa Debt Collection Agency',
    description: 'Tampa Debt Collection Agency - Southwest Recovery Services',
    content: [
      'Southwest Recovery Services (SWR) is a trusted Tampa debt collection agency helping Florida businesses recover outstanding balances from current and former customers.',
      'In Florida, the statute of limitations for many written contracts is typically five years. Waiting risks your ability to pursue legal remedies.',
      'We tailor strategies to your industry, account profile, and customer situation to reach a speedy, respectful resolution.'
    ],
    features: [
      'Florida statute of limitations expertise',
      'Custom Debt Recovery Solutions',
      'Partnerships with attorneys',
      'No upfront charges for placement',
      'Monthly credit bureau reporting'
    ]
  },
  'about/team': {
    title: 'Our Team',
    description: 'Experts in Debt Recovery and Financial BPO',
    content: [
      'Southwest Recovery Services is proud to have a team of highly experienced professionals dedicated to providing the best possible service to our clients.',
      'Our advisors and collectors are trained in the latest ethical collection practices and are committed to maintaining the highest standards of professionalism.',
      'We work together to ensure that your business achieves its financial goals.'
    ],
    features: [
      'Experienced Advisors',
      'Certified Collectors',
      'Ethical Standards',
      'Professional Training',
      'Dedicated Support'
    ]
  },
  'about/history': {
    title: 'Our History',
    description: 'Converting Problems To Profits Since 2004',
    content: [
      'Southwest Recovery Services was founded in 2004 with a mission to provide ethical and effective debt recovery solutions.',
      'Over the past two decades, we have grown into a nationally recognized leader in financial BPO, with locations across six states.',
      'Our commitment to innovation and excellence has remained constant throughout our history.'
    ],
    features: [
      'Founded in 2004',
      '20+ Years of Excellence',
      'National Recognition',
      'Steady Growth',
      'Innovation-Driven'
    ]
  },
  'about/learn-more': {
    title: 'Why Choose Us',
    description: 'The Southwest Recovery Advantage',
    content: [
      'Choosing the right collection agency is critical for your business. At Southwest Recovery Services, we offer a unique combination of experience, technology, and ethics.',
      'We work on a contingency basis, so we only get paid when you do. This ensures that our interests are perfectly aligned with yours.',
      'Our diplomatic approach preserves your customer relationships while maximizing your recovery results.'
    ],
    features: [
      'Contingency-Based Pricing',
      'Diplomatic Approach',
      'Advanced Technology',
      'Industry Expertise',
      'Proven Success Rates'
    ]
  },
  'industries/automotive-finance-collections': {
    title: 'Automotive Finance Collections',
    description: 'Comprehensive Solutions for Vehicle Lenders',
    content: [
      'As an automobile lender, you face instances where the customer has failed to pay their loan. Southwest Recovery Services offers collection services for the auto finance industry to handle potentially tense situations with poise and professionalism.',
      'Our team has over 100 years of combined auto finance and deficiency collection experience. We manage collections for a range of services, including repossessions and charged-off car loans.',
      'Our person-centered approach ensures your customers are treated with dignity and respect as we pursue the principal balance and unpaid fees.'
    ],
    features: [
      'Deficiency Balance Recovery',
      'Charged-Off Loan Strategies',
      'Repossession Services',
      'Ethical Standards',
      'Economic Fluctuation Navigation',
      'Free Credit Reporting'
    ]
  },
  'industries/automotive-finance-collections/auto-lender-collection-services': {
    title: 'Auto Lender Collection Services',
    description: 'Professional Representation for Auto Lenders',
    content: [
      'As an organization providing loans for auto purchases, trying to collect unpaid bills can be a waste of important resources and affect employee morale.',
      'Instead of investing additional resources in revenue recovery, work with experienced professionals. Every member of our team knows the best methods for reliable and professional contact.',
      'By maintaining a polite, calm, but firm mindset, our staff can engage in collection efforts that do not damage your overall image or your brand.'
    ],
    features: [
      'Professional Representation',
      'Industry Knowledge & Resources',
      'High Standards of Politeness',
      'Maximize ROI',
      'Efficient Time Management'
    ]
  },
  'industries/commercial-collections': {
    title: 'Commercial Collections',
    description: 'B2B Debt Recovery Solutions',
    content: [
      'Commercial collections, also known as business-to-business (B2B) collections, are much different from consumer collections. Often, underlying issues and disputes allow a customer to delay payment or not pay at all.',
      'Smaller businesses can’t afford not to get paid promptly. It can be devastating to a startup or small business if they aren’t being paid on time. Southwest Recovery Services understands how to effectively assess and manage commercial accounts for companies from almost every industry.',
      'Our success rates are well above the industry average due to our highly trained agents who specialize in business-to-business collections and the collection and resolution of large debts.'
    ],
    features: [
      'Firm B2B Recovery Strategies',
      'Skip Tracing and Asset Searches',
      'Legal Action and Litigation Support',
      'Customized Reporting',
      'Segmenting Consumers by Risk',
      'Building Trust With Clients',
      'No Upfront Fees'
    ]
  },
  'industries/commercial-collections/b2b-collections': {
    title: 'B2B Collections',
    description: 'Protecting the Foundation of B2B Relationships',
    content: [
      'Business-to-business (B2B) working arrangements are often lucrative with longer sales cycles. At Southwest Recovery Services, we protect the foundation of B2B relationships while protecting your bottom line with our superior collection processes.',
      'Working capital is the lifeblood that sustains the day-to-day operations of your B2B business. When debt is left unpaid, your capital shrinks, limiting your operations along with it.',
      'Our agents understand the nature of B2B partnerships to preserve recurring revenue. We employ calculated strategies for debt recovery with a firm but diplomatic approach.'
    ],
    features: [
      'Increase Working capital',
      'Collect Overdue Invoices',
      'Preserve Recurring Revenue',
      'Diplomatic Recovery Approach',
      'Legal Action Evaluation'
    ]
  },
  'industries/commercial-collections/private-school-collections': {
    title: 'Private School Collections',
    description: 'Recovering Delinquent Tuition Accounts',
    content: [
      'Private schools depend on timely tuition payments to fund their programs. Unfortunately, some parents struggle to fit private school tuition into their budgets, so they fall behind on their payments.',
      'Southwest Recovery Services uses advanced technology to keep track of your billing system and identify delinquent accounts as soon as they appear. We act on debts right away, and our proven approach allows us to collect payment quickly.',
      'We listen to the struggles of your clients and work with them to make the most beneficial agreement for everyone involved, preserving your school’s good name.'
    ],
    features: [
      'Tuition Recovery',
      'Preserve School Reputation',
      'Firm but Friendly Approach',
      'Ethical Debt Collection',
      'Advanced Billing Tracking'
    ]
  },
  'industries/commercial-collections/retail-collections': {
    title: 'Retail Collections',
    description: 'Debt Recovery for Retailers and Large Purchases',
    content: [
      'Retailers mostly sell goods and receive payments at the point of sale. However, sometimes there could be a reason for a customer to be extended payment terms or in-store credit, typically with large purchases like appliances or furniture.',
      'When you extend credit, there is always a risk that the customer will take the product and never pay the bill. Southwest Recovery Services is a Dallas-based collection agency with national and global reach.',
      'Our Retail Contingency Collection Program is the most economical solution for debt recovery, with no upfront fees and guaranteed results.'
    ],
    features: [
      'No Upfront Fees',
      'Asset and Liability Investigation',
      'Timed Letter Series',
      'Credit Bureau Reporting',
      '24/7 Online Reporting'
    ]
  },
  'industries/commercial-collections/roof-contractor-collections': {
    title: 'Roof Contractor Collections',
    description: 'Debt Collection for Roofing and Construction',
    content: [
      'Roofing is one of the most important construction jobs, but getting business owners to pay for services by the agreed-upon date can be a struggle. If you’ve already done the work, you need to be paid in full to afford labor and materials for your next job.',
      'Construction is an extremely competitive industry; companies that don’t act quickly can easily fall behind. Southwest Recovery Services is dedicated to promoting the success of your business by collecting on your unpaid accounts.',
      'We understand construction billing cycles, retainage agreements, and payment delays, allowing us to recover outstanding balances efficiently while protecting your business relationships.'
    ],
    features: [
      'Construction-Specific Strategies',
      'No Out-of-Pocket Costs',
      'Preserve Client Relationships',
      'Dispute Resolution',
      'Frequent Follow-up Efforts'
    ]
  },
  'industries/consumer-collections': {
    title: 'Consumer Collections',
    description: 'Ethical Consumer Debt Recovery',
    content: [
      'Consumer accounts receivable management covers just about everything that engages in any extension of credit or a point-of-sale transaction. Southwest Recovery is a nationally recognized Third-Party receivables management company with success in nearly all consumer credit markets since 2004.',
      'We can assist with locating and contacting consumers quickly, finding bankruptcy and deceased account holders, and utilizing predictive score models.',
      'We are governed by the FDCPA, CFPB, and FCRA, and are 20-year members of the American Collectors Association (ACA).'
    ],
    features: [
      'Consumer-Specific Methodologies',
      'Ethical Negotiation Tactics',
      'FDCPA & FCRA Compliance',
      'Predictive Score Models',
      'Credit Bureau Reporting',
      'Complaint Management'
    ]
  },
  'industries/consumer-collections/b2c-fintech-collections': {
    title: 'B2C FinTech Collections',
    description: 'Debt Recovery for Financial Technology Platforms',
    content: [
      'If your B2C FinTech platform is struggling with collecting payments from your consumers, Southwest Recovery Services has you covered. Whether you are a vendor for Venmo, Paypal, Quickbooks, or any other platform, we can recover the debt fast.',
      'Money is a sensitive topic; you don’t want to approach the conversation in the wrong light and offend your consumers. We care about your brand image as much as you do.',
      'Our agents follow state and federal laws and regulations to conduct ethical collections, striving to collect outstanding debts as quickly as possible.'
    ],
    features: [
      'FinTech Industry Expertise',
      'Preserve Brand Image',
      'Respectful Outreach',
      'Effective Negotiation',
      'Contingency-Based (No Upfront Fees)'
    ]
  },
  'industries/consumer-collections/gym-membership-collections': {
    title: 'Gym Membership Collections',
    description: 'Recovering Unpaid Fitness Center Fees',
    content: [
      'Most gym owners consider unpaid membership fees to be their biggest obstacle to success. You need this vital revenue to stay in business, but you don’t want to strong-arm your members or harass them.',
      'Southwest Recovery Services specializes in debt recovery without the high-pressure methods of the past. We use positive member interactions, flexible negotiations, and convenient online payment options.',
      'We preserve your member relationships and your company’s good name while getting you the money you’re owed.'
    ],
    features: [
      'Positive Member Interactions',
      'Flexible Payment Plans',
      'Online Payment Options',
      'No Minimum Debt Requirements',
      'Dedicated Point of Contact'
    ]
  },
  'industries/government-and-municipality-collections': {
    title: 'Government & Municipality Collections',
    description: 'Efficient Recovery for Public Entities',
    content: [
      'Many municipalities provide utility services to their citizens. But what does a city do when a customer doesn’t pay a past-due service bill? Southwest Recovery Services offers efficient municipal collections services that allow us to recover debts professionally and ethically.',
      'If fines and charges for other services remain unpaid, the municipality and the citizens must cover the shortages with additional taxes and higher service fees. Trying to track down those who haven’t paid their bills is time-consuming.',
      'We currently represent hundreds of cities and municipalities, providing skip tracing, bankruptcy identification, and predictive behavior scoring.'
    ],
    features: [
      'Fine and Fee Recovery',
      'Tax Collection Support',
      'Transparent Reporting',
      'Skip Tracing & Customer Location',
      'Predictive Behavior Scoring',
      'Same-Day Response Time'
    ]
  },
  'industries/government-and-municipality-collections/bail-bonds-debt-collection': {
    title: 'Bail Bonds Collections',
    description: 'Debt Recovery for Bail Bond Agencies',
    content: [
      'Bail bondsmen make it possible for suspects to get out of jail, but when clients default on their payments, the bondsman takes a loss on the money they fronted. Don’t let unpaid bail bond debt harm your business.',
      'Southwest Recovery Services uses cutting-edge technology to find and address delinquent accounts as soon as possible, helping keep your cash flowing.',
      'We balance fast, effective debt collection with professional and polite representation of your business, ensuring you don’t have to choose between your reputation and your cash flow.'
    ],
    features: [
      'Fast Debt Recovery',
      'Uphold Agency Reputation',
      'Ethical and Compliant Tactics',
      'Skip Tracing Tools',
      'No Upfront Fees'
    ]
  },
  'industries/insurance-and-subrogation-collections': {
    title: 'Insurance & Subrogation Collections',
    description: 'Recovering Losses for the Insurance Industry',
    content: [
      'Insurance companies process damage claims, and subrogation is often involved. Southwest Recovery Services can collect claims as your trusted insurance debt collection agency.',
      'We partner with policyholders to settle disputes and ensure all parties are cared for. Our approach includes credit risk and file evaluation with legal action when necessary.',
      'We can help collect earned premiums, audit premiums, subrogation files, unpaid deductibles, and bonds.'
    ],
    features: [
      'Subrogation Expertise',
      'Loss Recovery Strategies',
      'Audit Premium Collection',
      'Deductible & Bond Recovery',
      'Legal Action Support',
      'Nationwide Presence'
    ]
  },
  'industries/medical-and-healthcare-collections': {
    title: 'Medical & Healthcare Collections',
    description: 'Specialized Revenue Cycle Management for Healthcare Providers',
    content: [
      'With many households in the U.S. having medical debt, many health care organizations are trying to provide services without the proper funds. Over time, this can reduce the quality of services or cause you to limit your staff to keep the organization profitable while maintaining a high level of care.',
      'Southwest Recovery Services understands the complexities of medical billing and healthcare collections. We help providers maximize their revenue while maintaining positive patient relationships.',
      'Our team is well-versed in HIPAA compliance and the unique regulatory environment of the healthcare industry. We focus on ethical collection practices and building trust with patients while protecting your bottom line.',
      'We handle self-pay recovery, insurance follow-up, and denial management with a patient-friendly approach that preserves your reputation.'
    ],
    features: [
      'HIPAA Compliant Processes',
      'Patient-Friendly Collection Strategies',
      'Insurance Follow-up',
      'Self-Pay Recovery',
      'Expertise in Health Care Regulations',
      'Protecting Your Bottom Line',
      'Denial Management'
    ]
  },
  'industries/medical-and-healthcare-collections/ems-debt-collections': {
    title: 'EMS Collections',
    description: 'Specialized Debt Recovery for Emergency Medical Services',
    content: [
      'Emergency medical service providers receive over 40,000 requests for help each year. With poor collections, these services are left to operate with low funding, making it harder to save lives.',
      'Southwest Recovery Services locates and contacts the patients or responsible parties of delinquent accounts to recover patient information and reduce non-billables.',
      'We stand with the medical community in prioritizing healthcare services to those who need them most. Our agents understand that emergency medical responders serve at the frontline to preserve lives.'
    ],
    features: [
      'Reduce Non-Billable Accounts',
      'Locate Missing Patient Info',
      'Medicare & Insurance Follow-up',
      'Flexible Payment Options',
      'Commitment to Saving Lives'
    ]
  },
  'industries/medical-and-healthcare-collections/mental-health-care-collection-agency': {
    title: 'Mental Health Care Collections',
    description: 'Compassionate Debt Recovery for Therapists and Practitioners',
    content: [
      'Mental health care is in greater demand than ever before. With increased patient load comes increased billing, and unfortunately, more unpaid invoices. Insurance changes, errors, and cancellations are common points of dispute.',
      'As a mental health professional, your duty is to your patients’ mental well-being. That can make collecting past due payments especially challenging. Southwest Recovery Services is especially qualified to handle mental health care collections because of our compassionate approach.',
      'You can be assured that your patients will be treated with the same kindness and care that you would extend, while still confidently pursuing a resolution.'
    ],
    features: [
      'Compassionate Approach',
      'Preserve Patient Trust',
      'HIPAA Compliance',
      'Contingency-Based (No Risk)',
      'Specialized Medical Debt Expertise'
    ]
  },
  'industries/logistics-management-collections': {
    title: 'Logistics Management Collections',
    description: 'A/R Solutions for Transportation and Logistics',
    content: [
      'The logistics industry is the heart and soul of almost every industry in the United States. Increased costs in fuel and maintenance have put additional financial pressure on many companies.',
      'Southwest Recovery Services understands the unique challenges that create difficulty with unpaid debts and understands how to work through transportation industry claims.',
      'We can aggressively but professionally pursue your unpaid freight bills and work through the most complicated accounts, from damage claims to rate disputes.'
    ],
    features: [
      'Freight Bill Recovery',
      'Transportation Claim Expertise',
      'Rate Dispute Resolution',
      'Proactive Communication',
      'Skip Tracing & Asset Location'
    ]
  },
  'industries/logistics-management-collections/trucking-transportation-collections': {
    title: 'Trucking & Transportation Collections',
    description: 'Debt Recovery for the Trucking Industry',
    content: [
      'America relies on trucking and transportation services every day. Trucking companies, meanwhile, rely on regular payments from their customers to continue in business.',
      'If outstanding debts aren’t settled as quickly as possible, they can cost you money and hurt your bottom line. Southwest Recovery can help you safeguard your cash flow and avoid further debt.',
      'Our skilled recovery agents know how to handle conflicts and reach solutions without jeopardizing your client relationships.'
    ],
    features: [
      'Safeguard Cash Flow',
      'Preserve Client Goodwill',
      'Dispute Resolution',
      'Frequent Follow-up Efforts',
      'No Out-of-Pocket Cost'
    ]
  },
  'industries/oil-and-gas-collections': {
    title: 'Oil and Gas Collections',
    description: 'Specialized Recovery for the Energy Sector',
    content: [
      'Oilfield service companies can experience cash flow problems due to high expenses. Late payments can cause chaos, leading many companies to halt operations.',
      'Southwest Recovery Services understands the volatility and uncertainty of the oil and gas industry. We provide strong recovery results on accounts that become 90 days past due or beyond.',
      'Our extensive experience in the energy sector allows for cost-effective and maximum recoveries, working through difficult and disputed accounts.'
    ],
    features: [
      'Energy Sector Expertise',
      'Midland, TX Local Services',
      'Pre-Legal Review & Assessment',
      'Mediation and Arbitration',
      'First and Third-Party Collections',
      'Industry Compliance (HIPAA, FDCPA)'
    ]
  },
  'industries/property-management-collections': {
    title: 'Property Management Collections',
    description: 'Rent Recovery for Residential and Commercial Property',
    content: [
      'As a property manager, timely rent collection means you can continue to meet your financial obligations. Late tenant payments can set you behind and create strained relationships.',
      'Southwest Recovery Services can help create strategies for recovering unpaid rent in residential or commercial properties. We handle all aspects of debt collection, including correspondence, regulations, and recovery.',
      'We understand the challenges of owning rental properties, from evictions and broken leases to property damage.'
    ],
    features: [
      'Residential Rent Recovery',
      'Commercial Lease Defaults',
      'Eviction & Broken Lease Handling',
      'Credit Bureau Reporting',
      'Legal Action Support',
      'Proactive Communication'
    ]
  },
  'industries/property-management-collections/commercial-property-management': {
    title: 'Commercial Property Management',
    description: 'B2B Lease and Rent Recovery',
    content: [
      'Commercial leases are B2B and much more detailed and complex than standard home rental agreements. When a tenant stops paying rent or has broken their lease, this can be detrimental to a commercial property owner.',
      'Southwest Recovery Services is skilled at locating tenants who may have skipped out and moved to another location. Evictions where the tenant is operating at a new location can often be salvaged.',
      'Tenants who have closed up their business but where there is a personal guarantee on the lease can be aggressively pursued.'
    ],
    features: [
      'B2B Lease Expertise',
      'Locate "Skip" Tenants',
      'Personal Guarantee Pursuit',
      'Legal Action Evaluation',
      'High Recovery Rates'
    ]
  },
  'industries/property-management-collections/residential-property-management': {
    title: 'Residential Property Management',
    description: 'Delinquent Rent and Damage Recovery',
    content: [
      'Residential property management companies work to provide clean, safe and well-kept homes. Tenants not paying rent lead to time-consuming follow-up processes and evictions.',
      'Broken leases, evictions, and property damages are almost always part of the unpaid amounts owed. Our team is skilled at locating a tenant who has skipped out and doesn’t want to be contacted.',
      'Unpaid property management accounts appearing on a tenant’s credit report will be seen by other management companies, encouraging resolution of the debt.'
    ],
    features: [
      'Tenant Background Check Impact',
      'Credit Bureau Reporting',
      'Locate Missing Tenants',
      'NARPM Recognized Member',
      'Over 20 Years of Service'
    ]
  },
  'industries/utility-collections': {
    title: 'Utility Debt Collections',
    description: 'Billing Recovery for Utility Providers',
    content: [
      'Collecting customer accounts is a critical part of the utilities business. Utility providers must have an effective process for recovering from late or non-payers.',
      'Southwest Recovery Services is a 20-year leader in utility industry receivables management. Our company services hundreds of thousands of utility accounts annually and returns millions of dollars for our clients.',
      'We address issues involving billing disputes and fraud, utilizing top-tier technology to locate non-responsive customers.'
    ],
    features: [
      'First-Party Utility Billing',
      'Third-Party Debt Recovery',
      'Billing Dispute Resolution',
      'Fraud Identification',
      'Skip Tracing & Asset Location',
      'E-Statement Strategies'
    ]
  },
  'industries/utility-collections/restoration-company-debt-collections': {
    title: 'Restoration Company Collections',
    description: 'Debt Recovery for Residential Restoration Services',
    content: [
      'Residential restoration companies have an important role in serving homeowners in crisis. Unfortunately, there are many instances where a homeowner may not pay their final invoice.',
      'Unpaid invoices can be a major problem for a growing restoration company. After 90 days, these outstanding debts become much more difficult to collect in-house.',
      'Southwest Recovery Services is a contingency collection agency. We work on collecting the debt at no up-front cost and charge our fee when the debt is paid.'
    ],
    features: [
      'No Upfront Costs',
      'Respectful Customer Treatment',
      'Win Repeat Business',
      'Legal & Credit Reporting Tools',
      'Specialized Restoration Expertise'
    ]
  },
  'industries/utility-collections/waste-management-collection-services': {
    title: 'Waste Management Collections',
    description: 'Recovering Unpaid Bills for Waste Services',
    content: [
      'In the waste management business, trying to collect unpaid bills can be a constant drain on resources and morale. The more time your company spends on accounts that are not balanced, the lower the total return.',
      'Instead of investing additional resources in tracking balances, work with an organized team of debt collection experts. Every member of our team knows the best methods for professional contact.',
      'By maintaining a polite, calm, but firm mindset, our staff can engage in collection efforts that do not produce negative reactions that could damage your brand.'
    ],
    features: [
      'Professional Representation',
      'Industry Knowledge & Support',
      'Polite and Firm Mindset',
      'Efficient Resource Management',
      'Positive Atmosphere of Communication'
    ]
  },
  'services/debt-recovery': {
    title: 'Debt Recovery Services',
    description: 'Professional, Legal and Ethical Practices',
    content: [
      'Our core service is professional debt recovery. We use a combination of diplomatic communication and advanced technology to recover outstanding debts for our clients.',
      'As a nationally recognized contingency based debt recovery service, we provide our debt collections services based on professional, legal and ethical practices. Our clients pay no up-front fees and only pay when we have successfully recovered their money.',
      'We serve a wide range of industries including automotive, commercial, consumer, government, insurance, medical, logistics, and more. Our process and superior practices maximize debt recoveries and reduce risk.'
    ],
    features: [
      'Contingency-Based Collections',
      'Early Out Recovery Program',
      'Account Assessment & Recommendation',
      'Pre-Legal Collection Strategy',
      'Litigation & Post-Judgment Remedies',
      'Asset Location and Recovery',
      'Credit Bureau Reporting'
    ]
  },
  'services/legal-collections': {
    title: 'Legal Collections',
    description: 'Litigation and Post-Judgment Recovery Solutions',
    content: [
      'When traditional collection efforts are exhausted, Southwest Recovery Services offers legal collection solutions through our network of experienced attorneys.',
      'We evaluate each account for litigation potential and manage the entire legal process, from filing a lawsuit to post-judgment remedies.',
      'Our legal team is skilled in asset location, wage garnishment, and bank levies to ensure that you receive the money you are owed.'
    ],
    features: [
      'Litigation Potential Evaluation',
      'Expert Legal Representation',
      'Post-Judgment Remedies',
      'Asset Location & Seizure',
      'Wage Garnishment',
      'Bank Levies',
      'Nationwide Legal Network'
    ]
  },
  'services/revenue-cycle-management': {
    title: 'Revenue Cycle Management',
    description: 'Optimizing Your Financial Performance',
    content: [
      'We offer end-to-end revenue cycle management solutions to help businesses streamline their cash flow and reduce administrative burdens.',
      'From billing to collections, we manage the entire process so you can focus on your core business. Our RCM services reduce denials and speed up cash collection.',
      'We provide streamlined administration, regulatory compliance, automated claims processing, and health care revenue cycle analytics. Our dedicated RCM teams are experienced in all aspects of medical transcription, billing, and appeals.'
    ],
    features: [
      'End-to-End Billing Solutions',
      'Denial Management',
      'Cash Flow Optimization',
      'Detailed Analytics',
      'Regulatory Compliance (HIPAA)',
      'Automated Claims Processing',
      'Insurance Verification'
    ]
  },
  'services/accounts-receivable-management': {
    title: 'Accounts Receivable Management',
    description: 'Enhancing Cash Flow and Financial Predictability',
    content: [
      'Reduce DSO and improve cash flow with our outsourced A/R management services. We handle billing, follow-up, and reporting with tailored collection workflows.',
      'Southwest Recovery Services represents and services businesses by providing proactive accounts receivable management that improves liquidity. Our goal is to help our clients stay in front of invoicing and receive payments consistently.',
      'Our team works as an extension of your office, ensuring that your receivables are managed professionally and efficiently without harming valuable customer relationships.'
    ],
    features: [
      'DSO Reduction',
      'Outsourced Billing',
      'Tailored Workflows',
      'Reporting and Analytics',
      'Liquidity Improvement',
      'Professional Representation',
      'Predictable Cash Flow'
    ]
  },
  'about/careers': {
    title: 'Careers at SW Recovery',
    description: 'Join Our Growing Team of Professionals',
    content: [
      'Are you looking for a rewarding career in the financial services industry? Southwest Recovery Services is always looking for talented and motivated individuals to join our team.',
      'We offer a dynamic and supportive work environment, competitive compensation, and opportunities for growth and development. Our team is dedicated to ethical, professional, and diplomatic service.',
      'Southwest Recovery Services is a national collection agency with offices in Texas, Oklahoma, Missouri, Ohio, Florida, and Georgia.'
    ],
    features: [
      'Dynamic Work Environment',
      'Competitive Compensation',
      'Growth Opportunities',
      'Supportive Team Culture',
      'Nationwide Presence'
    ]
  },
  'services/business-process-outsourcing': {
    title: 'Business Process Outsourcing (BPO)',
    description: 'Streamline Operations. Lower Costs. Maximize Productivity.',
    content: [
      'Southwest Recovery Services is expanding beyond collections to deliver full-scale Business Process Outsourcing (BPO) solutions. We empower your business to offload critical but time-consuming tasks to proven professionals.',
      'BPO enables companies to reduce operational overhead, improve service efficiency, and access skilled support through strategic outsourcing of routine tasks and support functions.',
      'Our service platform is built on trusted, secure, and intelligent systems, including AWS, TrueAccord, and Aktos.Ai, ensuring seamless operations and cutting-edge capabilities.'
    ],
    features: [
      'Secure Payment Processing',
      'Professional Invoicing & Billing',
      'Custom API Integrations',
      'AI-Driven Recovery Automation',
      'Omnichannel Communications',
      'HIPAA, PCI, and SOC Compliance'
    ]
  },
  'services/consulting-services': {
    title: 'Consulting Services',
    description: 'Pinpointing Bottlenecks and Optimizing Cash Flow',
    content: [
      'Southwest Recovery Services offers collection consulting services that can enhance your company’s cash flow by pinpointing bottlenecks in your current collections practices.',
      'We provide customized techniques and resources to streamline your accounts receivable process. Our advisors help create clear, concise credit policies and propose appropriate collection processes.',
      'We share strategies for training your staff in best practices relating to invoicing, customer communication, and policy documentation.'
    ],
    features: [
      'Process Evaluation & Optimization',
      'Credit Policy Creation',
      'Staff Training & Education',
      'Strategic Recovery Planning',
      'Compliance & Regulatory Guidance',
      'Invoicing System Recommendations'
    ]
  },
  'testimonials': {
    title: 'Customer Testimonials',
    description: 'What Our Customers Say About Us',
    content: [
      'At Southwest Recovery Services, we pride ourselves on delivering exceptional results and building strong partnerships. Our clients value our persistence, professionalism, and dedication to their success.',
      '“The attention and determination offered by the staff of Southwest Recovery Services is top notch. It took almost three years of hard work and dedication, but they never gave up on my case. I appreciate the persistence the staff has for working on cases.”',
      '“Thank you!! Your team has been great to work with. We LOVE when they pay in full.”'
    ],
    features: [
      '10-Star Service Reputation',
      'Persistent Debt Recovery',
      'Professional Staff',
      'Transparent Client Portal',
      'Proven Results Since 2004'
    ]
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description: 'How We Protect Your Data',
    content: [
      'Southwest Recovery Services is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.',
      'We collect information that you provide to us directly, such as when you request a quote or contact us. We also collect information automatically through cookies and similar technologies.',
      'We use your information to provide our services, communicate with you, and improve our website. We do not sell your personal information to third parties.'
    ],
    features: [
      'Data Protection Commitment',
      'Transparent Information Collection',
      'Secure Data Storage',
      'Privacy Rights Compliance',
      'No Third-Party Data Selling'
    ]
  },
  'terms-of-service': {
    title: 'Terms of Service',
    description: 'Rules and Regulations for Using Our Website',
    content: [
      'By accessing or using the Southwest Recovery Services website, you agree to be bound by these Terms of Service.',
      'You agree to use our website only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information.',
      'We reserve the right to modify or terminate our services at any time without notice. We are not liable for any damages arising from your use of our website.'
    ],
    features: [
      'User Responsibilities',
      'Service Limitations',
      'Intellectual Property Rights',
      'Dispute Resolution',
      'Governing Law'
    ]
  },
  'sms-opt-in-out': {
    title: 'SMS Opt-In/Out',
    description: 'Manage Your Communication Preferences',
    content: [
      'Southwest Recovery Services offers SMS communication for account updates and reminders. By providing your phone number, you consent to receive text messages from us.',
      'You can opt-out of SMS communications at any time by replying "STOP" to any message you receive. Message and data rates may apply.',
      'We value your privacy and will only use your phone number for the purposes stated in our Privacy Policy.'
    ],
    features: [
      'Consent-Based Communication',
      'Easy Opt-Out (STOP)',
      'Message Frequency Disclosure',
      'Data Rate Information',
      'Privacy Protection'
    ]
  }
};






