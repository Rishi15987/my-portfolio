const About = () => {
  return (
    <section className="h-screen flex items-center bg-slate-950">
        <div className="flex px-32">
            <div className="w-2/3 flex flex-col gap-10">
                <h1 className="text-6xl text-white font-semibold">Hey, I'm Rishi.</h1>
                <h3 className="text-2xl text-white">I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</h3>
                <div className="w-24 bg-amber-50 h-1"></div>
                <p className="text-white">
                    <span className="font-bold">I'm a fourth year student at Northeastern University</span> in Boston studying computer science and interaction design. I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.<br/><br/>
                    I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                    <br/><br/><span className="font-bold">When I'm not in front of a computer screen,</span> I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
                </p>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    </section>
  )
}

export default About