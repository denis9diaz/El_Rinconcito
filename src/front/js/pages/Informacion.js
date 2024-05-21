import React from "react";
import "../../styles/Informacion.css";
import Navbar from "./Navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Informacion = () => {
    const location = { lat: 40.44803787143906, lng: -3.6641168741304644 };

    return (
        <div>
            <Navbar />
            <div className="informacion-container">
                <div className="informacion-item">
                    <h2>Dirección</h2>
                    <p className="info-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1"/> C/ del Padre Claret, 12. Madrid</p>
                    <LoadScript googleMapsApiKey={process.env.API_KEY_GOOGLE} loadingElement={<div>Loading...</div>} libraries={["places"]} >
                        <GoogleMap
                            mapContainerStyle={{ width: '90%', height: '300px', borderRadius: '10px', border: '2px solid black' }}
                            center={location}
                            zoom={12}
                        >
                            <Marker position={location} />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <hr/>
                <div className="informacion-item">
                    <h2>Horario</h2>
                    <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1"/> Domingo a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1"/> Sábado: 10:00 AM - 4:00 PM</p>
                    <p className="info-text"><FontAwesomeIcon icon={faCalendar} className="me-1"/> Lunes: Cerrado</p>
                </div>
                <hr/>
                <div className="informacion-item">
                    <h2>Contacto</h2>
                    <p className="info-text"><FontAwesomeIcon icon={faPhone} className="me-1"/> 123456789</p>
                    <p className="info-text"><FontAwesomeIcon icon={faEnvelope} className="me-1" /> info@elrinconcito.com</p>
                </div>
            </div>
        </div>
    );
};

export default Informacion;
