import React from "react";
import { Link, useParams } from "react-router-dom";

const ContactDetail = () => {
    const params = useParams();
    return(<>
    <h1>{params.contactid}</h1>
     <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back to List
				</span>
			</Link>
    </>)
};

export default ContactDetail;