// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero / Shop Name */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Haile Fashion Shop
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Where style meets simplicity
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          At Haile Fashion Shop, we believe that clothing is more than just fabric — 
          it&apos;s a statement of who you are. Founded with a passion for timeless 
          style and modern comfort, we curate a collection that helps you look and 
          feel your best every day.
        </p>
        <p className="text-gray-600 leading-relaxed">
          From casual wear to standout pieces, every item in our shop is selected 
          with quality, fit, and affordability in mind. Thank you for choosing us 
          to be part of your style journey.
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions or need assistance? We&apos;d love to hear from you.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-700">hello@hailefashion.com</span>
          </div>

          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-700">+251 912 345 678</span>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-gray-500 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-700">
              Bole Medhanialem, Addis Ababa, Ethiopia
              <br />
              <span className="text-sm text-gray-500">
                (Near Edna Mall, 2nd floor)
              </span>
            </span>
          </div>
        </div>

        {/* Optional: Social or Business Hours */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-800 mb-2">Business Hours</h3>
          <p className="text-gray-600 text-sm">
            Monday – Saturday: 9:00 AM – 7:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </main>
  );
}