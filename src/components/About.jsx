import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import aboutImage from '../assets/images/Resturant.jpg';

/**
 *
 * Hide about page in login and register screen
 */

export const About = () => {
  const location = useLocation();

  return (
    <div
      className={clsx('bg-white', {
        hidden:
          location.pathname === '/login' || location.pathname === '/register',
      })}
      id="about"
    >
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <div className="h-10"></div>
          <p className="text-lg">
          Welcome to Kutumb, where culinary artistry meets warm hospitality.
          Located in Delhi, our menu reflects a passion for Italian, using locally sourced, premium ingredients. 
          Experience modern elegance in our inviting space, perfect for intimate dinners or lively gatherings. 
          Our chefs craft each dish to perfection, ensuring a memorable feast for your senses. 
          With dedicated staff and a commitment to excellence,Kutumb invites you to savor exceptional 
          flavors and create cherished moments in every visit.
          Indulge in the finest culinary delights—your journey begins here.
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="bg-black h-20 w-full"></div>
    </div>
  );
};
