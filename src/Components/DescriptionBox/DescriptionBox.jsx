import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is a digital platform that enables online buying and selling of goods and services. 
        It provides users with a convenient and secure way to browse, select, and purchase products from a diverse 
        range of categories. These websites often feature intuitive interfaces, search functionalities, and 
        personalized recommendations to enhance the shopping experience. Secure payment gateways ensure safe 
        transactions, and order tracking systems keep customers informed about their purchases.
        </p>
        <p>E-commerce sites may include customer reviews and ratings to assist in decision-making. Responsive design 
          allows users to access the platform seamlessly across various devices. With 24/7 accessibility, e-commerce 
          websites revolutionize traditional retail by offering a global marketplace accessible at the click of a button.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox