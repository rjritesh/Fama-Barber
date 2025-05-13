import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, comment, date }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      size={16}
      className={`${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} 
    />
  ));

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="flex mr-2">
          {stars}
        </div>
        <span className="text-gray-400 text-sm">({rating}.0)</span>
      </div>
      <p className="text-gray-300 mb-4 italic">"{comment}"</p>
      <div className="flex justify-between items-center">
        <div className="text-white font-medium">{name}</div>
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Michael T.',
      rating: 5,
      comment: 'Best haircut in town! The barbers are talented and the atmosphere is great.',
      date: 'August 2023'
    },
    {
      name: 'David L.',
      rating: 4,
      comment: 'Great service, but a bit pricey compared to other shops in the area.',
      date: 'September 2023'
    },
    {
      name: 'Jason R.',
      rating: 5,
      comment: 'I love this place. They really took their time with my beard trim and the result was perfect.',
      date: 'July 2023'
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <div className="flex items-center justify-center mt-6 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star 
                  key={i} 
                  size={24}
                  className="text-amber-400 fill-amber-400" 
                />
              ))}
            </div>
            <span className="text-white ml-2 font-medium">4.6 out of 5</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Based on 116+ reviews from our satisfied customers. 
            We're proud to maintain a high standard of service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://g.page/r/FamaBarberShop/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-gray-800 text-white border border-gray-700 px-8 py-3 rounded font-medium transition-colors inline-block"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;