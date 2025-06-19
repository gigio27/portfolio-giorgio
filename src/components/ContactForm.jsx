const ContactForm = () => {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <form method="post" action="mailto:giorgio@email.com">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
export default ContactForm
