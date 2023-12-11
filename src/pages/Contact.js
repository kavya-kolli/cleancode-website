import './Contact.css';
export const Contact = () => {
    return(
        <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex justift-content-between">
                    <div className="contact_info_item d-flex justify-content-start aline-item-center">
                        <img src=" "alt="phone"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                phone
                            </div>
                            <div className="contact_info_text">
                                +91 1111 654 765
                            </div>``
                        </div>
                    </div>
                    <div className="contact_info_item d-flex justify-content-start aline-item-center">
                        <img src=" "alt="e-mail"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                e-mail
                            </div>
                            <div className="contact_info_text">
                                kavya123@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="contact_info_item d-flex justify-content-start aline-item-center">
                        <img src=" "  alt="address"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                            address
                            </div>
                            <div className="contact_info_text">
                                1st main road ,6th cross road,virupakshapura,hebbal
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


      <div className="contact_form">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 ofset-lg-1">
                    <div className="contact_form-container py_5">
                        <div className="contact_form_title">
                           <b> Get In Touch</b> 
                        </div>
                    </div>
                    <form id="contact_form">
                        <div claaName="contact_form_name d-flex justify-content-between aline-items-between">
                            <input type="text" id="contact_form_name" 
                            className="contact_form_name input_feild"
                            placeholder="your name" required="true"/>

                             <input type="email" id="contact_form_email" 
                            className="contact_form_email input_feild"
                            placeholder="your email" required="true"/>

                             <input type="number" id="contact_form_phone" 
                            className="contact_form_phone input_feild"
                            placeholder="your phone number" required="true"/>
                        </div>

                        <div className="contact_form_text mt-5">
                            <textarea className="text_feild contact_form_message" 
                            placeholder="message" id="" cols="30" rows="10"></textarea>                        
                            </div>

                         <div className="contact_form_button">
                                 <button type="submit" className="button contact_submit_button">send message</button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
      </div>

        </>
    )
}