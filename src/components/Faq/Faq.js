import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from '../../images/Image/chef-2.png';

const Faq = () => {
  return (
    <div className="m-3 p-2 rounded border shadow-lg md:flex justify-between items-center overflow-hidden">
      <img
        src={img}
        alt=""
        className="transition duration-500 ease-in-out transform hover:scale-105 w-1/3 hidden lg:block"
      />
      <div>
        <h2 className="text-center text-4xl text-green-600 font-bold mt-5 mb-2">
          General FAQs
        </h2>
        <p className="text-center text-green-500 mb-5">
          Have a question that is not answered below? Feel free to give us a
          call and ask!
        </p>
        <Tabs>
          <TabList>
            <div className="flex flex-center mb-5 flex-wrap mx-auto">
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 1
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 2
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 3
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 4
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 5
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 6
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 7
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 8
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 9
              </Tab>
            </div>
          </TabList>
          <div className="mx-3 border rounded shadow px-4 py-2 my-3">
            <TabPanel className="mx-3">
              <h2 className="font-bold mb-2 text-xl">
                FAQ 1. What are your office hours?
              </h2>
              <p>Mon-Sun 8am-10:30pm CST</p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 2. Where do you deliver?
              </h2>
              <p>
                Restaurants are available according to your delivery address.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 3. How do I place an order?
              </h2>
              <p>Order Online</p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 4. How long does it take for delivery?
              </h2>
              <p>
                Typically, it takes about 45 minutes to an hour, but the
                delivery time can vary based on volume and time of day. We
                strongly recommend placing lunch, catering, and larger orders in
                advance to secure your desired delivery time.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 5. What is the cost and delivery hours?
              </h2>
              <p>
                $2 service fee applies to phone orders $2 low order fee applies
                to orders under $15
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 6. Can I order from multiple restaurants?
              </h2>
              <p>
                You may order from multiple restaurants, but the minimum order
                and delivery fee is assessed per restaurant.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 7. What are my payment options?
              </h2>
              <p>
                Cash, PayPal, Visa, MasterCard, Discover, American Express,
                Business Checks. * Check address must match delivery address.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 8. Can I cancel my order?
              </h2>
              <p>
                Orders cannot be cancelled once they have been placed with the
                restaurant. If you need to cancel or make changes to an advanced
                order, please contact a customer service representative.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 9. Can I use my restaurant coupon or gift card for delivery?
              </h2>
              <p>
                No, only Food Dudes Delivery coupons and promotions apply to
                delivery orders.
              </p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Faq;
