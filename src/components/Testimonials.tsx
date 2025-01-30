import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dipesh Sharma',
      role: 'CTO at OCPL Tech',
      content: 'An exceptional developer who consistently delivers high-quality solutions. Their attention to detail and problem-solving skills are outstanding.',
      image: 'https://firebasestorage.googleapis.com/v0/b/ocpl-test-90db2.appspot.com/o/Ocpl-Assets%2Fteam_members%2Fdipesh-fd84a1c3.png?alt=media&token=f8e4b503-7a64-4861-b6cd-bce94dad5b9b',
    },
    {
      name: 'Arun Aggarwal',
      role: 'Director Legal, IT & Consulting at vista neotech',
      content: 'Working with them was a great experience. They brought valuable insights to our project and delivered ahead of schedule.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipNCbub37OG5SFA0noOjfwm-yavw-4suG6Zin3uR=s680-w680-h510',
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