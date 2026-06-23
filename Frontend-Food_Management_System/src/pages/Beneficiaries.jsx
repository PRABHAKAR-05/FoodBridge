import "../styles/Beneficiaries.css";

function Beneficiaries() {

    const beneficiaries = [

        {
            id: 1,
            name: "Sai Orphanage",
            location: "Visakhapatnam",
            people: 50,
            contact: "9876543210"
        },

        {
            id: 2,
            name: "Helping Hands NGO",
            location: "Vizianagaram",
            people: 120,
            contact: "9876543211"
        },

        {
            id: 3,
            name: "Sunrise Old Age Home",
            location: "Visakhapatnam",
            people: 40,
            contact: "9876543212"
        }

    ];

    return (

        <div className="beneficiaries-page">

            <h1>
                Beneficiaries & NGOs
            </h1>

            <p className="beneficiary-subtitle">
                Registered organizations receiving food donations.
            </p>

            <div className="beneficiary-grid">

                {
                    beneficiaries.map((item) => (

                        <div
                            key={item.id}
                            className="beneficiary-card"
                        >

                            <h2>
                                {item.name}
                            </h2>

                            <p>
                                <strong>Location:</strong>
                                {" "}
                                {item.location}
                            </p>

                            <p>
                                <strong>People Served:</strong>
                                {" "}
                                {item.people}
                            </p>

                            <p>
                                <strong>Contact:</strong>
                                {" "}
                                {item.contact}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}

export default Beneficiaries;