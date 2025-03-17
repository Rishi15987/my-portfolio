const Contact = () => {
  return (
    <div className="h-screen flex items-center bg-slate-950 text-white">
    <div className="px-32 flex flex-col gap-10 w-full">
      <h1 className="text-6xl text-white font-semibold">Contact</h1>
      <div className="w-24 bg-amber-50 h-1"></div>
      <div className="p-4 w-full flex flex-col justify-center">
        <div>
          <label>Name</label>
          <input/>
          <div></div>
        </div>
        <div>
          <label>Email</label>
          <input/>
        </div>
        <div>
          <label>Subject</label>
          <input/>
        </div>
        <div>
          <label>Message</label>
          <input/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact