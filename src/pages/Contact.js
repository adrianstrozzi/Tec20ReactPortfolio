import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='title-page mt-5'>
        <h1>CONTACT</h1>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col rounded-xl shadow-sm bg-gray-200 text-center font-bold w-60 py-6">
          <h2 className='text-sky-500 underline'><a href="mailto:adrianstrozzi@gmail.com">adrianstrozzi@gmail.com</a></h2>
        </div>
      </div>
      <div className="flex justify-center flex-wrap mb-10">
        <div className="flex justify-center mt-5">
          <div className="block rounded-2xl shadow-sm bg-gray-200 sm:w-9/10 md:w-3/4 text-center">
            <div className="p-6">
              <label className="text-grey-500 text-lg font-medium" for="name">
                Name:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="email" type="text" placeholder="Name" requiredx></input>
              <label className="text-grey-500 text-lg font-medium" for="email">
                Email:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="Email"></input>
              <label for="message" className="text-grey-500 text-lg font-medium">Message:</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-xl border-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
              <button className="mt-10 w-60 h-12 bg-rose-500 rounded-xl hover:bg-rose-600 text-white">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;