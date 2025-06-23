const ContactForm = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 max-w-3xl mx-auto text-white scroll-mt-20"
    >
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">
        Contact me
      </h2>

      <form
        method="post"
        action="mailto:giorgio@email.com"
        className="space-y-6 bg-[#111827] p-8 rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
      >
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        <input
          type="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        <textarea
          placeholder="Your message"
          required
          rows="5"
          className="w-full px-4 py-3 rounded-md bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
        >
          Send ✉️
        </button>
      </form>
    </section>
  )
}

export default ContactForm
