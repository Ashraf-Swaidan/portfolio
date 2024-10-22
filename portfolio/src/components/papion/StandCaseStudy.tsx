import React from 'react';

const StandCaseStudy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Case Study: Managing Stands in Inventory and Sales</h2>
      <p className="text-lg mb-6">
        In this case study, I will walk through a challenging issue encountered while managing stands in inventory and sales, and the technical solutions that were implemented to address it.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Case Problem: Complex Management of Stands for Sale and Rent</h3>
      <p className="text-lg mb-6">
        The unique aspect of stands is that they can either be sold for a fixed selling price or rented for a specific period at a renting price. However, a challenge arose when dealing with stands that were already rented. Although a stand rented to a client cannot be sold, it can still be rented to another client as long as the rental periods do not overlap. This required a robust system that could handle both selling and renting scenarios with complex overlapping conditions.
      </p>


      <h3 className="text-2xl font-semibold mb-4">The Challenge: Managing Rent and Sale Scenarios</h3>
      <p className="text-lg mb-6">
        Initially, we tried to implement a boolean field, <code>isAvailable</code>, to indicate whether a stand was available for sale or rent. However, this approach did not account for the scenario where a stand was currently rented but could still be rented again in the future as long as the rental periods didn’t overlap. 
      </p>
      <p className="text-lg mb-6">
        The real complexity came from ensuring that stands could be rented for future dates while also being available for rent in the present, as long as there were no conflicts in the rental periods. The visual system needed to depict this clearly and prevent users from mistakenly allowing overlaps in rental periods.
      </p>



      <h3 className="text-2xl font-semibold mb-4">The Solution: Dynamic Rental Period Management</h3>
      <p className="text-lg mb-6">
        To resolve this, we introduced a new field, <code>rentalPeriods</code>, which stores all existing rents for a stand, both present and future. This allowed the system to track when a stand was rented and prevent any overlaps. The boolean <code>isAvailable</code> was set to false whenever there were active rental periods, and automatically switched back to true when the rental periods ended.
      </p>
      <p className="text-lg mb-6">
        Whenever a new rental period was added (whether from inventory management or sales), the system automatically checked if it overlapped with any other existing periods in <code>rentalPeriods</code>. Only if the new period did not overlap was the rental allowed to proceed.
      </p>

      <video controls className="w-full h-auto mb-6">
        <source src="/Stands.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-2xl font-semibold mb-4">Handling Stand Sales</h3>
      <p className="text-lg mb-6">
        Stands that are available (with no active rental periods) can be sold directly. In this case, the selling price is applied, rather than the rental price. The system was designed to ensure that stands with active rental periods cannot be sold until the rentals are completed.
      </p>
      <p className="text-lg mb-6">
        The solution was tested with two samples: Sample 1, which was tested with various rental scenarios, and Sample 2, which was available for sale. Below are videos demonstrating the renting process of Sample 1 and the sale process for Sample 2.
      </p>

      <div className='flex flex-col sm:flex-row'>
        <video controls className="sm:w-1/2 h-auto mb-6">
          <source src="/Stands2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video controls className="sm:w-1/2 h-auto mb-6">
          <source src="/Stands3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default StandCaseStudy;
