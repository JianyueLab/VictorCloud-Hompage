import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Define TypeScript interfaces for our data structure
interface DisclosureItem {
  label: string;
  value: string | string[];
  isList?: boolean;
  isMultiParagraph?: boolean;
}

interface DisclosureSection {
  title: string;
  subtitle: string;
  items: DisclosureItem[];
}

interface DisclosureData {
  pageTitle: string;
  pageDescription: string;
  businessInformation: DisclosureSection;
  purchaseInformation: DisclosureSection;
  returnsPolicy: DisclosureSection;
}

// All page content is defined in this object for easy editing
const disclosureData: DisclosureData = {
  pageTitle: 'Commercial Disclosure',
  pageDescription:
    'In compliance with Japanese law, we provide the following information about our business.',

  businessInformation: {
    title: 'Business Information',
    subtitle: 'Business registration and contact details.',
    items: [
      { label: 'Legal Name', value: 'Yan Zhuang' },
      { label: 'Address', value: 'We will disclose without delay if requested' },
      { label: 'Phone Number', value: 'We will disclose without delay if requested' },
      { label: 'Email Address', value: 'support@victorcloud.io' },
      {
        label: 'Email Support Hours',
        value: '9:00 - 18:00 JST (excluding weekends and holidays)',
      },
      { label: 'Head of Operations', value: 'Jianyue Hugo Liang, Yan Zhuang' },
    ],
  },

  purchaseInformation: {
    title: 'Purchase Information',
    subtitle: 'Details about pricing, payment, and delivery.',
    items: [
      {
        label: 'Price',
        value:
          'Amounts listed on each product page (Including consumption tax)',
      },
      {
        label: "Additional Fees",
        value: "No additional fees",
        isList: false
      },
      {
        label: 'Accepted Payment Methods',
        value: 'Credit cards',
      },
      {
        label: 'Payment Period',
        value:
          'Credit card payments are processed immediately',
      },
      {
        label: 'Delivery Times',
        value:
          'Orders will be processed immediately. Services are available as soon as you complete your order. Customized services are available in 3 business days after you complete your order.',
      },
    ],
  },

  returnsPolicy: {
    title: 'Returns & Exchanges Policy',
    subtitle: 'Our policy for refunds and exchanges.',
    items: [
      {
        label: 'For All Services',
        value: [
          'You can cancel your subscription by contacting our customer support center through email support@victorcloud.io within 48 hours of purchase if you have not used the service.',
          'We do not offer refunds for services that have been used or accessed.',
        ],
        isMultiParagraph: true,
      },
    ],
  },
}

export function CommercialDisclosure() {
  // Reusable section component with proper type
  const DisclosureSection = ({ section }: { section: DisclosureSection }) => (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {section.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{section.subtitle}</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          {section.items.map((item, index) => (
            <div
              key={item.label}
              className={
                index % 2 === 0
                  ? 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
                  : 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
              }
            >
              <dt className="text-sm font-medium text-gray-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {item.isList && (
                  <ul className="list-disc space-y-1 pl-5">
                    <li>{item.value as string}</li>
                  </ul>
                )}
                {item.isMultiParagraph &&
                  Array.isArray(item.value) &&
                  item.value.map((paragraph, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                      {paragraph}
                    </p>
                  ))}
                {!item.isList && !item.isMultiParagraph && item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      <Container className="pt-20 pb-16 lg:pt-32 lg:pb-32">
        <h1 className="mx-auto max-w-4xl text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
          {disclosureData.pageTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg tracking-tight text-slate-700">
          {disclosureData.pageDescription}
        </p>

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          <DisclosureSection section={disclosureData.businessInformation} />
          <DisclosureSection section={disclosureData.purchaseInformation} />
          <DisclosureSection section={disclosureData.returnsPolicy} />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default CommercialDisclosure