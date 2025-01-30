import React from 'react';

const Testimonials = () => {
 const testimonials = [
    {
      name: 'Arun Aggarwal',
      role: 'Director Legal, IT & Consulting at vista neotech',
      content: 'Working with them was a great experience. They brought valuable insights to our project and delivered ahead of schedule.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipNCbub37OG5SFA0noOjfwm-yavw-4suG6Zin3uR=s680-w680-h510',
      linkedin: 'https://www.linkedin.com/in/arun-aggarwal-8b7b3b1b/'
    },
    {
      name: 'Nrupul Dev',
      role: 'CTO @ Masai School',
      content: 'A quick learner and hardworking individual who brought valuable insights to our project and consistently delivered ahead of schedule with exceptional quality.',      
      image: 'https://imgs.search.brave.com/d7rIZBs5uc0P_8rmTY-Uax8Zz6s_ajMhH0BbwPBJtmk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMmdq/cWg5ajI2dW5wMC5j/bG91ZGZyb250Lm5l/dC9wcm9maWxlcGlj/L2ZkMDdmZmYxMDI2/ZDAzOGE0OWZhYTQy/YWE3MTRiODQ2.jpeg',
      linkedin: 'https://www.linkedin.com/in/nrupuldev/'
    },
    {
      name: 'Dipesh Sharma',
      role: 'CTO @ OCPL Tech',
      content: 'An exceptional developer who consistently delivers high-quality solutions. Their attention to detail and problem-solving skills are outstanding.',
      image: 'https://firebasestorage.googleapis.com/v0/b/ocpl-test-90db2.appspot.com/o/Ocpl-Assets%2Fteam_members%2Fdipesh-fd84a1c3.png?alt=media&token=f8e4b503-7a64-4861-b6cd-bce94dad5b9b',
      linkedin: 'https://www.linkedin.com/in/dipesh-sharma/'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

