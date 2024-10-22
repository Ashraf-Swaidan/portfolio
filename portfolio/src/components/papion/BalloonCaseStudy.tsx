import React from 'react';

const BalloonCaseStudy: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Case Study: Managing Sales of Balloon Stands</h2>
      
      <p className="text-lg mb-6">
        In this case study, we’ll dive into the unique challenge faced while managing the sales and inventory of Balloon Stands, which differ from regular balloon items in both their pricing and inventory handling. Balloon Stands, such as balloon arches, consist of multiple balloon items combined into a package sold at a fixed price, unlike individual balloon items, which have their own prices based on quantity.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Case Problem: Balloon Stands with Dynamic Costs</h3>
      <p className="text-lg mb-6">
        The main issue was that each Balloon Stand is sold for a fixed price, but the cost of making the stand varies depending on the specific balloon items used. This required us to calculate the cost of the stand dynamically by summing up the costs of all the individual balloon items involved, multiplied by their quantities.
      </p>
      <p className="text-lg mb-6">
        Additionally, after a Balloon Stand is sold, the system needs to update the inventory for each of the balloon items used to reflect the quantities consumed in the sale. This raised the challenge of integrating both a fixed-price sale and real-time inventory updates for the individual elements that make up the stand.
      </p>

      <img 
        src="/balloonStand.png" 
        alt="Balloon Stand Inventory Table" 
        className="w-full h-auto mb-6" 
      />
      <p className="text-sm text-gray-600 italic mb-6">
        The table above shows Balloon Stands in the inventory, with each stand having its fixed price field visible.
      </p>

      <h3 className="text-2xl font-semibold mb-4">The Solution: Fixed Price Sales with Dynamic Inventory Updates</h3>
      <p className="text-lg mb-6">
        To address this, we implemented a system where Balloon Stands are sold at a fixed price, but the cost is dynamically calculated during the sale. This cost calculation is based on the actual balloon items used to create the stand, ensuring accurate profit tracking. 
        The price shown to the customer in the order reflects the fixed price of the stand, while the system tracks and deducts the quantities of the individual balloon items from the inventory.
      </p>

      <p className="text-lg mb-6">
        The video below demonstrates the complete selling process of a Balloon Stand, showcasing how the system handles the pricing as well.
      </p>

      <video controls className="w-full h-auto mb-6">
        <source src="/balloon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-2xl font-semibold mb-4">Conclusion: Improved Sales and Inventory Integration</h3>
      <p className="text-lg mb-6">
        By integrating the sales process with the inventory system, we ensured that balloon items involved in a Balloon Stand sale were properly tracked and updated in real-time. This approach allowed for accurate sales processing with fixed pricing while dynamically managing inventory and profit calculations behind the scenes.
      </p>
    </section>
  );
};

export default BalloonCaseStudy;
