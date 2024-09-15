import vendorImage from '../../../public/images/vendor/home-vendor-bd-2800px.webp'
import Button from "../../components/Button";



const Vendor = () => {
  return (
    <section className="vendor">

  <div className="vendor-title">
    <h1>You prepare the food, we handle the rest</h1>
  </div>

  <div className="vendor-img">
    <img src={vendorImage} alt="vendor-image" />
  </div>

 <div className="vendor-detail">
  <h3>
  List your restaurant or shop on foodpanda
  </h3>
  <p>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
  <p>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas - in a heartbeat</p>
  <p> Interested? Let's start our partnership today!</p>

   <Button title="Get Started" btnClass="btn btn-lg btn-pink vendor-detail-btn"/>


 </div>


</section>
  )
}

export default Vendor