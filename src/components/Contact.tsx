import React, { Fragment } from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="bg-amber-400 p-3 rounded-lg mr-4">
        <Icon className="h-6 w-6 text-black" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className="text-gray-400">{children}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We'd love to see you at our shop. Book an appointment or just walk in during our business hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <InfoCard icon={MapPin} title="Location">
              <p>500 N Bell Ave #109</p>
              <p>Denton, TX 76209, United States</p>
              <a 
                href="https://maps.google.com/?q=500 N Bell Ave #109, Denton, TX 76209" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 inline-block mt-2 hover:underline"
              >
                Get Directions
              </a>
            </InfoCard>
            
            <InfoCard icon={Phone} title="Contact">
              <p>Phone: <a href="tel:+19406129127" className="hover:text-amber-400 transition-colors">+1 940-612-9127</a></p>
              <p>Email: <a href="mailto:info@famabarber.com" className="hover:text-amber-400 transition-colors">info@famabarber.com</a></p>
            </InfoCard>
            
            <InfoCard icon={Clock} title="Business Hours">
              <div className="grid grid-cols-2 gap-2">
                {businessHours.map((item, index) => (
                  <Fragment key={index}>
                    <div className={item.day === 'Sunday' ? 'text-amber-400' : ''}>{item.day}</div>
                    <div>{item.hours}</div>
                  </Fragment>
                ))}
              </div>
            </InfoCard>
          </div>
          
          <div className="h-full min-h-[300px] lg:min-h-[500px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8170007029193!2d-97.13360122310307!3d33.21662297253596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bd9a1d0f83b%3A0x5caa20e2e5ed4a7c!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1683029347606!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fama Barber Shop Location"
              className="hover:transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;