import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='title-page mt-5'>
        <h1>CONTACT ME</h1>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="flex justify-start mt-5">
          <div className="block rounded-2xl shadow-sm bg-gray-200 max-w-sm text-center">
            <div className="p-6">
              <label className="text-grey-500 text-lg font-medium" for="name">
                Name:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="email" type="text" placeholder="Name"></input>
              <label className="text-grey-500 text-lg font-medium" for="email">
                Email:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="Email"></input>
              <label for="message" className="text-grey-500 text-lg font-medium">Message:</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-xl border-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
              <button className="mt-10 w-60 h-12 bg-rose-500 rounded-xl hover:bg-rose-600 text-white">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;