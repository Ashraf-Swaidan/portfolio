import React from 'react';

const OrderTrackingCaseStudy: React.FC = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Case Study: Efficiently Tracking Orders with Due Dates</h2>
      
      <p className="text-lg mb-6">
        In this case study, we explore the process of managing and tracking orders with deadlines or due dates—what we locally refer to as "Events." These orders often contain items that need time to be prepared before being submitted or completed. To streamline the management of such orders, we moved away from paper-based tracking and harnessed the power of our system to display, track, and complete these orders efficiently.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Case Problem: Managing Pending Orders with Deadlines</h3>
      <p className="text-lg mb-6">
        Orders that have a due date or a deadline often require preparation time before delivery. These orders, unlike "instant" orders which are completed immediately, are marked as pending by default and need to be tracked until completion. We needed a system to automatically display and manage all pending due-date orders and allow users to mark them as completed once done. 
      </p>

      <p className="text-lg mb-6">
        To solve this, we introduced a status field for orders. While instant orders are set as completed by default, "Due Date" orders or "Events" are created with a pending status until marked complete. Below is an illustration of how we filtered and displayed the pending orders:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm mb-6">
        <code>
          {`const events = orders
            .filter(order => (order.orderType === 'Due Date' || order.orderType === 'Event') && order.status === 'Pending')
            .map(order => ({{
              title: '{{${'order.orderType}'} - ${'order.customerName}'} - ${'${order.totalPrice}'}',
              start: new Date(order.dueDate),
              end: new Date(order.dueDate),
              allDay: false,
              color: order.orderType === 'Event' ? '#000000' : '#eeeeee',
              details: order
            }}));`}
        </code>
      </pre>

      <h3 className="text-2xl font-semibold mb-4">The Solution: Displaying Pending Orders on a Calendar</h3>
      <p className="text-lg mb-6">
        To effectively visualize these orders, we opted to use a calendar interface. We leveraged the flexibility of the <code>react-big-calendar</code> library, which provided an interactive and customizable view. We displayed the pending due-date orders as calendar events, with different color codes to distinguish between order types (e.g., Events vs. Due Date orders). 
      </p>
      
      <img 
        src="/calendar.png" 
        alt="Calendar View" 
        className="w-full h-auto mb-6"
      />
      <p className="text-sm text-gray-600 italic mb-6">
        Above is a screenshot showing the calendar view with pending orders displayed. Each order is color-coded based on its type.
      </p>

      <p className="text-lg mb-6">
        The calendar allows users to switch between different views, such as daily, weekly, and monthly ranges. Another available view is the "Agenda" mode, which lists upcoming events in a detailed format:
      </p>

      <img 
        src="/agenda.png" 
        alt="Agenda View" 
        className="w-full h-auto mb-6"
      />
      <p className="text-sm text-gray-600 italic mb-6">
        The image above shows the agenda view, where pending orders are listed with their due dates.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Completion Process: Marking Orders as Completed</h3>
      <p className="text-lg mb-6">
        To complete an order, we designed the system to display a modal when an event is clicked on the calendar. This modal would show the complete details of the order and provide an option to mark it as completed. The process involved two key functions:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm mb-6">
        <code>
          {`const handleEventClick = (event) => {{
            setSelectedOrder(event.details);
            setModalShow(true);
          }};

          const handleComplete = async (orderId) => {{
            await completeOrder(orderId);
            setModalShow(false);
          }};`}
        </code>
      </pre>

      <p className="text-lg mb-6">
        The custom <code>EventComponent</code> was used to display each order in the calendar, and it also handled the click event that triggered the modal:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm mb-6">
        <code>
          {`const EventComponent = ({{ event }}) => {{
            return (
              <div
                onClick={() => handleEventClick(event)}
                style={{ cursor: 'pointer', position: 'relative', whiteSpace: 'pre-wrap' }}
              >
                {{event.title}}
              </div>
            );
          }};`}
        </code>
      </pre>

      <p className="text-lg mb-6">
        When integrated into the <code>react-big-calendar</code> component, this event-click functionality allowed for seamless interaction:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm mb-6">
        <code>
          {`<Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            eventPropGetter={eventPropGetter}
            components={{ event: EventComponent }}
            popup
          />`}
        </code>
      </pre>

      <h3 className="text-2xl font-semibold mb-4">Conclusion: A Streamlined Order-Tracking System</h3>
      <p className="text-lg mb-6">
        This solution enabled the team to visually track and manage all pending orders with due dates, ensuring no orders were missed. Users can now easily navigate through different calendar views, view order details, and mark them as completed when the task is done. The use of a modal for completion added a smooth interaction experience to the system, helping replace the old paper-tracking method entirely.
      </p>

      <p className="text-lg mb-6">
        The following video demonstrates the entire process, from viewing orders on the calendar to marking them as completed:
      </p>

      <video controls className="w-full h-auto mb-6">
        <source src="/calendar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
</>
  );
};

export default OrderTrackingCaseStudy;
