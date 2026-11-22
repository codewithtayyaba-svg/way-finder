"use client";

import { useState } from "react";
import styles from "./travel-buddy.module.css";

export default function TravelBuddy() {

  const [formData, setFormData] = useState({
    currentLocation: "",
    destination: "",
    travelDate: "",
    days: "",
    budget: "",
    groupSize: "",
    travelType: "",
    gender: "Any",
    accommodation: "",
    transportation: "",
  });

  const [searched, setSearched] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Search Travel Buddies
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Trip Requirements:", formData);

    setSearched(true);
  };

  return (
    <main className={styles.page}>

      {/* HERO SECTION */}

      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <span className={styles.eyebrow}>
            TRAVEL TOGETHER, EXPLORE TOGETHER
          </span>

        <h1>
  Find Your Perfect
  <span> Travel Buddy</span>
</h1>

<p>
  Every journey becomes more beautiful when shared with the right people.
  Find travelers who share your destination, budget and interests.
</p>

<a href="#trip-form" className={styles.heroButton}>
  Find Your Travel Partner →
</a>

        </div>

      </section>


      {/* INTRO SECTION */}

      <section className={styles.intro}>

        <span>START YOUR JOURNEY</span>

        <h2>Plan Your Group Trip</h2>

        <p>
          Tell us about your travel plans and let
          Way Finder find suitable travel partners for you.
        </p>

      </section>


      {/* TRIP REQUIREMENTS FORM */}

      <section className={styles.formSection} id="trip-form">

        <div className={styles.formHeader}>

          <h2>✈️ Trip Requirements</h2>

          <p>
            Enter your trip details to find matching travelers.
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className={styles.formGrid}>

            {/* CURRENT LOCATION */}

            <div className={styles.inputGroup}>

              <label>Current Location *</label>

              <input
                type="text"
                name="currentLocation"
                placeholder="Enter your current location"
                value={formData.currentLocation}
                onChange={handleChange}
                required
              />

            </div>


            {/* DESTINATION */}

            <div className={styles.inputGroup}>

              <label>Destination *</label>

              <input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                value={formData.destination}
                onChange={handleChange}
                required
              />

            </div>


            {/* TRAVEL DATE */}

            <div className={styles.inputGroup}>

              <label>Travel Date *</label>

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />

            </div>


            {/* NUMBER OF DAYS */}

            <div className={styles.inputGroup}>

              <label>Number of Days *</label>

              <input
  type="number"
  name="days"
  placeholder="How many days will your trip last?"
  min="1"
  value={formData.days}
  onChange={handleChange}
  required
/>

            </div>


            {/* BUDGET */}

            <div className={styles.inputGroup}>

              <label>Total Budget (PKR) *</label>

              <input
                type="number"
                name="budget"
                placeholder="Enter your total budget"
                min="1"
                value={formData.budget}
                onChange={handleChange}
                required
              />

            </div>


            {/* GROUP SIZE */}

            <div className={styles.inputGroup}>

              <label>Required Group Size *</label>

              <input
                type="number"
                name="groupSize"
                placeholder="How many people?"
                min="2"
                value={formData.groupSize}
                onChange={handleChange}
                required
              />

            </div>


            {/* TRAVEL TYPE */}

            <div className={styles.inputGroup}>

              <label>Travel Type *</label>

              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                required
              >

                <option value="">Select Travel Type</option>
                <option value="Adventure">Adventure</option>
                <option value="Nature">Nature</option>
                <option value="Relaxation">Relaxation</option>
                <option value="Culture">Culture</option>
                <option value="Photography">Photography</option>

              </select>

            </div>


            {/* GENDER PREFERENCE */}

            <div className={styles.inputGroup}>

              <label>Gender Preference</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >

                <option value="Any">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

              </select>

            </div>


            {/* ACCOMMODATION */}

            <div className={styles.inputGroup}>

              <label>Accommodation</label>

              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
              >

                <option value="">Any Accommodation</option>
                <option value="Hotel">Hotel</option>
                <option value="Resort">Resort</option>
                <option value="Camping">Camping</option>

              </select>

            </div>


            {/* TRANSPORTATION */}

            <div className={styles.inputGroup}>

              <label>Transportation</label>

              <select
                name="transportation"
                value={formData.transportation}
                onChange={handleChange}
              >

                <option value="">Any Transportation</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Bike">Bike</option>

              </select>

            </div>

          </div>


          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            className={styles.submitButton}
          >
            Find Travel Buddies →
          </button>

        </form>

      </section>


      {/* RESULTS SECTION */}

      {searched && (

        <section className={styles.resultsSection}>

          <h2>Your Travel Matches</h2>

          <p>
            Your trip requirements have been submitted.
          </p>

          <p>
            Destination: {formData.destination}
          </p>

          <p>
            Budget: Rs. {formData.budget}
          </p>

          <p>
            Group Size: {formData.groupSize} People
          </p>

          <p>
            Matching functionality will be connected
            with the database in the next development stage.
          </p>

        </section>

      )}

    </main>
  );
}