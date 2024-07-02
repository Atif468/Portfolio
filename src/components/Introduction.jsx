import NavBar from './NavBar';


function Introduction() {
  
  return (
    <>
    <NavBar />
  <section className="realtive bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center" data-aos="fade-down-right">
  

    <div className="relative text-center" >
      <h1 className="text-5xl font-bold mb-4">Hello, I'm <span className='text-orange-600'>Mohd </span><span className='text-white'> Atif </span><span className='text-green-400'>Ansari</span></h1>
      <p className="text-2xl">I'm a passionate web developer with experience in building modern web applications.</p>
    </div>
  </section>
  </>
)}

export default Introduction;