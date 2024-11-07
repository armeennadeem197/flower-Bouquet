'use client'; // Ensure this is a client-side component

import React, { useState } from 'react';

const ReviewPage = () => {
  // Initialize state with some existing reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing flowers, fast delivery! Will definitely order again.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Beautiful flowers but the packaging could be improved.',
    },
    {
      id: 3,
      name: 'Mark Lee',
      rating: 5,
      comment: 'Perfect for our wedding! The arrangements were stunning.',
    },
  ]);

  // State for the new review form
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  // Handle review form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newReview.name && newReview.comment && newReview.rating > 0) {
      // Create a new review object
      const newReviewObj = {
        id: reviews.length + 1, // Generate a new unique ID
        ...newReview,
      };

      // Update the reviews state with the new review
      setReviews([...reviews, newReviewObj]);

      // Reset the form
      setNewReview({ name: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className="p-8 bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Customer Reviews</h1>

      {/* Display Existing Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-pink-600">{review.name}</h2>
            <p className="text-yellow-500">Rating: {review.rating}⭐</p>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Review Submission Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-pink-600">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value={0}>Rate your experience</option>
            <option value={1}>1⭐</option>
            <option value={2}>2⭐</option>
            <option value={3}>3⭐</option>
            <option value={4}>4⭐</option>
            <option value={5}>5⭐</option>
          </select>
          <textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-md hover:bg-pink-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
