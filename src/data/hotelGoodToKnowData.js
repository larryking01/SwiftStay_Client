import { MdOutlinePets } from 'react-icons/md';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';




const goodToKnowArray = [
    {
      icon: <MdOutlinePets size={30} />,
      feature: 'Pets',
      description: 'Pets are not allowed.',
      visaIcon: '',
      masterCardIcon: '',
      paypalIcon: '',
    },
    {
      icon: <MdEmojiFoodBeverage size={30} />,
      feature: 'Breakfast',
      description: 'Breakfast available.',
      visaIcon: '',
      masterCardIcon: '',
      paypalIcon: '',
    },
    {
      icon: <IoMdInformationCircle size={30} />,
      feature: 'Important information from the hotel',
      description:
        'Please note that parking is available offsite at a discounted rate. When booking 6 rooms or more, different policies and additional supplements will apply.',
      visaIcon: '',
      masterCardIcon: '',
      paypalIcon: '',
    },
    {
      icon: <MdPayment size={30} />,
      feature: 'Accepted payment methods',
      description: 'The hotel accepts the following payment methods:',
      visaIcon: <FaCcVisa size={30} />,
      masterCardIcon: <FaCcMastercard size={30} />,
      paypalIcon: <FaCcPaypal size={30} />,
    },
];



  export default goodToKnowArray;