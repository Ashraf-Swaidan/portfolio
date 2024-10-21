
const LaserCaseStudy = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-12'>
      <h2 className="text-3xl font-bold mb-6">Case Study: Inventory Management for Laser Boards</h2>
      <p className="text-lg mb-6">
        In this case study, I will walk through a few key technical challenges encountered during the development process and explain how I addressed them. I will also outline the resulting solutions and their impact on the system.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Case Problem: Managing Inventory for Laser Boards</h3>
      <p className="text-lg mb-6">
        The challenge revolved around managing inventory for laser boards used in a production environment. Typically, a board of a specific material is placed into the laser machine, where an area is either cut or engraved. This process consumes a portion of the board, and the price of the cut is calculated based on the cut's size, the board's material, and the time taken for engraving. The core challenge was representing this process visually, so users could easily manage the inventory of laser boards.
      </p>
      {/* Add an image or video placeholder */}
      <div className='flex flex-col sm:flex-row'>
        <img src="/laser0.jpg" alt="Laser board inventory management" className="sm:w-1/2 h-auto mb-6" />

      <video controls className="sm:w-1/2 h-auto mb-6">
        <source src="/Laser1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Challenge: Visual Representation of Laser Cuts</h3>
      <p className="text-lg mb-6">
        Several ideas were considered—ranging from simple to complex. The ideal solution was to create a visual representation of each board, allowing users to select an area on the board that has been consumed during the cutting or engraving process. This required a dynamic interface where users could "draw" an area on the board's surface and mark it as used, ensuring that the same area could not be consumed again.
      </p>
      
      <img src="/how.png" alt="Board Mapping Modal" className="w-full h-auto mb-6" />


      {/* Add a video placeholder for a demo of the cut area */}
      

      <h3 className="text-2xl font-semibold mb-4">The Solution: Dynamic Board Mapping and Area Consumption</h3>
      <p className="text-lg mb-6">
        After extensive research, I devised a solution that involved using the board's dimensions (width and height) to generate an interactive X-Y grid. This grid represented the available surface area of the board. When a user selected a board, a modal window would open, displaying this grid along with inputs for defining the size of the cut (width x height).
      </p>
      <p className="text-lg mb-6">
        Once a cut size was entered, a draggable visual representation of the cut area appeared on the board's map. The user could position this visual cut anywhere within the board's available space. Upon submitting the cut, the coordinates associated with the cut were marked as consumed. The area was then visually highlighted (in red) to indicate it was no longer available for future cuts. Functions were implemented to ensure that subsequent cuts could not overlap with already consumed areas.
      </p>
      
      <video controls className="w-full h-auto mb-6">
        <source src="/Laser2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Placeholder for the board mapping modal */}
      
      <h3 className="text-2xl font-semibold mb-4">Implementation for Sales</h3>
      <p className="text-lg mb-6">
        This same interface was extended for use in the sales process, where users could select boards based on their type and material. In the sales interface, the modal included an additional field for inputting the duration of the laser cut, which was necessary for calculating the total cost. However, in sales, the cuts were not immediately reflected in the inventory. Instead, they were held in a pending state until the order was completed. Only once the order was finalized would the corresponding area on the board in inventory be marked as consumed.
      </p>

      <video controls className="w-full h-auto mb-6">
        <source src="/Laser3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-2xl font-semibold mb-4">Laser Cut Pricing Mechanism</h3>
      <p className="text-lg mb-6">
        To calculate the price of a laser cut, a pricing table was generated for each board type in the inventory. The table consisted of three columns: size, cost, and price. Standard size increments were provided (e.g., 10x10 cm, 20x20 cm, up to 120x120 cm, which is the maximum board size).
      </p>
      <p className="text-lg mb-6">
        Cuts were not restricted to square areas; they could have irregular dimensions, such as 13x26 cm. The pricing system would take the larger dimension to categorize the cut into the appropriate pricing tier. For instance, a 13x26 cm cut would be billed under the 30x30 cm price tier. The total price was determined by adding the charge per minute for the laser cutting process, based on the input duration, to the base price from the pricing table.
      </p>
      {/* Placeholder for pricing table */}
      <img src="/pricingTable.png" alt="Laser Cut Pricing Table" className="w-full h-auto mb-6" />
    </section>
  );
}

export default LaserCaseStudy;
